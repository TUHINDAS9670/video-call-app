import React from 'react'
import { IoCallSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


const ChatButton = () => {
  const navigate=useNavigate();
  const handleCall=()=>{
    navigate("/call")
  }
  return (

    
    <div className='fixed bottom-4 right-4'><button className='bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600  '>
      <IoCallSharp onClick={handleCall} className='w-6 h-6' />
      </button></div>
  )
}

export default ChatButton