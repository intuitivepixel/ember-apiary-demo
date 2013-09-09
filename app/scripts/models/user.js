var attr = DS.attr;

App.User = DS.Model.extend({
  fullName: attr(),
  cell: attr(),
  email: attr(),
  gender: attr(),
  password: attr(),
  md5Hash: attr(),
  sha1Hash: attr(),
  phone: attr(),
  picture: attr()
});
