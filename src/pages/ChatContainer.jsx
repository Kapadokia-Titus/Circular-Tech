import React from 'react';
import Chat from '../components/Chat';
import ChatNavbar from '../components/ChatNavbar';

import { auth } from '../config/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useGlobalContext } from '../Context';

const styles = {
  appContainer: `max-w-[728px] mx-auto text-center p-4`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
  main:`flex flex-col p-[10px] relative`
};

function App() {
    const {hidden} = useGlobalContext()
  const [user] = useAuthState(auth);
  //  console.log(user)
  return (
    <div className={styles.appContainer}>
    <section className={styles.sectionContainer}>
      <ChatNavbar/>
     {user? <Chat/>: null}
    </section>
  
  </div>
  );
}

export default App;