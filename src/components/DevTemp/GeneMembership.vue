<template>
  <div>
    <div class="chart-title">Gene membership in panels</div>
    <div id="gene-histogram-box" >
      <svg id="gene-histogram-chart1"></svg>
    </div>
  </div>
</template>


<script>
import { bus } from '../../routes';
import { Typeahead, Btn } from 'uiv';
import d3 from 'd3';
import Model from '../../models/Model';
import HistogramChart from '../../d3/HistogramChart';

var model = new Model();

  export default {
    components: {
    },
    //props: ['GeneData'],
    props: {
      modeOfInheritanceData: {
        type: Array
      },
      GeneData: {
        type: Array
      },
      color: null
    },
    data(){
      return {
        geneHistogramChart: {},
        geneBarChart: {},
        GetGeneData : [],
        GenesToDisplay: [],
        selected: [],
        items: [],
        GenesFromD3Bars: [],
        dataForTables:[],
        modeOfInheritanceList: [],
        countForEmit:0,
        modeOfInheritanceProps: [],
        flagForNumberOfGenesSelected: false,
        NumberOfGenesSelectedFromFilter: 50,
        CountBrushSelection: 0,

      }
    },
    mounted(){
      this.modeOfInheritanceProps = this.modeOfInheritanceData;
      this.CountBrushSelection = 0;
      this.draw();
      this.AddGeneData();
    },
    updated(){


    },
    watch: {
      GeneData: function(){
        this.CountBrushSelection = 0;
        console.log("watch genes : " , this.GeneData);
        this.AddGeneData();
      },
      modeOfInheritanceData: function(){
        console.log("Watch modeOfInheritanceData from show-gene-panel1: ", this.modeOfInheritanceData)
      }
    },
    methods:{
      draw(){
        let self = this;
        //Drawing histogram chart
        this.geneHistogramChart = HistogramChart()
            .width(390)
            .height(150)
            .widthPercent("100%")
            .heightPercent("100%")
            .margin( {left: 45, right: 15, top: 10, bottom: 30})
            .yAxisLabel( "# of genes" )
            .xAxisLabel( "# of Panels" )
            .color(self.color)
            .on("barselect", function(selectedGeneNames){
              console.log("bars selected ", selectedGeneNames);
              addSelectedFromHistogramChart(selectedGeneNames);
            })
        var addSelectedFromHistogramChart = (data)=>{
          this.CountBrushSelection++;
          //alert(this.CountBrushSelection)
          this.selected = data;
          bus.$emit("updateFromGenesHistogram", data, this.CountBrushSelection)
        }

      },
      addSelectedGenesFromD3(selectedGeneNames){
        this.GenesFromD3Bars = selectedGeneNames;
        console.log("this.GenesFromD3Bars", this.GenesFromD3Bars)
      },


      AddGeneData: function(){
        this.GetGeneData = this.GeneData;
        console.log("this.GetGeneData", this.GetGeneData);

        this.modeOfInheritanceList = this.modeOfInheritanceData;

        var mergedGenes = model.mergeGenesAcrossPanels(this.GetGeneData);
        console.log("mergedGenes", mergedGenes);

        this.GenesToDisplay = mergedGenes;
        console.log("GenesToDisplay",this.GenesToDisplay);

        var selection = d3.select('#gene-histogram-chart1').datum(model.mergedGenes);
        this.geneHistogramChart(selection, {'logScale': true, 'descendingX': true, 'selectTop': 50});

        let data = model.getGeneBarChartData(mergedGenes, $('#genes-table').innerWidth());
        // console.log("model.getGeneBarChartData(mergedGenes)", model.getGeneBarChartData(mergedGenes).slice(0,50));
        // console.log("bar char", this.geneBarChart)
        this.items = data;
        this.selected = data.slice(0,50);

        // console.log("this.selected from Show Genes ", this.selected )
       // this.geneBarChart(d3.select('#gene-bar-chart'), data);
        // console.log("bar chart1", this.geneBarChart)
        this.dataForTables = data.slice(0,10);
        // console.log("dataForTables: ", this.dataForTables)

      },
      selectAllGenes: function(){
        this.selected = this.items.slice()
      },
      deSelectAllGenes: function(){
        this.selected = []
      },

    }
  }


</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
#gene-histogram-chart1 .bar rect {
    stroke: darygrey;
    stroke-width: .5;
}
#gene-histogram-chart1 .bar.selected rect {
}
#gene-histogram-chart1 .bar text {
    font-size: 10px;
}
#gene-histogram-chart1 .x.axis {
  font-size: 10px;
}
#gene-histogram-chart1 .y.axis {
  font-size: 10px !important;
}
#gene-histogram-chart1 .axis .label {
  font-size: 12px !important;
}
div.tooltip {
  position: absolute;
  text-align: center;
  z-index:20;
  color:white;
  padding: 4px 6px 4px 6px;
  font: 11px arial;
  background: rgb(80,80,80);
  border: 0px;
  border-radius: 4px;
  pointer-events: none;
}
/*                           */
/* Gene horizontal barchart  */
/*                           */
#gene-bar-chart #title {
  font-size: 20px;
  padding-bottom: 10px;
  padding-top: 20px;
  font-weight: 300;
}
/*                      */
/*  Any svg chart       */
/*                      */
.y.axis line {
  fill: none;
  stroke: #e0e0e0;
  shape-rendering: crispEdges;
}
.x.axis line {
  fill: none;
  stroke: #e0e0e0;
  shape-rendering: crispEdges;
}
.axis path {
  fill: none;
  stroke: #848383;
  shape-rendering: crispEdges;
}
.axis .label {
  font-size: 12px;
}
.brush .extent {
  fill-opacity: .125;
  shape-rendering: crispEdges;
}
.resize {
  display: inline !important; /* show when empty */
  fill: #7A7A7A;
  fill-opacity: 1;
  stroke: #7A7A7A;
  stroke-width: 2px;
}
.input-group__input{
  min-height: 3px;
}
.headerWidth{
  width: 1%;
  color: red
}
</style>
