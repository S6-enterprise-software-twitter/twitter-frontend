import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="nav">
          <h1>Navbar</h1>
          <input type="text" placeholder="Zoek een persoon of locatie"/>
          <div>
            <p>Icoon</p>
            <p>Jan Janssen</p>
          </div>
      </div>
    </nav>
  );
}

export default Navbar;
