import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

const AddAUser = () => {
 const [newUser, setNewUser] = useState({
        firstName: '',
        secondName: '',
        email: ''
    });

     const [submitted, setSubmitted] = useState(false);

        const register = async (e) => {
            e.preventDefault()
            const { firstName, secondName, email,} = newUser;
            if (firstName && secondName && email ) {
                try {
                    const res = await axios.post('http://localhost:4000/newUser', newUser)
                    setNewUser({
                        firstName: '',
                        secondName: '',
                        email: '',
                    })
                    if (res.data.message === "success") {
                        setSubmitted(true)
                        return
                    }
                    setSubmitted(res.data.message)

                } catch (err) {
                    console.log(err)
                }
            }
        }

        const handleChange = e => {
            const { name, value } = e.target;
            setNewUser({
                ...newUser,
                [name]: value
            });
        }

        if (submitted === "user exists") {
            return (
                <>
                    <h2>{submitted}</h2>
                    <p> You already have a account! </p>
                </>
            )
        }

        return (
            <>

                <h1> Create Account</h1>
                <form onSubmit={register}>
                    <label className="formLabel" htmlFor='firstName'>First name</label>
                    <br />
                    <input type="text" id="user-first-name" name="firstName" value={newUser.firstName} onChange={handleChange} placeholder="FirstName" />
                    <br />
                    <label className="formLabel" htmlFor='secondName'>Last name</label>
                    <br />
                    <input type="text" id="user-second-name" name="secondName" value={newUser.secondName} onChange={handleChange} placeholder="SecondName" />
                    <br />
                    <label className="formLabel" htmlFor='email'>Email</label>
                    <br />
                    <input type="email" id="new-user-email" name="email" value={newUser.email} onChange={handleChange} placeholder="Email" />
                    <br />
                    <input id="registerButton" type="submit" value="Register" />
                </form>
            </>
        )

}

export default AddAUser;