require('scripts/models/base_mixin.js');
var attr = DS.attr;

App.Customer = DS.Model.extend({
  companyName: attr(),
  contactName: attr(),
  contactTitle: attr(),
  address: attr(),
  city: attr(),
  postalCode: attr(),
  country: attr(),
  phone: attr(),
  fax: attr(),
  data: null,
  init: function () {
    this.set('data',
      {
        labels : ["January","February","March","April","May","June","July"],
        datasets : [
          {
            fillColor : "rgba(220,220,220,0.5)",
            strokeColor : "rgba(220,220,220,1)",
            pointColor : "rgba(220,220,220,1)",
            pointStrokeColor : "#fff",
            data : [
              this.getRandomNumber(),
              this.getRandomNumber(),
              this.getRandomNumber(),
              this.getRandomNumber(),
              this.getRandomNumber(),
              this.getRandomNumber(),
              this.getRandomNumber()
            ]
          },
          {
            fillColor : "rgba(151,187,205,0.5)",
            strokeColor : "rgba(151,187,205,1)",
            pointColor : "rgba(151,187,205,1)",
            pointStrokeColor : "#fff",
            data : [
              this.getRandomNumber(),
              this.getRandomNumber(),
              this.getRandomNumber(),
              this.getRandomNumber(),
              this.getRandomNumber(),
              this.getRandomNumber(),
              this.getRandomNumber()
            ]
          }
        ]
      }
    )
    this._super();
  },
  getRandomNumber: function() {
    return Math.floor(Math.random()*100);
  },
  randomNumber: function() {
    return Math.floor(Math.random()*100);
  }.property()
});
