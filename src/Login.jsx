import React from 'react';

const Login = () => {
    return (
        <>
            <div className="container">
                <h1>Log in to your account</h1>
                <div className="login-box">
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <div className="password-container">
                                <input type="password" id="password" name="password" required />
                                <button type="button" id="show-password">SHOW</button>
                            </div>
                        </div>
                        <div className="forgot-password">
                            <a href="#">Forgot your password?</a>
                        </div>
                        <button type="submit" className="sign-in-btn">SIGN IN</button>
                        <div className="divider" />
                        <div className="create-account">
                            <a href="#">No account? Create one here</a>
                        </div>
                    </form>
                </div>
            </div>


        </>
    )
}
export default Login
