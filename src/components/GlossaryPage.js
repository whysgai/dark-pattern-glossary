import AdditionalItems from "./AdditionalItems";
import Confirmshaming from "./Confirmshaming";
import DeceptiveTimers from "./DeceptiveTimers";
import DisguisedAds from "./DisguisedAds";
import ForcedContinuity from "./ForcedContinuity";
import OptIns from "./OptIns";
import SwitchedAnswers from "./SwitchedAnswers";
import TrammelNet from "./TrammelNet";

const GlossaryPage = props =>
    <div className="glossary-page">
        {
            props.activeIndex === "Additional Items" ?
                <AdditionalItems/> 
                :
                props.activeIndex === "Confirm-shaming" ?
                    <Confirmshaming/> 
                    :
                    props.activeIndex === "Deceptive Timers" ?
                        <DeceptiveTimers/> 
                        :
                        props.activeIndex === "Disguised Ads" ?
                            <DisguisedAds/> 
                            :
                            props.activeIndex === "Forced Continuity" ?
                                <ForcedContinuity/> 
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