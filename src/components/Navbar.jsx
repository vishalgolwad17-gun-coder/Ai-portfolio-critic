import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { auth } from '../firebase'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../store/slices/userslice'
import { logoutmanualUser } from '../store/slices/manualuserslice'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'



const Navbar = ({children}) => {

    const location = useLocation()

    const [showmenu,setShowmenu] = useState(false);

    const shownavbar = location.pathname !== "/Aianalysisdata"

    const user = useSelector((state) => state.user.user);
    const manualuser = useSelector((state) => state.manualuser.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        auth.signOut();
        dispatch(logoutUser());
        dispatch(logoutmanualUser());

        localStorage.removeItem("user");
        localStorage.removeItem("manualuser")
        localStorage.removeItem("report")
    }

    const handleHome = () => {
        navigate("/")

        localStorage.removeItem("report")
    }
  return (
    <>
    {shownavbar && (
 <div className="flex justify-between md:gap-3 gap-1 md:px-10 px-5 md:py-6 py-5 items-center bg-[#f6f7fd] sticky top-0 z-50 shadow-md w-full">
        <Link to="/" className='flex gap-2 items-center' onClick={handleHome}>
            <img className='md:h-8 h-7 w-7 md:w-8' src="https://imgs.search.brave.com/M7RqNvhP4KnU_XpJ037g3rOsS_baNxv3nOypnbnJGXI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjgv/MDgyLzM4MC9zbWFs/bC9hcnRpZmljaWFs/LWludGVsbGlnZW5j/ZS1kZXNpZ24tcG5n/LnBuZw" alt="" />
            <h1 className='font-bold text-lg md:text-xl md:flex-row'>Portfolio Critic <span className='text-blue-500'>AI</span></h1>
        </Link>
        <div className=' gap-2 md:gap-10 items-center hidden md:flex'>
            {!user && !manualuser && <Link to="/Login" className='font-medium text-md'>Login</Link>}
            {user && <button onClick={handleLogout} className='font-medium text-md cursor-pointer'>Logout</button>}
            {manualuser && <button onClick={handleLogout} className='font-medium text-md cursor-pointer'>Logout</button>}

            {!user && !manualuser && <Link to="/Signup" className='font-medium text-md bg-[#0d122e] text-white px-4 py-2 rounded-md flex items-center gap-3'>Sign Up <i className="ri-arrow-right-line text-md"></i></Link>}
            {user && <img src={user.photoURL} alt="" className='h-10 w-10 rounded-full cursor-pointer' />}
            {manualuser && <img src={manualuser.imgurl} alt="" className='h-10 w-10 rounded-full cursor-pointer' />}
        </div>
        <div onClick={() => setShowmenu(!showmenu)} className='md:hidden flex items-center gap-2'>
            {user && <img src={user.photoURL} alt="" className='h-8 w-8 rounded-full cursor-pointer' />}
            {manualuser && <img src={manualuser.imgurl} alt="" className='h-8 w-8 rounded-full cursor-pointer' />}
            {showmenu ? <i className="ri-close-line text-2xl cursor-pointer pr-3"></i> : <i className="ri-menu-line text-2xl cursor-pointer pr-3"></i>}
        </div>
        {showmenu && <div className='md:hidden h-fit w-[150px] bg-white fixed top-0 right-0 z-50 rounded-xl mt-19 shadow-2xl shadow-gray-400 flex flex-col gap-5 items-center justify-center p-5'>
                {!user && !manualuser && <Link to="/Login" className='font-medium text-md'>Login</Link>}
                {user && <button onClick={handleLogout} className='font-medium text-md cursor-pointer'>Logout</button>}
                {manualuser && <button onClick={handleLogout} className='font-medium text-md cursor-pointer'>Logout</button>}
                {!user && !manualuser && <Link to="/Signup" className='font-medium text-md bg-[#0d122e] text-white px-3 py-3 rounded-md flex items-center gap-3'>Sign Up <i className="ri-arrow-right-line text-md"></i></Link>}
        </div>}
    </div>
    )}
    {children}
    </>
  )
}

export default Navbar