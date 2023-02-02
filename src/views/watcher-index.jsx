import { Component } from 'react'
import { connect } from 'react-redux'
import { WatcherList } from '../cmps/watcher-list'
import { utilService } from '../services/util.service'
import { loadWatchers, addWatcher } from '../store/actions/watcher.actions'
export class _WatcherIndex extends Component {
    componentDidMount() {
        this.props.loadWatchers()
    }

    onAddWatcher = () => {
        const name = prompt('Enter name')
        const movies = prompt('Enter movies seperated with comma').split(',')
        const watcher = { name, movies }
        this.props.addWatcher(watcher)
    }

    componentDidUpdate() {
        console.log('this.props.watchers:', this.props.watchers)
    }

    render() {
        const { watchers } = this.props
        if (!watchers) return <div className='loader'>Loading...</div>
        return (
            <div className='watcher-index'>
                <h1>Watchers :</h1>
                <button onClick={this.onAddWatcher}>Add watcher</button>
                <WatcherList watchers={watchers} />
            </div>
        )
    }
}

const mapStoreStateToProps = storeState => ({
    watchers: storeState.watcherModule.watchers,
})

const mapDispatchToProps = {
    loadWatchers,
    addWatcher,
}

export const WatcherIndex = connect(mapStoreStateToProps, mapDispatchToProps)(_WatcherIndex)
