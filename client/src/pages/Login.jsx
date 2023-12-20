import React, { useState } from 'react';

export const Login = () => {
    const [User, setUser] = useState({
        email: "",
        password : ""
    });


const handleInput = (e) => {
    let name=e.target.name;
    let value = e.target.value;

    setUser({
        ...User,
        [name]:value
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(User);
};


    return (
        <>
        <section>
            <main>
                <div className="section-login">
                    <div className="container2 grid grid-two-cols">
                        <div className="login-image">
                            <img src="/images/register.png" alt="login image" 
                            width="500" height="500"/>
                        </div>
                        {/* registration form */}
                        <div className="Login-form">
                            <h1 className="main-heading mb-3">Login Form</h1>
                            <br />

                            <form onSubmit={handleSubmit}>
                                {/* <div>
                                    <label htmlFor="username">Username</label>
                                    <input 
                                    type="text"
                                    name="username"
                                    placeholder="username"
                                    id="username"
                                    required 
                                    autoComplete="off"
                                    value={User.username}
                                    onChange={handleInput}
                                    />
                                </div> */}
                            

                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input 
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    id="email"
                                    required 
                                    autoComplete="off"
                                    value={User.email}
                                    onChange={handleInput}
                                    />
                                </div>

                                {/* <div>
                                    <label htmlFor="phone">Phone</label>
                                    <input 
                                    type="number"
                                    name="phone"
                                    placeholder="phone"
                                    id="phone"
                                    required 
                                    autoComplete="off"
                                    value={User.phone}
                                    onChange={handleInput}
                                    />
                                </div> */}
                                
                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input 
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    id="password"
                                    required 
                                    autoComplete="off"
                                    value={User.password}
                                    onChange={handleInput}
                                    />
                                </div>

                            
                                <br />
                                <button type="submit" className="btn btn-submit">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
        </>
        )
};