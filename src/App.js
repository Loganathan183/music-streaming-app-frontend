import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Logincomponent from './routes/login';
import Signupcomponent from './routes/signup';
import Homecomponent from './routes/home';
import LoggedInHomecomponent from "./routes/loggedinhomecomponent";
import UploadSong from './routes/UploadSong'
import MyMusic from './routes/mymusic';
import Searchpage from './routes/Searchpage'
import { useCookies } from 'react-cookie'
import songcontext from './context/songcontext'
import { useState } from 'react';
import Library from './routes/library'

function App() {
  const [currentsong, setcurrentsong] = useState(null)
  const [soundplayed, setsoundplayed] = useState(null);
  const [ispaused, setispaused] = useState(true);
  // eslint-disable-next-line
  const [cookie, setCookie] = useCookies(["token"])


  return (
    <div className="w-screen h-screen">
      <BrowserRouter>


        {cookie.token ? (
          //login routes
          <songcontext.Provider value={{
            currentsong,
            setcurrentsong,
            soundplayed,
            setsoundplayed,
            ispaused,
            setispaused
          }}>

            <Routes>
              <Route path="/" element={<div>hello</div>} />
              <Route path="/home" element={<LoggedInHomecomponent />} />

              <Route path="/uploadsong" element={<UploadSong />} />
              <Route path="/mymusic" element={<MyMusic />} />
              <Route path="/search" element={<Searchpage />} />
              <Route path="/library" element={<Library/>}/>
              <Route path="/login" element={<Logincomponent />} />
              <Route path="/signup" element={<Signupcomponent />} />
            </Routes>
          </songcontext.Provider>

        ) : (
          //loggoutroutes
          <Routes>
            <Route path="/home" element={<Homecomponent />} />
            <Route path="/login" element={<Logincomponent />} />
            <Route path="/signup" element={<Signupcomponent />} />




          </Routes>
        )};




      </BrowserRouter>
    </div>
  );
}

export default App;

