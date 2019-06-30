var body_parser=require('body-parser');
var url_encoded_parser=body_parser.urlencoded({extended:false});
module.exports=function(app){




        app.get('/livescores',function(req,res){
                
                        res.render('livescores')
              
                
        })


};
