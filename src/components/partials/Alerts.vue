<template>
  <div>
    <v-alert
        v-model="alert"
        :type="alertType"
        :transition="alertTransition"
        outline
        dismissible
      >
      {{ alertText }}
    </v-alert>
  </div>
</template>


<script>
/*eslint-disable */

import { bus } from '../../router/index';

  export default {
    components: {
    },
    props: {
      alertType:{
        type: String
      },
      alertTransition: {
        type: String
      },
      alertText: {
        type: String
      }
    },
    data(){
      return {
        alert: true,
      }
    },
    mounted(){

    },
    updated(){

    },
    watch: {
    },
    methods:{

    }
  }


</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

</style>
