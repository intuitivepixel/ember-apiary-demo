Ember.Handlebars.helper('emailToFullname', function(value){
  var fullName = '%@, %@';
  var nameParts = value.split('.');
  var first = Ember.String.capitalize(nameParts[0]);
  var last = Ember.String.capitalize(nameParts[1].replace(/\d+@\w+/g, ""));
  return new Handlebars.SafeString(fullName.fmt(first, last));
})