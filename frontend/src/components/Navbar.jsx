import React from "react";
import Logo from "./shared/Logo";
import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import axios from "axios";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { PopoverContent } from "./ui/popover";

const Navbar = () => {
const {user} = useSelector(store=>store.auth);
const navigate = useNavigate();
const logoutHandler = async () => {
   localStorage.clear()
   navigate("/login")
}
  return (
    <div className="border-b border-gray-300">
        <div className="flex items-center justify-between max-w-7xl mx-auto h-20">
        <Logo />
      {
      user ? (
        <Popover>
          <PopoverTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png"/>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="w-25 h-18">
            <Button variant="link" onClick={logoutHandler} className="w-full justify-start text-left hover:no-underline">logout</Button>
          </PopoverContent>
        </Popover>
      ) : (
        <div className="flex items-center gap-2"> 
          <Link to="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link to="/signup">
            <Button>Signup</Button>
          </Link>
        </div>
      )}
        </div>
     
    </div>
  );
};

export default Navbar;
