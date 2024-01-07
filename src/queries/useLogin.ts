import { useMutation } from "@tanstack/react-query";
import axiosClient from "./axios";

// import axios from "axios";

interface LoginResponse {
  token: string;
}

export interface LoginProps {
  username: string;
  password: string;
}

const postLogin = async ({ username, password }: LoginProps) => {
  const { data } = await axiosClient.post<LoginResponse>("/user/login/", {
    email: username,
    password,
  });

  const token = data.token;
  localStorage.setItem("token", token);
  return data;
};

const useLogin = () =>
  useMutation({
    mutationFn: (props: LoginProps) => postLogin(props),
  });

export default useLogin;
