$ = jQuery = require('jquery');
var React = require('react');
var Chart = require('./components/lineChart');
var vg = require('vega-lite');
var vlSpec = require('../vl_spec.json');

React.render(<Chart />, document.getElementById('app'));

var embedSpec = {
  mode: "vega-lite",
  spec: vlSpec
};

vg("#vis", embedSpec, function(error, result) {});
