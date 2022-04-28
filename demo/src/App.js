// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
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
      data.docs.forEach((item) => {
        console.log(item.data());
        setQueryData((current) => {
          return [...current, item];
        });
      });
    });
  }, []);

  return (
    <>
      <ul key="userdatalist">
        {queryData.map((user, index) => {
          return (
            <li key={"userlistitem" + index}>
              DOC FROM FIRESTORE::: {user.id} ::: {JSON.stringify(user.data())}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
