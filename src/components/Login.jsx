import Form from "./Form";
import {Link} from "react-router-dom";
function Login(){
    return(
    <div className='min-h-screen min-w-screen flex flex-col space-y-3 justify-center items-center bg-gradient-to-r from-purple-800 via-purple-500 to-purple-300' >
      <Form heading={"Login"} subheading={"Welcome back!"} confirmpwd={false}/>
      <p className="text-white selection:bg-purple-900">Don't have an account?<Link to="/Signup" className="pl-1 underline font-medium cursor-pointer hover:text-purple-800">Sign up</Link></p>

      </div>
      );
}

export default Login;