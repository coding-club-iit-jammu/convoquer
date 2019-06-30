var body_parser=require('body-parser')
var url_encoded_parser=body_parser.urlencoded({extended:false})




var isAuthenticaed=function(req,res,next){

}
var c=function(app){


        app.get('/',function(req,res){
                
                        res.render('index')
              
                
        })

        app.get('/about',function(req,res){
                
                        res.render('about')
              
                
        })

        app.get('/athletics',function(req,res){
                
                        res.render('athletics')
              
                
        })

                app.get('/badminton',function(req,res){
                
                        res.render('badminton')
              
                
        })

                 app.get('/basketball',function(req,res){
                
                        res.render('basketball')
              
                
        })

                app.get('/chess',function(req,res){
                
                        res.render('chess')
              
                
        })

                app.get('/cricket',function(req,res){
                
                        res.render('cricket')
              
                
        })

                app.get('/football',function(req,res){
                
                        res.render('football')
              
                
        })


                app.get('/pool',function(req,res){
                
                        res.render('pool')
              
                
        })


                app.get('/table-tennis',function(req,res){
                
                        res.render('table-tennis')
              
                
        })

                app.get('/volleyball',function(req,res){
                
                        res.render('volleyball')
              
                
        })

}
module.exports=c

