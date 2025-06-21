import { createSlice} from "@reduxjs/toolkit";
import { SettingsIcon } from "lucide-react";
// import { setLoading } from "./authSlice";

const expenseSlice = createSlice({
    name:"expense",
    initialState:{
        category:"",
        markAsDone:"", 
        expenses:[],
        singleExpense:null
    },
    reducers:{
        //actions
        setCategory:(state,action) =>{
            state.category = action.payload;
        },
        setMarkAsDone: (state,action)=>{
        state.markAsDone = action.payload;
    },
    setExpenses:(state,action) =>{
        state.expenses = action.payload
    },
    setSingleExpense:(state,action)=>{
        state.singleExpense = action.payload;
    }
    }
  
});
export const{
    setCategory,
    setMarkAsDone,
    setExpenses,
    setSingleExpense
} = expenseSlice.actions;

export default expenseSlice.reducer;