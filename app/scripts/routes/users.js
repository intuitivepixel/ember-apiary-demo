App.UsersRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('user');
  },
  afterModel: function(model) {
    if (model) {
      this.transitionTo('users.details', model.get('firstObject'));
    }
  }
});
