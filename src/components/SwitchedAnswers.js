import { useState } from "react";

const SwitchedAnswers = () => {
    const [page, setPage] = useState(0);

    return (
        <div>
            {
                page === 0 ?
                    <></>
                    :
                    page === 1 ?
                        <></>
                        :
                        page === 2 ?
                            <></>
                            :
                            <></>
            }
        </div>
    )
}

export default SwitchedAnswers;