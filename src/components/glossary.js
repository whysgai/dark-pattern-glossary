import GlossaryIndex from '../components/GlossaryIndex.js';
import GlossaryPage from '../components/GlossaryPage.js';

const Glossary = props =>
    <div class="card glossary-card">
        <div class="card-body">
            <GlossaryIndex/>
            <GlossaryPage/>
        </div>
    </div>


export default Glossary;