/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// TODO 3.8 - push a message using the web push library
const webPush = require('web-push');

const pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/fMC_ch4CdbE:APA91bGmUv07zc-Rfvr_VpvAJoc43gYHdKpmV5iMWlB6KMruHr9DbJEJIzGYzbd0ePlzhoqmeM_VukdVTA8Z7hJXRaTQOOl98yO7yYJUohktAmWpIQQm81lNQFV4zFwocwpcfrQt-T-t",
    "expirationTime": null,
    "keys": {
        "p256dh": "BCE2ijHoc8MJO9R_OChT3VqsarITyXkXtmFG2SXWIefY12FIB4tc4Ngg1Z47PbeCrZKFPjjZQo71Th1brUsr5c8",
        "auth": "C-GCVbXqtysE8x9icAVQNA"
    }
};

// TODO 4.3a - include VAPID keys

const payload = 'Here is a payload!';

const options = {
    gcmAPIKey: 'AAAAx4RJ_4g:APA91bEkfMz39KWgQoBVEkByQXStzWXEkjBaFAtleRJ6BIaZ1jIYqBD0aAiEStCtzyF1Df6qh6TxXFyvDum9oATwdeRbnwQ4D1_VCK4Ge2LcrIo7HIgRKowHh-C0WqllbYVE7_G8JKl5',
    TTL: 60,

    // TODO 4.3b - add VAPID details

};

webPush.sendNotification(
    pushSubscription,
    payload,
    options
);