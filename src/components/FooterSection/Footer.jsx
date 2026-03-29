import React from 'react';
import linkedinimage from '../../assets/linkedin.png';
import instaimage from '../../assets/insta.png';
import '../FooterSection/footer.scss';

const Footer = () =>{
    const socialLinks = [
        {
            id: 1,
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/ramrajrj/',
            image: linkedinimage
        },
        {
            id:2,
            name:'instagram',
            url:'https://www.instagram.com/ramz_fotoplay?igsh=MWdhYW40aWVjc2FiZg==',
            image:instaimage,
            type:'instagram'
        }
    ]
    const handleSocialLinks = (url) =>{
        window.open(url, '_blank');
    }
    return(
        <footer className='footer'>
            <div className='footer__logo'>
                {socialLinks.map((link)=>(
                    <img key={link.id}
                    src={link.image}
                    alt={link.name}
                    onClick={()=>handleSocialLinks(link.url)}
                    className={`footer__icon footer__icon--${link.name.toLowerCase()}`}/>
                ))}
            </div>
            <p>&copy; 2026 Ramraj R.J. All rights reserved.</p>
        </footer>
    )
}

export default Footer;