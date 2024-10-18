import Spotify_Logo from "../assests/image/Spotify-Logo.wine.svg";
import { useLayoutEffect, useRef, useState } from "react";
//eslint-disable-next-line
import { Howl, howler } from 'howler';
import Icontext from '../components/icontext';
import { Icon } from "@iconify/react/dist/iconify.js";
import TextWithHover from '../components/textwithhover'
import { useContext } from "react";
import songcontext from "../context/songcontext";
import Createplaylistmodal from "../modal/createplaylistmodal";


//LoggedinContainer generalising home page ui

const LoggedInContainer = ({ children, Curactivescreen, }) => {

    const [createplaylistmodalopen, setcreateplaylistmodalopen] = useState(true);

    //eslint-disable-next-line
    const { currentsong,
        setcurrentsong,
        ispaused,
        setispaused,
        soundplayed,
        setsoundplayed
    } = useContext(songcontext)


    const firstupdate = useRef(true)

    useLayoutEffect(() => {
        //the following if statement  will prevent the useeffect from running the render
        if (firstupdate.current) {
            firstupdate.current = false;
            return;
        }

        if (!currentsong) {
            return
        }
        console.log("here")
        changesong(currentsong.track)
        //eslint-disable-next-line  react-hooks/exhaustive-deps
    }, [currentsong && currentsong.track]);



    //eslint-disable-next-line
    const playsound = () => {
        if (!soundplayed) {
            return
        }
        soundplayed.play()
    }

    const changesong = (audioSrc) => {
        if (soundplayed) {
            soundplayed.stop();

        }
        let sound = new Howl({
            src: [audioSrc],
            html5: true
        });
        setsoundplayed(sound);
        sound.play();
        setispaused(false)


    }
    const pausesound = () => {
        soundplayed.pause();
    }
    const toggleplaypause = () => {
        if (ispaused) {
            changesong(currentsong.track);
            setispaused(false)
        }
        else {
            pausesound();
            setispaused(true)
        }
    };

    return (
        //sidebar

        <div className="d-flex vh-100">
            {createplaylistmodalopen && <Createplaylistmodal 
            closemodal={()=>{setcreateplaylistmodalopen(false)}} />}

            <div className="bg-dark text-white p-3"
                style={{ width: "280px", cursor: 'pointer' }}>
                <div className="mb-2 ">
                    <img className="h-25 mx-4 mb-2 w-75 px-1" src={Spotify_Logo} alt="spotify logo" />
                </div>

                <div>
                    <Icontext IconName={"ic:round-home"}
                        displaytext={"Home"}
                        targetlink={"/home"}
                        active={Curactivescreen === "home"}
                    />
                    <Icontext IconName={"ic:twotone-search"}
                        displaytext={"Search"}
                        targetlink={"/Search"}
                        active={Curactivescreen === "search"} />

                    <Icontext IconName={"ic:baseline-local-library"}
                        displaytext={"Library"}
                        active={Curactivescreen === "library"}
                        targetlink={"/library"} />

                    <Icontext IconName={"ri:music-fill"}
                        displaytext={"My Music"}
                        targetlink="/mymusic"
                        active={Curactivescreen === "mymusic"} />


                </div>
                <div className="my-4">
                    <Icontext IconName={"mdi:plus"}
                        displaytext={"Create Playlist"}
                        
                        onClick={()=>{setcreateplaylistmodalopen(true)}} />
                    <Icontext IconName={"ph:heart-fill"}
                        displaytext={"Liked Song"} />

                </div>

            </div>

            {/*navbar*/}
            <div className=" container-fluid">

                <div className="row">

                    <div className="col-3"></div>

                    <div className="col-12 text-bg-secondary opacity-100 ">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <div className="container-fluid">
                                <h6 className="navbar-brand" style={{ cursor: 'pointer' }}>Spotify</h6>


                                <div className="d-flex fw-bold border-white" style={{ cursor: 'pointer' }}>
                                    <TextWithHover displayText={"Premium"} />
                                    <TextWithHover displayText={"Support"} />
                                    <TextWithHover displayText={"Download"} />
                                    <TextWithHover displayText={"Upload Song"} />
                                    <div className="mx-4 rounded-pill bg-white px-2 py-2 text-primary">AC</div>
                                </div>


                            </div>
                        </nav>
                    </div>
                </div>


                {/*Home page decks card*/}
                <div className={`${currentsong ? "h-25" : "h-100"}h-100 p-5 bg-dark px-5`} >
                    {children}
                </div>

            </div>
            {/*currenly playing song ui*/}
            {currentsong && (
                <div className="bg-dark text-white py-2 px-4 position-fixed w-100"
                    style={{ bottom: 0, left: 0 }}>
                    <div className="d-flex justify-content-between align-items-center">
                        {/* Song Info */}
                        <div className="d-flex align-items-center">
                            <img
                                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop"
                                alt="Album Art"
                                className="rounded me-3"
                                style={{ width: "50px", height: "50px" }}
                            />
                            <div>
                                <h6 className="mb-0 text-decoration-underline" style={{ cursor: "pointer" }}>Yaaradi Nee Mohini</h6>
                                <small className="text-decoration-underline" style={{ cursor: "pointer" }}>Yuvan Shankar Raja</small>
                            </div>
                        </div>

                        <div className="d-flex">
                            <div>
                                {/*controls buttons will go there*/}
                                <Icon icon="zondicons:shuffle"
                                    className="mx-3 " style={{ cursor: "pointer" }} fontSize={25} />

                                <Icon icon="streamline:button-previous-solid"
                                    className="mx-3" style={{ cursor: "pointer" }} fontSize={25} />

                                <Icon icon={
                                    ispaused
                                        ? "fluent:play-24-filled"
                                        : "streamline:button-pause-2-solid"
                                }
                                    className="mx-3 " style={{
                                        cursor: "pointer"
                                    }} fontSize={25}
                                    onClick={toggleplaypause} />

                                <Icon icon="streamline:button-next-solid"
                                    className="mx-3  " style={{ cursor: "pointer" }} fontSize={25} />

                                <Icon icon="lucide:repeat"
                                    className="mx-3" style={{ cursor: "pointer" }} fontSize={25} />

                            </div>

                        </div>
                      

                        {/* Controls */}
                        
                        <div className="d-flex align-items-center">
                        <Icon icon="solar:heart-outline" />
                            <span style={{ cursor: "pointer" }}>3:45</span>
                        </div>
                    </div>
                    
        

                </div>
               
            )}
        </div>


    )
}


export default LoggedInContainer;