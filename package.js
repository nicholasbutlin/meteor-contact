Package.describe({
  name: 'nickos:contact',
  summary: "creates a simple contact form",
  version: "1.0.3",
  git: "https://github.com/nicholasbutlin/meteor-contact.git"
  });

Package.onUse(function (api, where) {
  api.versionsFrom('0.9.0');
  api.use(['nickos:errors@1.0.0', 'templating', 'iron:router@1.0.0'], ['client', 'server']);
  api.addFiles(['client_contact.js', 'client_contact.html'], 'client');
  api.addFiles(['libcontact.js', 'libroute.js'], ['client', 'server']);
  api.export('contact', ['client', 'server']);
});
