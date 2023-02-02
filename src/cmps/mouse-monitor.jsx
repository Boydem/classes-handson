import { Component } from 'react'

export class MouseMonitor extends Component {
    state = {
        pos: { x: 0, y: 0 },
        isOn: true,
    }

    onToggleMonitor = () => {
        this.setState(prevState => ({ isOn: !prevState.isOn }))
    }

    updatePos = ev => this.setState({ pos: { x: ev.clientX, y: ev.clientY } })

    componentDidMount() {
        document.addEventListener('mousemove', this.updatePos)
    }

    componentDidUpdate() {
        if (this.state.isOn) {
            document.addEventListener('mousemove', this.updatePos)
        } else {
            document.removeEventListener('mousemove', this.updatePos)
        }
    }

    render() {
        return (
            <section className='mouse-monitor'>
                <h3>Mouse Position</h3>
                <p>
                    x:{this.state.pos.x},y:{this.state.pos.y}
                </p>
                <button onClick={this.onToggleMonitor}>{this.state.isOn ? 'Start' : 'Pause'}</button>
            </section>
        )
    }
}
