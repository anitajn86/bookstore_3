import React, { useState } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";
import './Readbook.css'

function Readbook() {
  const [bookArray, setBookArray] = useState([]);

  const fetchData = async () => {
    try {
      const db = getDatabase(app);
      const dbRef = ref(db, "Title/Genre/Author");
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        setBookArray(Object.values(snapshot.val()));
      } else {
        alert("No data available");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="display-button-page">
      <div className="display-button">
        <button onClick={fetchData}>SHOW BOOKS</button>
        <ul>
          {bookArray.map((item, index) => (
            <li key={index}>
              {item.Title}: {item.Genre} :{item.Author}
            </li>
          ))}
        </ul>
        </div>
    </div>
  );
}

export default Readbook;