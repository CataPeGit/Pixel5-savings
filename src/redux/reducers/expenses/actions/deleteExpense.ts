import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const deleteExpense = createAsyncThunk(
    'categories/deleteExpense',
    async (param:{id:string}) => {

      let config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: `http://127.0.0.1:5000/expenses?expenseId=${param.id}`,
        headers: { }
      };
        
      return axios.request(config).then((response) => response.data);
    
    }
  );
export default deleteExpense;