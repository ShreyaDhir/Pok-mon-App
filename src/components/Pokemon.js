import React from 'react';
import '../App.css';
 
export function Pokemon({ pokemon }) {
    return (
        <div className="pokemon">
            <div className="name">
                <p>{pokemon.name}</p>
            </div>
            <div className="meta">
                <span>{pokemon.maxHP}</span>
                <span>{pokemon.maxCP}</span>
            </div>
            <div className="image">
            <img src={pokemon.image} alt={pokemon.name} />
            </div>
            <div className="attacks">
                {pokemon.attacks.special.slice(0,3).map(attack => (
                    <span key={`${attack.name}-${attack.damage}`}>{attack.name}</span>
                ))}
            </div>
        </div>
    )
}

//div with the className pokemon.
// in