import GlossaryIndex from '../components/GlossaryIndex.js';
import GlossaryPage from '../components/GlossaryPage.js';

const Glossary = props =>
    <div>
        <div class="card glossary-card">
            <div class="card-body">
                <div>
                    <GlossaryIndex/>
                </div>
                <div>
                    <GlossaryPage/>
                </div>
            </div>
        </div>
    </div>

export default Glossary;