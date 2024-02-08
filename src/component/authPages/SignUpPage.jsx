import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";
import {signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import {auth, googleProvider } from "../../config/firebase"
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
    
    const { register, handleSubmit } = useForm();

    const createUser = async (d)=>{
        try{
            var userResponse = await fetch(`https://schedule-notification.vercel.app/api/createUser`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...d}),
            });

            userResponse = await userResponse.json();
            console.log(userResponse);
            if(userResponse.success === false){
              alert(userResponse.message);
            }
            else{
              navigate("/main")
            }
           
        }
        catch(err){
            console.log(err,"message",err.message);
            alert(err.message);
        }
    }
    const clickFun = async ()=>{
        try{
          var response = await signInWithPopup(auth, googleProvider);
          // const credential = GoogleAuthProvider.credentialFromResult(response);
          // const token = credential.accessToken;
          // // The signed-in user info.
          // const user = response.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...

          // response = response.json();
          console.log(response);
    } catch (err){
      console.error(err);
      alert(err.message)
    }
    }

    const navigate = useNavigate();
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          if (user) {
            // User is authenticated, redirect to home page if not already there
            if (window.location.pathname !== "/main") {
              navigate("/main");
            }
          } else {
            // User is not authenticated, redirect to login page
            navigate("/signup");
          }
        });
      
        return () => unsubscribe(); // Cleanup on unmount
      }, []);

  return (
    <div className='h-screen bg-cyan-600'>
      <div className="flex w-screen flex-wrap text-slate-800">
  <div className="md:mt-4 flex w-full flex-col md:w-1/2 justify-center mx-auto">
    
    <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
      <p className="text-center text-3xl font-bold md:text-left md:leading-tight">Create your free account</p>
      <p className="mt-6 text-center font-medium md:text-left">
        Already Sign Up?
        <a href="login" className="whitespace-nowrap font-semibold text-teal-700 pl-3">Log In here</a>
      </p>
      <button onClick={clickFun} className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition hover:border-transparent hover:bg-black hover:text-white focus:ring-2"><div className="mr-2 h-5"><FcGoogle/></div> Get started with Google</button>
      <div className="relative mt-8 flex h-px place-items-center bg-teal-300">
        <div className="absolute left-1/2 h-6 -translate-x-1/2 bg-teal-300 px-4 text-center text-sm text-gray-500">Or use email instead</div>
      </div>
      <form onSubmit={handleSubmit(createUser)} className="flex flex-col items-stretch pt-3 md:pt-8">
        <div className="flex flex-col pt-4">
          <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
            <input {...register("email")} type="email" id="login-email" className="w-full  flex-shrink appearance-none border-teal-300 bg-teal-300 py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Email" />
          </div>
        </div>
        <div className="mb-4 flex flex-col pt-4">
          <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
            <input {...register("password")} type="password" id="login-password" className="w-full flex-shrink appearance-none border-teal-300 bg-teal-300 py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password (minimum 8 characters)" />
          </div>
        </div>
        
        <button type="submit" className="mt-6 rounded-lg bg-teal-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-teal-700 focus:ring-2 md:w-32">Sign in</button>
      </form>
    </div>
  </div>
</div>

    </div>
  )
}

export default SignUpPage
