Package.describe({
  name: 'xinranxiao:accounts-spotify',
  version: '0.0.1',
  summary: 'A meteor package for Spotify\'s login service',
  git: 'https://github.com/xinranxiao/meteor-accounts-spotify ',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('accounts-spotify.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('xinranxiao:accounts-spotify');
  api.addFiles('accounts-spotify-tests.js');
});
