// objetos ex1
let cachorro ={ 
    nome: 'Kiko', 
    idade: 19 ,
    raça: 'Vira-Lata'
}
//objetos ex 2
console.log(cachorro.raça)

//objetos ex 3
cachorro.idade = 20
console.log(cachorro.idade)

//arrays ex 1
let pokemons = ['Eevie', 'Vaporeon', 'Flareon', 'Jolteon', 'Charizard']
console.log(pokemons)

//arrays ex 2
console.log(pokemons[3])

//arrays ex 3
pokemons[1] = 'Pikachu'
console.log(pokemons)

//arrays ex 4
pokemons.push('Blastoise')

//arrays ex 5
console.log(pokemons.indexOf('Pikachu'))

//arrays ex 6
pokemons.forEach(function (pokemons) { 
    console.log(pokemons, 'foi capturado')
})