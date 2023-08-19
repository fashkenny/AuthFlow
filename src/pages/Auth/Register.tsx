import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../api/authApi";

const Register = () => {
  const navigate = useNavigate();
  const model = yup.object({
    lastName: yup.string().required(),
    firstName: yup.string().required(),
    email: yup.string().required(),
    contactAddress: yup.string().required(),
    password: yup.string().required(),
    confirm: yup.string().oneOf([yup.ref("password")]),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(model),
  });

  const GO = handleSubmit(async (data: any) => {
    const { firstName, lastName, email, password, contactAddress } = data;
console.log(data)
    const formData = new FormData();

    formData.append("lastName", lastName);
    formData.append("firstName", firstName);
    formData.append("email", email);
    formData.append("contactAddress", contactAddress);
    formData.append("password", password);
    formData.append("avatar", image);

    registerUser(formData).then(() => {
      navigate("/signIn");
      reset;
    });
  });

  const [image, setImage] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");

  const changeImage = (e: any) => {
    const localImage = e.target.files[0];
    const changeAvatar = URL.createObjectURL(localImage);

    setImage(localImage);
    setAvatar(changeAvatar);
    console.log(image);
  };

  return (
    <div className="flex items-center justify-center w-full h-[100vh]">
      <form
        onSubmit={GO}
        className="min-h-[280px] w-[350px] border-[1px] border-[#f5dbdb] flex flex-col rounded"
      >
        <div className="flex flex-col items-center">
          <img
            src={avatar}
            alt=""
            className="h-[80px] w-[80px] rounded-[50%] border-[1px] border-[dodgerblue] mt-6 object-cover "
          />

          <label
            htmlFor="id"
            className="py-1 px-5 rounded mt-3 bg-[dodgerblue] text-white font-[500]"
          >
            Upload
          </label>
          <input
            type="file"
            id="id"
            accept="image/png, image/jpeg, image/jpg"
            className="hidden w-[90px] "
            onChange={changeImage}
          />
        </div>
        <div className="flex px-2">
          <input
            placeholder="Last Name"
            type="text"
            className="border-[1px] border-[silver] rounded w-[95%] h-[35px] ml-2 pl-2 mt-3 outline-none text-[14px]"
            {...register("lastName")}
          />


          <input
            placeholder="First Name"
            type="text"
            className="border-[1px] border-[silver] rounded w-[95%] h-[35px] ml-2 pl-2 mt-3 outline-none text-[14px]"
            {...register("firstName")}
          />
        </div>

        {errors.firstName?.message && (
          <label className="text-red-600 text-[9px] flex justify-end mr-2">
            Error
          </label>
        )}

        <div className="flex flex-col  mt-4">
          <input
            placeholder="Enter your email"
            type="text"
            className="border-[1px] border-[silver] text-[14px] rounded w-[95%] h-[35px] ml-2 pl-2 outline-none "
            {...register("email")}
          />
        </div>
        {errors.email?.message && (
          <label className="text-red-600 text-[9px] flex justify-end mr-2">
            Error
          </label>
        )}
        <div className="flex flex-col  mt-4">
          <input
            placeholder="Enter your address"
            type="text"
            className="border-[1px] border-[silver] text-[14px] rounded w-[95%] h-[35px] ml-2 pl-2 outline-none "
            {...register("contactAddress")}
          />
        </div>
        {errors.contactAddress?.message && (
          <label className="text-red-600 text-[9px] flex justify-end mr-2">
            Error
          </label>
        )}
        <div className="flex flex-col  mt-4">
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

        <div className="flex flex-col mt-4">
          <input
            placeholder="Confirm your password"
            type="text"
            className="border-[1px] border-[silver] text-[14px] rounded w-[95%] h-[35px] ml-2 pl-2 outline-none "
            {...register("confirm")}
          />
        </div>

        {errors.confirm?.message && (
          <label className="text-red-600 text-[9px] flex justify-end mr-2">
            Error
          </label>
        )}

        <div className="flex items-center justify-center pb-3">
          <button
            type="submit"
            className="px-4 py-2 bg-[dodgerblue] text-white rounded mr-2 mt-4 flex items-center justify-center"
          >
            SignUp
          </button>
        </div>

        <div className=" flex flex-col items-center justify-center mb-2">
          <p>
            <Link to="/signIn">
              Already have an account?{" "}
              <span className="text-[#5593d1] text-[12px] font-bold">
                signIn
              </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
