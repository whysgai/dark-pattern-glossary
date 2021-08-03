import { useState } from "react";

const TrammelNet = () => {
    const [page, setPage] = useState(0);
    
    return (
        <div className="trammel-net">
            <div className="card card-body">
            {
                page === 0 ?
                    <>
                        <h3 className="card-title">Are you sure you want to cancel your subscription?</h3>
                        {/* <div> */}
                            <button 
                                className="btn btn-primary btn-medium-text"
                                onClick={() => setPage(0)}
                            >
                                Never mind, I don't want to miss out!
                            </button>
                            <a href="#" 
                                className="link-innocuous"
                                onClick={() => setPage(1)}
                            >
                                Yes (This cannot be undone)
                            </a>
                        {/* </div> */}
                    </>
                    :
                    page === 1 ?
                        <>
                            <h3>Before you go, tell us why:</h3>
                            <textarea rows="5"></textarea>
                            <button
                                className="btn btn-primary btn-medium-text"
                                onClick={() => setPage(0)}
                            >
                                    I think I'll Stay
                            </button>
                            <a href="#" className="link-innocuous" onClick={() => setPage(2)}>Leave (This cannot be undone)</a>
                        </>
                        :
                        page === 2 ?
                            <>
                                <h3>Do any of these options work better?</h3>
                                <div className="trammel-net-plans-row">
                                    <div className="trammel-net-plan">
                                        <h4>Plan 1</h4>
                                        <h5>$5.99 per month</h5>
                                        <ul>
                                            <li>Sync with 2 devices</li>
                                            <li>Monthly newsletter</li>
                                            {/* <li>Your name on our subscriber wall</li> */}
                                        </ul>
                                        <button>Learn more</button>
                                    </div>
                                    <div className="trammel-net-plan">
                                        <h4>Plan 2</h4>
                                        <h5>$9.99 per month</h5>
                                        <ul>
                                            <li>Sync with unlimited devices</li>
                                            <li>Weekly newsletter</li>
                                            {/* <li>Your name on our subscriber wall</li> */}
                                            <li>Email technical support</li>
                                            <li>Desktop app</li>
                                        </ul>
                                        <button>Learn more</button>
                                    </div>
                                    <div className="trammel-net-plan">
                                        <h4>Plan 3</h4>
                                        <h5>$15.99 per month</h5>
                                        <ul>
                                            <li>Sync with 2 devices</li>
                                            <li>Daily newsletter</li>
                                            {/* <li>Your name in neon on our subscriber wall</li> */}
                                            <li>Live technical support 24/7/365</li>
                                            <li>Desktop app</li>
                                            <li>Hand-picked recommendations</li>
                                            <li>Ad-free experience</li>
                                        </ul>
                                        <button>Learn more</button>
                                    </div>
                                </div>
                                <button>Stay</button>
                                <a href="#" onClick={() => setPage(3)}>Leave</a>
                            </>
                            :
                            <>
                                <h3>You have cancelled your subscription</h3>
                            </>

            }
            </div>
        </div>        
    )
}

export default TrammelNet;