import { useState } from "react";
import "./login.css";
import Label from "../components/textfields/TextFieldLabel";
import { DefaultTextField, PrimaryButton, NavigationBar } from "../components";
import { flexColumnSpaceBetween } from "../styles/flex";
import { fullScreen } from "../styles/screen";

import useLogin from "../queries/useLogin";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { mutate: handleLogin, isError: isLoginError, reset } = useLogin();

  return (
    <div className={`${fullScreen} ${flexColumnSpaceBetween}`}>
      <section className="login-input-section [&_label]:mb-2" onClick={reset}>
        <NavigationBar
          onBackButtonClick={() => {}}
          onCancelButtonClick={() => {}}
          title="로그인"
          color="primary"
        />
        <Label htmlFor="email">이메일</Label>
        <DefaultTextField
          id="email"
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onIconClick={() => setEmail("")}
          isError={isLoginError}
          errorMessage="로그인 정보를 확인해주세요."
        />
        <Label htmlFor="password">비밀번호</Label>
        <DefaultTextField
          id="password"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onIconClick={() => setIsPasswordVisible((prev) => !prev)}
          type={isPasswordVisible ? "text" : "password"}
          isError={isLoginError}
          errorMessage="로그인 정보를 확인해주세요."
        />
      </section>
      <PrimaryButton
        onClick={() => handleLogin({ username: email, password })}
        disabled={!password || !email}
      >
        로그인
      </PrimaryButton>
    </div>
  );
}
