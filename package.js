Package.describe({
  name: 'nickos:contact',
  summary: "creates a simple contact form",
  version: "1.0.1",
  git: "https://github.com/nicholasbutlin/meteor-contact.git"
  });

Package.onUse(function (api, where) {
  api.versionsFrom('0.9.0');
  api.use(['nickos:errors@1.0.0', 'templating'], 'client');
  api.use('iron:router@1.0.0')
  api.addFiles(['client_contact.js', 'client_contact.html'], 'client');
  api.addFiles(['libcontact.js', 'libroute.js']);
  api.export('Contact');
});
