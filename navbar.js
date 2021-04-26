import './Navbar.css'

const Navbar = () => {
    return (
        <div className="header">
            <img
                className="header__logo" alt='logo'
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
            <div className="header__option">
                <span className="header__optionLineOne">Hello</span>
                <span className="header__optionLineTwo">Select your address</span>
            </div>
            <div className="header__search">
                {/* <input/> */}
                <input className="header__searchInput" type="search" />
                
            </div>

            <div className="header__option">
                <span className="header__optionLineOne">flag</span>
            </div>

            <div className="header__option">
                <span className="header__optionLineOne">Hello, sign in</span>
                <span className="header__optionLineTwo">Accounts & Lists </span>
            </div>

            <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
            </div>

            <div className="header__option">
                <span className="header__optionLineTwo">Cart</span>
            </div>


        </div>
    )
}

export default Navbar
