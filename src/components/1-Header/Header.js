import './Header.css';
function Header() {
  return (
    <div className="header">
      <a className='logo' href="/">&lsaquo;CF/&rsaquo;</a>
      <nav>
        <ul className='header_ul'>
          <li className='header_li'><a className='header_a' href="#aboutMe">SOBRE MIM</a></li>
          <li className='header_li'><a className='header_a' href="#projects">PROJETOS</a></li>
          <li className='header_li'><a className='header_a' href="#skills">HABILIDADES</a></li>
        </ul>
      </nav>
    </div>   
  );
}

export default Header;