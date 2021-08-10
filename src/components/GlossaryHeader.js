import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const GlossaryHeader = props =>
    <div className="glossary-header card-header bg-light">
        <span className="h2"><FontAwesomeIcon icon={faBook}/></span>
        <span><span className="h2 title-font"> Glossary of Dark Patterns</span></span>
        <span><span className="h2 title-font">{props.activeIndex}</span></span>
    </div>

export default GlossaryHeader;