import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input" 
import Logo from "./shared/Logo";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

export function InputDemo() {
  return <Input type="email" placeholder="Email" />
}


const Signup = () => {

  const [input, setInput] = useState({
    fullname:"",
    email:"",
    password:""
  });

  const navigate = useNavigate();

  const changehandler = (e) =>{
    setInput({...input, [e.target.name]:e.target.value})
  }

const submitHandler = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("http://localhost:8000/api/v1/user/register", input, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    });
    console.log(res);
    if (res.data.success) {
      toast.success(res.data.message);
      navigate("/login");
    }
  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong.");
  }
};



  return (
    <div className="flex items-center justify-center w-screen h-screen">
     
      <form onSubmit={submitHandler} className="w-96 p-8 shadow-lg">
      <div className="w-full flex justify-center mb-5">
        <Logo/> 
      </div>
        <div>
          <Label>Full Name</Label>
          <Input type="text" value={input.fullname} name="fullname" onChange={changehandler}/>

        </div>
        <div>
          <Label>Email</Label>
          <Input type="email" name="email" value={input.email} onChange={changehandler}/>
        </div>
        <div>
          <Label>Password</Label>
          <Input type="password" value={input.password} name="password" onChange={changehandler}/>
          
        </div>
        <Button className="w-full my-5">Signup</Button>
        <p className="text-sm text-center">Already have an account?<Link to="/login" className="text-blue-600">Login</Link></p>
      </form>
    </div>
  );
};

export default Signup;
