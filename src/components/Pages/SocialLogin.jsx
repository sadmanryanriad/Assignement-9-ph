import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const {googleLogin} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleButton = ()=>{
        googleLogin()
        .then(()=>{
            toast.success("logged in successfully");
            navigate('/');
        })
        .catch(error=>{
            toast.success(error.message);
            console.log(error.message);
        })
    }

    return (
        <button onClick={handleButton} className="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
          <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-2xl">
            <FaGoogle></FaGoogle>
          </span>
          <span>Login with Google</span>
        </button>
    );
};

export default SocialLogin;