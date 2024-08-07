import "./LoginPage.scss";

export default function LoginPage() {
    return (
        <div className="loginpage">
            <div className="container">
                <div className="loginmaincontent">
                    <div className="welcometitle">
                        <h1 className="welcomefont">Welcome to Gourmet Haven Hotel</h1>
                    </div>
                    <div className="loginform">
                        <form className="login">
                            <div className="loginheading">
                                <div className="logintitle">
                                    <h2>Gourmet Heaven Hotel</h2>
                                </div>
                                <div className="logintitle">
                                    <h2>LOGIN FORM</h2>
                                </div>
                            </div>
                            <div className="mainloginsection">
                                <div className="logincontent">
                                    <h3>Email Address</h3>
                                    <input type="email" className="inputfield" required />
                                </div>
                                <div className="logincontent">
                                    <h3>Password</h3>
                                    <input type="password" className="inputfield" required />
                                    <p>Forgot Password ?</p>
                                </div>
                                <div className="loginbutton">
                                    <button className="loginbtn">Login</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
