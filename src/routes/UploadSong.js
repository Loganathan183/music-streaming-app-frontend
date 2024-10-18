import { useState } from "react";
import Spotify_Logo from "../assests/image/Spotify-Logo.wine.svg";
import CloudinaryUpload from "../components/cloudinaryupload";
import Icontext from '../components/icontext';
import TextWithHover from '../components/textwithhover'
import { makeAuthenticatedPOSTrequest } from "../utils/serverhelpers";
import { useNavigate } from "react-router-dom";

//Upload song Functionality
const UploadSong = () => {
    const [name, setname] = useState("")
    const [thumbnail, setthumbnail] = useState("")
    const [playlisturl, setplaylisturl] = useState("")
    const [uploadedsongfilename, setuploadedsongfilename] = useState();
    const navigate=useNavigate();

    const submitsong = async() => {
        const data = {name, thumbnail, track: playlisturl}
        const response=await  makeAuthenticatedPOSTrequest("/song/create",data);
        if(response.err){
            alert("could not create song")
        }
        alert("success")
       navigate("/home")
    }


    return (

        <div className="d-flex vh-100">
            {/* Sidebar */}
            <div className="bg-dark text-white p-3 " style={{ width: "280px", cursor: 'pointer' }}>
                <div className="mb-2">
                    <img className="h-25 mx-4 mb-2 w-75 px-1" src={Spotify_Logo} alt="spotify logo" />
                </div>
                <div>
                    <Icontext IconName={"ic:round-home"} displaytext={"Home"} />
                    <Icontext IconName={"ic:twotone-search"} displaytext={"Search"} />
                    <Icontext IconName={"ic:baseline-local-library"} displaytext={"Library"} />
                    <Icontext IconName={"ri:music-fill"} displaytext={"My Music"} />
                </div>
                <div className="my-4">
                    <Icontext IconName={"mdi:plus"} displaytext={"Create Playlist"} />
                    <Icontext IconName={"ph:heart-fill"} displaytext={"Liked Song"} />
                </div>
            </div>


            <div className="flex-grow-1 d-flex flex-column">
                {/* Navbar */}
                <div className="text-bg-secondary">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container-fluid">
                            <h6 className="navbar-brand" style={{ cursor: 'pointer' }}>Spotify</h6>
                            <div className="d-flex fw-bold" style={{ cursor: 'pointer' }}>
                                <TextWithHover displayText={"Premium"} />
                                <TextWithHover displayText={"Support"} />
                                <TextWithHover displayText={"Download"} />
                                <TextWithHover displayText={"Upload Song"} />
                                <div className="mx-4 rounded-pill bg-white px-2 py-2 text-primary">AC</div>
                            </div>
                        </div>
                    </nav>
                </div>

                {/* Main Content */}
                <div className="p-4 bg-secondary flex-grow-1 ">


                    <div className="fw-bold">Upload Your Music</div>

                    <div className="  my-2 mx-5 ">
                        <label className="p-2 py-3 fw-bold" htmlFor="name">Name</label><br></br>
                        <input
                            className="p-2 mb-5"
                            style={{ width: "400px" }}
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                        />
                    </div>

                    <div className="my-2 mx-5 py-3">
                        <label className="my-2 py-3 fw-bold" htmlFor="name">Thumbnail</label><br></br>
                        <input
                            className="p-2 mb-5"
                            style={{ width: "400px" }}
                            placeholder="Thumbnail"
                            value={thumbnail}
                            onChange={(e) => setthumbnail(e.target.value)}
                        />
                    </div>
                    <div className="pb-2">
                        {uploadedsongfilename ? (
                            <div className="">{uploadedsongfilename.substring(0, 40)}....</div>
                        ) : (
                            <CloudinaryUpload
                                seturl={setplaylisturl}
                                setname={setuploadedsongfilename} />
                        )}
                    </div>
                    <div className="bg-info w-25 p-1 mx-5 my-4 text-center rounded-pill fw-bold" onClick={submitsong} style={{ cursor: "pointer" }}> Submit Song</div>


                </div>
            </div>
        </div>
    )
}

export default UploadSong;
