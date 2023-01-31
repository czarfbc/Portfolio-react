import './Header.css';
function Header() {
  return (
    <div className="header">
      <a className='logo' href="/">&lsaquo;CF/&rsaquo;</a>
      <nav>
        <ul className='header_ul'>
          <li className='header_li'><a className='header_a' href="/">SOBRE MIM</a></li>
          <li className='header_li'><a className='header_a' href="/">PROJETOS</a></li>
          <li className='header_li'><a className='header_a' href="/">HABILIDADES</a></li>
        </ul>
      </nav>
    </div>   
  );
}

export default Header;