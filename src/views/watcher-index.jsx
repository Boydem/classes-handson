import { Component } from 'react'
import { connect } from 'react-redux'
import { WatcherList } from '../cmps/watcher-list'
import { loadWatchers } from '../store/actions/watcher.actions'
export class _WatcherIndex extends Component {
    componentDidMount() {
        this.props.loadWatchers()
    }

    render() {
        const { watchers } = this.props
        if (!watchers) return <div className='loader'>Loading...</div>
        return (
            <div className='watcher-index'>
                <h1>Watchers :</h1>
                <WatcherList watchers={watchers} />
            </div>
        )
    }
}

const mapStateToProps = storeState => ({
    watchers: storeState.watcherModule.watchers,
})

const mapDispatchToProps = {
    loadWatchers,
}

export const WatcherIndex = connect(mapStateToProps, mapDispatchToProps)(_WatcherIndex)
