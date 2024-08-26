import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import { useRef } from 'react'

const Testimonials = () => {


    const slider = useRef();

    let tx = 0;

    const slideForward = () => {

        if(tx > -50){
            tx -= 25;
        }

        slider.current.style.transform = `translateX(${tx}%)`;

    }


    const slideBackward = () => {

        if (tx < 0) {
            tx += 25;
        }

        slider.current.style.transform = `translateX(${tx}%)`;

    }


  return (


     <div className='testimonials'>

     <img onClick={slideForward} className='next-btn' src={next_icon} alt="" />
     <img onClick={slideBackward} className='back-btn' src={back_icon} alt="" />

     <div className="slider">

        <ul ref={slider}>
            <li>
                <div className="slide">

                    <div className="user-info">

                        <img src={user_1} alt="" />

                        <div>

                         <h3>William Jackson</h3>
                         <span>Edusity, USA</span>
                        </div>

                    </div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi aperiam consequatur tempore officiis cumque nulla possimus saepe!</p>

                </div>
            </li>
            <li>
                <div className="slide">

                    <div className="user-info">

                        <img src={user_2} alt="" />

                        <div>

                         <h3>William Jackson</h3>
                         <span>Edusity, USA</span>
                        </div>

                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quia laborum nostrum modi distinctio quisquam iusto sunt!</p>

                </div>
            </li>
            <li>
                <div className="slide">

                    <div className="user-info">

                        <img src={user_3} alt="" />

                        <div>

                         <h3>William Jackson</h3>
                         <span>Edusity, USA</span>
                        </div>

                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio unde placeat adipisci porro vitae atque necessitatibus deserunt!</p>

                </div>
            </li>
            <li>
                <div className="slide">

                    <div className="user-info">

                        <img src={user_4} alt="" />

                        <div>

                         <h3>William Jackson</h3>
                         <span>Edusity, USA</span>
                        </div>

                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae deserunt nobis corporis cupiditate commodi tenetur neque</p>

                </div>
            </li>
        </ul>

     </div>

    </div>
  )
}

export default Testimonials
