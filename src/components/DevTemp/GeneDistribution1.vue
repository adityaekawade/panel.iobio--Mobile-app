<template>
  <div>
    Gene Distribution Component
    <div>
      <div id="gene-distribution-chart"></div>
      <div id="abcd"></div>
    </div>
  </div>
</template>

<script>
import { bus } from '../../routes';

  export default {
    props:['GeneData'],
    data(){
      return {
        geneDistributChart:{},
        GeneDistData: [],
        GeneDataForChart: [],
        count: 0,
      }
    },
    watch: {
      GeneData: function(){
        this.GeneDataForChart = this.GeneData.slice(0,50);
        // alert(this.GeneDataForChart[0].value)
        this.draw(this.GeneData.slice(0,50))
      },
    },
    methods:{
      drawProperly(dataArray){
        this.count++;

        var margin = {top: 20, right: 20, bottom: 40, left: 50};

        var height = 350- margin.left - margin.right;
        var width = 700 - margin.top - margin.bottom;
        // if (this.count==1){
          console.log('dataArray', dataArray)
           dataArray.sort(function(a,b){
             return a.value - b.value
           })
        // d3.select("#gene-distribution-chart").remove();
        d3.select("#gene-distribution-chart").select("svg").remove();

        var chart = d3.select('#gene-distribution-chart')
                     .append('svg')
                     .attr('height', '400px')
                     .attr('width', '100%')
                     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

           var area = d3.svg.area()
                       .x(function(d,i){
                         return i*10;
                       })
                       .y0(height)
                       .y1(function(d){
                         return height-d.value*8.7;
                       })
                       .interpolate("basis")

           chart.append('path').attr('d', area(dataArray)).attr("fill", 'steelblue').attr("stroke", "blue").attr("stroke-width", "1px");

           // var max = Math.max.apply(Math,dataArray.map(function(o){return o.value;}));

           var yScale = d3.scale.linear()
                          .domain([0, d3.max(dataArray, function(d) { return d.value; })])
                          .range([height, 0]);

          var yAxis = d3.svg.axis()
                    .scale(yScale)
                    .orient("left")
                    .ticks(10)


          chart.append("g")
                .attr("class", "y axis")
                .attr("stroke", "black")
                .attr("transform", "translate(50,0)")
                .call(yAxis)
      },
      draw(dataArray){
        this.drawProperly(dataArray)
        }
      },
      doSomething(){
       this.draw(this.GeneDataForChart);
     },

    mounted(){
      console.log("GeneDistribution is mounted")
      console.log("props in geneDistributChart: ", this.GeneData);

    },
    updated(){
    },
    created(){
    }
  }

  function AreaChart(){

  }
</script>

<style scoped>
.axis path, .axis line {
  fill: none;
  stroke: #000;
  shape-rendering: crispEdges;
  color: "black";

}

.area { fill: #4ca3bd; }
</style>
