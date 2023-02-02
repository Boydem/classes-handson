import { NavLink, withRouter } from 'react-router-dom'

function _AppHeader(props) {
    function onBack() {
        console.log('props:', props)
        props.history.goBack()
    }

    return (
        <header className='app-header'>
            <section className='container'>
                <h1 className='logo'>React Classes</h1>
                <section className='back'>
                    <button onClick={onBack}>Back</button>
                </section>
                <nav>
                    <NavLink exact to='/'>
                        Watchers
                    </NavLink>
                    <NavLink exact to='/animal'>
                        Animals
                    </NavLink>
                    <NavLink exact to='/seasons'>
                        Seasons
                    </NavLink>
                    <NavLink exact to='/count-down'>
                        Count Down
                    </NavLink>
                    <NavLink to='/mouse-monitor'>Mouse Monitor</NavLink>
                </nav>
            </section>
        </header>
    )
}

export const AppHeader = withRouter(_AppHeader)
