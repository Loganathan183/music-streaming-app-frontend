import SingleCardSong from "../components/singlesongcard";
import { makeAuthenticatedGETrequest } from "../utils/serverhelpers";
import { useEffect, useState } from "react";
import LoggedInContainer from '../containers/loggedincontainer';

const songdata = [{
    thumbnail: "c",
    name: "Yaaradi nee mohini",
    artist: "Yuvan Shankar Raja",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 

}]


const MyMusic=()=>{
    //eslint-disable-next-line
    const [Songdata, setsongdata] = useState([]);

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await makeAuthenticatedGETrequest("/song/get/mysongs");
            console.log(response);
            setsongdata(response.data);
          } catch (error) {
            console.error('Failed to fetch songs:', error.message);
           
          }
        };
        getData();
      }, []);

    return(
            <LoggedInContainer Curactivescreen="mymusic">
                         <div className="p-5 bg-secondary flex-grow-1 ">
                    <div className="fw-bold text-white py-2">My Songs</div>

                    {songdata.map((item,) => {
                        return <SingleCardSong 
                        key={item._id}
                         info={item} 
                         Playsound={()=>{}}/>
                    })}
              




                </div>
            </LoggedInContainer>
    )
}
export default MyMusic;



