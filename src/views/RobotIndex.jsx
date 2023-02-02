import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ErrorBoundary } from '../cmps/ErrorBoundary'
import { RobotFilter } from '../cmps/RobotFilter'
import { RobotList } from '../cmps/RobotList'
import { loadRobots, removeRobot, setFilterBy } from '../store/actions/robot.actions'
import { spendBalance } from '../store/actions/user.actions'


class _RobotIndex extends Component {

    componentDidMount() {
        this.props.loadRobots()
    }


    onRemoveRobot = async (robotId) => {
        try {
            this.props.removeRobot(robotId)
        } catch (err) {
            console.log('err:', err)
        }
    }

    onChangeFilter = (filterBy) => {
        this.props.setFilterBy(filterBy)
        this.props.loadRobots()
    }



    render() {

        const { robots, filterBy } = this.props
        if (!robots) return <div>Loading...</div>

        return (
            <section className='robot-index'>
                <RobotFilter onChangeFilter={this.onChangeFilter} filterBy={filterBy} />
                <Link to='/robot/edit'>Add Robot</Link>
                <ErrorBoundary>
                    <RobotList history={this.props.history} onRemoveRobot={this.onRemoveRobot} robots={robots} />
                </ErrorBoundary>
            </section>
        )
    }
}



const mapStateToProps = storeState => ({
    robots: storeState.robotModule.robots,
    filterBy: storeState.robotModule.filterBy,
})

const mapDispatchToProps = {
    loadRobots,
    removeRobot,
    setFilterBy,
    spendBalance
}

export const RobotIndex = connect(mapStateToProps, mapDispatchToProps)(_RobotIndex)