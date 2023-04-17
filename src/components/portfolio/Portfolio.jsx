import React from "react"
import "./portfolio.css"
import  IMG1 from "../../assets/portfolio1.jpg"
import  IMG2 from "../../assets/portfolio2.jpg"
import  IMG3 from "../../assets/portfolio3.jpg"

const data = [
    {
        id: 1,
        image: IMG1,
        title: "Crypto Currecy Dashboard & Financial Visualization",
        github: "https://github.com/Orax101/EthereumQuiz-Site.git",
        demo: "https://ethereum-quiz-site.vercel.app/"
    },
    {
        id: 2,
        image: IMG2,
        title: "Crypto Currecy Dashboard & Financial Visualization",
        github: "https://github.com/Orax101/EthereumQuiz-Site.git",
        demo: "https://ethereum-quiz-site.vercel.app/"
    },
    {
        id: 3,
        image: IMG3,
        title: "Crypto Currecy Dashboard & Financial Visualization",
        github: "https://github.com/Orax101/EthereumQuiz-Site.git",
        demo: "https://ethereum-quiz-site.vercel.app/"
    },
    {
        id: 4,
        image: IMG1,
        title: "Crypto Currecy Dashboard & Financial Visualization",
        github: "https://github.com/Orax101/EthereumQuiz-Site.git",
        demo: "https://ethereum-quiz-site.vercel.app/"
    },
    {
        id: 5,
        image: IMG1,
        title: "Crypto Currecy Dashboard & Financial Visualization",
        github: "https://github.com/Orax101/EthereumQuiz-Site.git",
        demo: "https://ethereum-quiz-site.vercel.app/"
    },
    {
        id: 6,
        image: IMG1,
        title: "Crypto Currecy Dashboard & Financial Visualization",
        github: "https://github.com/Orax101/EthereumQuiz-Site.git",
        demo: "https://ethereum-quiz-site.vercel.app/"
    },
]

const Portfolio = () => {
    return (
        <section id= "porfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
           
           <div className= "container portfolio__container">
           {
            data.map(({id, image, title, github, demo}) => {
                return( <article key={id} className= "portfolio__item">
                <div className="portfolio__item-image">
                    <img src= {image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                 <a href= {github} className="btn" target="_blank">Github</a>
                 <a href= {demo} className="btn btn-primary" target="_blank">Live Demo</a>
                </div>
            </article>
            )
            })
           }
           </div>
            </section>
    )
}
export default Portfolio