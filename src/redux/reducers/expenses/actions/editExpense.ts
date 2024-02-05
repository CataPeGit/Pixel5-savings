import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const editExpense = createAsyncThunk(
    'categories/editExpense',
    async (param:{id:string, title:string, amount:string, description:string}) => {

        let config = {
            method: 'patch',
            maxBodyLength: Infinity,
            url: `http://127.0.0.1:5000/expenses/?expenseId=${param.id}`,
            headers: { 
              'Content-Type': 'application/json'
            },
            data : {
                title: param.title,
                description: param.description,
                amount: parseInt(param.amount)
            }
          };
          
        
      return axios.request(config).then((response) => response.data);
    
    }
  );
export default editExpense;