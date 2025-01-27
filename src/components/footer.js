import React from "react";
import "./styles/footer.css";

function Footer() {
    return (
        <footer>
            <div className="blackLine footer"></div>
            
            <div className="follow">
                <div className="followText">
                    <h3>Follow Us</h3>
                </div>

                <div className="social">
                    <a href="https://www.facebook.com/heart.of.ky.kids" target="_blank" rel="noreferrer">
                        <img src="https://ssl.gstatic.com/atari/images/sociallinks/facebook_white_44dp.png" alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/heart.of.ky.kids/" target="_blank" rel="noreferrer">
                        <img src="https://ssl.gstatic.com/atari/images/sociallinks/instagram_white_44dp.png" alt="Instagram" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;