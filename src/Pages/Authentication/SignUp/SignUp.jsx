import { AiFillMessage } from "react-icons/ai";
import { Link } from "react-router-dom";

const SignUp = () => {
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
          <h1 className="text-3xl font-medium mt-6">Sign up</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleForm}>
            <div className="form-control">
              <label className="label">
                {/* <span className="label-text">Name</span> */}
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className="input input-bordered bg-neutral-100"
              />
            </div>
            <div className="form-control">
              <label className="label">
                {/* <span className="label-text">Email</span> */}
              </label>
              <input
                type="text"
                name="email"
                required
                placeholder="Phone Number or Email"
                className="input input-bordered bg-neutral-100"
              />
            </div>
            <div className="form-control">
              <label className="label">
                {/* <span className="label-text">Password</span> */}
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
                className="input input-bordered bg-neutral-100"
              />
              <div className="form-control">
                <label className="label"></label>
                <input
                  type="file"
                  className="file-input file-input-bordered  w-full max-w-xs"
                />
              </div>
              <label className="label">
                <span>
                  {" "}
                  Already Have a Account ?{" "}
                  <Link
                    to="/login"
                    className="font-normal link link-hover text-primary"
                  >
                    Login
                  </Link>
                </span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-red-500 text-white" type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
