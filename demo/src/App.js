// Import the functions you need from the SDKs you need
import { arrayRemove, getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import app from "./firebase";

const db = getFirestore(app);
function App() {
  const [queryData, setQueryData] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "users")).then((data) => {
      console.log("DATA", data);
      setQueryData(data);
    });
  }, []);

  console.log("QUERY", queryData);
  console.log("ARRAY", Array.isArray(queryData));
  // queryData.forEach((doc) => {
  //   console.log(`${doc.id} => ${doc.data()}`);
  // });

  return (
    <>
      <h1>TEST</h1>
      {queryData.map((doc) => {
        console.log(`DOC ID VALUE:::: ${JSON.stringify(doc.data())}`);
        ///
        return <h2>DOC ID:::{doc.id}</h2>;
        // return "SOMETHING";
      })}
    </>
  );

  // querySnapshot.then((data) => {
  //   data.forEach((doc) => {
  //     console.log(`${doc.id} :::: ${JSON.stringify(doc.data())}`);
  //   });
  // });
}

export default App;
