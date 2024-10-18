import { useState } from "react";
import { makeAuthenticatedPOSTrequest } from "../utils/serverhelpers";

const CreatePlaylistModal = ({ closemodal }) => {
    const [playlistname, setplaylistname] = useState("");
    const [playlistthumbnail, setplaylistthumbnail] = useState("");

    const handleNameChange = (e) => setplaylistname(e.target.value);
    const handleThumbnailChange = (e) => setplaylistthumbnail(e.target.value);

    const createplaylist = async () => {
        try {
            const response = await makeAuthenticatedPOSTrequest("/playlist/create", {
                name: playlistname,
                thumbnail: playlistthumbnail,
                songs: [],
            });
            console.log("Playlist created successfully:", response);
        } catch (error) {
            console.error("Error creating playlist:", error.message);
        }
    };

    return (
        <div
            className="bg-opacity-100 text-white bg-dark d-flex justify-content-center align-items-center vh-100"
            onClick={closemodal}
        >
            <div
                className="p-4 bg-white text-dark rounded"
                style={{ width: "300px" }}
                onClick={(e) => e.stopPropagation()}
            >
                <h4 className="text-center mb-4">Create Playlist</h4>

                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Playlist Name"
                        value={playlistname}
                        onChange={handleNameChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Thumbnail</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Thumbnail"
                        value={playlistthumbnail}
                        onChange={handleThumbnailChange}
                    />
                </div>

                <button className="btn btn-primary w-100 mt-3" onClick={createplaylist}>
                    Create
                </button>
            </div>
        </div>
    );
};

export default CreatePlaylistModal;
