function ExibeNota( props ) {
    function MostraNota()
    {
        alert( props.nota )
    }
    return(
        <>
            <div>
                <h1>{props.mensagem}</h1>
                <button onClick={MostraNota}>Ver minha nota</button>
            </div>
        </>
    )
}
export default ExibeNota;