import React, { useState } from 'react';

export const Register = () => {
const [User, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
});

// handle the input values
const handleInput = (e) => {
    
    let name=e.target.name;
    let value=e.target.value;
    setUser({
        ...User,
        [name]:value,
    });
    // console.log(User);
};

//  handle formSubmit - jab first time submit click hota hai to woh
//  page refresh kar deta hai...isko prevent karna hai
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(User);

}


    return (
        <>
        <section>
            <main>
                <div className="section-registration">
                    <div className="container1 grid grid-two-cols">
                        <div className="registration-image">
                            <img src="/images/register.png" alt="registration image" 
                            width="500" height="500"/>
                        </div>
                        {/* registration form */}
                        <div className="registration-form">
                            <h1 className="main-heading mb-3">Registration Form</h1>
                            <br />

                            <form onSubmit={handleSubmit}>
                                <div>
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
                                </div>
                            

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

                                <div>
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
                                </div>
                                
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
                                <button type="submit" className="btn btn-submit">Register Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
        </>
        )
};