import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const GlossaryHeader = props =>
    <div className="card-header bg-light">
        {/* <FontAwesomeIcon icon={faBook} /> */}
        <h2>{props.activeIndex}</h2>
    </div>

export default GlossaryHeader;