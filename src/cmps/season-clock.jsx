import { Component } from 'react'
import { utilService } from '../services/util.service'
import winterPng from '../assets/imgs/seasons/winter.png'
import summerPng from '../assets/imgs/seasons/summer.png'
import automnPng from '../assets/imgs/seasons/automn.png'
import springPng from '../assets/imgs/seasons/spring.png'

export class SeasonClock extends Component {
    state = {
        clock: new Date(),
        isDark: true,
    }
    intervalId
    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({ clock: Date.now() })
        }, 1000)
    }

    setTheme = () => {
        this.setState(prevState => ({ isDark: !prevState.isDark }))
    }

    getCurrSeasonImg(currSeason) {
        switch (currSeason.toLowerCase()) {
            case 'winter':
                return <img src={winterPng} alt={`${currSeason}`} />
            case 'summer':
                return <img src={summerPng} alt={`${currSeason}`} />
            case 'spring':
                return <img src={springPng} alt={`${currSeason}`} />
            case 'automn':
                return <img src={automnPng} alt={`${currSeason}`} />
        }
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    render() {
        const clock = utilService.getClock(this.state.clock)
        const currDay = utilService.getDayName(this.state.clock, 'en')
        const currMonth = utilService.getMonthName(this.state.clock)
        const currSeason = utilService.getSeason(this.state.clock)

        return (
            <div onClick={this.setTheme} className={`season ${this.state.isDark ? 'dark' : 'light'}`}>
                <h2>{`${currMonth}(${currSeason})`}</h2>
                {this.getCurrSeasonImg(currSeason)}

                <h3>{currDay}</h3>
                <h4>{clock}</h4>
            </div>
        )
    }
}
