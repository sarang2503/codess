import { Injectable } from '@angular/core';
import { getDoc, getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import { AuthService } from '../services/auth.service';
import { getDocs,doc } from "firebase/firestore"; 
import { Snippet } from '../../component/snippet';



@Injectable({
  providedIn: 'root'
})
export class DbService {
  private db?:any
  constructor(public authservice:AuthService) { 
    this.db=getFirestore();
  }
async createSnip(snippet:Snippet){

      try {
        const docRef = await addDoc(collection(this.db, "snippets"), {
          ...snippet,
          by:this.authservice.getuid()
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

async getAllSnip(){
      let result:any[]=[]
      const querySnapshot = await getDocs(collection(this.db, "snippets"));
      querySnapshot.forEach((doc) => {
        result.push({ id: doc.id, ...doc.data() });
      });
      return result
      }

async getSnippetById(docId:string){

const docRef = doc(this.db, "snippets",docId);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  return docSnap.data()
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
  return {id:"]",
  title:"not found",code:"not found"}
}
}

}
