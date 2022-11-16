
import React, { useEffect, useState } from "react";
import { auth, provider } from "../config/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

import { addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { storage } from "../config/firebaseConfig";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../config/firebaseConfig";
import { useGlobalContext } from "../Context";

const Registration = () => {

  const {checkingCustomer, customers, loading} = useGlobalContext()

  const navigate = useNavigate();

  const [user] = useAuthState(auth);

  if(!user){
    navigate("/Login")
    alert("not logged in")
    
    return;
  }
  const checking = customers.filter(item=>{
    item.username === user?.displayName
  })
  if(checking){
    navigate("/RepairShop")
    alert("You are a customer already")
    
    return;
  }
  //upload image

  const allInputs = { imgUrl: "" };
  const [product, setProduct] = useState([])
  const [imageAsFile, setImageAsFile] = useState("");

  const [imageAsUrl, setImageAsUrl] = useState(allInputs);

  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile((imageFile) => image);
  };
  const handleSelect=(e)=>{
    setProduct(prevProduct=>[...prevProduct,e.target.value])
    console.log(product)
  }

  const handleFireBaseUpload = (e) => {
    e.preventDefault();
    if (!imageAsFile) {
      alert("please upload the image first");
      return;
    }
    const imageRef = ref(storage, `images/${imageAsFile.name}`);
    uploadBytes(imageRef, imageAsFile).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageAsUrl((prevObject) => ({ ...prevObject, imgUrl: url }));
      });
    });
  };
  const [trial, setTrial] = useState([])
  const userCollectionRef = collection(database,"technicians")
  useEffect(()=>{
    const getRegistered= async()=>{
      const data = await getDocs(userCollectionRef)
      setTrial(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }
    getRegistered();
  },[])


console.log(trial)

const [description ,setDescription] = useState("")
const [shopName, setShopName]= useState("")
const [location, setLocation] = useState("")
const [first , setFirst] =useState("")
const [second , setSecond ] = useState("")
const handleSubmit=async(e)=>{
  e.preventDefault()
  await addDoc(userCollectionRef, {name:first +" "+ second,shopLocation:location, shop:shopName,imageUrl:imageAsUrl.imgUrl,products:product})
  navigate("/Customer")

}



  return (
    <div className="xl:mx-60 grid place-items-center mt-12 p-2">
      {loading && <h1 className="text-4xl text-center font-bold">loading...</h1>}
    <form
      onSubmit={handleFireBaseUpload}
      className="grid place-items-center gap-2"
    >
      <label
        htmlFor="formFile"
        className="form-label text-center mb-2 text-black"
      >
        REPAIR SHOP REGISTRATION FORM
      </label>
      <input
        type="file"
        onChange={handleImageAsFile}
        className="form-control
          block
          w-64
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-[#B95E09]
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="formFile"
      />
      <button className="bg-[#B95E09] hover:bg-white text-black font-bold py-2 px-4 rounded">
        Upload first
      </button>
    </form>
    <form
      onSubmit={handleSubmit}
      className="grid place-items-center gap-4 mt-12 p-2"
    >
       <div className= "flex flex-col">
       <input
        placeholder="Enter your first name.."
        
        className="border-2  border-solid border-[#B95E09]
        rounded w-48 sm:w-[120px] md:w-[300px] mb-4 h-10 "
        onChange={(e)=>{setFirst(e.target.value)}} required
      />
        <input
        placeholder="Enter your second name.."
        
        className="border-2  border-solid border-[#B95E09]
        rounded w-48 sm:w-[120px] md:w-[300px] mb-4 h-10  "
        onChange={(e)=>{setSecond(e.target.value)}}
      /> </div>
      <label className="mb-[-10px]">A little descrption</label>
      <textarea
        placeholder=" a little description about you....."
       
        className="border-2 border-solid border-[#B95E09] w-64 mb-10"
        onChange={(e)=>{setDescription(e.target.value)}}
      />
      <label className="mb-[-10px]">Your Shop location</label>
      <input
        placeholder="location...."
        
        className="border-2  border-solid border-[#B95E09]
        rounded w-full sm:w-[120px] md:w-[300px] mb-10"
        onChange={(e)=>{setLocation(e.target.value)}}
      />
      <label className="mb-[-10px]">Your Shop Name</label>
      <input
        placeholder="shop name...."
        
        className="border-2  border-solid border-[#B95E09]
        rounded w-full sm:w-[120px] md:w-[300px] mb-10"
        onChange={(e)=>{setShopName(e.target.value)}}
      />
    
      <label htmlFor="repairProducts" className="mb-[-10px]">What do you repair?</label>
      <select id="repairProducts"
      value={product} onChange={handleSelect}
      multiple={true} className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
        <option value="">-choose-</option>
        <option value="mobile phones">mobile phones</option>
        <option value="television">television</option>
        <option value="radio">radio</option>
        <option value="laptop">laptop</option>
        <option value="refrigerator">refrigerator</option>
        <option value="iron box">iron box</option>
        <option value="computer">computer</option>
      </select>
      <input
        type="submit"
        className="border-2 bg-[#B95E09] hover:bg-white text-black font-bold py-2 px-4 rounded"
        placeholder="post your appliance"
      />
    </form>
  </div>
    
  )
}

export default Registration