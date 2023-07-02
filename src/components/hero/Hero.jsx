import "./hero.scss";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="padding inner-width flexCenter hero-container">
        {/* first section */}
        <div className="hero__first flexColStart">
          {/* text heading */}
          <div className="hero__title">
            <div className="orange-circle" />
            <h1>
              Discover
              <br /> Most Suitable
              <br /> property
            </h1>
          </div>
          {/* text content */}
          <div className="hero__description flexColStart">
            <span className="secondaryText">Find a variety of properties that suit you very easilty</span>
            <span className="secondaryText">Forget all difficulties in finding a residence for you </span>
          </div>
          {/* search bar */}
          <div className="flexCenter hero__search">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" className="hero__search-input" />
            <button className="hero__search-button">search</button>
          </div>
          {/* hero stats */}
          <div className="hero__stats flexCenter">
            <div className="hero__stat flexColCenter">
              <span className="hero__stat-number">
                <CountUp start={8700} end={9000} duration={4} />
                <span className="plus">+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>

            <div className="hero__stat flexColCenter">
              <span className="hero__stat-number">
                <CountUp start={520} end={700} duration={4} />
                <span className="plus">+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="hero__stat flexColCenter">
              <span className="hero__stat-number">
                <CountUp end={20} />
                <span className="plus">+</span>
              </span>
              <span className="secondaryText">Awards</span>
            </div>
          </div>
        </div>

        {/* second section */}
        <div className="hero__second flexCenter">
          <div className="hero__image">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
