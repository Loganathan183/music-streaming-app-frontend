import { useEffect } from "react"
import LoggedInContainer from "../containers/loggedincontainer"
import { makeAuthenticatedPOSTrequest } from "../utils/serverhelpers"


const Library = () => {

    return (
        <LoggedInContainer Curactivescreen={"library"}>
            <div className="text-white fw-bold p-2">
                My Playlists
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm text-white">

                        <div class="card" style={{ width: "13rem" }}>
                            <img class="" src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card image cap"
                            />
                            <div class="card-body">
                                <h5 class="card-title">U1 sleeping medicine </h5>
                                <p class="card-text"></p>

                            </div>
                        </div>
                    </div>

                    <div class="col-sm text-white">

                        <div class="card" style={{ width: "13rem" }}>
                            <img class="card-img-top" src="https://plus.unsplash.com/premium_photo-1682125768864-c80b650614f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">melodies songs</h5>
                                <p class="card-text"></p>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm text-white">

                        <div class="card" style={{ width: "13rem" }}>
                            <img class="card-img-top" src="https://images.unsplash.com/photo-1483032469466-b937c425697b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Traveling songs</h5>
                                <p class="card-text"></p>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm text-white">

                        <div class="card" style={{ width: "13rem" }}>
                            <img class="card-img-top" src="https://images.unsplash.com/photo-1482443462550-d2c99314ab6a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Devotional songs</h5>
                                <p class="card-text"></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                hiii



            </div>
        </LoggedInContainer>
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
export default Library