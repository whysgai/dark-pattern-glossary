import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const AdditionalItems = () => {
    const [page, setPage] = useState(0);
    const [doohickies, setDoohickies] = useState(1);
    const [cartCount, setCartCount] = useState(0);
    // const [totalDoohickies, setTotalDoohickies] = useState(0);
    // const [cartEmpty, setCartEmpty] = useState(true);
    const [additionalItems, setAdditionalItems] = useState([true, true, true, true, true]);

    const addDoohickies = (count) => {
        setDoohickies(doohickies + count);
        setCartCount(parseInt(cartCount) + parseInt(count));
    }

    const hideItem = (position) => {
        console.log("Hiding ", position)
        var items = [...additionalItems];
        items[position] = false;
        console.log("Items after update ", items);
        setAdditionalItems(items);
        setCartCount(cartCount - 1);
    };

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
                                        <input className="form-control" min="1" max="10" placeholder="1" type="number" value={doohickies} onChange={(e) => addDoohickies(e.target.value)}/>
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
                            {}
                            <div className="card card-body">
                                <h3>Added to cart!</h3>
                                <p>You just added <span>{doohickies}</span> Doohicky Set(s) to your cart!</p>
                                <p>Items in cart: <span>{cartCount}</span></p>
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
                                    <button className="btn btn-success" onClick={() => setPage(3)}>Checkout</button>
                                    <button className="btn btn-outline-primary" onClick={() => setPage(0)}>Continue Shopping</button>
                                    <ul>
                                        <li><span>Doohicky Set</span><span>Count: {doohickies} <span className="red-x"><FontAwesomeIcon icon={faTimesCircle}/></span></span></li>
                                    </ul>
                                    <p>Additional items you might enjoy:</p>
                                    <ul>
                                        <li className={`${additionalItems[0] ? "" : "hide"}`}><span>Whatchamacallit</span><span>Count: 1 <span className="red-x" onClick={() => hideItem(0)}><FontAwesomeIcon icon={faTimesCircle}/></span></span></li>
                                        <li className={`${additionalItems[1] ? "" : "hide"}`}><span>Thingamajig</span><span>Count: 1 <span className="red-x" onClick={() => hideItem(1)}><FontAwesomeIcon icon={faTimesCircle}/></span></span></li>
                                        <li className={`${additionalItems[2] ? "" : "hide"}`}><span>Whozeewhatzit</span><span>Count: 1 <span className="red-x" onClick={() => hideItem(2)}><FontAwesomeIcon icon={faTimesCircle}/></span></span></li>
                                        <li className={`${additionalItems[3] ? "" : "hide"}`}><span>Doodad Pack</span><span>Count: 1 <span className="red-x" onClick={() => hideItem(3)}><FontAwesomeIcon icon={faTimesCircle}/></span></span></li>
                                        <li className={`${additionalItems[4] ? "" : "hide"}`}><span>Assorted Bits and Bobs Kit</span><span>Count: 1 <span className="red-x" onClick={() => hideItem(4)}><FontAwesomeIcon icon={faTimesCircle}/></span></span></li>
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