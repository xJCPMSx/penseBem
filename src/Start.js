var programa, num, tentativa, pontos
var gabarito = new Array(5)

var gabarito021 = new Array('B','A','A','D','C')
var gabarito022 = new Array('B','D','A','A','D')

function Start(){
    const iniciar = () =>{
        programa = prompt("Digite o número do programa (021 a 026):","")

        if(programa== "021")
            gabarito = gabarito021
        else if (programa == "022")
            gabarito = gabarito022
        else{
        alert("Numero invalido! Digite valor entre 021 e 026")
        iniciar()
        }

        pontos = 0
        num = 1
        tentativa = 1

        document.getElementById('visor1').value =`${programa} -> ${num}:`
        document.getElementById('visor2').value =`Tentativa ${tentativa} de 3`
    }

    return(
        <input type="button" id="botaoStart" value="Start/Reset Jogo" onClick={iniciar} />
    )
}

export default Start