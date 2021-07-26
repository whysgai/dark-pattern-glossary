import Indices from "../data/indices.js"

const GlossaryIndex = props =>
    <div className="glossary-index list-group list-group-flush btn-group">
        {
            Indices.indices.map((entry, index) => 
                <button key={index} type="button"
                className="list-group-item list-group-item-action">
                    <span>{entry}</span>
                </button>
            )
        }
        {/* <div className="bg-light glossary-definition"><span>Hello</span></div> */}
    </div>

export default GlossaryIndex;