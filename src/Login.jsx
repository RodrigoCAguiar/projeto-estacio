import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, banco } from "./services/firebase";
import Password from "./Password";
import Home from "../src/pages/Home";


function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleSignIn = async (e) => {

        try {
            await signInWithEmailAndPassword(email, password);
            if (user) {
                console.log('Success');
                navigate("/home");
            }
        } catch (error) {
            // Handle login error
            console.error(error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className="logo">
                <img src="./src/assets/estacio.png" alt="estacio-logo" />
            </div>

            <div className="auth-form-wrapper">

                <div className="auth-form-image">
                    <img src="./src/assets/Rectangle.png" alt="your-image" />
                </div>

                <div className="auth-form-container">
                    <h3>Login</h3>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <label htmlFor="email">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" />

                        <label htmlFor="password">Senha</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="email" />

                        <button>
                            <Link to={'/register'} style={{ textDecoration: 'none', color: 'inherit' }}>Não tem uma conta? <strong>CADASTRE-SE.</strong></Link>
                        </button>
                        <button>
                            <Link to={'/password'} style={{ textDecoration: 'none', color: 'inherit' }}>Esqueceu a senha?</Link>
                        </button>

                        <button id="login" type="submit" onClick={handleSignIn}>Log in</button>
                    </form>

                </div>

            </div>
        </>
    )
}

export default Login;