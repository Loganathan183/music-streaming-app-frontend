import { openUploadWidget } from "../utils/cloudinaryservice";

//song upload cloudinary
const CloudinaryUpload = ({seturl,setname}) => {
    const uploadImageWidget = () => {
        let myUploadWidget = openUploadWidget(
            {
                cloudName: "drckku1ch",
                uploadPreset: "bgterfmp",
                source: ["local"]
            },
            function (error, result) {
                if (!error && result.event === "success") {
                seturl(result.info.secure_url)
                    setname(result.info.original_filename);
                } else {
                    if (error) {
                        console.log(error)
                    }
                }

            }
        );
        myUploadWidget.open();
    };
    return (
        <button className="mx-5 p-2 rounded-pill bg-success fw-bold" onClick={uploadImageWidget}>Select Track</button>
    )

};
export default CloudinaryUpload;