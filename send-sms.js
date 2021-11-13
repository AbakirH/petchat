const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken); 
 
client.messages 
      .create({         
         to: '+12014554728', 
         from: '+14253828517',
         body: "Hello I am your best friend"
       }) 
      .then(message => console.log(message.sid)) 
      .done();