import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <a href="#" className="header__logo"><strong>LeBel</strong> portfolio</a>
        <ul className="header__link-list">
          <li><a href="" className="header__link header__link_active">Projects</a></li>
          <li><a href="" className="header__link">Skills</a></li>
          <li><a href="" className="header__link">Contacts</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;