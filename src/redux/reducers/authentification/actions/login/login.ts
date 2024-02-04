 
import {auth} from "../../../../../firebase/initialiseApp"
import { signInWithEmailAndPassword } from "firebase/auth";
import { createAsyncThunk } from '@reduxjs/toolkit';

// const loginFunction = async (state: any,action: any) => {
//         const email:string = action.email;
//         const password:string = action.password;
//         const response = await signInWithEmailAndPassword(auth,email,password);
//         console.log(response);
// }


 const loginWithGoogle = createAsyncThunk(
        'authentification/loginWithGoogle',
        async (param:{email:string,password:string}) => {
          try {
            let email = param.email;
            const password= param.password;
            return signInWithEmailAndPassword(auth,email,password);
          } catch (error) {
            // Handle login error
            throw error;
          }
        }
      );
export default loginWithGoogle;