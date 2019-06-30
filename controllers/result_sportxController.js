var body_parser=require('body-parser')
var url_encoded_parser=body_parser.urlencoded({extended:false})




var isAuthenticaed=function(req,res,next){

}
var c=function(app){

        app.get('/result_sportx',function(req,res){
                var game_type=req.query.game_type
                console.log(game_type)
                res.render('result_sportx',{details:game_type})
              
                
        })

}

module.exports=c