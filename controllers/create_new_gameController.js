var body_parser=require('body-parser')
var url_encoded_parser=body_parser.urlencoded({extended:false})




var isAuthenticaed=function(req,res,next){

}
var c=function(app){

        app.get('/create_new_game',function(req,res){
                
                        res.render('create_new_game')
              
                
        })

}

module.exports=c