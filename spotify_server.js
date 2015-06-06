Accounts.addAutopublishFields({
  forLoggedInUser: _.map(
    // publish access token since it can be used from the client
    // refresh token probably shouldn't be sent down.
    Spotify.whitelistedFields.concat(['accessToken', 'expiresAt']), // don't publish refresh token
    function (subfield) { return 'services.spotify.' + subfield; }),

  forOtherUsers: _.map(
    // even with autopublish, no legitimate web app should be
    // publishing all users' emails
    _.without(Spotify.whitelistedFields, 'email', 'id', 'uri'),
    function (subfield) { return 'services.spotify.' + subfield; })
});