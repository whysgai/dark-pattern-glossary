import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const AdditionalItems = () => {
    const [page, setPage] = useState(0);
    const [doohickies, setDoohickies] = useState(1);
    const [cartCount, setCartCount] = useState(0);
    const [totalDoohickies, setTotalDoohickies] = useState(0);
    const [cartEmpty, setCartEmpty] = useState(true);

    return (
        <>        
            {
                page === 0 ?
                // shopping page
                    <div className="additional-items little-padding">
                        <div className="card card-body">
                            <div className="store-row">                    
                                <div className="store-col">
                                    <img src="media/doohicky.jpg" alt="Doohicky and springs"/>
                                    <p className="doohicky-description">Need a solution to a non-specific problem? Here's your answer: a standard doohicky! This kit comes complete with doohicky, washer, and two springs.</p>
                                </div>
                                <div className="store-col">
                                    <button className="btn btn-secondary cart-btn" onClick={() => setPage(2)}>Cart: <span>{cartCount}</span></button>
                                    <h3>Doohicky Set</h3>
                                    <h4>$19.75</h4>
                                    <br/>
                                    <br/>
                                    <div className="input-group">
                                        <label className="input-group-text">
                                            Quantity:                                
                                        </label>
                                        <input className="form-control" min="1" max="10" placeholder="1" type="number" value={doohickies} onChange={(e) => setDoohickies(e.target.value)}/>
                                    </div>                        
                                    <button className="btn btn-outline-success" 
                                        onClick={
                                            () => {
                                                setCartCount(parseInt(cartCount) + parseInt(doohickies));
                                                setPage(1);
                                            }
                                        }>Add to cart</button>
                                </div>
                            </div>
                        </div>          
                    </div>
                    :
                    page === 1 ?
                    // items added to cart
                        <div className="additional-items lots-of-padding">
                            <div className="card card-body">
                                <h3>Added to cart!</h3>
                                <p>You just added <span>{cartCount}</span> Doohicky Set(s) to your cart!</p>
                                <p>Items in cart: <span>{cartCount + 5}</span></p>
                                <button className="btn btn-success" onClick={() => setPage(2)}>View Cart</button>
                                <button className="btn btn-outline-primary" onClick={() => setPage(0)}>Continue Shopping</button>
                            </div>
                        </div>
                        :
                        page === 2 ?
                        // cart
                            <div className="additional-items little-padding">
                                <div className="card card-body">
                                    <h3>Your Shopping Cart</h3>
                                    <button className="btn btn-success">Checkout</button>
                                    <button className="btn btn-outline-primary">Continue Shopping</button>
                                    <ul>
                                        <li><span>Doohicky Set</span><span>Count: {totalDoohickies} <span className="red-x"><FontAwesomeIcon icon={faTimesCircle}/></span></span></li>
                                    </ul>
                                    <p>Additional items you might enjoy:</p>
                                    <ul>
                                        <li><span>Whatchamacallit</span><span>Count: 1 <span className="red-x"><FontAwesomeIcon icon={faTimesCircle}/></span></span></li>
                                        <li><span>Thingamajig</span><span>Count: 1 <span className="red-x"><FontAwesomeIcon icon={faTimesCircle}/></span></span></li>
                                        <li><span>Whozeewhatzit</span><span>Count: 1 <span className="red-x"><FontAwesomeIcon icon={faTimesCircle}/></span></span></li>
                                        <li><span>Doodad Pack</span><span>Count: 1 <span className="red-x"><FontAwesomeIcon icon={faTimesCircle}/></span></span></li>
                                        <li><span>Assorted Bits and Bobs Kit</span><span>Count: 1 <span className="red-x"><FontAwesomeIcon icon={faTimesCircle}/></span></span></li>
                                    </ul>
                                </div>
                            </div>
                            :
                            <div className="additional-items lots-of-padding">
                                <div className="card card-body">
                                </div>
                            </div>
            }            
        </>
    )
}

export default AdditionalItems;