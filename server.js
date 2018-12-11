//Install express server
const express = require('express');
// const path = require('path');
const app = express();


app.use(express.static(__dirname + '/dist'));

app.get('/*', (req, res) => {
	res.sendFile(__dirname + '/dist/hackathon/index.html');
});

app.listen(process.env.PORT || 7004);
