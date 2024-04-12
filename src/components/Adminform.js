import React, { useState } from 'react';
import { getDatabase, ref, set, push } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
import app from '../firebaseConfig';
import './Form.css';
import Button from '@mui/material/Button';

function AdminForm() {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); // State to track login status
  
  const navigate = useNavigate()



  const subscribe = async () => {
    const db = getDatabase(app);
    const newDocRef = push(ref(db, 'Name/Position/Password'));
    set(newDocRef, {
      Name: inputValue1,
      Position: inputValue2,
      Password: inputValue3
    })
      .then(() => {
        alert('Details saved successfully');
        setLoggedIn(true); // Set login status to true upon successful login
        navigate("/settings")

      })
      .catch((error) => {
        console.log("error", error)
        alert('Error:', error);
      });
  };

  // If logged in, redirect to "/home"

  // if (loggedIn) {
  //   navigate("/home")
  // }

  return (
    <div className="Login-form">
      <div className="inputs">
        <div className='input1'>
          NAME
            <div>
              <input
                type="text"
                value={inputValue1}
                onChange={(e) => setInputValue1(e.target.value)}
              />
            </div>
        </div>

        <div className='input2'>
          POSITION
            <div>
              <input
                type="text"
                value={inputValue2}
                onChange={(e) => setInputValue2(e.target.value)}
              />
            </div>
        </div>

        <div className='input3'>
          PASSWORD
           <div>
            <input
              type="text"
              value={inputValue3}
              onChange={(e) => setInputValue3(e.target.value)}
            />
           </div>
            {' '}
          <br />
        </div>

        {/* <button onClick={subscribe} onChange={navigate}>LOGIN</button> */}
        <Button onClick={subscribe} variant="outlined">LOG INTO YOUR ACCOUNT</Button>
      </div>
      <div className='about-store'>
          THANK YOU FOR CHOOSING TO WORK WITH US
      </div>
    </div>
  );
}

export default AdminForm;
