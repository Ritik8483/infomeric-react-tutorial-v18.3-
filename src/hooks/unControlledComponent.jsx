import React, { useRef } from 'react'

const UncontrolledComponent = () => {
    const inputRef = useRef()
    const getValue=()=>{
        alert(inputRef.current.value)
    }
  return (
    <>UncontrolledComponent
    <input ref={inputRef} name='name' />
    <button onClick={getValue} >Get Value</button>
    </>
  )
}

export default UncontrolledComponent

//State is managed by DOM,DOM controls the input value
//Uses ref to get the value
