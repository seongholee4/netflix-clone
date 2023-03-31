import "./NavbarItem.css"


function NavbarItem({ title }) {
    return (
        <div className='navbarItem'>
            <h2>{title}</h2>
        </div>
    )
}

export default NavbarItem