import { useState } from "react";

const ForcedContinuity = () => {
    const [page, setPage] = useState(0);
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [checked, setChecked] = useState(false);
    const [cardname, setCardName] = useState("");
    const [cardnum, setCardNum] = useState("");
    const [cardCCV, setCardCCV] = useState("");

    const clearAll = () => {
        setFname("");
        setLname("");
        setEmail("");
        setChecked("");
    }

    return (
        <div className="forced-continuity standard-layout">
            <div className="card card-body">
                <h3>Begin Your Free Trial</h3>            
                {
                    page === 0 ?
                        <>
                            <h5>Enter your contact info:</h5>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="forced-con-fname" value={fname}
                                    onChange={(e) => setFname(e.target.value)}
                                />
                                <label htmlFor="forced-con-fname">First Name <span className="req-asterisk">*</span></label>
                            </div>                            
                            <div className="form-floating">
                                <input type="text" className="form-control" id="forced-con-lname" value={lname} onChange={(e) => setLname(e.target.value)}/>
                                <label htmlFor="forced-con-lname">Last Name <span className="req-asterisk">*</span></label>
                            </div>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="forced-con-email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                <label htmlFor="forced-con-email">Email Address <span className="req-asterisk">*</span></label>
                            </div>
                            <label className="btn btn-outline-success btn-terms" >
                                I have read the Terms and Conditions <span className="req-asterisk">*</span>
                                <input type="checkbox" onChange={() => setChecked(!checked)}/>
                            </label>
                            <button className="btn btn-primary btn-medium-text" onClick={() => {clearAll(); setPage(1)}} 
                                disabled={fname !== "" && lname !== "" && email !== "" && checked ? false : true}
                            >
                                Continue
                            </button>
                            <span className="req-legend"><span className="req-asterisk">*</span> = Required</span>
                        </>
                        :
                        page === 1 ?
                            <>
                                <h5>Enter your payment info:</h5>
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="forced-con-cardname" value={cardname} onChange={(e) => setCardName(e.target.value)}/>
                                    <label htmlFor="forced-con-cardname">Name on Card</label>
                                </div>
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="forced-con-cardnum" value={cardnum} onChange={(e) => setCardNum(e.target.value)}/>
                                    <label htmlFor="forced-con-cardnum">Card Number</label>
                                </div>
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="forced-con-ccv" value={cardCCV} onChange={(e) => setCardCCV(e.target.value)}/>
                                    <label htmlFor="forced-con-ccv">CCV / Security Code</label>
                                </div>
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="forced-con-expdate"/>
                                    <label htmlFor="forced-con-expdate">Experation Date</label>
                                </div> 
                                <button onClick={() => setPage(2)}>Continue</button>
                                <span className="req-legend"><span className="req-asterisk">*</span> = Required</span>
                            </>
                            :
                            <>
                                <h3>Thanks for signing up!</h3>
                            </>
                }
            </div>            
        </div>
    )
}

export default ForcedContinuity;