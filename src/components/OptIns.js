import { useState } from "react";

const OptIns = () =>{
    const [page, setPage] = useState(0);

    return (
        <div>
            {
                page === 0 ?
                    <>
                        <h3>Sign Up</h3>
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
                        <button>Continue</button>
                        <label>
                            Sell my data 
                            <input type="checkbox" checked></input>
                        </label>
                        <label>
                            Send me spam 
                            <input type="checkbox" checked></input>
                        </label>
                    </>
                    :
                    page === 1 ?
                        <></>
                        :
                        <></>
            }

        </div>
    )
}

export default OptIns;