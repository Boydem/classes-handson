import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import './assets/scss/global.scss'
import { AppHeader } from './cmps/AppHeader'

import { Seasons } from './cmps/seasons'
import { MouseMonitor } from './cmps/mouse-monitor'
import { CountDown } from './cmps/count-down'
import { AnimalIndex } from './cmps/animal-index'
import { Home } from './views/home'

export function App() {
    return (
        <Router>
            <div className='main-app'>
                <AppHeader />
                <main className='container'>
                    <Switch>
                        <Route path='/animal' component={AnimalIndex} />
                        <Route path='/seasons' component={Seasons} />
                        <Route path='/count-down' component={CountDown} />
                        <Route path='/mouse-monitor' component={MouseMonitor} />
                        <Route path='/' component={Home} />
                    </Switch>
                </main>
                <footer>
                    <section className='container'>robotRights 2022 &copy;</section>
                </footer>
            </div>
        </Router>
    )
}
