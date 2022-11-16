import React from 'react';
import { useGlobalContext } from '../Context';
import { auth } from '../config/firebaseConfig';

const style = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  name: `absolute mt-[-4rem] text-gray-600 text-xs`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
};

const Message = () => {
    const {messages} = useGlobalContext()
  const messageClass = 
  messages.uid === auth.currentUser.uid
  ? `${style.sent}`
  : `${style.received}`

  return (
    <div>
      
      {messages &&
          messages.map((message) => (
            
            <div  key={message.id} className={`${style.message} ${messageClass}`}>
        <p className={style.name}>{message.name}</p>
        <p>{message.text}</p>
      </div>
          ))}
    </div>
  );
};

export default Message;