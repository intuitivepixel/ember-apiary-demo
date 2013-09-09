App.ClientsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('client');
  },
  afterModel: function(model) {
    if (model) {
      this.transitionTo('clients.details', model.get('firstObject'));
    }
  }
});
