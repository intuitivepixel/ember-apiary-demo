App.CustomersRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('customer');
  },
  afterModel: function(model) {
    if (model) {
      this.transitionTo('customers.details', model.get('firstObject'));
    }
  }
});
