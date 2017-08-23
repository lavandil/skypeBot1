var restify = require('restify');
var builder = require('botbuilder');

var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () { });

// Create the chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: "45fadd39-b9bd-40ab-a9a5-94930a56a4b2",
    appPassword: "AO7jqQdwVeqWELkQ1qf2pt3"
});

// Listen for messages from users
server.post('/api/messages', connector.listen());

// Create your bot with a function to receive messages from the user
var bot = new builder.UniversalBot(connector, function (session) {
    // echo the user's message
    session.send("You said: %s", session.message.text);
});