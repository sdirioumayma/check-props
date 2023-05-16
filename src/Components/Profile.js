import React from 'react'
import PropTypes from "prop-types"

function Profile({fullname, bio, profession, children}) {
  return (
    <div style={{color:'green'}}>
      <h1> {fullname}</h1>
       {children}
      <p> {bio}</p>
      <p> {profession}</p>
    

     </div>
  )
}
//prototypes:
Profile.propTypes = {
  name: PropTypes.string,
  familyName: PropTypes.string,
 };
 // defining default props:
 Profile.defaultProps={
  bio:""
 }

export default Profile