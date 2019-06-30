var body_parser=require('body-parser')
var url_encoded_parser=body_parser.urlencoded({extended:false})




var isAuthenticaed=function(req,res,next){

}
var c=function(app){

        app.get('/teams_x',function(req,res){
                var game_type=req.query.game_type
                console.log(game_type)
                res.render('teams_x',{details:game_type})
              
                
        })

}

module.exports=c