'use strict';

var Alexa = require('alexa-sdk');
var https = require('https');
var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
const APP_ID = 'amzn1.ask.skill.1e041c80-9217-4ddb-b923-295e425d4ea8';
var myRequest = '';
var postalAddress;
var SSNOne;
var SSNTwo;
var SSNThree;
var SSNFour;
var AccountNumOne;
var AccountNumTwo;
var AccountNumThree;
var AccountNumFour;
var AccountNumFive;
var AccountNumSix;
var AccountNumSeven;
var AccountNumEight;
var AccountNumNine;
var AccountNumTen;
 
var START_MESSAGE = 'Welcome to the P S E G Company Guide. Ask me anything you would like to know about the company.';

var handlers = {
    
    'LaunchRequest': function () {
        this.emit(':ask', START_MESSAGE);
    },
    
    'LoginIntent': function(){
        this.emit(':ask', 'Authentication is required for this skill. Please tell me your house number and street name.');
    },
    
     'SaveAddressIntent': function(){
        var DDB = new AWS.DynamoDB({apiVersion: '2012-10-08'});
        postalAddress = this.event.request.intent.slots.PostalAddress.value;
        /*var params = {
            TableName: 'Customers',
            Item: {
                'Address': {String: postalAddress},
            }
        };
        DDB.putItem(params, function(err, data){
            if(err){
                this.emit(':ask', 'Error storing address in database');
            }
            else{
            
            }
        });*/
        this.emit(':ask', 'Your address is ' + postalAddress + ', please enter the last 4 digits of your social security number.');
     },
     
     'SaveSSNIntent': function(){
        SSNOne = this.event.request.intent.slots.SSNOne.value;
        SSNTwo = this.event.request.intent.slots.SSNTwo.value;
        SSNThree = this.event.request.intent.slots.SSNThree.value;
        SSNFour = this.event.request.intent.slots.SSNFour.value;
        this.emit(':ask', 'The last 4 digits of your social security number are ' + SSNOne + ' ,' + SSNTwo + ' ,' + SSNThree + ' ,' + SSNFour + ', please enter your account number by clearly saying, My account number is, followed by your 10 digit account number');
     },
     
      'AccountNumberIntent': function(){
        AccountNumOne = this.event.request.intent.slots.AccountNumOne.value;
        AccountNumTwo = this.event.request.intent.slots.AccountNumTwo.value;
        AccountNumThree = this.event.request.intent.slots.AccountNumThree.value;
        AccountNumFour = this.event.request.intent.slots.AccountNumFour.value;
        AccountNumFive = this.event.request.intent.slots.AccountNumFive.value;
        AccountNumSix = this.event.request.intent.slots.AccountNumSix.value;
        AccountNumSeven= this.event.request.intent.slots.AccountNumSeven.value;
        AccountNumEight = this.event.request.intent.slots.AccountNumEight.value;
        AccountNumNine = this.event.request.intent.slots.AccountNumNine.value;
        AccountNumTen = this.event.request.intent.slots.AccountNumTen.value;
        this.emit(':ask', 'Your account number is ' + AccountNumOne + ' ,' + AccountNumTwo + ' ,' + AccountNumThree + ' ,' + AccountNumFour + ' ,' + AccountNumFive + ' ,' + AccountNumSix + ' ,' + AccountNumSeven + ' ,' + AccountNumEight + ' ,' + AccountNumNine + ' ,' + AccountNumTen);
     }
};
    

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
