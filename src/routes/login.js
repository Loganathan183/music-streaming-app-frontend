import { BsSpotify } from "react-icons/Bs";
import Textinput from '../components/textinput';





const Logincomponent = () => {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100vh',
        paddingTop: '20px',
    };

    const myspotify = {
        textAlign: 'center',
        marginRight: '60px',
    };

    const spotify = {
        color: 'black',
        marginRight: '5px',
        marginTop: '-41px',
        marginLeft: '125px',
        fontSize: '21px',
        padding: '1px',
    };

    const para = {
        color: 'blue',
        marginRight: '10px',
        marginTop: '38px',
        fontSize: "24px"
    };


   

    return (
        <div className='w-full h-full' style={containerStyle}>
            <div style={myspotify}>
                <div className="logo p-1 border-b-solid border--gray-400 w-full">
                    <BsSpotify size={50} />
                    <p style={spotify}>Spotify</p>
                    <p style={para}> <b>To continue, login to Spotify</b></p>

                    <Textinput
                        label="Email address"
                        placeholder="Email address"
                    />





                </div>
            </div>
        </div>
    );
};

export default Logincomponent;
