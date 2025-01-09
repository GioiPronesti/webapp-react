
import { NavLink } from 'react-router-dom';

function Nav() {

  const menu = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ]

  return <nav className='flex-nav'>
    <ul className='flex-link'>
      {
        menu.map(({path, label}, i) => {
          return <li key={i}>
            <NavLink className='link' to={path}>
              {({ isActive }) => {
                return <span className={ isActive ? 'active-text-blue' : ''}>{
                  label
                }</span>
              }}
            </NavLink>
          </li>
        })
      }
    </ul>
  </nav>
}

export default Nav