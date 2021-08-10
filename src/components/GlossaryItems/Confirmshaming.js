import { useState } from "react";

const Confirmshaming = () =>{
    const [page, setPage] = useState(0);

    return(
        <>
            {
                page === 0 ?
                    <div className="confirmshaming little-padding">
                        <div className="card card-body">
                            <h3>Please choose which excellent emails you'd like to receive:</h3>
                            <label className="btn btn-outline-primary btn-terms" >
                                Delightful Daily Updates &nbsp;
                                <input type="checkbox" defaultChecked/>
                            </label>
                            <label className="btn btn-outline-primary btn-terms" >
                                Wonderful Weekly Updates &nbsp;
                                <input type="checkbox" defaultChecked/>
                            </label>
                            <label className="btn btn-outline-primary btn-terms" >
                                Spectacular Sales, Deals, and Steals &nbsp;
                                <input type="checkbox" defaultChecked/>
                            </label>
                            <label className="btn btn-outline-primary btn-terms" >
                                Terrific Tips and Tricks &nbsp;
                                <input type="checkbox" defaultChecked/>
                            </label>
                            <button className="btn btn-danger" onClick={() => setPage(1)}>Unsubscribe from all (I like a boring inbox)</button>
                        </div>
                    </div>
                    :
                    page === 1 ?
                        <div className="confirmshaming lots-of-padding">
                            <div className="card card-body">
                                <h3>Are you sure you don't want to stay?</h3>
                                <button className="btn btn-success" onClick={() => setPage(0)}>Nevermind, I don't want to miss out!</button>
                                <a href="#" className="link-innocuous" onClick={() => setPage(2)}>Yes, I'll skip all the coolness</a>
                            </div>
                        </div>
                        :
                        <div className="confirmshaming lots-of-padding">
                            <div className="card card-body">
                                <h3>You are unsubscribed</h3>
                                <h4>We'll miss you so much, but you can always re-subscribe</h4>
                                <button className="btn btn-outline-success" onClick={() => setPage(0)}>Back to preferences</button>
                            </div>
                        </div>
                    
            }
            
        </>
    )
}

export default Confirmshaming;