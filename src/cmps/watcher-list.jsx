import { WatcherPreview } from './watcher-preview'

export function WatcherList({ watchers }) {
    return (
        <ul className='watcher-list'>
            {watchers.map(watcher => (
                <WatcherPreview key={watcher._id} watcher={watcher} />
            ))}
        </ul>
    )
}
