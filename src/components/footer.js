import React from "react";
import { Link } from "react-router-dom";
import "./styles/footer.css";

function Footer() {
    return (
        <footer>
            <div className="blackLine footer" />

            <div className="follow">
                <div className="followText">
                    <h3>Follow Us</h3>
                </div>

                <div className="social">
                    <a
                        href="https://www.facebook.com/heart.of.ky.kids"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="https://ssl.gstatic.com/atari/images/sociallinks/facebook_white_44dp.png"
                            alt="Facebook"
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/heart.of.ky.kids/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="https://ssl.gstatic.com/atari/images/sociallinks/instagram_white_44dp.png"
                            alt="Instagram"
                        />
                    </a>
                </div>
            </div>

            <div className="color">
                <div className="underFollow">
                    <div className="footer-glance">
                        <h3>At a Glance</h3>
                        <hr></hr>
                        <p>
                            We are a dedicated nonprofit organization committed to improving the lives of children
                            in the heart of Kentucky. Through educational programs, community outreach, and essential
                            support services, we strive to create a brighter future for every child.
                        </p>
                        <p>
                            Our mission is to provide a safe, nurturing, and enriching environment where children can
                            learn, grow, and thrive. Whether through mentorship, access to resources, or advocacy
                            efforts, we are here to make a lasting impact.
                        </p>
                        <p>
                            Join us in our mission to support the next generation of leaders, innovators, and changemakers.
                        </p>
                        <p>
                            (123) 456-7890<br />
                            info@hkykids.org
                        </p>
                    </div>

                    <nav className="footerLinks">
                        <h3>Looking For Something?</h3>
                        <hr></hr>
                        <ul>
                            <li>
                                <h4>Support Our Cause</h4>
                                <Link to="/#fundingSection">Donate</Link>
                            </li>
                            <li>
                                <h4>Find Childcare Providers</h4>
                                <Link to="/childcare#table">Childcare</Link>
                            </li>
                            <li>
                                <h4>Programs For Parents And Kids</h4>
                                <Link to="/activities#kids-and-parentsSection">Programs</Link>
                            </li>
                            <li>
                                <h4>Enroll Your Child</h4>
                                <Link to="/preschool#schools">Enroll</Link>
                            </li>
                            <li>
                                <h4>Don't Know What To Do?</h4>
                                <Link to="/concerns#whatToDo">Start Here</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
