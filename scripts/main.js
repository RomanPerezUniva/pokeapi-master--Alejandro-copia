/* const getPokemon = async () =>{

    const url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`
    const response = await fetch(url)

    switch (response.status){
        case 200:
            const data = await response.json()
            showPokemon(data.results)
            break
        case 400:
            console.log('Error de cliente' + response.status)
            break
        default:
            console.log('Error desconocido' + response.status)
        }
    
}

const showPokemon = pokedata =>{
    pokedata.forEach( async pokeUrl =>{
        const response = await fetch(pokeUrl.url)
        switch (response.status){
            case 200:
                const data = await response.json()
                draw(data)
                break
            case 400:
                console.log('Error de cliente' + response.status)
                break
            default:
                console.log('Error desconocido' + response.status)
        }
    })
}
 */
const draw = data => {
    const container = document.createElement('div')
    container.classList.add("cardContainer")
    console.log(data)
    const pokeHTML = `
    <div class="container">
        <div class="row buttons">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>0</div>
        </div>
        <div class="row buttons-opcions">
            <div>Cancelar</div>
            <div>borrar una cosa</div>
            <div>enter</div>
        </div>
        <div class="row display-opcions">
            <div>Cancelar</div>
            <div>borrar una cosa</div>
            <div>enter</div>
        </div>
    </div>
        `
    container.insertAdjacentHTML('beforeend', pokeHTML)
    myContent = document.getElementById("myContent")
    myContent.appendChild(container)
}

/*Evento para que cuando la persona de click en el boton
se haga la peticion*/
pokeli.addEventListener('click', () =>{
    pokeball = document.getElementById("pokeball").style.display = "none"
    myContent = document.getElementById("myContent").style.display = "grid"
    getPokemon()
})