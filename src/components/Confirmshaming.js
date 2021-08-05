import { useState } from "react";

const Confirmshaming = () =>{
    const [page, setPage] = useState(0);

    return(
        <div className="confirmshaming standard-layout">
            <div className="card card-body">
                {
                    page === 0 ?
                        <>
                            <h3>Please choose which excellent emails you'd like to receive:</h3>
                            <label className="btn btn-outline-primary btn-terms" >
                                Delightful Daily Updates
                                <input type="checkbox" defaultChecked/>
                            </label>
                            <label className="btn btn-outline-primary btn-terms" >
                                Wonderful Weekly Updates
                                <input type="checkbox" defaultChecked/>
                            </label>
                            <label className="btn btn-outline-primary btn-terms" >
                                Spectacular Sales, Deals, and Steals
                                <input type="checkbox" defaultChecked/>
                            </label>
                            <label className="btn btn-outline-primary btn-terms" >
                                Terrific Tips and Tricks
                                <input type="checkbox" defaultChecked/>
                            </label>
                            <button className="btn btn-danger" onClick={() => setPage(1)}>Unsubscribe from all (I like a boring inbox)</button>
                        </>
                        :
                        page === 1 ?
                            <>
                                <h3>Are you sure you don't want to stay?</h3>
                                <button className="btn btn-success" onClick={() => setPage(0)}>Nevermind, I don't want to miss out!</button>
                                <a href="#" className="link-innocuous" onClick={() => setPage(2)}>Yes, I'll skip all the coolness</a>
                            </>
                            :
                            <>
                                <h3>You are unsubscribed</h3>
                                <h4>We'll miss you so much, b ut you can always re-subscribe</h4>
                                <button className="btn btn-outline-success" onClick={() => setPage(0)}>Back to preferences</button>
                            </>
                        
                }
            </div>
        </div>
    )
}

export default Confirmshaming;