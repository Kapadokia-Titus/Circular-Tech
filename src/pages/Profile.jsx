import React from 'react'
import { auth } from '../config/firebaseConfig'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useGlobalContext } from '../Context'
import { useNavigate } from 'react-router-dom'
import Add from '../assets/img/man.png'
const Profile = () => {
    const {customers, loading} = useGlobalContext()
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const descriptions = customers.filter(customer=>customer.username ===user?.displayName)
    console.log(descriptions)
    if(!user){
        navigate("/")
        alert("You are not logged in")
        return;
    }
    if(!descriptions){
        navigate("/")
        alert("not a customer")
        return;
    }
    
  return (
    <div>
    {loading && <h1 className="text-4xl text-center font-bold">loading...</h1>}
    
    <section className="pt-16 bg-blueGray-50">
    <div className="w-full lg:w-4/12 px-4 mx-auto">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img alt="..." src={Add} className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"/>
              </div>
            </div>
            <div className="w-full px-4 text-center mt-20">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    22
                  </span>
                  <span className="text-sm text-blueGray-400">Friends</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    10
                  </span>
                  <span className="text-sm text-blueGray-400">Photos</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    89
                  </span>
                  <span className="text-sm text-blueGray-400">Comments</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
             {user?.displayName}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
              Mombasa
            </div>
            <div className="mb-2 text-blueGray-600 mt-10">
              <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
              Solution Manager - Creative Tim Officer
            </div>
            <div className="mb-2 text-blueGray-600">
              <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
              University of Computer Science
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio animi nisi quisquam aspernatur? Perferendis, eveniet veritatis ea sapiente maiores in.
                </p>
                <a href="javascript:void(0);" className="font-normal text-pink-500">
                  Show more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className="relative  pt-8 pb-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-6/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              
            </div>
          </div>
        </div>
      </div>
      <h1 className='text-2xl text-center font-bold'>Your posts</h1>
      <div className="grid place-items-center md:grid-cols-2 md:mx-60">
      {!descriptions?<h2>You have no posts</h2>:descriptions.map(item=>{
      return(<div className="rounded shadow-[#B95E09] shadow-lg w-[400px] m-4" key={item.id}>
          <img src={item.imageUrl} className="h-[100px]"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">{item.title}</div>
            <p className="text-gray-700 text-base">
           {item.description}
           </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Reuse
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Recycle
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Reduce
            </span>
          </div>
        </div>)})}
        </div>
        
    </footer>
    </section></div>
  )
}

export default Profile