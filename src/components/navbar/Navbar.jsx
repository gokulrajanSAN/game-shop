import './Navbar.css'

const navItems = ["Products", "Cart", "Your Orders", "Login"]

const Navbar = () => {
    return (
        <div className='container'>
            <div>
                <img className='logo' src="src\assets\WhatsApp Image 2023-12-08 at 21.58.11.jpeg" alt="logo" />
            </div>
            <div className='search'></div>
            {navItems.map(item => {
                return (<div className='navItems' key={item} >{item}</div>)
            })}
            <div>theme</div>
        </div>
    )
}

export default Navbar