import "./header.css";

export const Header = ({ setActivePage }) => {
  return (
    <div className="header">
      {/* <h2>GoG Assignment</h2> */}
      <div className="header-options">
      <a onClick={() => setActivePage('home')}>Home</a>
      <a onClick={() => setActivePage('aboutus')}>About Us</a>
      <a onClick={() => setActivePage('contact')}>Contact Us</a>
      <a onClick={() => setActivePage('login')}>Login</a>
      </div>
      <div className="box"></div>
    </div>
  );
};
