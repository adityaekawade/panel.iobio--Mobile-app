<template>
  <div class="SvgDiv">
    <span v-html="bars"></span>
  </div>
</template>


<script>
/*eslint-disable */

  export default {
    components: {
    },
    props: {
      selectedNumber:{
        type: Number,
      },
      totalNumber: {
        type: Number,
      }
    },
    data(){
      return {
        bars: null,
        totalNumberValue: null,
      }
    },
    mounted(){
      this.drawBars();
    },
    updated(){

    },
    watch: {
      selectedNumber: function(){
        this.drawBars();
      },
      totalNumber: function(){
        this.drawBars();
      }
    },
    methods:{
      drawBars(){
        this.totalNumberValue = this.totalNumber;
        var wdth = $('.SvgDiv').innerWidth();
        if(wdth<=0 || wdth===undefined){
          wdth = 400;
        }
        if(this.totalNumberValue>1200){
          this.totalNumberValue = this.totalNumberValue/1.5
        }
        else if(this.totalNumberValue>2000){
          this.totalNumberValue = this.totalNumberValue/3.5;
        }
        var svgWidth = wdth - 20;
        var multiplicationFactor = svgWidth / this.totalNumberValue;
        var selectedgenesWidth = Math.abs(this.selectedNumber * multiplicationFactor-10);
        var grayBarWidth = Math.abs(svgWidth - selectedgenesWidth-10);

        if(grayBarWidth<1){
          grayBarWidth = 0;
        }
        else if(this.selectedNumber===0){
          selectedgenesWidth = 0;
        }

        this.bars = `<svg viewBox="0 0 ${svgWidth} 18" xmlns="http://www.w3.org/2000/svg">
                      <rect class="genepanelsRect"
                            x="10" y="1" rx="5" width="${selectedgenesWidth}" height="12"/>
                      <rect class="grayRect"
                            x="${selectedgenesWidth+10}" y="1" rx="5" width="${grayBarWidth}" height="12"/>
                  </svg>`
      }
    }
  }


</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

.genepanelsRect{
  fill: #4e7ad3;
  pointer-events: all;
  stroke: white;
  stroke-width: 2;
}

.grayRect{
  fill: #e8ebed;
  stroke: white;
  stroke-width: 2;
}


</style>
