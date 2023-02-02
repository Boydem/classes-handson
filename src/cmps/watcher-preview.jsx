export function WatcherPreview({ watcher }) {
    console.log('watcher:', watcher)
    return (
        <article key={watcher._id} className='watcher'>
            <h3>{watcher.name}</h3>
            <hr />
            <div className='watcher-btns-wrapper'>
                <button>X</button>
                <button>Select</button>
            </div>
        </article>
    )
}
