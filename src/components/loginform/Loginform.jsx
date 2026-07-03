import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userslice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



const Loginform = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const provider = new GoogleAuthProvider();


async function onsubmit(e) {
    e.preventDefault();

    try{
        const result = await signInWithEmailAndPassword(auth,email,password);
        console.log(result);

        const userdata={
            uid:result.user.uid,
            displayName:result.user.displayName,
            email:result.user.email,
            photoURL:result.user.photoURL,
        };

        dispatch(setUser(userdata));
        localStorage.setItem("user",JSON.stringify(userdata));

        navigate("/");

    }catch(error){
        console.log(error);

        alert("Invalid email or password");
    }
}

async function googlelogin() {
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

        navigate("/");
    }

    catch(error){
        if(error.code === "Auth/user-not-found"){
            alert("User not found");
        }
        else if(error.code === "Auth/wrong-password"){
            alert("Wrong password");
        }
        else{
            alert("Something went wrong");
        }
        console.log(error);
    }
}

  return (
    <div className='h-screen w-full flex justify-center md:pt-3 p-5'>
        <div className='h-full md:h-[95vh] w-full md:w-[50vw] bg-white flex flex-col items-center rounded-2xl shadow-lg pt-15'>
            <div className='flex flex-col gap-2 md:pb-15 pb-13 items-center justify-center w-full'>
                <h1 className='font-medium md:text-4xl text-2xl'>Login to your account</h1>
                <p className='text-gray-500 md:text-lg text-sm md:text-center text-center'>Welcome back! Please enter your details to access your account.</p>
            </div>
            <div>
                <form className='flex flex-col gap-4' onSubmit={onsubmit}>
                    <div className='flex flex-col justify-start items-start gap-5'>
                        <div className='flex flex-col gap-2 w-full items-start'>
                            <span>Enter your email</span>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email' className='border border-gray-300 rounded-md p-2 w-full md:w-[680px]' />
                        </div>
                        <div className='flex flex-col gap-2 w-full items-start'>
                            <span>Enter your password</span>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' className='border border-gray-300 rounded-md p-2 w-full md:w-[680px]' />
                        </div>
                    </div>
                    <button type='submit' className='bg-[#0d122e] text-white p-2 rounded-md w-full md:w-[680px] flex items-center gap-2 justify-center mt-8'>Login <i className="ri-arrow-right-line flex justify-center items-center"></i></button>

                    <div className='flex items-center justify-center text-gray-500 font-medium'>
                        <span className="font-medium">or continue with</span>
                    </div>

                    <button onClick={googlelogin} className='bg-[#ffffff] text-black p-2 rounded-md w-full md:w-[680px] flex justify-center items-center gap-2 border border-gray-300'><img className="h-5 w-5" src="https://imgs.search.brave.com/sHOxmdVOu5shNRgoWuLey9HkJde5DNmTl6Vpd0D2PaM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjIv/NDg0LzUwMy9zbWFs/bC9nb29nbGUtbGVu/cy1pY29uLWxvZ28t/c3ltYm9sLWZyZWUt/cG5nLnBuZw" alt="" />Continue with Google</button>

                    <span className='flex justify-center gap-3 text-gray-500 font-medium'>New users will be registered automatically</span>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Loginform