import Indices from "../data/indices.js"

const GlossaryIndex = props =>
    <div className="glossary-index list-group list-group-flush">
        {
            Indices.indices.map((entry, index) => 
                <div key={index}
                className="list-group-item">
                    <span>{entry}</span>
                </div>
            )
        }
        <div className="bg-light glossary-definition"><span>Hello</span></div>
    </div>

export default GlossaryIndex;