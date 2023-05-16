import React from 'react'
import PropTypes from "prop-types"

function Button({handleName, fullname}) {
  return (
    <div>
    <button onClick={()=>handleName(`my name is ${fullname}`)}> click </button>
</div>
  )
}
//prototypes:
Button.propTypes={
  handleName: PropTypes.func
}

export default Button