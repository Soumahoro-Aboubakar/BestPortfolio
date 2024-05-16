import "./topbar.scss";
import { Person, Mail, GitHub, WhatsApp } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            VISIONARY.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+225 0716768114</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>aboubakarKone8958@gmail.com</span>
          </div>
          <div className="itemContainer">
            <a href="https://github.com/Soumahoro-Aboubakar" target="_blank" className="logo">
              <GitHub className="icon" />
              <span>GitHub</span>
            </a>
          </div>
          <div className="itemContainer">
            <WhatsApp className="icon" />
            <span>+225 0789585242</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
