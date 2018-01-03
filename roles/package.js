Package.describe({
  summary: "Authorization package for Meteor",
  version: "0.0.1",
  git: "https://github.com/meteor-mogul/meteor-roles.git",
  name: "meteormogul:accounts-roles"
});

Package.onUse(function (api) {
  var both = ['client', 'server'];

  api.versionsFrom("METEOR@1.2.0.2");

  api.use(['underscore',
           'accounts-base',
           'tracker',
           'mongo',
           'check'], both);

  api.export('Roles');

  api.addFiles('roles_server.js', 'server');
  api.addFiles('roles_common.js', both);
  api.addFiles(['client/debug.js',
                'client/uiHelpers.js',
                'client/subscriptions.js'], 'client');
});

Package.onTest(function (api) {
  var both = ['client', 'server'];

  api.versionsFrom("METEOR@1.4.0.1");

  // `accounts-password` is included so `Meteor.users` exists

  api.use(['meteormogul:accounts-roles',
           'accounts-password',
           'underscore',
           'tinytest'], both);

  api.addFiles('tests/client.js', 'client');
  api.addFiles('tests/server.js', 'server');
});
