<template>
  <div class="summaryDiv">
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
      }
    },
    mounted(){
      // if(typeof this.selectedNumber===Number && typeof this.totalNumber === Number){
      //   this.drawBars();
      // }
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

        var svgWidth = $('.summaryDiv').innerWidth() ;
        var absWidth = Math.abs(svgWidth)
        var multiplicationFactor = Math.round(absWidth / this.totalNumber);
        var selectedgenesWidth = Math.abs((this.selectedNumber * multiplicationFactor)-30);
        var grayBarWidth = Math.abs(absWidth - selectedgenesWidth -30);
        var selected_Number = this.selectedNumber;

        if(this.selectedNumber===0){
          selectedgenesWidth = 0;
        }


          this.bars = `<svg viewBox="0 0 ${absWidth} 18" xmlns="http://www.w3.org/2000/svg">
                          <rect class="genepanelsRect"
                                x="1" y="1" rx="5" width="${selectedgenesWidth}" height="16"/>
                          <rect class="grayRect"
                                x="${selectedgenesWidth}" y="1" rx="5" width="${grayBarWidth}" height="16"/>
                          <text x="${selectedgenesWidth+7+grayBarWidth}" y="12" font-family="Verdana" font-size="12" fill="#4267b2">${selected_Number}</text>
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
