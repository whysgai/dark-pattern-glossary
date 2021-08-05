import { useState } from "react";
import '../media/download.jfif'

const DeceptiveTimers = () => {
    const [page, setPage] = useState(0);
    const [doohickies, setDoohickies] = useState(0);
    const [cartCount, setCartCount] = useState(0);

    return (
        <div className="deceptive-timers standard-layout">
            <div className="card card-body">
                <div className="store-col">
                    <img src={"../media/doohicky.jpg"} alt="Doohicky and springs"/>
                    <p>Description of the doohicky</p>
                </div>
                <div className="store-col">
                    <button className="btn btn-secondary">Cart: <span>0</span></button>
                    <h3>Doohicky Set</h3>
                    <h4>Sale price: $19.75 <span className="strikethrough">$35.00</span></h4>
                    <h4>Sale ends in <span></span></h4>
                    <h4>Only <span></span> remain at this price</h4>
                    <label className="form-label">
                        Quantity:
                        <input className="form-control" min="1" max="10" placeholder="1" type="number"/>
                    </label>
                    <button className="btn btn-outline-success">Add to cart</button>
                </div>
            </div>          
        </div>
    )
}

export default DeceptiveTimers;