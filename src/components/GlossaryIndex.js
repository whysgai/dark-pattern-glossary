import Indices from "../data/indices.js"

const GlossaryIndex = props =>
    <div className="glossary-index list-group list-group-flush btn-group">
        {
            Indices.indices.map((entry, index) => 
                <button key={index} type="button"
                    className={`list-group-item list-group-item-action ${entry == props.activeIndex ? "active" : ""}`}
                    onClick={() => props.selectEntry(entry)}
                >
                    <span>{entry}</span>
                </button>
            )
        }
    </div>

export default GlossaryIndex;