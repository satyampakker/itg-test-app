import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CelebrityService } from 'src/app/services/celebrity.service';
import { ICelebrity, IMovie } from 'src/app/models/data.model';
import * as Highcharts from "highcharts";
import worcloud from "highcharts/modules/wordcloud"

worcloud(Highcharts);

@Component({
  selector: 'app-celebrityprofile',
  templateUrl: './celebrityprofile.component.html',
  styleUrls: ['./celebrityprofile.component.css']
})

export class CelebrityprofileComponent implements OnInit {
  CelebId: string;
  CelebrityProfile : ICelebrity;
  Highcharts = Highcharts;
  chart;
  chartConstructor = "chart";
  chartCallback;
  movies: any[] = [];
  iscircular: boolean = true;

  chartOptions = {
    series: [{
      type: 'wordcloud',
      name: 'Occurrences',
      minFontSize : 7
    }],
    title: {
      text: 'Wordcloud of Biography'
    },
    rotation: {
      from: 0,
      to: 0
    },
    style: {
      fontFamily: 'Arial',
    }
  }

  constructor(private route: ActivatedRoute, private celebService : CelebrityService) { 
    console.log("In Celeb Profile Page")
    this.route.queryParams.subscribe(params => { this.CelebId = params['id']; });
  }

  ngOnInit() {
    this.celebService.getCelebrityProfile(this.CelebId).subscribe(resp => { 
      let respdata = resp['body'];
      console.log(resp['body']);
      this.CelebrityProfile = respdata[0];
      for (let index = 1; index < respdata.length; index++) {
        const element = respdata[index];
        if(element && element.coverUrl.startsWith("http"))
          {
            this.movies.push(element);
          }
      }
      console.log(this.movies);

      var miniBioText = respdata[0].miniBio;
      if (miniBioText == null){
        console.log(miniBioText);
        miniBioText = '';
      } else { 
        if (Array.isArray(miniBioText))
          {  
            miniBioText = miniBioText.join(',');
          }
          console.log('our bio:'+miniBioText);
      }
      this.CelebrityProfile.miniBio = miniBioText;
      console.log(miniBioText);

      var text = this.CelebrityProfile.miniBio ;
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
      console.log(data);
      var filtered = data.filter(function(value, index, arr){

        return value.weight > 1

      });
      this.chartOptions.series[0]['data'] = filtered;


    });


  }
}
