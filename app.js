const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(cors());

const port = 3001;

// this load the static content 
app.use(express.static(__dirname + '/'));

// render root file 
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, './search.html'));
});


app.post('/senddata', (req, res) => {
	var city = (req.body.city);
	console.log(city);

	var mod_spawn = require("child_process").spawn;		
	var process = mod_spawn('python',["./validate.py",city] ); 

	process.stdout.on('data', function(data) {

		if(data.toString().indexOf("ERROR")>= 0){

			console.log("ERROR OCCURED" + data)
			res.write(data);
			res.end();

		}
		else{

			console.log("ResultFromPython :\n"+data);

			res.write(data);
			res.end();

		}
	})

});


app.listen(port, () => console.log('App is listening on port '+port+':'));