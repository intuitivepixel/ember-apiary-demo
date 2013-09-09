var App = window.App = Ember.Application.create({
  ready: function() {
    console.log('App ready');
  }
});

App.CustomerAdapter = DS.RESTAdapter.extend({
  host: 'http://intuitivepixel.apiary.io'
});

App.ClientAdapter = DS.RESTAdapter.extend({
  host: 'http://intuitivepixel.apiary.io'
});

App.UserAdapter = DS.RESTAdapter.extend({
  host: 'http://api.randomuser.me/?results=10'
});

App.BaseSerializer = DS.RESTSerializer.extend({
  normalize: function(type, hash, property) {
    var json = {};

    // build json and camelize the underscored properties
    for (var prop in hash) {
      json[prop.camelize()] = hash[prop];
    }

    // delegate to any type-specific normalizations
    return this._super(type, json, property);
  }
});

App.CustomerSerializer = App.BaseSerializer.extend();

App.ClientSerializer = App.BaseSerializer.extend();

App.UserSerializer = App.BaseSerializer.extend({
  normalize: function(type, hash, property) {
    // use the `SSN` as id
    // and remove name & location subObjects
    // after extracting the first and last name
    var json = { id: hash.SSN };
    delete hash.SSN;

    json.fullName = '%@, %@'.fmt(
      Ember.String.capitalize(hash.name.first),
      Ember.String.capitalize(hash.name.last)
    );
    delete hash.name;
    delete hash.location;

    // build json and camelize the underscored properties
    for (var prop in hash) {
      json[prop.camelize()] = hash[prop];
    }

    return this._super(type, json, property);
  },
  extract: function(store, type, payload, id, requestType) {
    var users = payload.results.map(function(item){
        return item.user;
    });
    var json = {};
    json.users = users;

    return this._super(store, type, json, id, requestType);
  }
});


/* Order and include as you please. */
require('scripts/helpers/*');
require('scripts/components/*');
//require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');
