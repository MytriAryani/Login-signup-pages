import Form from "./Form";
import {Link} from "react-router-dom";

function Signup(){
    return(
        <div className='min-h-screen flex flex-col space-y-3 justify-center items-center bg-gradient-to-r from-purple-800 via-purple-500 to-purple-300' >
      <Form heading={"Sign Up"} subheading={"Join us!"} confirmpwd={true}/>
      <p className="text-white selection:bg-purple-900">Already have an account?<Link to="/" className="pl-1 underline font-medium cursor-pointer hover:text-purple-800">Login</Link></p>

      </div>
    );
}

export default Signup;