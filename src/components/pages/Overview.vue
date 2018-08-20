<template>
  <div>
      <v-layout row wrap style="margin-top:-10px;">
        <v-flex d-flex xs12>
          <v-card>
            <v-card-text>
              <v-list>
                <v-card-title primary-title style="font-size:18px">
                  <strong>Help: </strong>
                </v-card-title>
                <v-list-tile>
                  <v-list-tile-title>What is panel.iobio</v-list-tile-title>
                </v-list-tile>
                <v-list-tile >
                  <v-list-tile-title>How to use Genetic Testing Registry (GTR)?</v-list-tile-title>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-title>How to use Phenolyzer?</v-list-tile-title>
                </v-list-tile>
                <v-divider style="height:2px"></v-divider>
                <v-list-tile>
                  <v-list-tile-title>Disclaimer</v-list-tile-title>
                </v-list-tile>
                <v-list-tile >
                  <v-list-tile-title>About</v-list-tile-title>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-title>Software and resources</v-list-tile-title>
                </v-list-tile>
                <v-divider style="height:2px"></v-divider>
                <v-card-title primary-title style="font-size:18px">
                  <strong>Additional resources: </strong>
                </v-card-title>
                <v-list-tile >
                  <v-list-tile-title><a href="http://iobio.io/tags/gene.iobio/" target="_iobio">Blog</a></v-list-tile-title>
                </v-list-tile>
                <v-list-tile >
                  <v-list-tile-title><a href="http://gene.iobio.io/help_resources.html" target="_iobio">Tutorials</a></v-list-tile-title>
                </v-list-tile>
                <v-list-tile >
                  <v-list-tile-title><a href="http://iobio.io" target=")iobio">iobio</a></v-list-tile-title>
                </v-list-tile>
                <v-list-tile >
                  <v-list-tile-title><a href="http://iobio.io/support.html" target=")iobio">Support the iobio project</a></v-list-tile-title>
                </v-list-tile>
                <v-divider style="height:2px"></v-divider>
                <v-card-title primary-title style="font-size:18px">
                  <strong>Apps: </strong>
                </v-card-title>
                <v-list-tile >
                  <v-list-tile-title><a href="http://gene.iobio.io/">gene.iobio</a> </v-list-tile-title>
                </v-list-tile>
                <v-list-tile >
                  <v-list-tile-title><a href="http://bam.iobio.io/">bam.iobio</a> </v-list-tile-title>
                </v-list-tile>
                <v-list-tile >
                  <v-list-tile-title><a href="http://vcf.iobio.io/">vcf.iobio</a> </v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    <!-- </v-container> -->
  </div>
</template>


<script>
/*eslint-disable */

import { bus } from '../../router/index';
import { Typeahead, Btn } from 'uiv';
import d3 from 'd3';
import Model from '../../models/Model';
import img from '../assets/images/bg.png'

var model = new Model();

  export default {
    components: {
    },
    props: {
    },
    data(){
      return {
        gradient: 'to top,  #0D47A1,#42A5F5',
        panelsDefinitionValues: [20, 45]
      }
    },
    updated(){

    },
    watch: {
    },
    methods:{
      getStarted: function(component){
        if(component==='gtr'){
          bus.$emit('openGtrComponent');
        }
        else if(component==='phenolyzer'){
          bus.$emit('openPhenolyzer')
        }
      }
    }
  }


</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

center, span, h1, h2, h3, h4{
  font-family: 'Open Sans', sans-serif;
}

div.polaroid {
  width: 400px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
}

.abc {
  border-radius: 16px
}

.v-slider__track__container, .v-slider__track{
  height:16px !important;
  border-radius: 5px
}

.v-slider__track-fill{
  height:16px !important;
  transition: .0s  !important;
}

.v-slider__track, .v-slider__track-fill{
  transition: none !important;
}

</style>
