import Confirmshaming from "./Confirmshaming";
import DisguisedAds from "./DisguisedAds";
import OptIns from "./OptIns";
import SwitchedAnswers from "./SwitchedAnswers";
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
                                    <OptIns/>
                                    :
                                    props.activeIndex === "Switchted Answers" ?
                                        <SwitchedAnswers/> 
                                        :
                                        props.activeIndex === "Trammel Net" ?
                                            <TrammelNet/> 
                                            :
                                            <span>Welcome</span>
        }
    </div>

export default GlossaryPage;