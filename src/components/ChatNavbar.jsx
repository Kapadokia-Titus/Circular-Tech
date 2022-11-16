import React from 'react'
const style = {
    nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
    heading: `text-white text-3xl`
}

const ChatNavbar = () => {
  return (
    <div className={style.nav}>
    <h1 className={style.heading}>Chat</h1>
    

  </div>
  )
}

export default ChatNavbar