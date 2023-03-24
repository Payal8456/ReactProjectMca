const express=require('express');
const app=express();
const path=require('path');
const bodyParser=require('body-parser');
const cors=require('cors');


app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(cors());

const port = 3001;

app.use(express.static(__dirname + '/'));

app.use('/',(request,response)=>{
    response.sendFile(path.join(__dirname, './search.html'));
});


app.post('/find', (req, res) => {

	var search = (req.body.search);

    console.log(search);

	
});


app.listen(port, () => console.log('App runing on port '+port));