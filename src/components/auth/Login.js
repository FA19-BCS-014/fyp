import LeftContent from './commonAuth/LeftContent'

const Login = () => {
  return (
    <div class="registration-area">
      <div class="registration-box">
        <LeftContent page="login" />
        <div className="registration-form">
          <div className="form">
            <h2>Sign in</h2>
            <form>
              <div className="form-field email">
                <label for="">Email</label>
                <input type="email" placeholder="Enter Email Name" />
              </div>
              <div className="form-field password">
                <label for="">Password</label>
                <input type="password" placeholder="Enter Password" />
              </div>
              <div className="form-field stay-login">
                <input type="checkbox" name="" />
                <label for="">Save Password</label>
              </div>
              <div className="form-field">
                <input type="submit" value="Sign in" className="btn submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login