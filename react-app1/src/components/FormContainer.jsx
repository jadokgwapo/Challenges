function LoginForm() {
    return (
        <form>
            <h2>Login</h2>
            <label>Username
                <input type="text" name="username" />
            </label><br/>
            <label>
                Password
                <input type="password" name="password"/>
            </label><br/>
            <button type="submit">Login</button>
        </form>
    )
}

function RegisterForm() {
    return (
        <form>
            <h2>Login</h2>
            <label>Username
                <input type="text" name="username" />
            </label><br/>
            <label>
                Password
                <input type="password" name="password"/>
            </label><br/>
            <button type="submit">Register</button>
        </form>
    )
}

export default function FormContainer() {
  return (
    <div>

      <LoginForm />
      <RegisterForm />
    </div>
  );
}