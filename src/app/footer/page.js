import "../footer/footer.css";
import { FaGooglePay } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { GrInstagram } from "react-icons/gr";
import { BsPaypal } from "react-icons/bs";
import { RiMastercardFill } from "react-icons/ri";
import { GrAmex } from "react-icons/gr";
import { FaCcApplePay } from "react-icons/fa";
import { FaAmazonPay } from "react-icons/fa6";
import { GiUsaFlag } from "react-icons/gi";

const Page = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="newsletter">
          <h2>BE THE FIRST TO KNOW</h2>
          <p>Sign up for updates from mettā muse.</p>
          <form>
            <input type="email" placeholder="Enter your e-mail..." required />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
        <div className="contact-currency">
          <div className="contact">
            <h3>Contact US</h3>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
            <div className="currency">
              <h3>CURRENCY</h3>
              <p>
                <GiUsaFlag /> USD
              </p>
              <p>
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="column">
          <h3>mettā muse</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Stories</a>
            </li>
            <li>
              <a href="#">Artisans</a>
            </li>
            <li>
              <a href="#">Boutiques</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">EU Compliances Docs</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>
              <a href="#">Orders & Shipping</a>
            </li>
            <li>
              <a href="#">Join/Login as a Seller</a>
            </li>
            <li>
              <a href="#">Payment & Pricing</a>
            </li>
            <li>
              <a href="#">Return & Refunds</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>
        <div className="social-payment">
          <div className="social">
            <h3>FOLLOW US</h3>
            <a href="#">
              <GrInstagram className="socialmedia" />
            </a>
            <a href="#">
              <TiSocialLinkedinCircular className="socialmedia" />
            </a>

            <div className="payments">
              <h3>mettā muse ACCEPTS</h3>
              <FaGooglePay className="pay" />
              <RiMastercardFill className="pay" />
              <BsPaypal className="pay" />
              <GrAmex className="pay" />
              <FaCcApplePay className="pay" />
              <FaAmazonPay className="pay" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <p>&copy; 2023 mettamuse. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Page;
