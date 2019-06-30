var body_parser=require('body-parser');
var url_encoded_parser=body_parser.urlencoded({extended:false});
module.exports=function(app){


        app.post('/scoreboard',url_encoded_parser,function(req,res){
                
                console.log(req.body);
                res.render('scoreboard',{game_details:req.body});

        });

        app.get('/scoreboard',function(req,res){
                
                        res.send('Thats not how it works!')
              
                
        })


};
