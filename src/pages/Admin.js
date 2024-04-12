import React from 'react'
import Adminform from '../components/Adminform'

//import { unstable_HistoryRouter } from 'react-router-dom'

const Admin = () => {
 // let history=unstable_HistoryRouter();

  return (
    <div>
      <Adminform />
      
      {/* <button onClick={()=>{
        history.push("/Adminpage");
      }}>
         GO TO ADMIN
      </button> */}
    </div>
  )
}

export default Admin
