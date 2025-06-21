import { User } from "../models/user_models.js"; // Make sure your model export uses: export const User = ...
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Expense } from "../models/expense.models.js";

export const register = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    if (!fullname || !email || !password) {
      return res.status(400).json({
        message: "All fields are required.",
        success: false,
      });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message: "User already exists with this email.",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // ✅ ADD await here!

    await User.create({
      fullname,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "Account created successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", success: false });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required.",
        success: false,
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Incorrect email or password.",
        success: false,
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect email or password.",
        success: false,
      });
    }

    const tokenData = { userId: user._id };

    const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        message: `Welcome back ${user.fullname}`,
        user: {
          _id: user._id,
          fullname: user.fullname,
          email: user.email,
          token:token
        },
        success: true,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", success: false });
  }
};

export const logout = async (req, res) => {
  try {
    return res
      .status(200)
      .cookie("token", "", { maxAge: 0 })
      .json({
        message: "User logged out successfully.",
        success: true,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Logout failed", success: false });
  }
};



export const removeExpense = async (req,res) =>{
  try{
     const expenseId = req.params.id;
     await Expense.findByIdAndDelete(expenseId);
     return res.status(200).json({
      message:"Expense removed.",
      success:true
     })
  } catch (error){
    console.log(error)
  }
}

