export function WatcherPreview({ watcher }) {
    return (
        <article className='watcher'>
            <img src={`https://robohash.org/${watcher.name}?set=set1`} alt='' />
            <h3>{watcher.name}</h3>
            <hr />
            <div className='watcher-btns-wrapper'>
                <button>X</button>
                <button>Select</button>
            </div>
        </article>
    )
}
