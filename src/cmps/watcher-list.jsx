import { WatcherPreview } from './watcher-preview'

export function WatcherList({ watchers, onSelectWatcher, onRemoveWatcher }) {
    return (
        <ul className='watcher-list'>
            {watchers.map(watcher => (
                <WatcherPreview
                    key={watcher._id}
                    watcher={watcher}
                    onRemoveWatcher={onRemoveWatcher}
                    onSelectWatcher={onSelectWatcher}
                />
            ))}
        </ul>
    )
}
