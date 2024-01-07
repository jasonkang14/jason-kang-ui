import { useState } from "react";
import "./login.css";
import Label from "../components/Label";
import { PageTitle } from "../components/PageTitle";
import { IconButton } from "../stories/buttons/IconButton";
import { DefaultTextField } from "../stories/textfields/DefaultTextField";
import {
  flexColumnSpaceBetween,
  flexRowSpaceBetweenCenter,
} from "../styles/flex";
import { fullScreen } from "../styles/screen";
import { TextButton } from "../stories/buttons/TextButton";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className={`${fullScreen} ${flexColumnSpaceBetween}`}>
      <section className="login-input-section [&_label]:mb-2">
        <div className={`mb-10 w-full ${flexRowSpaceBetweenCenter}`}>
          <PageTitle color="primary">이메일로 로그인</PageTitle>
          <IconButton
            iconPath="/icons/ic-cancel.svg"
            size="medium"
            onClick={() => {}}
          />
        </div>
        <Label htmlFor="email">이메일</Label>
        <DefaultTextField
          id="email"
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onIconClick={() => setEmail("")}
          showIcon={email.length > 0}
        />
        <Label htmlFor="password">비밀번호</Label>
        <DefaultTextField
          id="password"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onIconClick={() => setIsPasswordVisible((prev) => !prev)}
          showIcon={password.length > 0}
          type={isPasswordVisible ? "text" : "password"}
        />
      </section>
      <TextButton onClick={() => {}} disabled={!password || !email}>
        로그인
      </TextButton>
    </div>
  );
}
