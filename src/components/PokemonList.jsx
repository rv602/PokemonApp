import React from 'react'

function PokemonList(props) {
    return (
        <>
            {props.pokemon.map(p =>
                <div key={p}>{p}</div>
            )}
        </>
    )
}

export default PokemonList
