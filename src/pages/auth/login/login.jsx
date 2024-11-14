import "./login.css";

export const Login = () => {
  return (
    <div className="login">

      <div className="login-box">
        <h3>LOGIN TO YOU ACCOUNT NOW</h3>
        <div className="text-input">
          <p>Email</p>
          <input type="email" placeholder="whythiskolaveridi@gmail.com" />
        </div>
        <div className="text-input">
          <p>Password</p>
          <input
            type="password"
            name=""
            id=""
            placeholder="Mere ko ghar jana hai"
          />
        </div>
        <button className="login-button">LOGIN</button>
        <div className="account">
            <p>Doesn't have an Account?</p>
            <a href="">Create Now</a>

        </div>
      </div>
    </div>
  );
};
