# meteor-accounts-spotify
A meteor package for Spotify's login service.

## Installation
* `meteor add accounts-base`
* `meteor add accounts-oauth`
* `meteor add service-configuration`
* `meteor add xinranxiao:spotify`

## Usage

Go to Spotify's website and register an application. For your redirect URL, enter: `<yourhostname>/_oauth/spotify?close`

Configure the Spotify service (server-side):

```
ServiceConfiguration.configurations.update(
  { "service": "spotify" },
  {
    $set: {
      "clientId": "<your clientId",
      "secret": "<your secret>"
    }
  },
  { upsert: true }
);
```

Login on the client:

```
var options = {
  showDialog: true, // Whether or not to force the user to approve the app again if they’ve already done so.
  requestPermissions: ['user-read-email'] // Spotify access scopes.
};
Meteor.loginWithSpotify(options, function(accessToken) {
  console.log(accessToken);
});
```
The user's `services.spotify` and `profile` fields will be populated on success.

## Contribution

If you have any problems with or suggestions for this package, please create a new issue.
