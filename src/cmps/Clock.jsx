import { Component } from 'react'
// import { interval } from 'rxjs'

export class Clock extends Component {
    state = {
        counter: this.props.startTime || 0,
        isDark: false,
    }

    intervalId

    componentDidMount() {
        console.log('this.props:', this.props)
        // this.setState({ counter: 100 }, ()=>{
        //     console.log('this.state:', this.state)
        // })
        // this.setState(prevState => ({ counter: prevState.counter + 1 }))

        this.intervalId = setInterval(this.onIncrease, 1000)
        console.log('Mounted')
    }

    componentDidUpdate(prevProps, prevState) {}

    onIncrease = () => {
        this.setState(prevState => ({ counter: prevState.counter + 1 }))
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    render() {
        // console.log('render')
        const { counter, isDark } = this.state
        const isDarkClass = isDark ? 'dark' : ''
        return (
            <section className={`clock ${isDarkClass}`}>
                <h1 onClick={this.onIncrease}>Clock</h1>
                <h2>Count: {counter}</h2>
            </section>
        )
    }
}
