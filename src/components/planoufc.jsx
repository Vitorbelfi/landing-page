import Style from "./planoufc.module.css";


function planoufc ( props ) {
    return(          
            
        <>
            <div className={Style.planopremium}>
                <h2>UFC  </h2>
                <h3>Fight Pass</h3>
                <h3 className={Style.premio}>Premium</h3>
                <span>39,90</span>
            </div>
            <div className={Style.planobasic}>
                <h2>UFC </h2>
                <h3>Fight Pass </h3>
                <h3 className={Style.basico}>Basic</h3>
                <span>29,90</span>
            </div>            
        </>
    )
}
export default planoufc ;