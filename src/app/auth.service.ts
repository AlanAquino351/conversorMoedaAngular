import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import {  AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //user: Observable<firebase.User>;
  authError:any

  constructor( public firebaseAuth:AngularFireAuth) {
    //this.user = firebaseAuth.authState;
   }

  loginWithEmail(email:string, senha:string){
    let thisService = this;
    thisService.authError = null;

    this.firebaseAuth.signInWithEmailAndPassword(email,senha)
    .then((res) => {
      console.log(res)
         console.log("usuário logado")
         localStorage.setItem(email, "usuário")
       }
    ).catch(function(error){
      console.log(error.menssage);
      alert("usuário ou senha inexistente")
      thisService.authError = error;

    })};






}
