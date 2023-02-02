export function WatcherPreview({ watcher, onRemoveWatcher, onSelectWatcher }) {
    return (
        <article className='watcher'>
            <img src={`https://robohash.org/${watcher.name}?set=set1`} alt='' />
            <h3>{watcher.name}</h3>
            <hr />
            <div className='watcher-btns-wrapper'>
                <button onClick={() => onRemoveWatcher(watcher._id)} className='btn primary'>
                    X
                </button>
                <button onClick={onSelectWatcher} className='btn primary'>
                    Select
                </button>
            </div>
        </article>
    )
}
