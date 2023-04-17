import React from "react"
import "./testimonials.css"
import AV1 from "../../assets/AVTR1.jpeg"
import AV2 from "../../assets/AVTR2.jpeg"
import AV3 from "../../assets/AVTR3.jpeg"
import AV4 from "../../assets/AVTR4.jpeg"
import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css";
import "swiper/css/pagination";

const data = [
    {   
        avatar: AV1,
        name: 'Tina Snow',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eligendi tempore, architecto aut impedit consectetur dolore cupiditate aliquam dolorum beatae aperiam voluptates, explicabo consequuntur modi laudantium, quisquam voluptatibus autem. Perferendis."
    },
    {   
        avatar: AV2,
        name: 'Shata Wale',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eligendi tempore, architecto aut impedit consectetur dolore cupiditate aliquam dolorum beatae aperiam voluptates, explicabo consequuntur modi laudantium, quisquam voluptatibus autem. Perferendis."
    },
    {   
        avatar: AV3,
        name: 'Tina Snow',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eligendi tempore, architecto aut impedit consectetur dolore cupiditate aliquam dolorum beatae aperiam voluptates, explicabo consequuntur modi laudantium, quisquam voluptatibus autem. Perferendis."
    },
    {   
        avatar: AV4,
        name: 'Tina Snow',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eligendi tempore, architecto aut impedit consectetur dolore cupiditate aliquam dolorum beatae aperiam voluptates, explicabo consequuntur modi laudantium, quisquam voluptatibus autem. Perferendis."
    }
]

const Testimonials = () => {
    return (
        <section id= "testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className= "container testimonials__container"
             modules={[Pagination]}
             spaceBetween={40}
             slidesPerView={1}
             pagination={{ clickable: true }}>
                {
                    data.map(({avatar, name, review}, index) => {
                        return(  
                        <SwiperSlide key= {index} className= "testimonial">
                        <div className="client__avatar">
                            <img src={avatar} alt="Avatar One" />
                        </div>
                            <h5 className="client__name">{name}</h5>
                            <small className="client__review">
                                {review}
                            </small>
                        </SwiperSlide>)
                    })
                }
                
         </Swiper>
        </section>
    )
}
export default Testimonials