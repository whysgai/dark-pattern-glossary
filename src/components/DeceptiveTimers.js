import { useState } from "react";

const DeceptiveTimers = () => {
    const [page, setPage] = useState(0);
    const [doohickies, setDoohickies] = useState(0);
    const [cartCount, setCartCount] = useState(0);

    return (
        <div>
            <div>
                <img src="../media/doohicky.jpg" alt="Doohicky and springs"/>
                <p>Description of the doohicky</p>
            </div>
            <div>
                <button>Cart: <span></span></button>
                <h3>Doohicky Set</h3>
                <h4>Sale price: $19.75 <span>$35.00</span></h4>
                <h4>Sale ends in <span></span></h4>
                <h4>Only <span></span> remain at this price</h4>
                <label>
                    Quantity:
                    <input type="number"/>
                </label>
                <button>Add to cart</button>
            </div>        
           
        </div>
    )
}

export default DeceptiveTimers;