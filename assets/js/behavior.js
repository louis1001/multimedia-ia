const duracionAnimacionTitulo = 100 // Segundos
const tituloCompleto = "Bienvenido... a hymle."

const nums = []

window.addEventListener('load', ()=>{
    const bannerTitulo = document.querySelector("#banner-titulo .texto-animable")

    let tiempoInicial = undefined
    let pasos = 0
    let palabraConstruida = ""
    const manejarAnimacionTitulo = function(){
        const caracterActual = pasos
        nums.push(caracterActual)

        palabraConstruida += tituloCompleto[caracterActual]
        
        bannerTitulo.innerHTML = "> " + palabraConstruida
        if (pasos < tituloCompleto.length - 1){
            pasos += 1

            let cambioEnDuracion = ((Math.random() * 100) - 50)
            if(palabraConstruida.endsWith("...")){
                cambioEnDuracion += 1000
            }
            setTimeout(manejarAnimacionTitulo, duracionAnimacionTitulo + cambioEnDuracion)
        }
    }
    setTimeout(manejarAnimacionTitulo, duracionAnimacionTitulo)
})
