import Patterns from "../data/patterns.js"

const GlossaryIndex = props =>
    <div className="glossary-index list-group list-group-flush btn-group">
        {
            Patterns.patterns.map((entry, index) => 
                <button key={index} type="button"
                    className={`list-group-item list-group-item-action ${entry.title == props.activeIndex ? "active" : ""}`}
                    onClick={() => props.selectEntry(entry.title)}
                >
                    <span>{entry.title}</span>
                </button>
            )
        }
    </div>

export default GlossaryIndex;