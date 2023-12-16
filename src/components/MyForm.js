import React, { useState } from 'react'
import './style.css';

function MyForm() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [cpass, setCpass] = useState('');

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!emailRegex.test(email) || pass.length<8 || pass!==cpass){
            alert('Form cannot be submitted!')
        }
        else{
            alert('Form submitted successfully!')
        }
    }

    return (
        <form className='my-form' onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="email">Email: </label>
                <input className={`red-b ${emailRegex.test(email)?'green-b':''}`} type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                {!emailRegex.test(email) && (
                    <span>Invalid email format</span>
                )}
            </div>

            <div className="input-group">
                <label htmlFor="pass">Password: </label>
                <input className={`red-b ${pass.length>=8?'green-b':''}`} type="password" name="pass" id="pass" value={pass} onChange={(e) => setPass(e.target.value)} />
                {pass.length<8 && (
                    <span>Password must be atleast 8 characters</span>
                )}
            </div>

            <div className="input-group">
                <label htmlFor="cpass">Confirm Password: </label>
                <input className={`red-b ${pass===cpass?'green-b':''}`} type="password" name="cpass" id="cpass" value={cpass} onChange={(e) => setCpass(e.target.value)} />
                {(pass!==cpass) && (
                    <span>Passwords do not match</span>
                )}
            </div>

            <div className="input-group">
                <button type="submit">Sign Up</button>
            </div>
        </form>
    )
}

export default MyForm