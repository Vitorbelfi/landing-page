import imgMichael from "./michelchandlervitoria.png"
import Style from "./img.module.css"

function img ( props ) {
    return(          
            
        <>
            <div>
                <img  src={imgMichael} alt="" className={Style.michelchandler} />
            </div>
        </>
        
    )
}
export default img;