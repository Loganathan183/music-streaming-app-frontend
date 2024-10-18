import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import songcontext from "../context/songcontext";


const SingleCardSong = ({ info, Playsound }) => {
//eslint-disable-next-line
const {currentsong,setcurrentsong}=useContext(songcontext)


    return (
        <div>
            <div className="container py-3 text-white bg-dark opacity-100"
                onClick={() => { setcurrentsong(info)}} style={{ cursor: "pointer" }}>
                <div className="row align-items-center">
                    {/* Left: Image Section */}
                    <div className="col-2 d-flex justify-content-start " >
                        <img
                            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="artist"
                            className="img-fluid rounded"
                            style={{ height: "100px", width: "100px", objectFit: "cover" }}
                        />
                    </div>

                    {/* Center:  Text Section */}
                    <div className="col-8 text-center">
                        <h5 className="mb-1 fw-bold hover-text">{info.name}</h5>
                        <p className="text-white fw-bold mb-0 hover-text">{info.artist}</p>
                    </div>

                    {/* Right: Time or Controls */}
                    <div className="col-2 d-flex justify-content-end">
                        <span className="text-white">3:45</span> {/* Duration example */}
                    </div>
                </div>
            </div>

            {/* Hover effect using inline styles */}
            <style>{`
                .hover-text:hover {
                    color: #1db954; /* Change to Spotify green color on hover */
                    cursor: pointer; /* Pointer cursor on hover */
                }
            `}</style>
        </div>
    );
};

export default SingleCardSong;
