# firebase-notification

## Table of Contents
* [Overview](#overview)
 * [Installation](#installation)

 ## Overview
With the help of this package you can send cloud messaging(push notification) from node to server to android app. There are some easy steps to implement this package.

So follow the instructions and enjoy effortless push notifications on app.



## Installation

The Firebase Admin Node.js SDK is available on npm as `firebase-notification`:

```bash
$ npm install --save firebase-notification
```

## Usage

To use the module in your application, `require` it from any JavaScript file:

```js
var admin = require("firebase-admin");
```
Now initialize the app 
* `initialize()`: With the help of that method we initialize our app. There is one parameter pass in this method `serviceAccount`. This `serviceAccount` is an object type.

You need to `Generate New Private Key` from your firebase project.

For `Generate New Private Key` => Go `Firebase Prject Setting > Service Accounts > Firebase Admin SDK` click on `Generate New Private Key`. Now the json file download on your system. Put it on your project and import it.

> `Eg: var serviceAccount = require('miscallpay-firebase-adminsdk-xdtvt-bfb1e792bc.json')
`
Now call `initialize(serviceAccount)`

> `Eg: var firebase = require('firebase-notification')
var serviceAccount = require('./utils/miscallpay-firebase-adminsdk-xdtvt-bfb1e792bc.json')
firebase.initialize(serviceAccount)`

* `multicastNotificationwithImg(multicastData, callback)`: This method use for sending push notification on multiple devices with image. 
`multicastData` parameter contain all related data which you want to send in notification.
> `Eg: 
var multicastData = {
  topic: 'all',
  notificationImg: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Foo_was_here.jpg',
  title: "Hello Saurabh",
  body: "now we work on npm package publishing",
  fcmOptionImg: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Foo_was_here.jpg',
  webpushImg: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Foo_was_here.jpg',
}`

> `topic` => android app tpoic value and this topic value should same.
> `notificationImg` => notification image
> `title` => notification title
> `body` => notification body
> `fcmOptionImg` => fcm option image it can be same notification image
> `webpushImg` => web push image it can be same notification image

> `Eg: 
var multicastData = {
  topic: 'all',
  notificationImg: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Foo_was_here.jpg',
  title: "Hello Saurabh",
  body: "now we work on npm package publishing",
  fcmOptionImg: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Foo_was_here.jpg',
  webpushImg: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Foo_was_here.jpg',
}
firebase.multicastNotificationwithImg(multicastData, (err, result) => {
  if(err) {
    console.log(err)
    return err
  } else {
    console.log(result)
    return result
  }
}) `

* `multicastNotificationwithoutImg(multicastData, callback)`: This method use for sending push notification on multiple devices without image.
`multicastData` params value is just like above mention.
> `Eg: 
var multicastData = {
  topic: 'all',
  title: "Hello Saurabh",
  body: "now we work on npm package publishing"
}
firebase.multicastNotificationwithoutImg(multicastData, (err, result) => {
  if(err) {
    console.log(err)
    return err
  } else {
    console.log(result)
    return result
  }
})`

* `unicastNotification(unicastData, callback)`: This method use for sending push notification on single device with the help of registration token.
> `Eg: 
var unicastData = {
  token: device registration token,
  title: "Hello Saurabh",
  body: "now we work on npm package publishing"
}
firebase.unicastNotification(multicastData, (err, result) => {
  if(err) {
    console.log(err)
    return err
  } else {
    console.log(result)
    return result
  }
})`

