import Welcome from "./GlossaryItems/Welcome";
import AdditionalItems from "./GlossaryItems/AdditionalItems";
import Confirmshaming from "./GlossaryItems/Confirmshaming";
import DeceptiveTimers from "./GlossaryItems/DeceptiveTimers";
import DisguisedAds from "./GlossaryItems/DisguisedAds";
import ForcedContinuity from "./GlossaryItems/ForcedContinuity";
import OptIns from "./GlossaryItems/OptIns";
import SwitchedAnswers from "./GlossaryItems/SwitchedAnswers";
import TrammelNet from "./GlossaryItems/TrammelNet";

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
                                    props.activeIndex === "Switched Answers" ?
                                        <SwitchedAnswers/> 
                                        :
                                        props.activeIndex === "Trammel Net" ?
                                            <TrammelNet/> 
                                            :
                                            <Welcome/>
        }
    </div>

export default GlossaryPage;