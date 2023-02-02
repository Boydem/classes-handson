import { NavLink, Route } from "react-router-dom"
import { Clock } from "../cmps/Clock"



const Team = () => {
    return (
        <ul>
            <li>Moshe Simcha</li>
            <li>Dan Tsvika</li>
            <li>Shimon Dicaprio</li>
        </ul>
    )
}


const Vision = () => {
    return (
        <ol>
            <li>Save the world</li>
            <li>Take over the world</li>
        </ol>
    )
}

export function About() {
    return (
        <section className="about">
            <section className="title-container">
                <h2>About us and robots</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla minus explicabo ipsum necessitatibus cupiditate facere corrupti, praesentium tempora molestias, accusantium repellendus, in quasi. Iste labore maxime, vitae nulla odit sint.</p>
            </section>
            <nav>
                <NavLink replace to="/about/team">Team</NavLink>
                <NavLink replace to="/about/vision">Vision</NavLink>
            </nav>

            <section>
                <Route path="/about/team" component={Team} />
                <Route path="/about/vision" component={Vision} />
            </section>


            <section>
                <Clock startTime={3}/>
            </section>
        </section>
    )
}
