import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { IMovie } from '../../models/data.model';
import { MovieService} from 'src/app/services/movie.service';
import * as Highcharts from "highcharts";
import worcloud from "highcharts/modules/wordcloud"

worcloud(Highcharts);
@Component({
  selector: 'app-movieprofile',
  templateUrl: './movieprofile.component.html',
  styleUrls: ['./movieprofile.component.css']
})
export class MovieprofileComponent implements OnInit {

  MovieId: string;
  celebs: any[] = [];
  curMovie : IMovie;
  writers = '';
  genre = '';
  celebsPresent = false;

  // Chart Options
  //---------------------

  chart;
  chartConstructor = 'chart';
  chartCallback;
  iscircular: boolean = true;
  Highcharts = Highcharts;


  chartOptions = {
    series: [{
      type: 'wordcloud',
      name: 'Occurrences',
      minFontSize : 7
    }],
    title: {
      text: 'Plot Wordcloud'
    },
    rotation: {
      from: 0,
      to: 0
    },
    style: {
      fontFamily: 'Arial',
    }
  }

  //---------------------

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { 

    this.route.queryParams.subscribe(params => { this.MovieId = params['id']; });

  }

  ngOnInit() {
    //this.curMovie = this.movieService.getClickedMovie();
    this.movieService.getMovieProfile(this.MovieId).subscribe(resp =>{

      console.log('our response:'+JSON.stringify(resp, null, 4));
      let dataResp = resp['body'];
      this.curMovie =  dataResp[0];
      if (dataResp[0].writers){

        dataResp[0].writers.forEach(writer => {

          if (writer.name.length > 0){
            console.log('adding this writer in:'+writer.name);
            this.writers += writer.name + ', ';
          }
        });

        //this.curMovie.writers = this.curMovie.writers.join(',');

      }
      let plotText = dataResp[0].plot;
      //console.log('our writers:'+this.writers);
      for (let i = 1; i < dataResp.length; i++){

        this.celebs.push(dataResp[i]);
        this.celebsPresent = true;
        console.log('pushing this celeb'+dataResp[i].name);
      }

      if (Array.isArray(plotText)){

        plotText = plotText.join(',');
        //console.log('our plot was an array');
      }
      plotText = plotText.replace('\", \"', '\n');
      plotText = plotText.replace('\\', '');
      plotText = plotText.toString().substr(2, plotText.length-4); 
      //plotText = plotText.toString().substr(-2);

			  let genreList = []
			  this.curMovie.genres.forEach( genreString => {
          //console.log('genre:'+JSON.stringify(genreString, null, 4));
				genreList.push(genreString['genre'])
			  });
			  //console.log('our genres:'+JSON.stringify(genreList, null, 4));
			  this.genre = genreList.join( ' | ');

      this.curMovie.plot = plotText;
      var text = plotText;
      var removeUselessWords = function(txt) {
        var uselessWordsArray = 
          [
          "a", "at", "be", "can", "cant", "could", "couldnt", 
          "do", "does", "how", "i", "in", "is", "many", "much", "of", 
          "on", "or", "should", "shouldnt", "so", "such", "the", 
          "them", "they", "to", "us",  "we", "what", "who", "why", 
          "with", "wont", "would", "wouldnt", "you", "he", "and", "as", 
          "was", "his", "for", "an", "by", "yes", "no", "has", "from",
          "this", "that", "her", "she", "also", "had", "him", "it", "but",
          "until"
        ];

        var expStr = uselessWordsArray.join("|");
        return txt.replace(new RegExp('\\b(' + expStr + ')\\b', 'gi'), ' ')
        .replace(/\s{2,}/g, ' ');
      }

      text = removeUselessWords(text);
      if (Array.isArray(text)){ text = text.join(','); }
      //console.log('text:'+text);
      var lines = text.split(/[,\. ]+/g),
        data = Highcharts.reduce(lines, function (arr, word) {
        var obj = Highcharts.find(arr, function (obj) {
          return obj.name === word;
        });
        if (obj) {
          obj['weight'] = obj['weight'] + 1;
        } else {
          obj = {
            name: word,
            weight: 1
          };
          arr.push(obj);
        }
        return arr;
      }, []);
      //console.log(data);
      var filtered = data.filter(function(value, index, arr){

        return value.weight > 1

      });
      this.chartOptions.series[0]['data'] = filtered;
  
    });

  }
}
