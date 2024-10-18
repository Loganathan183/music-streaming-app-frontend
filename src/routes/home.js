import Spotify_Logo from "../assests/image/Spotify-Logo.wine.svg";
import Icontext from '../components/icontext';

//Home page
const focusdatacard = [
    {
        title: "peaceful piano",        
        description: "relax and mindblowing song",
        imgurl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "peaceful piano",
        description: "relax and mindblowing song",
        imgurl: "https://images.unsplash.com/photo-1483032469466-b937c425697b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "peaceful piano",
        description: "relax and mindblowing song",
        imgurl: "https://images.unsplash.com/photo-1593697972679-c4041d132a46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "peaceful piano",
        description: "relax and mindblowing song",
        imgurl: "https://images.unsplash.com/photo-1518887572120-cae9ec0daab6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "peaceful piano",
        description: "relax and mindblowing song",
        imgurl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "peaceful piano",
        description: "relax and mindblowing song",
        imgurl: "https://images.unsplash.com/photo-1520942559232-80c4daf60325?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
]
const spotifyplaylistdata = [
    {
        title: "U1 Drugs",
        description: "relax and mindblowing song",
        imgurl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "peaceful piano",
        description: "relax and mindblowing song",
        imgurl: "https://images.unsplash.com/photo-1483032469466-b937c425697b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "peaceful piano",
        description: "relax and mindblowing song",
        imgurl: "https://images.unsplash.com/photo-1593697972679-c4041d132a46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "peaceful piano",
        description: "relax and mindblowing song",
        imgurl: "https://images.unsplash.com/photo-1518887572120-cae9ec0daab6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "peaceful piano",
        description: "relax and mindblowing song",
        imgurl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "peaceful piano",
        description: "relax and mindblowing song",
        imgurl: "https://images.unsplash.com/photo-1520942559232-80c4daf60325?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
]
const home = () => {
    return (
        //sidebar
        <div className="d-flex vh-100">

            <div className="bg-dark text-white p-3 " style={{ width: "28    0px", cursor: 'pointer' }}>
                <div className="mb-2 ">
                    <img className="h-25 mx-4 mb-2 w-75 px-1" src={Spotify_Logo} alt="spotify logo" />
                </div>
                <div>
                    <Icontext IconName={"ic:round-home"}
                        displaytext={"Home"}
                    />

                    <Icontext IconName={"ic:twotone-search"}
                        displaytext={"Search"} />
                    <Icontext IconName={"ic:baseline-local-library"}
                        displaytext={"Library"} />


                </div>
                <div className="my-4">
                    <Icontext IconName={"mdi:plus"}
                        displaytext={"Create Playlist"} />
                    <Icontext IconName={"ph:heart-fill"}
                        displaytext={"Liked Song"} />
                </div>

            </div>

            {/*navbar*/}
            <div class=" container-fluid">

                <div class="row">

                    <div class="col-3"></div>

                    <div class="col-12 text-bg-secondary opacity-100 ">
                        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                            <div class="container-fluid">
                                <h6 class="navbar-brand" style={{ cursor: 'pointer' }}>Spotify</h6>


                                <div className="d-flex fw-bold border-white " style={{ cursor: 'pointer' }}>
                                    <div className="mx-5 my-2">premium</div>
                                    <div className="mx-1 my-2">Support</div>
                                    <div className="mx-5 my-2 ">Download</div>
                                    <div className="mx-1 my-2">Signup</div>
                                    <div className="mx-4 rounded-pill bg-white px-2 py-2 text-primary">Login</div>
                                </div>


                            </div>
                        </nav>
                    </div>
                </div>


                {/*Home page decks card*/}
                <div className="p-4 text-bg-secondary px-2  ">
                    <Playlistview
                        titletext="focus"
                        cardsdata={focusdatacard} />
                    <Playlistview titletext="spotify playlist"
                        cardsdata={spotifyplaylistdata} />

                </div>

            </div>



        </div>


    )
}
const Playlistview = ({ titletext, cardsdata }) => {
    return (
        <div className="">
            <div className="fw-bold mb-2">{titletext}</div>
            <div className="h-100 w-100 p-2 d-flex justify-content-start">
                {/*cardsdat wil be array*/
                    cardsdata.map(item => {
                        return (
                            <Card
                                title={item.title}
                                description={item.description}
                                imgurl={item.imgurl} />
                        )
                    })
                }

                {/*<Card
                    title="peaceful songs" description="relax and mindblowing song"
                    imgurl="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <Card
                    title="peaceful songs" description="relax and mindblowing song"
                    imgurl="https://images.unsplash.com/photo-1483032469466-b937c425697b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <Card
                    title="peaceful songs" description="relax and mindblowing song"
                    imgurl="https://images.unsplash.com/photo-1593697972679-c4041d132a46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <Card
                    title="peaceful songs" description="relax and mindblowing song"
                    imgurl="https://images.unsplash.com/photo-1518887572120-cae9ec0daab6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <Card
                    title="peaceful songs" description="relax and mindblowing song"
                    imgurl="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <Card
                    title="peaceful songs" description="relax and mindblowing song"
                    imgurl="https://images.unsplash.com/photo-1520942559232-80c4daf60325?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />*/}


            </div>
        </div>

    )
}
const Card = ({ title, description, imgurl }) => {
    return (
        <div >
            <div class="px-3   py-2">
                <div class="card pb-1 py-1 ">
                    <img src={imgurl} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>


                    </div>
                </div>
            </div>
        </div>
    )
}
export default home;