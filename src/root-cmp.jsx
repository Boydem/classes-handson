import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import './assets/scss/global.scss'
import { AppHeader } from './cmps/AppHeader'
import { Home } from './cmps/home'
import { AnimalList } from './cmps/animal-list'
import { Seasons } from './cmps/seasons'
import { MouseMonitor } from './cmps/mouse-monitor'
import { CountDown } from './cmps/count-down'

export function App() {
    return (
        <Router>
            <div className='main-app'>
                <AppHeader />
                <main className='container'>
                    <Switch>
                        <Route path='/animal' component={AnimalList} />
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
