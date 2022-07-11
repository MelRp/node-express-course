const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mockUserData=[
    {name:'Mark'},
    {name:'Jill'},
    {name:'Franko'}
]
app.get('/users', function(req,res){
        res.json({
            success: true,
            message: 'successfully got users. WELLDONE!',
            users: mockUserData
        })
})

app.get('/users/:id',function(req,res){
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})

app.post('/login', function(req,res){

        const username = req.body.username;
        const password = res.body.password;

        const mockUsername="billyThekid";
        const mockPassword="superSecret";

        if(username==mockUsername && password==mockPassword){
            res.json({
                success: true,
                message: 'password and username match!',
                token: 'encrypted token goes here'
            })
        }else{
            res.json({
                success: false,
                message: 'password or username is wrong!'
            })
        }
})


app.listen(8000,function(){
    console.log("server is running")
})
