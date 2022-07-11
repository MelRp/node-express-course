const express = require('express');
const app = express();

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




app.listen(8000,function(){
    console.log("server is running")
})
