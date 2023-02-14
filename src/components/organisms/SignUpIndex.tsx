import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/useAuth";
import { api } from "../../services/api";
import { TAuthUser } from "../../types/types";
import PrimaryButton from "../molecules/buttons/PrimaryButton";
import TextBox from "../molecules/inputs/TextField";

const SIGN_UP_ITEMS = [{ label: "Username" }, { label: "Password" }];
export default function SignUpIndex() {
  const navigate = useNavigate();
  const { setAuthenticate, setLoginUser } = useAuth();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const onClickSignUp = () => {
    api
      .post("/signup", {
        username,
        password,
      })
      .then((response) => {
        const jwtToken = response.data.access_token;
        setAuthenticate(jwtToken);
        setLoginUser((prev: TAuthUser) => {
          return {
            ...prev,
            user_id: response.data.user_id,
            username: response.data.username,
            access_token: jwtToken,
          };
        });
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="bg-gray-50 w-full pt-32 flex-1">
      <div className="bg-white border border-gray-200 w-2/5 mx-auto rounded-lg">
        <h1 className="font-bold bg-gradient-to-br from-pink-500 to-yellow-500 h-26 text-center text-white text-4xl bg-clip-text text-transparent mt-8">
          Ramen Patrol
        </h1>
        <p className="text-center text-gray-400 text-sm mt-8 w-3/4 mx-auto">
          Sign up to see Ramen and videos from your friends.
        </p>
        <p className="w-3/4 underline border-gray-400"></p>
        <div className="text-center mt-8">
          {SIGN_UP_ITEMS.map((item) => (
            <div className="mt-3 w-1/2 m-auto" key={item.label}>
              <p className="text-left">
                <label htmlFor="" className="mt-2 text-gray-500">
                  {item.label}
                </label>
              </p>
              <input
                className="bg-gray-100 p-2 rounded border border-gray-300 w-full"
                type={item.label === "Username" ? "text" : "password"}
                value={item.label === "Username" ? username : password}
                onChange={
                  item.label === "Username"
                    ? (e) => setUsername(e.target.value)
                    : (e) => setPassword(e.target.value)
                }
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-8 mb-8">
          <PrimaryButton onClick={onClickSignUp}>
            <div className="h-8 w-32 text-sm flex items-center justify-center">
              <p className="text-white">Sign up</p>
            </div>
          </PrimaryButton>
        </div>
        <p className="text-center text-gray-400 text-sm mb-8 w-3/4 mx-auto">
          Have an account?{" "}
          <span>
            <a
              className="font-semibold text-blue-500 hover:text-blue-400"
              href="/login"
            >
              Log in
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}
