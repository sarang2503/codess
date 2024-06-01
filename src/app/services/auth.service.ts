import { Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {signInWithEmailAndPassword } from "firebase/auth";
import {signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private uid?:string
constructor(router:Router){

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
   this.uid = user.uid;
   console.log("currently loged in ",user.email)
  } else {
    this.uid=undefined
      console.log("loged out now")
  }
});
}
isauthenticated(){
  return this.uid?true:false
}
getuid(){
  return this.uid
}



        registerUser(email:string,password:string ){


                  const auth = getAuth();
                  createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                      const user = userCredential.user;
                      console.log(user)
                      
                      // ...
                    })
                    .catch((error) => {
                      const errorCode = error.code;
                      const errorMessage = error.message;
                      // ..
                    });

                  }


      login(email:string, password:string){

              const auth = getAuth();
              signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  const user = userCredential.user;
                  console.log(user.email)
                
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                });
              }

      LogOut(){

      const auth = getAuth();
      signOut(auth).then(() => {

      }).catch((error) => {
        // An error happened.
      });
      }






}



