import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const GlossaryHeader = props =>
    <div className="glossary-header card-header bg-light">
        <span><span className="h2"><FontAwesomeIcon icon={faBook}/></span><span className="h2"> Glossary of Dark Patterns</span></span>
        <span><span className="h2">{props.activeIndex}</span></span>
        
        {/* <h2>{props.activeIndex}</h2> */}
    </div>

export default GlossaryHeader;