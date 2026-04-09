import { NavLink } from 'react-router-dom'
import type { ReactNode } from 'react'
import '../styles/BottomNav.css'

type NavItem = {
    id: string
    label: string
    to: string
    icon: ReactNode
}

const navItems: NavItem[] = [
    {
        id: 'home',
        label: 'Home',
        to: '/',
        icon: (
            <svg viewBox="0 0 24 24" className="icon-fill">
                <path d="M12 3.8 3.5 10.5V20h6v-5h5v5h6v-9.5L12 3.8Z" />
            </svg>
        ),
    },
    {
        id: 'calendar',
        label: 'Calendar',
        to: '/calendar',
        icon: (
            <svg viewBox="0 0 24 24" className="icon-stroke" fill="none">
                <path
                    d="M7 3v3M17 3v3M4 9h16M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
    {
        id: 'favorites',
        label: 'Favorites',
        to: '/favorites',
        icon: (
            <svg viewBox="0 0 24 24" className="icon-fill">
                <path d="M12 21s-7-4.35-9.33-8.42C.26 8.38 2.3 4 6.59 4c2.16 0 3.52 1.14 4.2 2.2C11.47 5.14 12.83 4 14.99 4c4.3 0 6.33 4.38 3.92 8.58C19 16.65 12 21 12 21Z" />
            </svg>
        ),
    },
    {
        id: 'profile',
        label: 'Profile',
        to: '/profile',
        icon: (
            <svg viewBox="0 0 24 24" className="icon-fill">
                <path d="M12 12a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5ZM4 20a8 8 0 1 1 16 0H4Z" />
            </svg>
        ),
    },
]

export default function BottomNav() {
    return (
        <nav className="bottom-nav" aria-label="Main navigation">
            <div className="bottom-nav__brand">
                <div className="bottom-nav__brand-mark">S</div>
                <div className="bottom-nav__brand-text">
                    <strong>Smart Services</strong>
                    <span>Local booking</span>
                </div>
            </div>

            <div className="bottom-nav__list">
                {navItems.map((item) => (
                    <NavLink
                        key={item.id}
                        to={item.to}
                        end={item.to === '/'}
                        className={({ isActive }) =>
                            `bottom-nav__item ${isActive ? 'bottom-nav__item--active' : ''}`
                        }
                    >
                        <span className="bottom-nav__icon">{item.icon}</span>
                        <span className="bottom-nav__label">{item.label}</span>
                    </NavLink>
                ))}
            </div>
        </nav>
    )
}