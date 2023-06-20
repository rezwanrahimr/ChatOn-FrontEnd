import { useContext, useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthenticationContext";
import userToken from "../../../Hooks/userToken";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState("");
  const { crateUserWithEmail } = useContext(AuthContext);

  if (isLoading) {
    return <h1>Loading.....</h1>;
  }
  const handleForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const image = e.target.image.files[0];
    const photo = new FormData();
    photo.append("image", image);

    setAuthError("");
    // Create User on Firebase.
    crateUserWithEmail(email, password)
      .then((userCredential) => {
        setIsLoading(true);

        const user = userCredential.user;
        if (user) {
          fetch(
            "https://api.imgbb.com/1/upload?key=3d5434d53ddff0be8dd7fb24349bc042",
            {
              method: "POST",
              body: photo,
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.success) {
                // User Information
                const userInfo = {
                  name,
                  email,
                  photo: data.data.url,
                };

                userToken(userInfo);
                setIsLoading(false);
              }
            });
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage) {
          setIsLoading(false);
          setAuthError(errorMessage);
        }
      });

    e.target.reset();
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
                  name="image"
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
            <p className="text-red-500">{authError}</p>
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
