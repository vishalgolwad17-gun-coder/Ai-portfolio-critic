
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth'
import { auth } from '../../firebase'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from '../../store/slices/userslice'
import { useSelector } from 'react-redux'

import {createUserWithEmailAndPassword,updateProfile} from "firebase/auth";


const Signup = () => {

    const dispatch = useDispatch();

    const user = useSelector((state) => state.user.user);
    
    const navigate = useNavigate();
    
    const [name, setName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const provider = new GoogleAuthProvider();

    async function googlelogin(){
        try{
            const result = await signInWithPopup(auth,provider);

            console.log(result);

            const userData = {
                uid: result.user.uid,
                displayName: result.user.displayName,
                email: result.user.email,
                photoURL: result.user.photoURL,
            };

            dispatch(setUser(userData));
            localStorage.setItem("user",JSON.stringify(userData));
            
        }
        catch(error){
            if(error.code === "auth/account-exists-with-different-credential"){
   alert("This email is already registered with Email/Password. Please login using Email/Password.");
}
            console.log(error);
        }
    }

    useEffect(() => {
        if(user){
            navigate("/");
        }
    },[user]);

    async function onsubmit(e) {
        e.preventDefault();

        try{
            const result = await createUserWithEmailAndPassword(auth,email,password);
            console.log(result);

           await updateProfile(result.user, {
            displayName: name,
            photoURL: "https://imgs.search.brave.com/MNvG8uZqqBODQ0N6z3tg_oqQLNaRUNV23BuYOCtmWKc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTEv/ODc3Lzc1MS9zbWFs/bC91c2VyLWljb24t/cHJvZmlsZS1sb2dp/bi1pY29uLWFjY291/bnQtc2lnbi11cC1z/aWduLXdlYi1pY29u/LWFjY2Vzcy1hdXRo/ZW50aWNhdGlvbi1p/Y29uLXdlYnNpdGUt/Y29udGFjdC1pY29u/LWZyZWUtdmVjdG9y/LmpwZw",
           });

           const userdata={
                uid:result.user.uid,
                displayName:name,
                email:result.user.email,
                photoURL:"https://imgs.search.brave.com/MNvG8uZqqBODQ0N6z3tg_oqQLNaRUNV23BuYOCtmWKc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTEv/ODc3Lzc1MS9zbWFs/bC91c2VyLWljb24t/cHJvZmlsZS1sb2dp/bi1pY29uLWFjY291/bnQtc2lnbi11cC1z/aWduLXdlYi1pY29u/LWFjY2Vzcy1hdXRo/ZW50aWNhdGlvbi1p/Y29uLXdlYnNpdGUt/Y29udGFjdC1pY29u/LWZyZWUtdmVjdG9y/LmpwZw"
            };

            dispatch(setUser(userdata));
            localStorage.setItem("user",JSON.stringify(userdata));

            navigate("/");

        }catch(error){
            if(error.code === "auth/email-already-in-use"){
                alert("Email already in use");
            }
            console.log(error);
        }
    }

  return (

    <>
    <div className='flex flex-col justify-center items-center gap-10 h-screen w-full md:p-0 pt-15 pl-5 pr-5 '>
        <div className='flex flex-col justify-center items-center gap-10 md:h-[95vh] h-screen w-full md:w-1/2 bg-white rounded-3xl shadow-xl shadow-gray-400 md:p-0 p-7'>
        <div className='flex flex-col gap-2 justify-center items-center'>
        <h1 className='md:text-4xl text-2xl font-medium'>Create Your Account</h1>
        <p className='md:text-xl text-md font-normal text-gray-500'>Start analyzing your portfolio with AI today</p>
        </div>
        <div className='flex justify-center items-start w-full'>
            <form onSubmit={onsubmit} className='flex flex-col gap-8 w-full items-center'>
                <div className='flex flex-col gap-2 w-full items-center'>
                <span className='font-medium text-md text-start w-full ml-21'>Enter Your Name</span>
                <input type="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your full name' className='border border-gray-300 rounded-md p-2 w-full md:w-[680px]' required/>
                </div>
                <div className='flex flex-col gap-2 w-full items-center'>
                <span className='font-medium text-md text-start w-full ml-21'>Enter Your Email</span>
                <input type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder='Enter your email' className='border border-gray-300 rounded-md p-2 w-full md:w-[680px]' required/>
                </div>
                <div className='flex flex-col gap-2 w-full items-center'>
                <span className='font-medium text-md text-start w-full ml-21'>Enter Your Password</span>
                <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder='Enter your password' className='border border-gray-300 rounded-md p-2 w-full md:w-[680px]' required/>
                </div>
                <div className='flex flex-col gap-4'>
                <button type="submit" className='bg-[#0d122e] text-white p-2 rounded-md w-full md:w-[680px] flex items-center gap-2 justify-center'>Sign Up <i className="ri-arrow-right-line flex justify-center items-center"></i></button>
                <div className='flex items-center justify-center text-gray-400'>
                    <span>or continue with</span>
                </div>
                <button onClick={googlelogin} className='bg-[#ffffff] text-black p-2 rounded-md w-full md:w-[680px] flex justify-center items-center gap-2 border border-gray-300'><img className="h-5 w-5" src="https://imgs.search.brave.com/sHOxmdVOu5shNRgoWuLey9HkJde5DNmTl6Vpd0D2PaM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjIv/NDg0LzUwMy9zbWFs/bC9nb29nbGUtbGVu/cy1pY29uLWxvZ28t/c3ltYm9sLWZyZWUt/cG5nLnBuZw" alt="" />Continue with Google</button>
                <p className='flex justify-center gap-3'>Already have an account? <Link to="/Login" className='text-blue-500'>Login</Link></p>
                </div>
            </form>
        </div>
        </div>
    </div>
    </>
  )
}

export default Signup