import Confirmshaming from "./Confirmshaming";
import DisguisedAds from "./DisguisedAds";

const GlossaryPage = props =>
    <div className="glossary-page">
        {
            props.activeIndex === "Additional Items" ?
                <span>Additional Items</span> 
                :
                props.activeIndex === "Confirm-shaming" ?
                    <Confirmshaming/> 
                    :
                    props.activeIndex === "Deceptive Timers" ?
                        <span>Deceptive Timers</span> 
                        :
                        props.activeIndex === "Disguised Ads" ?
                            <DisguisedAds/> 
                            :
                            props.activeIndex === "Forced Continuity" ?
                                <span>Forced Continuity</span> 
                                :
                                props.activeIndex === "Opt-Ins" ?
                                    <span>Opt-Ins</span> 
                                    :
                                    props.activeIndex === "Switchted Answers" ?
                                        <span>Switchted Answers</span> 
                                        :
                                        props.activeIndex === "Trammel Net" ?
                                            <span>Trammel Net</span> 
                                            :
                                            <span>Welcome</span>
        }
    </div>

export default GlossaryPage;