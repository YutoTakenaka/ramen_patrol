import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/useAuth";
import { loginApi, setTokenHeader } from "../../services/api";
import { TAuthUser } from "../../types/types";
import PrimaryButton from "../molecules/buttons/PrimaryButton";

const LOGIN_ITEMS = [{ label: "Username" }, { label: "Password" }];
export default function LoginIndex() {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { setLoginUser, setAuthenticate } = useAuth();

  const onClickLogin = async () => {
    loginApi
      .post(
        "/token",
        JSON.stringify(
          `grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`
        )
      )
      .then((response) => {
        const jwtToken: string = response.data.access_token;
        setTokenHeader(jwtToken);
        setAuthenticate(jwtToken);
        setLoginUser((prev: TAuthUser) => {
          return {
            ...prev,
            user_id: response.data.user_id,
            username: response.data.username,
            access_token: jwtToken,
          };
        });
        setErrorMessage("");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Incorrect username or password");
        navigate("/login");
      });
  };
  return (
    <div className="bg-gray-50 w-full pt-32 flex-1">
      <div className="bg-white border border-gray-200 w-2/5 mx-auto rounded-lg">
        <p className="font-bold bg-gradient-to-br from-pink-500 to-yellow-500 h-26 text-center text-white text-4xl bg-clip-text text-transparent mt-8">
          Ramen Patrol
        </p>
        <p className="text-center text-gray-500 text-sm mt-8 w-3/4 mx-auto">
          Sign in to see Ramen from your friends.
        </p>
        <p className=" text-red-500 text-sm mt-4 w-1/2 mx-auto">
          {errorMessage}
        </p>
        <div className="text-center mt-8">
          {LOGIN_ITEMS.map((item) => (
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
          <PrimaryButton onClick={onClickLogin}>
            <div className="h-8 w-32 text-sm flex items-center justify-center">
              <p className="text-white">Log In</p>
            </div>
          </PrimaryButton>
        </div>
        <p className="text-center text-gray-500 text-sm my-8 w-3/4 mx-auto">
          If you don't have any accounts ,<br />
          <span className="font-semibold text-blue-500 hover:text-blue-400">
            <a href="/signup">create your account</a>
          </span>{" "}
          to patrol Ramen !
        </p>
      </div>
    </div>
  );
}
