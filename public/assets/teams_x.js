var fill_table=function(game_type){
        console.log('Filling Table')
        console.log(game_type)
        var html_text=""
        var result_id=document.getElementById("result-table")
        db_results=firebase.database().ref("teams/"+game_type+"/")
             db_results.once('value').then(function(snap){
                var data=snap.val()
                console.log(data)
                var branches=Object.keys(data)
                branches.forEach(function(branch){
                    var table_header="<tr><th>"+branch.toUpperCase()+"</th></tr>"
                    html_text=html_text+table_header
                    var member_keys=Object.keys(data[branch].team)
                    member_keys.forEach(function(member_key){
                        html_text=html_text+"<tr><td>"+data[branch].team[member_key]+"</td></tr>"
                    })
                })

                result_id.innerHTML=html_text
                
                

               

                


        })
        // .catch(function(){
        //         result_id.innerHTML="<tr><th>Oops! No teams.</th></tr>"
        // })
}