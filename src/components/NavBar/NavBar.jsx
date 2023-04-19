import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Hell Shoes</h3>
            <div>
                <button>Nike</button>
                <button>Adidas</button>
                <button>Jordan</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar