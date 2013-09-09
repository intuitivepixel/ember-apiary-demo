App.Router.map(function () {
  this.resource('customers', {path: '/customers'}, function() {
    this.route('details', {path: '/details/:customer_id'});
  });
  this.resource('clients', {path: '/clients'}, function() {
    this.route('details', {path: '/details/:client_id'});
  });
  this.resource('users', {path: '/users'}, function() {
    this.route('details', {path: '/details/:user_id'});
  });
});
