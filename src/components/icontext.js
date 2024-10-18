import { Icon } from "@iconify/react";
import {Link} from 'react-router-dom'

const Icontext = ({ IconName, displaytext,targetlink,active,onClick }) => {

   
    return (
        <Link to={targetlink} className="block">
        <div className="d-flex  items-center justify-content-start " onClick={onClick}>
            <div className="px-3 py-2 ">
                <Icon icon={IconName} className="fs-3 mb-2 text-white"/>
            </div>
            <div className="text-white fw-bold mt-2" >{displaytext}</div>

        </div>
        </Link>
    )
}
export default Icontext;    