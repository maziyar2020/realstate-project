import "./Header.scss";

const Header = () => {
  return (
    <section className="header-wrapper">
      <div className="header-container padding flexCenter inner-width">
        {/* header __ logo */}
        <img src="./logo.png" alt="logo" width={100} />

        <div className="header__menu flexCenter">
          <a href="" className="header__link">Residensies</a>
          <a href="" className="header__link">Our Value</a>
          <a href="" className="header__link">Contact Us</a>
          <a href="" className="header__link">Get Started</a>
          <button className="header__button">
            <a href="">Contact</a>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Header;
