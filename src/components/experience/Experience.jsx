import React from "react"
import "./experience.css"
import {BsPatchCheckFill} from "react-icons/bs"

const Experience = () => {
    return (
        <section id= "experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontEnd">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="eexperience__details">
                          <BsPatchCheckFill className="experience__detail-icon" />
                          <div>
                          <h4>HTML</h4>
                          <small className="tet-light">Experienced</small>
                          </div>
                        </article>

                        <article className="experience__details">
                          <BsPatchCheckFill className="experience__detail-icon" />
                          <div>
                            <h4>CSS</h4>
                            <small className="tet-light">Intermediate</small>
                          </div>
                         
                        </article>

                        <article className="eexperience__details">
                          <BsPatchCheckFill className="experience__detail-icon" />
                          <div>
                           <h4>JavaScript</h4>
                           <small className="tet-light">Experienced</small>
                          </div>
                        </article>

                        <article className="eexperience__details">
                          <BsPatchCheckFill className="experience__detail-icon" />
                          <div>
                          <h4>ReactJS</h4>
                          <small className="tet-light">Experienced</small>
                          </div>
                        </article>

                        <article className="eexperience__details">
                          <BsPatchCheckFill className="experience__detail-icon" />
                          <div>
                          <h4>Tailwind</h4>
                          <small className="tet-light">Experienced</small>
                          </div>
                        </article>
                    </div>

                </div>
                {/*END OF FRONTEND*/}

                <div className="experience__backEnd">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className="eexperience__details">
                          <BsPatchCheckFill className="experience__detail-icon" />
                          <div>
                          <h4>Node JS</h4>
                          <small className="tet-light">Experienced</small>
                          </div>
                        </article>

                        <article className="eexperience__details">
                          <BsPatchCheckFill className="experience__detail-icon" />
                          <div>
                          <h4>Solidity</h4>
                          <small className="tet-light">Experienced</small>
                          </div>
                        </article>

                        <article className="eexperience__details">
                          <BsPatchCheckFill className="experience__detail-icon" />
                          <div>
                          <h4>Hardhat</h4>
                          <small className="tet-light">Experienced</small>
                          </div>
                        </article>

                        <article className="eexperience__details">
                          <BsPatchCheckFill className="experience__detail-icon" />
                          <div>
                          <h4>Python</h4>
                          <small className="tet-light">Basic</small>
                          </div>
                        </article>

                        <article className="eexperience__details">
                          <BsPatchCheckFill className="experience__detail-icon" />
                          <div>
                            <h4>Next JS</h4>
                           <small className="tet-light">Intermediate</small>
                           </div>
                        </article>
                    </div>


                </div>
            </div>
            </section>
    )
}
export default Experience