import React from 'react'

export default function MainButton(props) {
    const {text, func} = props
  return (
    <button className='bg-rose-700 px-5 py-3 rounded-md mt-5 boxShadow mx-auto mb-4'  onClick={func}>{text}</button>
  )
}
