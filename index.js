require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser'); //creates
const { WebClient } = require('@slack/client'); //dependency

const app = express(); //creates instance of express server
const web = new WebClient(process.env.SLACK_AUTH_TOKEN);//creates the slack client

/*
 * Parse application/x-www-form-urlencoded && application/json
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('<h2>The app is runnin! Ya better run and catch it :/</h2>');
});

web.chat.postMessage({ text : "Hello World !", channel : "CBVME3EMD"});
