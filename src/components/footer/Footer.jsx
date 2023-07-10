import "./footer.scss";

export default function Footer() {
  return (
    <section className="footer__wrapper">
      <div className="padding inner-width flexCenter footer__container">
        {/* left side */}
        <div className="flexColStart footer__left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>
        <div className="flexColStart footer__right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New York, FL 4571, USA</span>
          <div className="flexCenter footer__menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
}