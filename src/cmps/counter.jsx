import { Component } from 'react'
import { utilService } from '../services/util.service'

export class Counter extends Component {
    state = {
        counter: (Date.now() - this.props?.toTime) / 1000 || this.props.startFrom,
    }
    CounterTimeoutId
    componentDidMount() {
        this.CounterTimeoutId = setInterval(this.onDeacrease, 1000)
    }
    onDeacrease = () => {
        this.setState(prevState => ({ counter: prevState.counter - 1 }))
    }
    componentDidUpdate() {
        if (this.state.counter === 0) {
            clearInterval(this.CounterTimeoutId)
            this.props.onDone()
        }
    }
    componentWillUnmount() {
        clearInterval(this.CounterTimeoutId)
    }
    render() {
        const { counter } = this.state

        const seconds = Math.floor(counter % 60)
        const minutes = Math.floor((counter / 60) % 60)
        const hours = Math.floor(((counter * 1000) / (1000 * 60 * 60)) % 24)

        return (
            <div className={`countdown ${counter <= 5 && 'time-runs'}`}>
                {this.props.toTime ? hours + ':' + minutes + ':' + seconds : counter}
            </div>
        )
    }
}
