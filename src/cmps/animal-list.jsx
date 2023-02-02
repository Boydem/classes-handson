import { Component } from 'react'
import { AnimalPreview } from './animal-preview'

export function AnimalList({ animalInfos }) {
    return (
        <ul className='animal-list'>
            {animalInfos.map(animal => (
                <AnimalPreview key={animal.type} animal={animal} />
            ))}
        </ul>
    )
}
