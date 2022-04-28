// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzCyJmpwWVE11doZJCx1dotLwfc5SqHFA",
  authDomain: "team-demo-a32c6.firebaseapp.com",
  projectId: "team-demo-a32c6",
  storageBucket: "team-demo-a32c6.appspot.com",
  messagingSenderId: "389144772804",
  appId: "1:389144772804:web:398a765f8f036911a54991",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
function App() {
  const querySnapshot = getDocs(collection(db, "users")).then((data) => {
    return (
      <div className="App">
        <h1>
          {data.forEach((doc) => {
            return `${doc.id} :::: ${JSON.stringify(doc.data())}`;
          })}
        </h1>
      </div>
    );
  });
}

export default App;
