import { useState } from 'react';
import { useCookies } from 'react-cookie'
import { BsSpotify } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { makeunauthenticatedPOSTrequest } from '../utils/serverhelpers'
//signup page
const SignupComponent = () => {
    // State management for each field
    const [email, setemail] = useState("");
    const [confirmemail, setconfirmemail] = useState("");
    const [password, setpassword] = useState("");
    const [username, setusername] = useState("");
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");


    // eslint-disable-next-line 
    const [cookies, setCookies] = useCookies(["token"])
    const navigate = useNavigate();

    // Sign up function
    const signup = async (e) => {
        e.preventDefault();
        if (email !== confirmemail) {
            alert("Email and confirm email must match, please try again");
            return;
        }

        const data = { email, password, firstname, lastname, username };
        const response = await makeunauthenticatedPOSTrequest("/auth/register", data);
        if (response && !response.err) {
            console.log(response);
            const token = response.token;
            const date = new Date();
            date.setDate(date.getDate() + 400);
            setCookies("token", token, { path: "/", expires: date })
            alert("success");
            navigate("/home");
        } else {
            alert("failure")
        }
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <div className="text-center mb-4">
                <div className="logo p-1 border-bottom">
                    <BsSpotify size={50} />
                    <p className="m-0">Spotify</p>
                </div>
                <p className="text-primary" style={{ fontSize: "24px" }}>
                    <b>Sign up for free to start listening</b>
                </p>
            </div>

            <div className="card p-5 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
                <h2 className="text-center mb-4">Signup</h2>
                <form onSubmit={signup}>  {/* Attach the signup function to form submit */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter Your Email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmEmail" className="form-label">Confirm Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="confirmEmail"
                            placeholder="Enter Your Email again"
                            value={confirmemail}
                            onChange={(e) => setconfirmemail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="form-label">Create Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter Your Password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setusername(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="firstname" className="form-label">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstname"
                            placeholder="Enter Your First Name"
                            value={firstname}
                            onChange={(e) => setfirstname(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="lastname" className="form-label">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastname"
                            placeholder="Enter Your Last Name"
                            value={lastname}
                            onChange={(e) => setlastname(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-success rounded-pill w-100 mb-3"
                    >
                        SIGN UP
                    </button>
                </form>


                <hr />
                <p className='px-1' style={{ cursor: "pointer", marginLeft: "40px" }}>
                    Already Have an account?
                </p>

                <div className="d-flex justify-content-center">
                    <Link to="/login" className="btn btn-outline-primary rounded-pill m-3">
                        Login for Spotify
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignupComponent;
