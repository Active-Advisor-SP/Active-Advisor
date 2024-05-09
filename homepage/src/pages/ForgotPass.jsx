import { useState, useCallback } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../config/firebase";

const ForgotPass = ()=>{

    const [email, setEmail] = useState("");

    const handleSubmit = useCallback((e) =>{
        e.preventDefault();
    
        if( !email ){
          return;
        }
        sendPasswordResetEmail(auth, email)
        .then(() => {
          alert('Please check your email to reset the password!');
        })
        .catch((e) =>{
          console.log(e);
        });
      }, [email]);

    return (
        <div>
            <h1>Forgot Password</h1>
            <form onSubmit={handleSubmit}>
                <input 
                type="email" 
                placeholder="Enter your e-mail"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)} />
                <input type="submit" value="Send reset password email" />
            </form>
        </div>
    )
}

export default ForgotPass;