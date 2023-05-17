import { useState } from "react";
import { Link } from "react-router-dom"
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'; 
import { auth } from "./services/firebase";


function Register(props){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const handleSignUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password)
        alert("Eu sou um alert!");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Eu sou um alert!");
    }

    return (
        <>

        <div className="logo">
            <img src="./src/assets/estacio.png" alt="estacio-logo" />
        </div>

        <div className="auth-form-wrapper">

            <div className="left-pane">
                <h1><span className="ola">Olá,</span><br/> <span className="blue">Vamos começar!</span></h1>
                <p>Nosso objetivo é facilitar sua vida!</p>
                <p>Planeje, agende e acompanhe suas atividades.</p>
                <p>Tudo na palma da sua mão!</p> 
                <p>Dê seus primeiros passos, CADASTRE-SE</p>
            </div>    

            <div className="auth-form-container">
                <form className="register-form" onSubmit={handleSubmit}>        

                    <label className="email-form" htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" />

                    <label htmlFor="name">Matrícula</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name"/>

                    <label htmlFor="password">Senha</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" />

                    <button className="submit-button" type="submit" onClick={handleSignUp}>Enviar</button>
                    <button>
                        <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <img src="./src/assets/voltar.png" alt="estacio-logo" />
                            <img src="./src/assets/voltar.png" alt="estacio-logo" />
                        </Link>
                    </button>
                </form> 
            </div>
        </div>    
    </>
    )
}

export default Register;
