import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../config/firebaseConfig'
import { AiOutlineLogout,AiOutlineLogin,AiOutlineClose,AiOutlineMobile,AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdOutlineComputer } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { CgSmartHomeRefrigerator} from "react-icons/cg";
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../Context';
const SideBar = () => {

    const navigate = useNavigate()
    const [user] = useAuthState(auth);
    const {sideBar, handleSideBar,handleTechnicianCategory,handleTechniciansLocation, handleAllTechnicians} = useGlobalContext();

  //google logout
  const handleClick=()=>{
    if(user){
       return signUserOut();
    }
    else{
        navigate("/Login");
    }
  }
  const signUserOut = async () => {
    await signOut(auth);
  };
  return (
    
    <div className={`${sideBar?"":"hidden"} min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800 lg:block`}>
      <div className="fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
        <div className="flex items-center justify-between h-14 border-b p-1">
          <div className="text-sm">Welcome{" "}{auth.currentUser?.displayName}</div>
          <span
              className="text-3xl cursor-pointer  md:hidden block  "
              onClick={handleSideBar}
              >
            
               <AiOutlineClose /> 
            </span>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">Menu</div>
              </div>
            </li>
            <li>
              <Link to="/" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Home</span>
              </Link>
            </li>
            <li>
              <Link href="Bids" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Inbox</span>
                <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">New</span>
              </Link>
            </li>
            <li>
              <Link to="/Chat" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Chats</span>
              </Link>
            </li>
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">Locations</div>
              </div>
            </li>
            <li>
              <button  onClick={()=>{handleTechniciansLocation("Tudor")}}  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
              <span className="inline-flex justify-center items-center ml-4">
                  <IoLocationOutline/>
                </span>
                
                <span className="ml-2 text-sm tracking-wide truncate">Tudor</span>
              </button>
            </li>
            <li>
              <button onClick={()=>{handleTechniciansLocation("Kiembeni")}}  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
              <span className="inline-flex justify-center items-center ml-4">
                  <IoLocationOutline/>
                </span>
             
                <span className="ml-2 text-sm tracking-wide truncate">Kiembeni</span>
              </button>
            </li>
            <li>
              <button onClick={()=>{handleTechniciansLocation("Likoni")}} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6" >
              <span className="inline-flex justify-center items-center ml-4">
                  <IoLocationOutline/>
                </span>
                
                <span className="ml-2 text-sm tracking-wide truncate">Likoni</span>
              </button>
            </li>
            <li>
              <button onClick={()=>{handleTechniciansLocation("Nyali")}} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6" >
              <span className="inline-flex justify-center items-center ml-4">
                  <IoLocationOutline/>
                </span>
                
                <span className="ml-2 text-sm tracking-wide truncate">Nyali</span>
              </button>
            </li>
           
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">Categories</div>
              </div>
            </li>
            <li>
              <button  onClick={()=>{handleTechnicianCategory("computer")}}  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <MdOutlineComputer/>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Computers</span>
              </button>
            </li>
            <li>
              <button onClick={()=>{handleTechnicianCategory("television")}}  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <AiOutlineFundProjectionScreen/>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Television</span>
              </button>
            </li>
            <li>
              <button onClick={()=>{handleTechnicianCategory("refrigerator")}} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6" >
                <span className="inline-flex justify-center items-center ml-4">
                  <CgSmartHomeRefrigerator/>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Refrigerators</span>
              </button>
            </li>
            <li>
              <button onClick={()=>{handleTechnicianCategory("mobile phones")}} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6" >
                <span className="inline-flex justify-center items-center ml-4">
                  <AiOutlineMobile/>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Mobile Phones</span>
              </button>
            </li>
            <li>
              <button onClick={handleAllTechnicians} className="hidden relative  flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">All</span>
                
              </button>
            </li>
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">Settings</div>
              </div>
            </li>
           {user && <li>
              <Link to="/Profile" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Profile</span>
              </Link>
            </li>}
           
            <li>
              <button onClick={handleClick} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  {user? <AiOutlineLogout/> : <AiOutlineLogin/>}
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">{user?"Log out" : "Log in"}</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar