var body_parser=require('body-parser')
var url_encoded_parser=body_parser.urlencoded({extended:false})





var c=function(app){

        app.get('/list_current_games',function(req,res){
                
                        res.render('list_current_games')
              
                
        })

}

module.exports=c