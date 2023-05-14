    // Módulos usado (DB e Lista de entrega)
    import Ruas from "./Ruas.js";
    import Entregas from "./Entregas.js";

    let ruasOrganizadas = []
    let posicaoInserido = 0

function criarArray() {
 

    for(let i = 0; i < Entregas.length; i++){

        let ruaBase = Entregas[i].rua
        let ruaEncontrada = false

            for(let j = 0; j < Ruas.length; j++){

                let ruaExploratoria = Ruas[j]
                
                    if (ruaExploratoria.rua === ruaBase){
                        
                        ruasOrganizadas[posicaoInserido] = ruaExploratoria
                        posicaoInserido++
                        ruaEncontrada = true
                        break;
                    }
        }
        if (ruaEncontrada === false){console.error(`Rua ${ruaBase} não foi encontrada`);}
    }

    ruasOrganizadas.sort(function(a, b) {
        return a.id - b.id;
        
    });
}




criarArray()

console.log(ruasOrganizadas);