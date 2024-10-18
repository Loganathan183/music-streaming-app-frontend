import LoggedInContainer from "../containers/loggedincontainer";

//LoggedinHome page
const focusdatacard = [
    {
        title: "Pathu Thala",
        description: "Yuvan Shankar Raja",
        imgurl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Ranjithame",
        description: "Vijay &M.M manasi",
        imgurl: "https://images.unsplash.com/photo-1483032469466-b937c425697b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Matta",
        description: "Yuvan Shankara Raja",
        imgurl: "https://images.unsplash.com/photo-1593697972679-c4041d132a46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Kaathu Mela",
        description: "Paal Dabba",
        imgurl: "https://images.unsplash.com/photo-1518887572120-cae9ec0daab6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Whistle Podu",
        description: "Thalapathy Vijay",
        imgurl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Chinna Chinna Kangal",
        description: "Thalpathy Vijay",
        imgurl: "https://images.unsplash.com/photo-1520942559232-80c4daf60325?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
]
const spotifyplaylistdata = [
    {
        title: "Fear Song",
        description: "Anirudh Ravichandar",
        imgurl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Achaho",
        description: "HipHop Tamizha",
        imgurl: "https://images.unsplash.com/photo-1483032469466-b937c425697b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Thaaye Thaaye",
        description: "Sid sriram",
        imgurl: "https://images.unsplash.com/photo-1593697972679-c4041d132a46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Spark",
        description: "Yuvan Shankar Raja",
        imgurl: "https://images.unsplash.com/photo-1559799536-95e03ae1db1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Aasa Kooda",
        description: "Sai Abhyankar",
        imgurl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    },
    {
        title: "Kannukkulle",
        description: "A.R.Rahman",
        imgurl: "https://images.unsplash.com/photo-1520942559232-80c4daf60325?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
];

const Home = () => {
    return (
        <LoggedInContainer Curactivescreen="home">
            <Playlistview
                titletext="focus"
                cardsdata={focusdatacard} />
            <Playlistview titletext="spotify playlist"
                cardsdata={spotifyplaylistdata} />
        </LoggedInContainer>
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



            </div>
        </div>

    )
}
const Card = ({ title, description, imgurl }) => {
    return (
        <div >
            <div className="px-3   py-2">
                <div className="card pb-1 py-1 ">
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
export default Home;