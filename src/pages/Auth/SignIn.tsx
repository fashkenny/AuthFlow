import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signInUser } from "../../api/authApi";
import { signUserGlobal } from "../../global/GlobalState";

const signIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const model = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm({ resolver: yupResolver(model) });

  const Sign = handleSubmit(async (data: any) => {
    const { email, password } = data;
    console.log(data);

  signInUser({email, password}).then((res) => {
      dispatch(signUserGlobal(res));
      navigate("/");
    });
  });
  return (
    <div>
      <div className="flex items-center justify-center w-full h-[100vh]">
        <form
          onSubmit={Sign}
          className="min-h-[280px] w-[350px] border-[1px] border-[#f5dbdb] flex flex-col rounded"
        >
          <div className="flex  justify-center mt-3">
            <h1 className="font-[700] italic text-[24px]">Welcome Back!!!!</h1>
          </div>
          <div className="flex flex-col ">
            <input
              placeholder="Enter your Email"
              type="text"
              className="border-[1px] border-[silver] text-[14px] rounded w-[95%] h-[35px] ml-2 pl-2 outline-none mt-10"
              {...register("email")}
            />
          </div>

          {errors.email?.message && (
            <label className="text-red-600 text-[9px] flex justify-end mr-2">
              Error
            </label>
          )}
          <div className="flex flex-col">
            <input
              placeholder="Enter your password"
              type="text"
              className="border-[1px] border-[silver] text-[14px] rounded w-[95%] h-[35px] ml-2 pl-2 outline-none "
              {...register("password")}
            />
          </div>

          {errors.password?.message && (
            <label className="text-red-600 text-[9px] flex justify-end mr-2">
              Error
            </label>
          )}

          <div className="flex items-center justify-center pb-3">
            <button
              type="submit"
              className="px-4 py-2 bg-[dodgerblue] text-white rounded mr-2 flex items-center justify-center"
            >
              SignIn
            </button>
          </div>

          <div className=" flex flex-col items-center justify-center mb-2">
            <p>
              <Link to="/register">
                create an account?
                <span className="text-[#5593d1] text-[12px] font-bold ml-1">
                  signUp
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default signIn;
