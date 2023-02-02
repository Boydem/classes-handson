export const utilService = {
    getDayName,
    getMonthName,
    getSeason,
    getClock,
}

export function makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}
function getClock(date) {
    const newDate = new Date(date)
    return newDate.toLocaleTimeString()
}

function getDayName(date, locale) {
    date = new Date(date)
    return date.toLocaleDateString(locale, {
        weekday: 'long',
    })
}

function getMonthName(date) {
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]
    const newDate = new Date(date)
    return monthNames[newDate.getMonth()]
    // return
}

function getSeason(date) {
    const month = getMonthName(date)
    switch (month) {
        case 'December':
        case 'January':
        case 'February':
            return 'Winter'
        case 'March':
        case 'April':
        case 'May':
            return 'Spring'
        case 'June':
        case 'July':
        case 'August':
            return 'Summer'
        case 'September':
        case 'October':
        case 'November':
            return 'Autumn'
        default:
            console.log('ERROR IN GET SEASON')
            break
    }
}
