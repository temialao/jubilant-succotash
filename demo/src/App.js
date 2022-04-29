// Import the functions you need from the SDKs you need
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { db } from "./firebase";

import Map from "./components/Map";

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

  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };

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
      <Map location={location} zoomLevel={17}></Map>
    </>
  );
}

export default App;
