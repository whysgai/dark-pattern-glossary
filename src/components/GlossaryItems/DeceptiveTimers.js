import { useState } from "react";

const DeceptiveTimers = () => {
    const [doohickies, setDoohickies] = useState(1);
    const [cartCount, setCartCount] = useState(0);
    const [remaining, setRemaining] = useState(Math.floor(Math.random() * 6) + 1);
    const [timeLeft, setTimeLeft] = useState(Math.floor(Math.random() * 24) + 1);

    return (
        <div className="deceptive-timers little-padding">
            <div className="card card-body">
                <div className="store-row">                    
                    <div className="store-col">
                        <img src="media/doohicky.jpg" alt="Doohicky and springs"/>
                        <p className="doohicky-description">Need a solution to a non-specific problem? Here's your answer: a standard doohicky! This kit comes complete with doohicky, washer, and two springs.</p>
                    </div>
                    <div className="store-col">
                        <button className="btn btn-secondary cart-btn">Cart: <span>{cartCount}</span></button>
                        <h3>Doohicky Set</h3>
                        <h4>Sale price: $19.75 <span className="strikethrough">$35.00</span></h4>
                        <span>Sale ends in <span>{timeLeft}</span> hours</span>
                        <span>Only <span>{remaining}</span> remain at this price</span>
                        <div className="input-group">
                            <label className="input-group-text">
                                Quantity:                                
                            </label>
                            <input className="form-control" min="1" max="10" placeholder="1" type="number" value={doohickies} onChange={(e) => setDoohickies(e.target.value)}/>
                        </div>                        
                        <button className="btn btn-outline-success" onClick={() => setCartCount(parseInt(cartCount) + parseInt(doohickies))}>Add to cart</button>
                    </div>
                </div>
            </div>          
        </div>
    )
}

export default DeceptiveTimers;