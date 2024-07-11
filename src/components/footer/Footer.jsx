import React from 'react';
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">

            <h1 className="footer__title">
                Tanbir
            </h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>

            </ul>

            <div className="footer__social">
                <a href="https://www.facebook.com/profile.php?id=100088186651129" className="footer__social-link" target="_blank ">
                    <i class="bx bxl-facebook hh"></i>
                </a>

                <a href="https://www.instagram.com/tanbir_32/" className="footer__social-link" target="_blank ">
                    <i class="bx bxl-instagram"></i>
                </a>

                <a href="https://www.linkedin.com/in/tanbir-sarkar-32737b258/" target="_blank" className="footer__social-link">
                    <i class='bx bxl-linkedin' ></i>
                </a>
            </div>
            <span className="footer__copy">&#169; Tanbir Sarkar. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer