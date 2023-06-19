import { AiFillMessage } from "react-icons/ai";

const Login = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <div className="bg-red-500 flex justify-center p-3 rounded-lg ">
            <AiFillMessage size="42" color="white" />
          </div>
          <h1 className="text-3xl font-medium mt-6">Login</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleForm}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                required
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                required
                className="input input-bordered"
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-primary"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-red-500 text-white" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
