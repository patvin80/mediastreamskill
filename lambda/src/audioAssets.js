'use strict';

let en = {
    card : {
        title: 'Bapus Ram Raksha',
        subtitle: 'Ram Raksha by Bapu',
        cardContent: "Visit our web site https://www.amoghconsultants.com",
        image: {
            largeImageUrl: 'https://s3.amazonaws.com/alexademo.ninja/maxi80/alexa-artwork-1200.png',
            smallImageUrl: 'https://s3.amazonaws.com/alexademo.ninja/maxi80/alexa-artwork-720.png'
        }
    },
    url: 'https://s3.amazonaws.com/raagdaariaudio/bapusramraksha.mp3',
    startJingle : 'https://s3.amazonaws.com/alexademo.ninja/maxi80/jingle.m4a'    
};

let globalAudioData = {
    'en-US': en
};

function audioData(request) {
    let DEFAULT_LOCALE = 'en-US';
    var locale = request === undefined ? DEFAULT_LOCALE : request.locale;
    if (locale === undefined) { 
        locale = DEFAULT_LOCALE
    };
    return globalAudioData[locale];    
}

module.exports = audioData;
