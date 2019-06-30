var fill_table=function(game_type){
	console.log('Filling Table')
	console.log(game_type)
	var result_id=document.getElementById("result-table")
	db_results=firebase.database().ref("match_records/"+game_type+"/")
             db_results.once('value').then(function(snap){
		var html_text=""
		if(game_type=="athletics"){
                        var table_header="<tr><th>Date</th><th>Event Name</th><th>First </th><th>Branch</th><th>Second </th><th>Branch</th><th>Third</th><th>Branch</th></tr>"

                        var table_contents=""
                        var games=Object.keys(snap.val())
                        games.forEach(function(game){
                                console.log(game)
                                var event_name=snap.val()[game].event_name
                                var first=snap.val()[game].first
                                var b1=snap.val()[game].b1
                                var second=snap.val()[game].second
                                var b2=snap.val()[game].b2
                                var third=snap.val()[game].third
                                var b3=snap.val()[game].b3
                                var date=snap.val()[game].date




                                var table_row="<tr><td>"+date+"</td><td>"+event_name+"</td><td>"+first+"</td><td>"+b1+"</td><td>"+second+"</td><td>"+b2+"</td><td>"+third+"</td><td>"+b3+"</td></tr>"

                                table_contents=table_contents+table_row

                        })
                        result_id.innerHTML=table_header+table_contents       	     

		}
		else if(game_type=="cricket"){

		        var table_header="<tr><th>Stage</th><th>Date</th><th>Started At</th><th>Team 1</th><th>Team 2</th><th>Team 1 Runs</th><th>Team 1 Wickets</th><th>Team 2 Runs</th><th>Team 2 Wickets</th><th>Winner/Result</th></tr>"

                        var table_contents=""
                        var games=Object.keys(snap.val())
                        games.forEach(function(game){
                                console.log(game)
                                var team1_name=snap.val()[game].team1_name
                                var team2_name=snap.val()[game].team2_name
                                var team1_score=snap.val()[game].team1_score
                                var team2_score=snap.val()[game].team2_score
                                var team1_wicket=snap.val()[game].team1_wicket
                                var team2_wicket=snap.val()[game].team2_wicket
                                var date=snap.val()[game].date

                                var started=snap.val()[game].time
                                var game_stage=snap.val()[game].game_stage
                                var winner=""
                                if(team1_score>team2_score){
                                        winner=team1_name
                                }
                                else if(team1_score<team2_score){
                                        winner=team2_name
                                }
                                else{
                                        winner="draw"
                                }

                                var table_row="<tr><td>"+game_stage+"</td><td>"+date+"</td><td>"+started+"</td><td>"+team1_name+"</td><td>"+team2_name+"</td><td>"+team1_score+"</td><td>"+team1_wicket+"</td><td>"+team2_score+"</td><td>"+team2_wicket+"</td><td>"+winner+"</td></tr>"

                                table_contents=table_contents+table_row

                        })
                        result_id.innerHTML=table_header+table_contents

			}
		else{
			var table_header="<tr><th>Stage</th><th>Date</th><th>Started At</th><th>Team 1</th><th>Team 2</th><th>Team 1 Score</th><th>Team 2 Score</th><th>Winner/Result</th></tr>"

			var table_contents=""
			var games=Object.keys(snap.val())
			games.forEach(function(game){
				console.log(game)
				var team1_name=snap.val()[game].team1_name
				var team2_name=snap.val()[game].team2_name
				var team1_score=snap.val()[game].team1_score
				var team2_score=snap.val()[game].team2_score
				var date=snap.val()[game].date

				var started=snap.val()[game].time
				var game_stage=snap.val()[game].game_stage
				var winner=""
				if(team1_score>team2_score){
					winner=team1_name
				}
				else if(team1_score<team2_score){
					winner=team2_name
				}
				else{
					winner="draw"
				}

				var table_row="<tr><td>"+game_stage+"</td><td>"+date+"</td><td>"+started+"</td><td>"+team1_name+"</td><td>"+team2_name+"</td><td>"+team1_score+"</td><td>"+team2_score+"</td><td>"+winner+"</td></tr>"

				table_contents=table_contents+table_row

			})
			result_id.innerHTML=table_header+table_contents
		}
		


	})
        .catch(function(){
                result_id.innerHTML="<tr><th>Oops! No matches are completed yet :(  Check livescores if the match is still on.</th></tr>"
        })
}