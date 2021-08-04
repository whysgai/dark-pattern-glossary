import { useState } from "react";

const OptIns = () =>{
    const [page, setPage] = useState(0);
    const [data, setData] = useState(true);
    const [spam, setSpam] = useState(true)

    return (
        <div className="optins standard-layout">
            <div className="card card-body">
                {
                    page === 0 ?
                        <>
                            <h3>Sign Up</h3>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="optins-fname"></input>
                                <label htmlFor="optins-fname">First Name</label>
                            </div>                            
                            <div className="form-floating">
                                <input type="text" className="form-control" id="optins-lname"></input>
                                <label htmlFor="optins-lname">Last Name</label>
                            </div>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="optins-email"></input>
                                <label htmlFor="optins-email">Email Address</label>
                            </div>
                            <label className="btn btn-outline-success btn-terms">
                                I have read the Terms and Conditions 
                                <input type="checkbox"></input>
                            </label>
                            <button className="btn btn-primary" onClick={() => setPage(1)}>Continue</button>
                            <label className="check-data">
                                Sell my data 
                                <input type="checkbox" defaultChecked onClick={() => setData(!data)}/>
                            </label>
                            <label className="check-spam">
                                Send me spam 
                                <input type="checkbox" defaultChecked onClick={() => setSpam(!spam)}/>
                            </label>
                        </>
                        :
                        <>
                            <h3>You've signed up!</h3>
                            {
                                data ?
                                    <h4>Thanks for giving us permission to sell your data</h4>
                                    :
                                    <h4>You kept your data your own</h4>
                            }
                            {
                                spam ?
                                    <h4>Thanks for giving us permission to send you spam</h4>
                                    :
                                    <h4>You kept your inbox safe</h4>
                            }
                        </>
                }
            </div>
        </div>
    )
}

export default OptIns;