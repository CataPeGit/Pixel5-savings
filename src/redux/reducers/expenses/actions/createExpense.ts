import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const createExpense = createAsyncThunk(
    'categories/createExpense',
    async (param:{uid:string,field:string,amount:number,title:string, description: string}) => {

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:5000/expenses',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : JSON.stringify({
                userId : param.uid,
                amount: param.amount,
                field: param.field,
                month: 2,
                title : param.title,
                description: param.description
            })
          };   
      return axios.request(config).then((response) => response.data);
    
    }
  );
export default createExpense;