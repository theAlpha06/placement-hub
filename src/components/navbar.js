const Navbar = () => {
  return (
    <>
      <nav id="nav">
        <span>
          <img src="/startup_logo.png" alt="logo" />
          <h1>Placement Hub</h1>
        </span>
        <div class="nav-list">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">Vision</a>
            </li>
            <li>
              <a href="#middle">About Us</a>
            </li>
            <li>
              <a href="#social">Community</a>
            </li>
            <li>
              <a href="#founders">Team</a>
            </li>
            <li>
              <a href="#footer">Contact Us</a>
            </li>
          </ul>
        </div>
        <div class="nav-icon-cont" id="nav-btn">
          <div class="nav-icon"></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
