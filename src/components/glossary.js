import GlossaryIndex from '../components/GlossaryIndex.js';
import GlossaryPage from '../components/GlossaryPage.js';

const Glossary = props =>
    <div className="card glossary-card">
        <div className="card-header bg-light"><h2>Title</h2></div>
        <div className="glossary-card-body">
            <GlossaryIndex/>
            <GlossaryPage/>
        </div>
    </div>


export default Glossary;