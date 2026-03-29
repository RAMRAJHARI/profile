import React from 'react';
import '../HeroSection/herosection.scss';
import img from  '../../assets/image.png';

const Herosection = (props) =>{
    const scrollToSection = () =>{
        const featuredWorkSection = document.getElementById('featured-works');
        if(featuredWorkSection){
            featuredWorkSection.scrollIntoView({behaviour:'smooth'});
        }
    }

    const gotoLinkedIn = () =>{
        window.open('https://www.linkedin.com/in/ramrajrj/', '_blank');
    }
    return(
        <section className='hero'>
            <div className='hero__left'>
                <h1>Hello, My name is {props.name}</h1>
                <p>I am basically a Software Engineer, passionate about photography and graphic designing. To know more about me see below.</p>
            
                <div className='hero__buttons'>
                    <button onClick={scrollToSection}>Featured</button>
                    <button onClick={gotoLinkedIn}>LinkedIn</button>
                </div>
            </div>
            <div className='hero__right'>
                <img src={img}/>
            </div>
        </section>
    )
}

export default Herosection;