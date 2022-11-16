import React, { useState, useEffect ,useRef} from "react";
import { useContext } from "react";
import { auth, database } from "./config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { query, orderBy, onSnapshot } from "firebase/firestore";
import { set } from "react-hook-form";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //customers
  const postsRef = collection(database, "customers");

  const [customers, setCustomers] = useState([]);
  const [loading , setLoading] = useState(false)
  const getCustomers = async () => {
    const data = await getDocs(postsRef);
    setCustomers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    setLoading(true)
    getCustomers();
    setLoading(false)
  }, []);

  //technicians
  const [technicians, setTechnicians] = useState(
    JSON.parse(localStorage.getItem("technicians")) || []
  );
  const [category, setCategory] = useState([]);
  const techniciansCollectionRef = collection(database, "technicians");

  useEffect(() => {
    setLoading(true)
    const getTechnicians = async () => {
      const data = await getDocs(techniciansCollectionRef);
      setTechnicians(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setCategory(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      localStorage.setItem("technicians", JSON.stringify(technicians));
    };
    getTechnicians();
    setLoading(false)
  }, []);

  const [otherTechnicians, setOtherTechnicians] = useState([]);
  const handleOtherTechnicians = (id) => {
    const newArray = technicians.filter((technician) => technician.id !== id);
    setOtherTechnicians(newArray);
  };
  //checking
  const checkingTechnician = (id) => {
    const checking = customers.filter((item) => item.id === id);
    if (checked) {
      alert("alread signed in as a customer");
      navigate("/");
    }
  };
  const checkingCustomer = (id) => {
    const checkingTechnician = technicians.filter((item) => item.id === id);
    if (checked) {
      alert("alread signed in as a customer");
      navigate("/");
    }
  };

  //technicians by what they repair

  
  const handleTechnicianCategory = (data) => {
    setCategory([technicians])
    let techCategory = [];
    for (let i = 0; i < technicians.length; i++) {
      const object = technicians[i];
      for (let j = 0; j < object.products.length; j++) {
        if (object.products[j] === data) {
          techCategory.push(object);
        }
      }
    }
    setCategory(techCategory);
   
  };

  //technicians by location
  
  const handleTechniciansLocation = (data) => {
    setCategory([technicians])
    const techLocations = technicians.filter(
      (item) => item.shopLocation === data
    );

    setCategory(techLocations);
  };

  //sidebar and navbar
  const [sideBar, setSideBar] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleSideBar = () => {
    setSideBar((prevSideBar) => !prevSideBar);
    setHidden((prevHidden) => !prevHidden);
  };
  //current user
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    
    });
    return () => {
      unsub;
    };
  }, []);

  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(database, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);
  const handleAllTechnicians=()=>{
    setCategory([technicians])
  }

  return (
    <AppContext.Provider
      value={{
        postsRef,
        technicians,
        otherTechnicians,
        handleOtherTechnicians,
        customers,
        sideBar,
        handleSideBar,
        hidden,
        handleTechnicianCategory,
        handleTechniciansLocation,
        category,
        checkingTechnician,
        checkingCustomer,
        currentUser,
        messages,
        scroll,
        handleAllTechnicians,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
