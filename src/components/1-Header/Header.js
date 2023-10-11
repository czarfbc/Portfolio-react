import "./Header.css";
import { useState } from "react";

function Header() {
  window.addEventListener("scroll", () => {
    let headerScroll = document.querySelector(".header");
    headerScroll.classList.toggle("scroll", window.scrollY > 30);
  });
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  };

  const itemsolo = document.querySelectorAll(".a_mobile");
  itemsolo.forEach((element) => {
    element.addEventListener("click", ToggleMode);
    console.log("render");
  });

  return (
    <div className="header">
      <a className="logo" href="/#main">
        &lsaquo;CF/&rsaquo;
      </a>
      <nav className="menuDesktop">
        <ul className="header_ul">
          <li className="header_li">
            <a className="header_a" href="#aboutMe">
              SOBRE MIM
            </a>
          </li>
          <li className="header_li">
            <a className="header_a" href="#projects">
              PROJETOS
            </a>
          </li>
          <li className="header_li">
            <a className="header_a" href="#skills">
              HABILIDADES
            </a>
          </li>
        </ul>
      </nav>

      <div className="menuMobile">
        <div
          className={active ? "icon iconActive" : "icon"}
          onClick={ToggleMode}
        >
          <div className="hamburguer"></div>
        </div>
        <div className={active ? "menu menuOpen" : "menu menuClose"}>
          <nav className="list">
            <ul className="header_ul list_items">
              <li className="header_li">
                <a className="header_a a_mobile" href="#aboutMe">
                  SOBRE MIM
                </a>
              </li>
              <li className="header_li">
                <a className="header_a a_mobile" href="#projects">
                  PROJETOS
                </a>
              </li>
              <li className="header_li">
                <a className="header_a a_mobile" href="#skills">
                  HABILIDADES
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
