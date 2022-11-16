import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "../assets/img/optimal-electrical-logo.png";
import { NavLink } from "react-router-dom";
import { auth, provider } from "../config/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import RepairShop from "../pages/RepairShop";
import { useGlobalContext } from "../Context";

const Header = () => {
  const {hidden,customers,technicians} = useGlobalContext()
  //google login state
  const [user] = useAuthState(auth);

  const repairMan = technicians.find(item=>{
    return item.name === user?.displayName
  })
  
 
  //google logout
  const signUserOut = async () => {
    await signOut(auth);
  };

  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  };
  const handleclick = () => {
    setMenu(false);
  };

  const styles = {
    links:
      "text-lg hover:underline hover:text-[#B95E09] md:text-sm xl:text-lg hover:text-black  duration-1000 mx-5 my-6 md:my-0 cursor-pointer",
  };

  return (
    <header className={`${hidden?"hidden":""}  sticky z-[50] top-0 left-0 right-0 p-5 bg-[#F9F7F3]  shadow-sm`}>
      <nav className=" md:flex md:items-center md:justify-evenly">
        <div className="flex justify-between">
          <div className="flex items-center">
            <h2 className="font-bold text-xl cursor-pointer">Circular-Tech</h2>
            <img src={Image} alt="logo" className="ml-2 h-10 md:h-14 " />
          </div>
          <div>
            <span
              className="text-3xl cursor-pointer  md:hidden block "
              onClick={handleMenu}
            >
              {menu ? <AiOutlineClose /> : <AiOutlineMenu />}
            </span>
          </div>
        </div>
        <ul
          className={` bg-[#F9F7F3] w-full left-0 py-4 pl-7 absolute transition-all ease-in duration-200  ${
            menu ? "" : "hidden"
          } md:flex md:w-auto md:py-0 md:opacity-100 md:z-auto md:pl-0 md:items-center md:static`}
        >
          <li className={styles.links} onClick={handleclick}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={styles.links} onClick={handleclick}>
            <NavLink to="RepairShop"> Repair Shop</NavLink>
          </li>
         {user && <li className={styles.links} onClick={handleclick}>
            <NavLink to="Profile">Profile</NavLink>
          </li>}
          <li className={styles.links} onClick={handleclick}>
            <NavLink to="Contact">Contact</NavLink>
          </li>
         {repairMan && <li className={styles.links} onClick={handleclick}>
            <NavLink to="Customer">Customer</NavLink>
          </li>}

          {user && (
            <li className={styles.links} onClick={handleclick}>
              <NavLink to="Create">Post</NavLink>
            </li>
          )}
          {!user ? (
            <li className={styles.links} onClick={handleclick}>
              <NavLink to="Login" onClick={handleclick}>
                Log in
              </NavLink>
            </li>
          ) : (
            <li className={styles.links} onClick={signUserOut}>
              Sign Out
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
