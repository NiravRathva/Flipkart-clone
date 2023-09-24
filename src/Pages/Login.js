import Layout from "../Components/Layout";
const Login = () => {
  return (
    <div>
      <div>
        <h1>Login</h1>
        <p>Get access to your Orders, Wishlist and Recommandations</p>
      </div>
      {/* login form  */}
      <div>
        <form action="">
          <input type="text" placeholder="enter your email " />

          <p>
            By continuing you are agree to our <span>Terms of use</span> and{" "}
            <span>Privacy policy</span>{" "}
          </p>
          <button type="submit">Login </button>
        </form>
        <div>
          <h4> New to flipkart? Create an account</h4>
        </div>
      </div>
    </div>
  );
};

export default Layout(Login);
