Package.describe({
  name: 'xinranxiao:accounts-spotify',
  version: '1.0.2',
  summary: 'An updated and maintained meteor package for Spotify\'s login service',
  git: 'https://github.com/xinranxiao/meteor-accounts-spotify.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom(['1.3','2.3']);

  api.use('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('underscore', ['client', 'server']);
  api.use('service-configuration', ['server']);
  api.use('xinranxiao:spotify@1.0.2', ['client', 'server']);

  api.imply('xinranxiao:spotify@1.0.2', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.imply('service-configuration', ['server']);
  api.export('Spotify');

  api.addFiles(['spotify_login_button.css'], 'client');
  api.addFiles('spotify_common.js', ['client', 'server']);
  api.addFiles('spotify_server.js', 'server');
  api.addFiles('spotify_client.js', 'client');
});
