import React, { useState, useEffect, useRef } from 'react';
import Message from './Message';
import SendMessage from './SendMessage';

import { useGlobalContext } from '../Context';

const style = {
  main: `flex flex-col p-[10px]`,
};

const Chat = () => {
    const {messages, scroll} = useGlobalContext()


  return (
    <>
      <main className={style.main}>
      <Message/>
      </main>
     
      {/* Send Message Compoenent */}
      <SendMessage/>
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;