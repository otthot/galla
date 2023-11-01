
const accountSid = 'ACc51e52fb55e9f546269424e7756bdaf9';
const authToken = 'abf8956e0b040a230e8621413741aa4d';

const client = require('twilio')(accountSid, authToken);

const guests = [{name : "Joachim", number : "+4540155651"}, {name : "Otto", number : "+4540415900"}]

//line break : \n


function SendSMS(){

    for(let i = 0; i < guests.length; i++){
        client.messages
        .create({
        body: `Kærer Hr. ${guests[i].name}\n Vi glæder os til at se dig på Blegdamsvej 42, d. 04/12} \nMvh, Otto & Joachim`,
        from: '+15313313205',
        to: `${guests[i].number}}`
        })
        .then(message => console.log(message.sid))
    }
}
SendSMS()

