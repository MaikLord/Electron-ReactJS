import React from 'react';
import logo from '../media/logoglass.svg'

const Register = () => {
    return (
        <>
            <div className='content'>
                <main>
                    <header>
                        <img src={logo} />
                    </header>
                    <div>
                        <form action="POST">
                            <input type="text" placeholder='Email' />
                            <input type="password" placeholder='Password' />
                            <input className='register' type="button" value="Register" />
                        </form>
                        <a href='https://honker.com.br'>Forget a password ?</a>
                    </div>
                </main>
            </div>
        </>
    )
};

export default Register;