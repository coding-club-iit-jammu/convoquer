
window.onload=function(){
        var live_score_div=document.getElementById("live_score_div")
        db=firebase.database().ref("live_scores/")

                db.on('value',snap=>{
                        if(snap.exists()){
  

                var html_list=""
                var game_types=Object.keys(snap.val())
                console.log("game types : "+game_types)
                data=snap.val()

                game_types.forEach(function(game_type){
                        
                                var card_class="live_template"
                                if(game_type!="cricket"){
                                        card_class=card_class+" "+game_type
                                }
                        
                        var games=Object.keys(snap.child(game_type).val())
                        console.log("Games : "+games)
                        games.forEach(function(game){
                                console.log(game)
                                console.log(game_type)
                                console.log(snap.val()[game_type][game])
                                var g=snap.val()[game_type][game]
                                var cricket_addon1=""
                                var cricket_addon2=""
                                if(game_type=="cricket"){
                                        var nballs=g.team1_balls+g.team1_overs * 6
                                        cricket_addon1="/"+g.team1_wicket+" ("+g.team1_overs+"."+g.team1_balls+")  RR : "+g.team1_score*6/nballs+" "
                                        nballs=g.team2_balls+g.team2_overs * 6
                                        cricket_addon2="/"+g.team2_wicket+" ("+g.team2_overs+"."+g.team2_balls+")  RR : "+g.team2_score*6/nballs+" "
                                        if(g.team1_overs == 0  && g.team1_balls == 0 && g.team2_balls == 0 && g.team2_overs ==0 ){
                                                cricket_addon1=cricket_addon2="Standby"
                                        }

                                        if(g.team1_overs == 0  && g.team1_balls == 0){
                                                cricket_addon1="Yet to bat"
                                        }
                                        else if(g.team2_overs == 0  && g.team2_balls == 0){
                                                cricket_addon2="Yet to bat"
                                        }

                                }
                                // if(game_type=="tabletennis"){
                                //         game_type="table tennis"
                                // }
                
                                var team1_score=g.team1_score
                                if(team1_score==0 && game_type == "cricket")
                                        team1_score=""
                                var team2_score=g.team2_score
                                if(team2_score==0 && game_type == "cricket")
                                        team2_score=""

                                html_list=html_list+"<blockquote class='"+card_class+"'><p>"+game_type.toUpperCase()+"<br>"+game+"</p><cite>"+g.team1_name+" - "+team1_score+cricket_addon1+"<br><hr><br>"+g.team2_name+" - "+team2_score+cricket_addon2+"</cite></blockquote>"
                                
                        })
                       

                })

                live_score_div.innerHTML=html_list
        }
        else{


                console.log('No live Scores')
                document.getElementById("live_score_div").innerHTML="<blockquote class='live_template football'><p>Currently there are no games being played.</p><cite>Check Results section if the game is already over.</cite></blockquote>"
        }
        })
        

}
