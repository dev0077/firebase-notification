var admin = require("firebase-admin");


var initialize = (serviceAccount) => {

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}


var multicastNotificationwithImg = (multicastData, callback) => {


    const message = {
        topic: multicastData.topic,

        android: {
            notification: {
                imageUrl: multicastData.notificationImg,
                title: multicastData.title,
                body: multicastData.body
            }
        },
        apns: {
            payload: {
                aps: {
                    'mutable-content': 10
                }
            },
            fcm_options: {
                image: multicastData.fcmOptionImg
            }
        },
        webpush: {
            headers: {
                image: multicastData.webpushImg
            }
        }
    };




    admin.messaging().send(message)
        .then((response) => {

            callback(undefined, response);
        })
        .catch((error) => {
            callback(error, undefined);
        });

}

var multicastNotificationwithoutImg = (multicastData) => {
    var payload = {
        topic: multicastData.topic,
        "notification": {
            title: multicastData.title,
            body: multicastData.body
        }
    }




    admin.messaging().send(payload)
        .then((response) => {
            // Response is a message ID string.
            callback(undefined, response);
        })
        .catch((error) => {
            callback(error, undefined);
        });
}

var unicastNotification = (unicastData) => {

    // const registrationTokens = ['cCJk2RgoH5M:APA91bEmPh5CpOdx1mJZdVcShxBJNuyB7L5ZBcdxPvikXb7m-gefVMqGETzxaMAMSMvArFaC6c0dZAYwzIKbFwcnVaZ2Y2q06v3j0Q10f_x_bwfjgNR0laQo5u762a1WdplZFIrquJ2','e-_cv01fkHA:APA91bGodpLzdt4iJJOuWxUmCD9Anuz-Xd5rGeIcM3QrfRjCrwANnKd8edcKab_QeUnBcldSKvh3KmWDj1GAjj6YuznbEqIf4VI8Co5XWda91XcbQ0anyWT7uWpbr14HMBcNM8AawxF0'];



    var payload = {
        token: unicastData.token,
        "notification": {
            title: unicastData.title,
            body: unicastData.body
        }
    }


    var options = {
        priority: "high",
        timeToLive: 60 * 60 * 24

    }
    admin.messaging().send(payload)
        .then((response) => {
            // Response is a message ID string.
            callback(undefined, response);
        })
        .catch((error) => {
            callback(error, undefined);
        });
}


module.exports = { multicastNotificationwithImg, multicastNotificationwithoutImg, unicastNotification, initialize }
