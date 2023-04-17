import React from "react"
import "./services.css"
import {BiCheck} from "react-icons/bi"

const Services = () => {
    return (

        <section id= "services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                <div className="service__head">
                    <h3>UI/UX Design</h3>
                </div>

                <ul className= "service__list">
                    <li>
                        <BiCheck className="services__list" />
                        <p>Blockchain development and implementation.</p>
                    </li>
                    <li>
                        <BiCheck className="services__list" />
                        <p>Smart contract development and auditing.</p>
                    </li>
                    <li>
                        <BiCheck className="services__list" />
                        <p>Decentralized application (dApp) development.</p>
                    </li>
                    <li>
                        <BiCheck className="services__list" />
                        <p>Initial coin offering (ICO) development and consulting.</p>
                    </li>
                    <li>
                        <BiCheck className="services__list" />
                        <p>Blockchain consulting and strategy development.</p>
                    </li>
                    <li>
                        <BiCheck className="services__list" />
                        <p>Integration of blockchain with existing systems.</p>
                    </li>
                    <li>
                        <BiCheck className="services__list" />
                        <p>Blockchain-based voting systems.</p>
                    </li>
                </ul>
                </article>
                {/*END OF UI/UX*/}
                <article className="service">
                <div className="service__head">
                    <h3>Web Developement</h3>
                </div>

                <ul className= "service__list">
                    <li>
                        <BiCheck className="services__list" />
                        <p>Video tutorial creation.</p>
                    </li>
                    <li>
                        <BiCheck className="services__list" />
                        <p>Written tutorial creation</p>
                    </li>
                    <li>
                        <BiCheck className="services__list" />
                        <p>Live online tutorial sessions.</p>
                    </li>
                    <li>
                        <BiCheck className="services__list" />
                        <p>In-person tutorial sessions.</p>
                    </li>
                    <li>
                        <BiCheck className="services__list" />
                        <p>Creation of tutorial materials such as PDFs and infographics.</p>
                    </li>
                    <li>
                        <BiCheck className="services__list" />
                        <p>Tutorial course development and curriculum design.</p>
                    </li>
                    <li>
                        <BiCheck className="services__list" />
                        <p>Language tutorials for non-native speakers.</p>
                    </li>
                </ul>
                </article>
                {/*WEB DEVELOPEMENT*/}
                <article className="service">
                <div className="service__head">
                    <h3>Tutorials</h3>
                </div>

                <ul className= "service__list">
                    <li>
                        <BiCheck className="services__list" />
                        <p>Construction administration and project management.</p>
                    </li>
                    <li>
                        <BiCheck className="services__list" />
                        <p>Feasibility studies and site analysis.</p>
                    </li>
                    <li>
                        <BiCheck className="services__list" />
                        <p>Detailed design and construction documentation.</p>
                    </li>
                    <li>
                        <BiCheck className="services__list" />
                        <p>Interior design and fit-out.</p>
                    </li>
                    <li>
                        <BiCheck className="services__list" />
                        <p>Sustainable design and green building certification.</p>
                    </li>
                    <li>
                        <BiCheck className="services__list" />
                        <p>Building code compliance and zoning analysis.</p>
                    </li>
                    <li>
                        <BiCheck className="services__list" />
                        <p>Building condition assessments and reports.</p>
                    </li>
                </ul>
                </article>
                {/*END OF TUTORIALS*/}
            </div>
        </section>
    )
}
export default Services