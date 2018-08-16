/*eslint-disable */

import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import { Typeahead } from 'uiv'

import * as uiv from 'uiv'
import Clipboard from 'v-clipboard'
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery
var FileSaver = require('file-saver')
Vue.use(uiv)
Vue.use(Router)
Vue.use(Typeahead)
Vue.use(Clipboard)

export const bus = new Vue()

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})
