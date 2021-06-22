import { Component, OnInit } from '@angular/core';
//import { LocalStorage } from '@ngx-pwa/local-storage';
import { Subscription } from 'rxjs';
import { CelebrityService } from '../../services/celebrity.service';
import { MovieService } from '../../services/movie.service';
import { ICelebrity, IMovie } from 'src/app/models/data.model';
import * as Highcharts from "highcharts";
import HighchartsNetworkgraph from "highcharts/modules/networkgraph";
import HighchartsExporting from "highcharts/modules/exporting";
import { CompileShallowModuleMetadata } from '@angular/compiler';

HighchartsNetworkgraph(Highcharts);
HighchartsExporting(Highcharts);

@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.css']
})
export class VisualizeComponent implements OnInit {

  chartLoaded = false;
  celebData = false;
  movieData = false;
  celebStatus = false;
  celebSub : Subscription;
  movieStatus = false;
  movieSub : Subscription;
  graphLoaded = false;
  celebrityList : ICelebrity[];
  movieList : IMovie[];
  title = "app";
  chart;
  updateFromInput = false;
  Highcharts = Highcharts;
  chartConstructor = "chart";
  chartCallback;
  chartOptions = {
    chart: {
      type: "networkgraph",
      height: "100%",
      plotBorderWidth: 1
    },
    title: {
      text: "The Celebrity Network Tree"
    },
    subtitle: {
      text: "A Force-Directed Network Graph in Highcharts"
    },
    plotOptions: {
      networkgraph: {
        keys: ["from", "to", "dashStyle"], //, "dashStyle"
        layoutAlgorithm: {
          enableSimulation: true,
          friction: -0.9,
          integration: 'euler', //'verlet',
          linkLength: 15, 
          //initialPositionRadius: 3,
          maxIterations: 120
        }
      }
    },
    
    tooltip: {
      positioner: function() {
        return {
          x: this.chart.plotLeft,
          y: this.chart.plotTop //this.chart.plotTop
        };
      },
      shared: true,
      "enabled" : true, 
      "useHTML" : true, 
      "distance" : 50,
      "formatter" : function() {
        let linkFrom_li = '';
        let linkTo_li   = '';
        let tooltipHTML   = '';
        //this.point.linksTo = this.point.linksTo.filter((el, i, a) => i === a.indexOf(el));
        for (let i = 0; i < this.point.linksTo.length; i++) {
            if(linkFrom_li.indexOf(this.point.linksTo[i].from) < 0)
            {
              linkFrom_li = linkFrom_li + `<li>${this.point.linksTo[i].from.substring(0, 20)}</li>`;
            }
        }

        //this.point.linksFrom = this.point.linksFrom.filter((el, i, a) => i === a.indexOf(el));
        for (let i = 0; i < this.point.linksFrom.length; i++) {
          if(linkTo_li.indexOf(this.point.linksFrom[i].to) < 0)
            {
              linkTo_li   = linkTo_li + `<li>${this.point.linksFrom[i].to.substring(0, 20)}</li>`;
            }
        }
        tooltipHTML = tooltipHTML + `<b>Links from [${this.point.name}]</b>:<ul>${linkFrom_li}</ul>`;
        tooltipHTML = tooltipHTML + `<b>Links to [${this.point.name}]</b>:<ul>${linkTo_li}</ul>`;
        return tooltipHTML;
      }
  },

    series: [
      {
        dataLabels: {
          enabled: true,
          linkFormat: ''
        },
        data: [
        ],
        nodes : [{id: 'Noah', color : 'orange'}]
      }
    ]
  };

  constructor(private celebService: CelebrityService,
              private movieService: MovieService,
  //            private localStor: LocalStorage
             ) { 
    const self = this;
    
    this.chartCallback = chart => {
      self.chart = chart;
    };

    this.celebSub = this.celebService._celebsReady$.subscribe(sub => {
      this.celebStatus = sub;
    });

    this.movieSub = this.movieService._moviesReady$.subscribe(subs => {
      this.movieStatus = subs;
    });

  }

  ngOnInit() {
    //console.log('hello from ngOnInit in visualize component, celebs:');
    //console.log(this.celebrityList);
    //console.log('hello from ngOnInit in visualize component, movies:');
    //console.log(this.movieList);

  }


  ngDoCheck(){
    //console.log('in ngdoCheck:'+this.celebStatus+':'+this.movieStatus+':');

    //checking if our data is populated
    if (this.celebStatus){

      this.celebService.getCelebrityList().subscribe(celebs => {
        console.log('inside getting celeblist');
        this.celebrityList = celebs;
        this.celebData = true;
        this.celebStatus = false;
      });
      //console.log(this.celebrityList);

    }

    //check if data populated
    if (this.movieStatus){

      this.movieService.getmoviesList().subscribe(movies => {
        this.movieList = movies;
        this.movieData = true;
        this.movieStatus = false;
      });
      //console.log(this.movieList);

    }

    //if data is populated, load graph.
    if (this.celebData && this.movieData){
      if (!this.graphLoaded){
        this.graphLoaded = true;
        console.log('@@@@@@@@@@making our graph');
        this.makeGraph();
      }
    }

  }

  makeGraph() {

    //Display only nodes for some celebrities 
    //this.celebrityList = this.celebrityList.slice(0, 10);
    //console.log("movies:"+this.movieList)
    //console.log("celebrities"+this.celebrityList);

    // this.celebrityList.forEach(element => 
    //   { 
    //     element.moviesList = element.moviesList.slice(0, 10); 
    //   });
    
    const data = [];
    const nodes = [];

    this.celebrityList.forEach(element => 
      { 
        //console.log('element:'+JSON.stringify(element, null, 4));
        //console.log('elementname'+element.moviesList);
        element.moviesList.forEach( movie => 
        { 
          //console.log('movie:'+JSON.stringify(movie, null, 4));
		  movie = movie['title'];
          //Check if the movies are in the Movies List since we are filtering Movie List
          //for movies released in last 10 years; instead of all movie nodes, it will be too many movie nodes without filtering
          if((this.movieList.findIndex(x => x.title === movie)) != -1)
          {
            const link = [ element.name, movie]; //, "dash" 
            if(data.indexOf(link) == -1)
            {
              data.push(link);
            }
            
            const node = { "id" : movie , "marker" : { "radius" : 8 } };
            //console.log(node);
            if(nodes.indexOf(node) == -1)
            {
              nodes.push(node);
            }

			//console.log('before second degree:'+JSON.stringify(movie, null,  4));
            
            //Second degree Links
            this.movieList.find(x => x.title === movie).actors.forEach(a => {
              //console.log("Second degree a: " + JSON.stringify(a, null, 4)); 
              //console.log("Second degree element: " + JSON.stringify(element.name, null, 4)); 
              if((this.celebrityList.findIndex(x => x.name === a['actorName'])) != -1)
              {
                if(element.name != a['actorName'])
                {
       //           console.log(element.name + " --->" + a['actorName']);
                  const link2 = [element.name, a['actorName'], "dash"];
                  if(data.indexOf(link2) == -1)
                  {
                    data.push(link2);
                  }
                }
              }
             })
          }
        });

        const node = { "id" : element.name , "color" : "orange", "marker" : { "radius" : 8 } };
        //console.log(node);
        if(nodes.indexOf(node) == -1)
        {
          nodes.push(node);
        }
      });  
    
      //console.log(data);
      //console.log(celebnodes);

      this.chartOptions.series[0]['data'] = data;
      this.chartOptions.series[0]['nodes'] = nodes;
      this.chartLoaded = true;

    //console.log("Printing Nodes");
    //console.log(this.chartOptions.series[0]['nodes']);
  }

}
