export function AnimalPreview(animal) {
    let keyForUrl = `https://www.google.com/search?q=${animal.type.replace(' ', '%20')}`
    return (
        <article className='animal-preview'>
            <p className='type'>{animal.type}</p>
            <p className='count'>{animal.count}</p>
            <a href={keyForUrl}>
                <button>Search</button>
            </a>
        </article>
    )
}
