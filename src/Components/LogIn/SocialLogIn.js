import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const auth = getAuth();
const SocialLogIn = () => {
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn =() =>{
        signInWithPopup(auth, provider)
        .then(result =>{
         const user = result.user;
         console.log(user);    
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}><FcGoogle></FcGoogle><span>Google Log In</span></button>
        </div>
    );
};

export default SocialLogIn;