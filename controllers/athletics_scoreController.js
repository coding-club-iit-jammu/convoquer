var body_parser=require('body-parser')
var url_encoded_parser=body_parser.urlencoded({extended:false})




var isAuthenticaed=function(req,res,next){

}
var c=function(app){

        app.get('/athletics_score',function(req,res){
                
                        res.render('athletics_score')
              
                
        })

}

module.exports=c