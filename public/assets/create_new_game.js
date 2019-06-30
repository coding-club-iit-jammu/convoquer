window.onload=check_login()

create_game=function(){
        console.log('Adding new game to database')
        var e = document.getElementById("game-type");
        var game_type=e.options[e.selectedIndex].value;

        e = document.getElementById("game-stage");
        var game_stage=e.value;

        e = document.getElementById("team1-name");
        var team1_name=e.options[e.selectedIndex].value;

        e = document.getElementById("team2-name");
        var team2_name=e.options[e.selectedIndex].value;

        //reference to database
        var db=firebase.database()

        var game_name

        var today = new Date()

        var t_date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()

        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

   if(game_type!="athletics"){
                console.log('Adding '+game_type)
                //additional details-timestamp
                game_name=team1_name+" vs "+team2_name+" "+game_stage
                db.ref('live_scores/'+game_type+'/'+game_name).set({
                        game_stage : game_stage,
                        team1_name : team1_name,
                        team2_name : team2_name, 
                        team1_score : 0,
                        team2_score : 0,
                        team1_wicket :0,
                        team2_wicket : 0,
                        date : t_date,
                        time : time,
                        team1_overs: 0,
                        team2_overs : 0,
                        team1_balls :0 ,
                        team2_balls : 0
                })
            }
        

   
        //window.alert('Game added')

        setTimeout(function(){
            console.log(game_type,game_name)
            open_score_board(game_type,game_name)
        },3000)




}

var open_score_board=function(game_type,game){
    console.log(game_type)
    if(game_type=="athletics"){
        window.open('athletics_score','_self')
    }
    else{
    //console.log(game_type,game)
    console.log('Opening Scoreboard')
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
}