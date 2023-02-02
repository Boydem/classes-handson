import { Component } from 'react'
import { AnimalList } from './animal-list'

export class AnimalIndex extends Component {
    animalInfos = [
        { type: 'Malayan Tiger', count: 787 },
        { type: 'Mountain Gorilla', count: 212 },
        { type: 'Fin Whale', count: 28 },
    ]

    render() {
        return (
            <div className='animal-index'>
                <h1>Animals :</h1>
                <AnimalList animalInfos={this.animalInfos} />
            </div>
        )
    }
}
