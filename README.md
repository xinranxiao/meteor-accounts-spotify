# meteor-accounts-spotify
An updated and maintained meteor package for Spotify's login service.

## Installation
* `meteor add xinranxiao:accounts-spotify`

## Usage

Go to Spotify's website and register an application. For your redirect URL, enter: `<yourhostname>/_oauth/spotify?close`

Configure the Spotify service (server-side):

```javascript
ServiceConfiguration.configurations.update(
  { "service": "spotify" },
  {
    $set: {
      "clientId": "<your clientId>",
      "secret": "<your secret>"
    }
  },
  { upsert: true }
);
```

Login on the client:

```javascript
var options = {
  showDialog: true, // Whether or not to force the user to approve the app again if they’ve already done so.
  requestPermissions: ['user-read-email'] // Spotify access scopes.
};
Meteor.loginWithSpotify(options, function(accessToken) {
  console.log(accessToken);
});
```
The user's `services.spotify` and `profile` fields will be populated on success. If you just want the access token without user accounts being involved, check out [xinranxiao:spotify](https://github.com/xinranxiao/meteor-spotify).

## Contribution

If you have any problems with or suggestions for this package, please create a new issue.

TODO
- allow specification of the fields to use for the profile.
