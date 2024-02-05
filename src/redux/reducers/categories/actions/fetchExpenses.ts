import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const fetchExpenses = createAsyncThunk(
    'categories/fetchExpenses',
    async (param:{uid:string}) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `http://127.0.0.1:5000/expenses/getAll?userId=${param.uid}&month=2`,
        headers: {}
    };      
      return axios.request(config).then((response) => response.data);
    
    }
  );
export default fetchExpenses;