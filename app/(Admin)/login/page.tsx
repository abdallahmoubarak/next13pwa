export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form action="/login" method="post">
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" id="username" />
        <br />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
