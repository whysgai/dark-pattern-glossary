import { useState } from "react";

const AdditionalItems = () => {
    const [page, setPage] = useState(0);
    const [currentDoohickies, setCurrentDoohickies] = useState(1);
    const [totalDoohickies, setTotalDoohickies] = useState(0);
    const [cartEmpty, setCartEmpty] = useState(true);

    return (
        <div>        
            {
                page === 0 ?
                // shopping page
                    <>
                        <div>
                            <img src="../media/doohicky.jpg" alt="Doohicky and springs"/>
                            <p>Description of the doohicky</p>
                        </div>
                        <div>
                            <button>Cart: <span>{cartEmpty ? 0 : totalDoohickies + 5}</span></button>
                            <h3>Doohicky Set</h3>
                            <h4>$19.99</h4>
                            <label>
                                Quantity:
                                <input className="doohicky-input" type="number" value={currentDoohickies} onChange={(e) => setCurrentDoohickies(e.target.value)}/>
                            </label>
                            <button onClick={() => {setTotalDoohickies(totalDoohickies + currentDoohickies); setPage(1)}}>Add to cart</button>
                        </div>
                    </>
                    :
                    page === 1 ?
                    // items added to cart
                        <>
                            <h3>Added to cart!</h3>
                            <p>You just added <span>{totalDoohickies}</span> Doohicky Set(s) to your cart!</p>
                            <p>Items in cart: <span>{totalDoohickies + 5}</span></p>
                            <button>View Cart</button>
                            <button>Continue Shopping</button>
                        </>
                        :
                        page === 2 ?
                        // cart
                            <>
                                <h3>Cart</h3>
                                <button>Checkout</button>
                                <button>Continue Shopping</button>
                                <ul>
                                    <li><span>Doohicky Set</span><span>Count: <span>{totalDoohickies}</span></span></li>
                                </ul>
                                <ul>
                                    <li><span>Whatchamacallit</span><span>Count: 1</span></li>
                                    <li><span>Thingamajig</span><span>Count: 1</span></li>
                                    <li><span>Whozeewhatzit</span><span>Count: 1</span></li>
                                    <li><span>Doodad Pack</span><span>Count: 1</span></li>
                                    <li><span>Assorted Bits and Bobs Kit</span><span>Count: 1</span></li>
                                </ul>
                            </>
                            :
                            <></>
            }            
        </div>
    )
}

export default AdditionalItems;