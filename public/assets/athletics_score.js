window.onload=function(){
	check_login()

}
var submit_score=function(){
	var event_name=document.getElementById("event-name").value 
	var first=document.getElementById("fp").value
	var second=document.getElementById("sp").value
	var third=document.getElementById("tp").value
	e = document.getElementById("branch-1");
    var b1=e.options[e.selectedIndex].value;
	e = document.getElementById("branch-2");
    var b2=e.options[e.selectedIndex].value;
	e = document.getElementById("branch-3");
    var b3=e.options[e.selectedIndex].value;
    var today = new Date()

        var t_date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()

        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

    db=firebase.database().ref("match_records/athletics/"+event_name+" "+time)
 	db.set({
 		event_name : event_name,
 		first : first,
 		second : second,
 		third : third,
 		b1 :b1,
 		b2 : b2,
 		b3 :b3,
 		time :time,
 		date :t_date

 	})


setTimeout(function(){
	window.open('live_score_selector','_self')},2000)
}
