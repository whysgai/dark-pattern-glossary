import { useState } from "react";

const ForcedContinuity = () => {
    const [page, setPage] = useState(0);

    return (
        <div>
            <h3>Begin Your Free Trial</h3>
            
            {
                page === 0 ?
                    <>
                        <h4>Enter Your Contact Info</h4>
                        <label>
                            First Name 
                            <input type="text"></input>
                        </label>
                        <label>
                            Last Name 
                            <input type="text"></input>
                        </label>
                        <label>
                            Email 
                            <input type="email"></input>
                        </label>
                        <label className="btn btn-outline-primary">
                            I have read the Terms and Conditions 
                            <input type="checkbox"></input>
                        </label>
                        <button onClick={() => setPage(1)}>Continue</button>
                    </>
                    :
                    page === 1 ?
                        <>
                            <h4>Enter Payment Info</h4>
                            <label>
                                Name on Card
                                <input type="text"></input>
                            </label>
                            <label>
                                Card Number
                                <input type="text"></input>
                            </label>
                            <label>
                                CCV / Security Code
                                <input type="email"></input>
                            </label>
                            <label>
                                Experation Month
                                <input type="email"></input>
                            </label>
                            <label>
                                Experation Year
                                <input type="email"></input>
                            </label>
                            <button onClick={() => setPage(2)}>Continue</button>
                        </>
                        :
                        <>
                            <h3>Thanks for signing up!</h3>
                        </>
            }
            
        </div>
    )
}

export default ForcedContinuity;