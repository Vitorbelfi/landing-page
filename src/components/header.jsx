import Style from "./header.module.css";
import img from "./Captura de tela 2023-08-22 081210.png"

function header ( props ) {
    return(          
            <div className={Style.div1}>
                <img className={Style.ufc} src={img} alt="" />

                <div className={Style.esquerda}>
                    <h2 className={Style.topico}>Atletas</h2>
                    <h2 className={Style.topico}>Roupas</h2>
                    <h2 className={Style.topico}>Lutas</h2>
                    <h2 className={Style.topico}>Noticias</h2>
                </div>
                
                
            </div>          
        
    )
}
export default header;