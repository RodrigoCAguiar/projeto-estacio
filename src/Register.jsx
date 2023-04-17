import { useState } from "react";
import './Register.css'

export const Register = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
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
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="text" name="password" />

                    <button className="submit-button" type="submit">Enviar</button>
                    <button  onClick={() => props.onFormSwitch('login')}><img src="./src/assets/voltar.png" alt="estacio-logo" /><img src="./src/assets/voltar.png" alt="estacio-logo" /></button>
                </form> 
            </div>
        </div>    
    </>
    )
}

//