window.onload=check_login()

var sign_out=function(){
        console.log('Attempt Signout')
        firebase.auth().signOut()
        attempt_login()
}

var attempt_login=function(){
        window.open('login',"_self")
}
var create_new_game=function(){
        window.open('create_new_game',"_self")
}