import { useState } from "react";
import Patterns from "../data/patterns.js"

const GlossaryIndex = props => 
    <div className="glossary-sidebar ">
        <div className="glossary-index list-group list-group-flush btn-group">
            {
                Patterns.patterns.map((entry, index) => 
                    <button key={index} type="button"
                        className={`list-group-item list-group-item-action ${entry.title == props.activeIndex ? "active" : ""}`}
                        onClick={() => {props.selectEntry(entry.title); props.processText(entry.description)}}
                    >
                        <span>{entry.title}</span>
                    </button>
                )
            }
        </div>
        <div className="glossary-description">
            {
                props.processedText.map((para, index) =>
                    <p key={index} className="glossary-description-para">{para}</p>
                )
            }
        </div>
    </div>

export default GlossaryIndex;