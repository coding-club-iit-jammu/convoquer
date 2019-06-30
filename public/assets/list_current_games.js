window.onload=function(){
        check_login()
        console.log('Connecting to Database...')
        var live_score_ref=firebase.database().ref().child("live_scores")
        var games_list=document.getElementById("games-list")
        var cnt=0
        live_score_ref.on('value',snap=>{
                var html_list=""
                var game_types=Object.keys(snap.val())

                game_types.forEach(function(game_type){
                        html_list=html_list+"<h2>"+game_type+"</h2><ul>"
                        var games=Object.keys(snap.child(game_type).val())
                        games.forEach(function(game){
                        	
                                html_list=html_list+"<li><button id='"+(cnt++)+"' onclick=\"open_score_board('"+game_type+"','"+game+"')\">"+game+"</button></li>"
                        })
                        html_list=html_list+"</ul>"

                })

                games_list.innerHTML=html_list
        })
}

var open_score_board=function(game_type,game){
	var form = $('<form></form>');

    form.attr("method", "post");
    form.attr("action", 'scoreboard');


        var field1 = $('<input></input>');

        field1.attr("type", "hidden");
        field1.attr("name", 'game_type');
        field1.attr("value", game_type);

        form.append(field1);
        var field2 = $('<input></input>');

        field2.attr("type", "hidden");
        field2.attr("name", 'game');
        field2.attr("value", game);
        form.append(field2);
   
    $(document.body).append(form);
    form.submit()
}