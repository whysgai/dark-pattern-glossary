import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCertificate} from "@fortawesome/free-solid-svg-icons";

const DisguisedAds = () => 
    <div className="disguised-ads little-padding">
        <div className="card card-body">
            <div className="input-group">
                <label className="input-group-text">
                    Search                    
                </label>
                <input className="form-control" value="pie near me"/>
            </div>            
            <ul className="results-list list-group">
                <li className="result list-group-item list-group-item-action">
                    <span className="result-prefix"><FontAwesomeIcon icon={faCertificate}/></span>
                    <span className="result-text">Pi in the Sky Math Tutoring</span>
                    <span>3.75/5</span>
                </li>
                <li className="result list-group-item list-group-item-action">
                    <span className="result-prefix">1</span>
                    <span className="result-text">Blackbird Pie Company</span>
                    <span>4.5/5</span>
                </li>
                <li className="result list-group-item list-group-item-action">
                    <span className="result-prefix"><FontAwesomeIcon icon={faCertificate}/></span>
                    <span className="result-text">Big Apple Pizza by the Slice</span>
                    <span>3.25/5</span>
                </li>
                <li className="result list-group-item list-group-item-action">
                    <span className="result-prefix">2</span>
                    <span className="result-text">Gran-Gran's Pies</span>
                    <span>5/5</span>
                </li>
                <li className="result list-group-item list-group-item-action">
                    <span className="result-prefix">3</span>
                    <span className="result-text">Pie R Round Bakery</span>
                    <span>2/5</span>
                </li>
                <li className="result list-group-item list-group-item-action">
                    <span className="result-prefix">4</span>
                    <span className="result-text">Queen of Hearts Tarts and More</span>
                    <span>4.25/5</span>
                </li>
                <li className="result list-group-item list-group-item-action">
                    <span className="result-prefix">5</span>
                    <span className="result-text">Ye Old Pie Shoppe</span>
                    <span>5/5</span>
                </li>
                <li className="result list-group-item list-group-item-action">
                    <span className="result-prefix">6</span>
                    <span className="result-text">O'Hare Deep Dish Pizza Pies</span>
                    <span>3/5</span>
                </li>
                <li className="result list-group-item list-group-item-action">
                    <span className="result-prefix">7</span>
                    <span className="result-text">Best Bakery Cakes and More</span>
                    <span>5/5</span>
                </li>
                <li className="result list-group-item list-group-item-action">
                    <span className="result-prefix">8</span>
                    <span className="result-text">Townsville Bakery</span>
                    <span>3/5</span>
                </li>
                <li className="result list-group-item list-group-item-action">
                    <span className="result-prefix">9</span>
                    <span className="result-text">The King's Crown: Pub, Ales, and Meatpies</span>
                    <span>3.5/5</span>
                </li>
                <li className="result list-group-item list-group-item-action">
                    <span className="result-prefix">10</span>
                    <span className="result-text">Patti-Cakes Handpies</span>
                    <span>5/5</span>
                </li>
                <li className="result list-group-item list-group-item-action">
                    <span className="result-prefix">11</span>
                    <span className="result-text">Easy As... Take and Bake Pies</span>
                    <span>4.25/5</span>
                </li>
                <li className="result list-group-item list-group-item-action">
                    <span className="result-prefix">12</span>
                    <span className="result-text">Piece of... Take and Bake Cakes</span>
                    <span>4.25/5</span>
                </li>
                <li className="result list-group-item list-group-item-action">
                    <span className="result-prefix">13</span>
                    <span className="result-text">Main Street Bakery</span>
                    <span>3.5/5</span>
                </li>
                <li className="result list-group-item list-group-item-action">
                    <span className="result-prefix">14</span>
                    <span className="result-text">Cameron's Confections</span>
                    <span>2.5/5</span>
                </li>
                <li className="result list-group-item list-group-item-action">
                    <span className="result-prefix">15</span>
                    <span className="result-text">Dessert Island</span>
                    <span>5/5</span>
                </li>
            </ul>
        </div>
    </div>

export default DisguisedAds;