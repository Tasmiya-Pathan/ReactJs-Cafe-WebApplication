import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, set,get ,update,remove } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyC5RxNhHcVfWfPh7sOIf3cpjVrbc3jWoik",
  authDomain: "cafettera-30a11.firebaseapp.com",
  databaseURL: "https://cafettera-30a11-default-rtdb.firebaseio.com",
  projectId: "cafettera-30a11",
  storageBucket: "cafettera-30a11.appspot.com",
  messagingSenderId: "122276878452",
  appId: "1:122276878452:web:fea15b67cfec1615909921"
};


export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export function register(phoneNumber, username, email,password){
    const dbb = getDatabase();
    set(ref(dbb, 'users/' + phoneNumber), {
      username: username,
      email: email,
      password:password,
      phoneNumber:phoneNumber
    });
    alert("Registration Successfull")
}





