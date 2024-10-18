import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { makeunauthenticatedPOSTrequest } from '../utils/serverhelpers';
import { useCookies } from 'react-cookie';

//login page
const TextInput = ({ label, placeholder, }) => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    // eslint-disable-next-line
    const [cookies, setCookie] = useCookies(["token"]);
    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();

        const data = { email, password };
        const response = await makeunauthenticatedPOSTrequest("/auth/login", data);
        if (response && !response.err) {
            console.log(response);
            const token = response.token;
            const date = new Date();
            date.setDate(date.getDate() + 60);
            setCookie("token", token, { path: "/", expires: date })
            alert("success");
            navigate("/home");
        } else {
            alert("failure")
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="login-container h-1 w-3 mb-5 p-5 border rounded-3 shadow-lg">
                <h1>Login Page</h1>
                <form onSubmit={login}>
                    <div className="mb-3">
                        <label htmlFor={label} className="form-label fw-bold">{label}</label>
                        <input
                            type="text"
                            className="form-control"
                            id={label}
                            placeholder={placeholder}
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label fw-bold">Password</label>
                        <input
                            type="Password"
                            className="form-control"
                            id="Password"
                            placeholder="Enter password"
                            value={password}               // Binds the password state to the input field
                            onChange={(e) => setpassword(e.target.value)}

                        />
                    </div>
                    <button type="submit" className='bg-primary px-5'>LOGIN</button>
                </form>
                <p className="mx-3 mt-2 fw-bold">Don't Have an account?</p>
                <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-outline-primary rounded-pill mt-3">
                        <Link to="/signup">Signup for Spotify</Link>
                    </button>
                </div>




            </div>
        </div>
    );
}

export default TextInput;
