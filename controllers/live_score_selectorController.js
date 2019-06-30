var body_parser=require('body-parser')
var url_encoded_parser=body_parser.urlencoded({extended:false})




var isAuthenticaed=function(req,res,next){

}
var c=function(app){

        app.get('/live_score_selector',function(req,res){
                
                        res.render('live_score_selector')
              
                
        })

}

module.exports=c