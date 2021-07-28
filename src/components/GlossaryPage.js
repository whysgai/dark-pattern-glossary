import Confirmshaming from "./Confirmshaming";
import DisguisedAds from "./DisguisedAds";
import TrammelNet from "./TrammelNet";

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
                                            <TrammelNet/> 
                                            :
                                            <span>Welcome</span>
        }
    </div>

export default GlossaryPage;