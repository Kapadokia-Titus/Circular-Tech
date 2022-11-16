import React, { useState } from "react";
import { auth, provider } from "../config/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useGlobalContext } from "../Context";
import { addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { storage } from "../config/firebaseConfig";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { useEffect } from "react";

const Create = () => {
  const { postsRef, checkingTechnician } = useGlobalContext();

  const navigate = useNavigate();

  const [user] = useAuthState(auth);

  //upload image

  const allInputs = { imgUrl: "" };

  const [imageAsFile, setImageAsFile] = useState("");

  const [imageAsUrl, setImageAsUrl] = useState(allInputs);

  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile((imageFile) => image);
  };

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

  const schema = yup.object().shape({
    title: yup.string().required("You must add a title"),
    description: yup.string().required("You must add a description"),
    imageUrl: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onCreatePost = async (data) => {
    await addDoc(postsRef, {
      title: data.title,
      description: data.description,
      imageUrl: imageAsUrl.imgUrl,
      username: user?.displayName,
      id: user?.uid,
    });
    navigate("/Profile");
  };

  return (
    <div className="xl:mx-60 grid place-items-center mt-12 p-10">
      <form
        onSubmit={handleFireBaseUpload}
        className="grid place-items-center gap-2"
      >
        <label
          htmlFor="formFile"
          className="form-label inline-block text-center mb-2 text-black"
        >
          Submit your appliance image first then add the title and description
        </label>
        <input
          type="file"
          onChange={handleImageAsFile}
          className="form-control
            block
            w-ful
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
          Upload now
        </button>
      </form>
      <form
        onSubmit={handleSubmit(onCreatePost)}
        className="grid place-items-center gap-4 mt-12"
      >
        <input
          placeholder="title...."
          {...register("title")}
          className="border-2  border-solid border-[#B95E09]
          rounded w-full sm:w-[120px] md:w-[300px]"
        />
        <p className="text-red-800">{errors.title?.message}</p>
        <textarea
          placeholder="description..."
          {...register("description")}
          className="border-2 border-solid border-[#B95E09]"
        />
        <p className="text-red-800">{errors.description?.message}</p>
        <input
          type="submit"
          className="border-2 bg-[#B95E09] hover:bg-white text-black font-bold py-2 px-4 rounded"
          placeholder="post your appliance"
        />
      </form>
    </div>
  );
};

export default Create;
