var db
var gtype
var gme


var score_board=function(game_type,game){
	if(game_type!="cricket"){
		           document.getElementById('t1w')
                           .setAttribute('style','display:none; visibility:hidden')   
                   document.getElementById('t2w')
                           .setAttribute('style','display:none; visibility:hidden')
                           document.getElementById('t1o')
                           .setAttribute('style','display:none; visibility:hidden')
                           document.getElementById('t2o')
                           .setAttribute('style','display:none; visibility:hidden')
	}

	console.log(game_type)
	console.log(game)
	check_login()
	gtype=game_type
	gme=game
	console.log('Setting up Dashboard...')
	var team1_name=document.getElementById('team1-name')
	var team1_score=document.getElementById('team1-score')
	
	var team2_name=document.getElementById('team2-name')
	var team2_score=document.getElementById('team2-score')

        var team1_balls=document.getElementById('team1-balls')
        var team2_balls=document.getElementById('team2-balls')
        console.log(team1_balls)
	
	db=firebase.database().ref('live_scores/'+game_type+'/'+game)
	db.on('value',snap=>{
		console.log('Updating Values')
		team1_name.innerHTML=snap.val().team1_name
	      
		team2_name.innerHTML=snap.val().team2_name
                if(game_type=="cricket"){
                team1_score.innerHTML=snap.val().team1_score+"/"+snap.val().team1_wicket
                team2_score.innerHTML=snap.val().team2_score+"/"+snap.val().team2_wicket
                team1_balls.innerHTML=snap.val().team1_overs+"."+snap.val().team1_balls
                team2_balls.innerHTML=snap.val().team2_overs+"."+snap.val().team2_balls

                }
                else{
                team1_score.innerHTML=snap.val().team1_score
		team2_score.innerHTML=snap.val().team2_score
            }


	})
}

var addScore=function(team_no,score){
	var team1_score_add=document.getElementById('team1-score-add')
	var team2_score_add=document.getElementById('team2-score-add')

	if(team_no == 1){
		db.child('team1_score').once('value').then(function(snap) {
  		db.child('team1_score').set(score+snap.val())

})
	}
	else if(team_no == 2){
		db.child('team2_score').once('value').then(function(snap) {
  		db.child('team2_score').set(score+snap.val())

})

	}
}

var addWicket=function(team_no,score){
	//have to check for negative
        var team1_score_add=document.getElementById('team1-score-add')
        var team2_score_add=document.getElementById('team2-score-add')

        if(team_no == 1){
                db.child('team1_wicket').once('value').then(function(snap) {
                db.child('team1_wicket').set(score+snap.val())

})
        }
        else if(team_no == 2){
                db.child('team2_wicket').once('value').then(function(snap) {
                db.child('team2_wicket').set(score+snap.val())

})

        }
}

var addBall=function(team_no,score){
        //have to check for negative
        var team1_score_add=document.getElementById('team1-score-add')
        var team2_score_add=document.getElementById('team2-score-add')

        if(team_no == 1){
                db.child('team1_balls').once('value').then(function(snap) {
                	if((score == -1) && (snap.val() == 0)){
                		db.child('team1_balls').set(5)
                		db.child('team1_overs').once('value').then(function(ss){
                			db.child('team1_overs').set(ss.val() - 1 )
                		})

                	}
                	else if(snap.val()==5  && score ==1){
                		db.child('team1_balls').set(0)
                		db.child('team1_overs').once('value').then(function(ss){
                			db.child('team1_overs').set(ss.val() + 1 )
                		})

                	}
                	else{

                		db.child('team1_balls').set(score+snap.val())

                	
                	}
                

})
        }
        else if(team_no == 2){
                db.child('team2_balls').once('value').then(function(snap) {
                        if((score == -1) && (snap.val() == 0)){
                                db.child('team2_balls').set(5)
                                db.child('team2_overs').once('value').then(function(ss){
                                        db.child('team2_overs').set(ss.val() - 1 )
                                })

                        }
                        else if(snap.val()==5  && score ==1){
                                db.child('team2_balls').set(0)
                                db.child('team2_overs').once('value').then(function(ss){
                                        db.child('team2_overs').set(ss.val() + 1 )
                                })

                        }
                        else{

                                db.child('team2_balls').set(score+snap.val())

                        
                        }
                

})
        }
}



var end_game=function(){
	console.log('Ending Game...')
	var db_match=firebase.database().ref().child('match_records')
	db.once('value').then(function(snap){
		db_match.child(gtype+"/"+gme).set(snap.val())
	})
	console.log('Data copied')
	db.remove()
	console.log('Live Game removed')
        window.open('live_score_selector','_self')


}