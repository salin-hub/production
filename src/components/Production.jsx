import { useRef, useState } from 'react';
import data from '../Data/DataProduct';
import Footer from './Footer';
import SubmitForm from './FormSub';
import Privacy_product from './Privacy_product';
import Carousel from 'react-bootstrap/Carousel';
import p3 from '../assets/images/NoNI.jpg';
import p2 from '../assets/images/p2.jpg';
import p1 from '../assets/images/p1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Production = () => {
    const submitFormRef = useRef(null);
    const [isAnimating, setIsAnimating] = useState(false); // State for animation

    const scrollToSubmitForm = () => {
        if (submitFormRef.current) {
            setIsAnimating(true);
            const topOffset = submitFormRef.current.offsetTop;
            window.scrollTo({
                top: topOffset - 50,
                behavior: 'smooth',


            });

            setTimeout(() => setIsAnimating(false), 1000);
        }
    };

    return (
        <div className='block'>
            <Carousel >
                <Carousel.Item>
                    <div className="image_controller">
                        <img src={p3} alt="" />
                    </div>
                    
                </Carousel.Item>
                <Carousel.Item>
                <div className="image_controller">
                        <img src={p2} alt="" />
                    </div>
                    
                </Carousel.Item>
                <Carousel.Item>
                <div className="image_controller">
                        <img src={p1} alt="" />
                    </div>
                </Carousel.Item>
            </Carousel>
            <div className="controller">
                <h1 className='text_q'>តើលោកអ្នកកំពុងជួបបញ្ហាទាំងអស់នេះមែនទេ?</h1>
                <div className="problem_product">
                    {data.problem.map((item, index) => {
                        return (
                            <div className="item_problem" key={index}>
                                <div className="item">
                                    <img src={item.image} alt={`Problem image ${index}`} />
                                </div>
                                <div className="textPro">
                                    <h1>{item.description}</h1>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="line_content"></div>
                <div className="card_item">
                    {data.Product.map((item, index) => {
                        return (
                            <div key={index} className='item_card'>
                                <div className="item_image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <h1>{item.name}</h1>
                            </div>
                        );
                    })}
                </div>
                <div className="line_content"></div>
                <div
                    ref={submitFormRef}
                    className={`submit-form-container ${isAnimating ? 'animate' : ''}`}
                >
                    <SubmitForm />
                </div>
                <div className="line_content"></div>
                <h1 className='text_pri'>គោលនយោបាយលក់</h1>
                <Privacy_product />
                <Footer />
            </div>
            <div className='booking'>
                <div className="control_text">
                    <h1>500% សងប្រាក់វិញ</h1>
                    <p>ប្រសិនបើវាមិនដូចនឹងការផ្សាយពាណិជ្ជកម្ម</p>
                </div>
                <div className='booking_click' offset={50} onClick={scrollToSubmitForm}>
                    <h1>ទិញឥឡូវ</h1>
                </div>
            </div>
        </div>
    );
};

export default Production;
