var glogin_button=document.getElementById('glogin')

console.log(glogin_button)
window.onload=function(){
                //check if logged in
                firebase.auth().onAuthStateChanged(function(user){
                                        if(user){
                                                console.log(user)
                                                console.log('Authenticated')
                                                document.getElementById('glogin')
                                                                .setAttribute('style','display:none; visibility:hidden')   

                                                // document.getElementById('signout')
                                                //                 .setAttribute('style','display:display-inline; visibility:visible')          
                                                proceed()
                                                
                                        }
                                        else{
                                                console.log('Not Auth')
                                                document.getElementById('glogin')
                                                                .setAttribute('style','display:display-inline; visibility:visible')     

                         
                                                // document.getElementById('signout')
                                                //                 .setAttribute('style','display:none; visibility:hidden')                               

                                               
                                        }
                                })

        
}
var sign_in_with_google=function(){


        var gauth=new firebase.auth.GoogleAuthProvider
        firebase.auth().signInWithPopup(gauth)
                        .then( function(data){

                                console.log(data)
                                var idToken=data.credential.idToken
                                localStorage.setItem('firebase_idToken',idToken)
                                proceed()
                                
                        })
                        .catch( function(error){
                                console.log(error)
                        })
}

var sign_out=function(){
        firebase.auth().signOut()
}

var proceed=function(){
        window.open('live_score_selector',"_self")
}