import './Header.css';
import React, { useState, useEffect } from 'react';
import logoPath from '../../assets/image/header-logo.png';
import Version from '../atoms/Version/Version';
import Socials from '../atoms/Socials/Socials';

const Header = () => {

    

    const [headerActive, setHeaderActive] = useState(false);

    const headerClass = headerActive ? 'header-app active' : 'header-app';

    useEffect(()=>{
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const scrollChange = 50;

            setHeaderActive(scrollY > scrollChange);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, []);

  return (
    <header id="headerApp" className={headerClass}>
        <div className="header-container">
            <div className="header-side">
                <button type="button" className="sidebar-button">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className="header-logo">
                    <img className="logo-image" src={logoPath} alt="dyan developer logo" />
                </div>
                <nav id="navApp" className="nav-app">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="#company" className="nav-link">Company</a>
                        </li>
                        <li className="nav-item">
                            <a href="#author" className="nav-link">Author</a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects" className="nav-link">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a href="#clients" className="nav-link">Clients</a>
                        </li>
                        <li className="nav-item">
                            <a href="#clients" className="nav-link">Freelancer</a>
                        </li>
                        <li className="nav-item active">
                            <a href="#clients" className="nav-link active">Giveaways</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="header-side">
                
            </div>
            <div className="header-side">
                <Version versionData="Last Version"/>
                <Socials/>
                <div className="header-search">
                    <input id="headerSearch" className="search-input" type="search" name="headerSearch" placeholder="Search" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" fill="currentColor"></path></svg>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;
