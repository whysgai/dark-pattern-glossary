import { useState } from "react";

const AdditionalItems = () => {
    const [page, setPage] = useState(0);
    const [doohickies, setDoohickies] = useState(0);
    const [cartCount, setCartCount] = useState(0);

    return (
        <div>
            <h3>Begin Your Free Trial</h3>            
            {
                page === 0 ?
                // shopping page
                    <>
                        <div>
                            <img src="../media/doohicky.jpg" alt="Doohicky and springs"/>
                            <p>Description of the doohicky</p>
                        </div>
                        <div>
                            <button>Cart: <span></span></button>
                            <h3>Doohicky Set</h3>
                            <h4>$19.99</h4>
                            <label>
                                Quantity:
                                <input type="number"/>
                            </label>
                            <button>Add to cart</button>
                        </div>
                    </>
                    :
                    page === 1 ?
                    // items added to cart
                        <>
                            <h3>Added to cart!</h3>
                            <p>You just added <span>{doohickies}</span> Doohicky Set(s) to your cart!</p>
                            <p>Items in cart: <span>{doohickies + 5}</span></p>
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
                                    <li><span>Doohicky Set</span><span>Count: <span>{doohickies}</span></span></li>
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