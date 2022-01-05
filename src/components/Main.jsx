import React, { useState } from 'react';
import logo from '../media/logoglass.svg'


const Main = () => {

    return (
        <>
            <div className='content'>
                <main>
                    <header>
                        <img src={logo} />
                    </header>
                    <div>
                        <form action="POST">
                            <input type="text" placeholder='Login' />
                            <input type="password" placeholder='Password' />
                            <input className='login' type="button" value="Connect" />
                            <input className='register' type="button" value="Register" />
                        </form>
                        <p>Don't have a account ? <a href='./Register.jsx'>Create a one</a></p>
                        <a href='https://honker.com.br'>Forget a password ?</a>
                    </div>
                </main>
            </div>
        </>
    );
}


export default Main;
