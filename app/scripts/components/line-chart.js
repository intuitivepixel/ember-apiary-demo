App.LineChartComponent = Ember.Component.extend({
  tagName: 'canvas',
  attributeBindings: ['width', 'height'],
  width: '480',
  height: '360',
  data: null,
  drawContext: null,
  didInsertElement: function() {
    this.set('drawContext', this.get('element').getContext("2d"));
    var myNewChart = new Chart(this.get('drawContext')).Line(this.get('data'));
  }
});