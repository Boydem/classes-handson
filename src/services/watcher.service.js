import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const WATCHERS_KEY = 'watchersDB'

_createWatchers()

export const watcherService = {
    query,
    get,
    remove,
    save,
}

async function query() {
    try {
        const watchers = await storageService.query(WATCHERS_KEY)
        return watchers
    } catch (err) {
        console.log('had issues with getting watchers at service')
        throw err
    }
}

async function get(watcherId) {
    try {
        return await storageService.query(WATCHERS_KEY, watcherId)
    } catch (err) {
        console.log('had issues with getting watcher at service')
        throw err
    }
}

async function remove(watcherId) {
    try {
        return await storageService.remove(WATCHERS_KEY, watcherId)
    } catch (err) {
        console.log('had issues with removing watcher at service')
        throw err
    }
}

async function save(watcher) {
    try {
        if (watcher._id) {
            return await storageService.put(WATCHERS_KEY, watcher)
        } else {
            return await storageService.post(WATCHERS_KEY, watcher)
        }
    } catch (err) {
        console.log('had issues with removing watcher at service')
        throw err
    }
}

function _createWatchers() {
    let watchers = utilService.loadFromStorage(WATCHERS_KEY)
    if (!watchers || !watchers.length) {
        watchers = []
        watchers.push(_createWatcher('Puki', ['movie1', 'movie2', 'movie3']))
        watchers.push(_createWatcher('Muki', ['movie1', 'movie3']))
        watchers.push(_createWatcher('Shablul', ['movie2', 'movie3']))
        utilService.saveToStorage(WATCHERS_KEY, watchers)
    }
}

function _createWatcher(name, movies = ['ocean11', 'ocean12', 'ocean13']) {
    return {
        id: utilService.makeId(),
        name,
        movies,
    }
}
