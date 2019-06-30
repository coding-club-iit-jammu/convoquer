var check_login=function(){

                //check if logged in
                firebase.auth().onAuthStateChanged(function(user){
                                        if(user){
                                                console.log(user)
                                                console.log('Authenticated')


                                                // document.getElementById('signout')
                                                //                 .setAttribute('style','display:display-inline; visibility:visible')          

                                                
                                        }
                                        else{
                                                console.log('Not Auth')
                                                attempt_login()
                                                
                         
                                                // document.getElementById('signout')
                                                //                 .setAttribute('style','display:none; visibility:hidden')                               

                                               
                                        }
                                })

        
}
var attempt_login=function(){
        window.open('login',"_self")
}