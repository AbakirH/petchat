const accountSid = 'ACf98a6c9952aa43271d2e09e84597a8c4'; 
const authToken = '86209378dc1c5084f82dd266b83ad03a'; 
const client = require('twilio')(accountSid, authToken); 
 
client.messages 
      .create({         
         to: '+12014554728', 
         from: '+14253828517',
         body: "Hello I am your best friend"
       }) 
      .then(message => console.log(message.sid)) 
      .done();