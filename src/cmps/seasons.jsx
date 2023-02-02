import { Component } from 'react'

export class Seasons extends Component {
    state = {
        clock: new Date(),
        isDark: true,
    }

    componentDidMount() {
        const { filterBy } = this.props
        this.setState({ filterBy: { ...filterBy } })
    }

    render() {
        console.log('this.now:', this.now)
        return <div className='seasons'>Hello im seasons</div>
    }
}
