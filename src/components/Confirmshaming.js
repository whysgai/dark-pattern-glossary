import { useState } from "react";

const Confirmshaming = () =>{
    const [page, setPage] = useState(0);

    return(
        <div className="card card-body confirmshaming">
            {
                page === 0 ?
                    <>
                        <h3>Please choose which email lists you'd like to stop receiving:</h3>
                        <label>
                            Daily Updates
                            <input type="checkbox"/>
                        </label>
                        <label>
                            Weekly Updates
                            <input type="checkbox"/>
                        </label>
                        <label>
                            Sales, Deals, and Steals
                            <input type="checkbox"/>
                        </label>
                        <label>
                            Tips and Tricks
                            <input type="checkbox"/>
                        </label>
                        <button>Update preferences</button>
                        <a href="#" onClick={() => setPage(1)}>Unsubscribe from all</a>
                    </>
                    :
                    page === 1 ?
                        <>
                            <h3>Are you sure you don't want to stay?</h3>
                            <button onClick={() => setPage(0)}>Nevermind, I don't want to miss out!</button>
                            <a href="#" onClick={() => setPage(2)}>Yes, I'll skip all the coolness</a>
                        </>
                        :
                        <>
                            <h3>You are unsubscribed</h3>
                            <h4>We'll miss you so much</h4>
                            <button onClick={() => setPage(0)}>Back to preferences</button>
                        </>
                    
            }
        </div>
    )
}

export default Confirmshaming;