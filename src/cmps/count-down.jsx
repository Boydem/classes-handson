import { Counter } from './counter'

export function CountDown() {
    return (
        <Counter
            startFrom={10}
            onDone={() => {
                console.log('Done!')
            }}
            toTime={Date.now() - 1000 * 10}
        />
    )
}
