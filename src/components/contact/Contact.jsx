import { MdCall } from "react-icons/md";
import "./contact.scss";
import { BsFillChatDotsFill, BsFillCameraVideoFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

export default function Contact() {
  return (
    <section className="c-wrapper">
      <div className="padding inner-width flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact</span>
          <span className="primaryText">Easy to Contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </span>
          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter contact-icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">021 123 456 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
              {/* second mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter contact-icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">021 123 456 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter contact-icon">
                    <BsFillCameraVideoFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">021 123 456 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call Now</div>
              </div>
              {/* fourth mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter contact-icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">021 123 456 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="c-right">
          <div className="contact__image">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
