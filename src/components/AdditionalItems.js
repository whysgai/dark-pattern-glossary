import { useState } from "react";

const AdditionalItems = () => {
    const [page, setPage] = useState(0);

    return (
        <div>
            <h3>Begin Your Free Trial</h3>            
            {
                page === 0 ?
                    <>

                    </>
                    :
                    page === 1 ?
                        <>

                        </>
                        :
                        <>

                        </>
            }            
        </div>
    )
}

export default AdditionalItems;