import React from 'react';
import './Navbar.css';

function Navbar() {

    const navbarDataList = [
        {
            navId : 1,
            navTitle : 'Company',
            navPath : '/company',
            itemClass : 'nav-item',
            pathClass : 'nav-link',
            pathIcon : '',
        },
        {
            navId : 2,
            navTitle : 'Author',
            navPath : '/author',
            itemClass : 'nav-item',
            pathClass : 'nav-link',
            pathIcon : '',
        },
        {
            navId : 3,
            navTitle : 'Projects',
            navPath : '/projects',
            itemClass : 'nav-item',
            pathClass : 'nav-link',
            pathIcon : '',
        },
        {
            navId : 4,
            navTitle : 'Clients',
            navPath : '/clients',
            itemClass : 'nav-item',
            pathClass : 'nav-link',
            pathIcon : '',
        },
        {
            navId : 5,
            navTitle : 'Freelancer',
            navPath : '/freelancer',
            itemClass : 'nav-item',
            pathClass : 'nav-link',
            pathIcon : '',
        },
        {
            navId : 6,
            navTitle : 'Giveaways',
            navPath : '/giveaways',
            itemClass : 'nav-item active',
            pathClass : 'nav-link active',
        },
    ]

  return (
    <div>
        <nav id="navApp" className="nav-app">
            <ul className="nav-list">
                {navbarDataList.map((navbarList) => (
                    <li key={navbarList.navId} className={navbarList.itemClass}>
                        <a href={navbarList.navPath} className={navbarList.pathClass}>{navbarList.navTitle}</a>
                        {navbarList.pathIcon}
                    </li>
                ))}
            </ul>
        </nav>
    </div>
  )
}

export default Navbar;