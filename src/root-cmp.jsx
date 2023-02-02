import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import './assets/scss/global.scss'
import { AppHeader } from './cmps/AppHeader'

import { SeasonClock } from './cmps/season-clock'
import { MouseMonitor } from './cmps/mouse-monitor'
import { CountDown } from './cmps/count-down'
import { AnimalIndex } from './views/animal-index'
import { WatcherIndex } from './views/watcher-index'

export function App() {
    return (
        <Router>
            <div className='main-app'>
                <AppHeader />
                <main className='container'>
                    <Switch>
                        <Route path='/animal' component={AnimalIndex} />
                        <Route path='/seasons' component={SeasonClock} />
                        <Route path='/count-down' component={CountDown} />
                        <Route path='/mouse-monitor' component={MouseMonitor} />
                        <Route path='/watcher/:watcherId' component={WatcherIndex} />
                        <Route path='/watcher' component={WatcherIndex} />
                        <Route path='/' component={WatcherIndex} />
                    </Switch>
                </main>
                <footer>
                    <section className='container'>Kobirights 2022 &copy;</section>
                </footer>
            </div>
        </Router>
    )
}
