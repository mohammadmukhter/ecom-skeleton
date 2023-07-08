import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import photo from "../../assets/b2.jpg";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className="">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(
            ${photo}
          )`,
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-gray-700">
          <div className="hero min-h-screen bg-transparent">
            <div className="hero-content">
              <div className="card w-full md:w-[600px] max-w-sm shadow-2xl bg-white/50 ">
                <h2 className="text-gray-800 text-3xl font-bold mt-6">
                  Please Login
                </h2>
                <form
                  className="card-body pb-4 px-6 pt-4"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-gray-900">Phone</span>
                    </label>
                    <input
                      type="text"
                      placeholder="phone"
                      {...register("phone", { required: true })}
                      className="input input-bordered"
                    />
                    {errors.phone && (
                      <span className="text-red-600 text-left text-sm">
                        Phone is required
                      </span>
                    )}
                  </div>
                  <div className="form-control">
                    <div className="flex items-center gap-1">
                      <label className="label">
                        <span className="label-text text-gray-900">
                          Password
                        </span>
                      </label>
                    </div>
                    <input
                      type={"password"}
                      placeholder="password"
                      {...register("password", { required: true })}
                      className="input input-bordered"
                    />
                    {errors.password && (
                      <span className="text-red-600 text-left text-sm">
                        Password is required
                      </span>
                    )}
                  </div>
                  <div className="form-control mt-6">
                    <button className="bg-gray-200 text-gray-950 border-2 border-gray-200 hover:bg-gray-950 hover:text-white font-bold text-xl uppercase px-3 py-1 rounded-md">
                      Log in
                    </button>
                  </div>
                </form>

                <div className="form-control mx-7 mb-5">
                  <label className="label">
                    <span className="text-black label-text-alt">
                      Don't have an account?{" "}
                      <Link
                        to="/register"
                        className="font-bold link link-hover hover:text-gray-900"
                      >
                        Register
                      </Link>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
