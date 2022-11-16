import {ref, getDownloadURL, uploadBytes } from 'firebase/storage'
import React ,{useState}from 'react'
import { storage } from '../config/firebaseConfig'

const Images = () => {

    const allInputs = {imgUrl:""}

    const [imageAsFile, setImageAsFile]=useState('')

    const [imageAsUrl, setImageAsUrl] = useState(allInputs)

    const handleImageAsFile=(e)=>{
        const image = e.target.files[0]
        setImageAsFile(imageFile=>(image))
    }
   console.log(imageAsFile)

   const handleFireBaseUpload=(e)=>{
    e.preventDefault()
    if(!imageAsFile){
        alert("please upload an image and add the description,title")
        return;
    };
    const imageRef=ref(storage, `images/${imageAsFile.name}`)
    uploadBytes(imageRef, imageAsFile).then((snapshot)=>{
        getDownloadURL(snapshot.ref).then((url)=>{
            setImageAsUrl(prevObject=>({...prevObject,imgUrl:url}))
        })
        
    })

   
   }
   console.log(imageAsUrl)
  return (
    <div>
        <form onSubmit={handleFireBaseUpload}>
            <input type="file"
            onChange={handleImageAsFile}/>
            <button>Upload now</button>
        </form>
    </div>
  )
}

export default Images