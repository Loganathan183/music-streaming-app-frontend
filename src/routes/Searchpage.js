import { useState } from "react";
import LoggedInContainer from "../containers/loggedincontainer";
import { Icon } from '@iconify/react';
import { makeAuthenticatedGETrequest } from "../utils/serverhelpers";
import SingleCardSong from "../components/singlesongcard";


const Searchpage = () => {
    const [isinputfocused, setisinputfocused] = useState(false);
    const [searchtext, setsearchtext] = useState("");
    const [songdata, setsongdata] = useState([])

    const searchsong = async () => {
        //this function call the search api
        const response = await makeAuthenticatedGETrequest("/song/get/songname" + searchtext);
console.log(response)
        setsongdata(response.data)
        setsearchtext("")
    }

    return (
        <div className="bg-dark">
            <LoggedInContainer Curactivescreen="home">
       
                <div className="d-flex text-white" style={{ width: '35%' }}>
               
                    <div className={`position-relative w-100 ${isinputfocused ? "border-white" : ""}`}>
                        <Icon
                            icon="mingcute:search-fill"
                            className="position-absolute top-50 bg-primary start-0 translate-middle-y ms-3"
                        />
                        <input
                            className="p-3 ps-5  bg-primary text-body py-3 rounded-pill fw-bold w-100"
                            type="text"
                            placeholder="What do you want to listen?"
                            onFocus={() => { setisinputfocused(true) }}
                            onBlur={() => { setisinputfocused(false) }}
                            value={searchtext}
                            onChange={(e) => {
                                setsearchtext(e.target.value)
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "enter") {
                                    searchsong();
                                }
                            }}
                        />
                    </div>
                   
                </div>
                
                <div className="text-white p-2">
                    Showing Search results for <span>{searchtext}</span>

                    {songdata.map(item => {
                        return <SingleCardSong 
                        info={item}
                         key={JSON.stringify(item)}
                         Playsound={()=>{}} />
                    })}
                </div>
                
            </LoggedInContainer>
        </div>
    )
}

export default Searchpage;