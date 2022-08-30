import { useNavigate } from "react-router-dom";
import PrimaryButton from "../molecules/buttons/PrimaryButton";
import TextBox from "../molecules/inputs/TextField";

const LOGIN_ITEMS = [
  { label: "Email" },
  { label: "Username" },
  { label: "Password" },
];
export default function LoginIndex() {
  const navigate = useNavigate();
  const onClickLogin = () => {
    navigate("/");
  };
  return (
    <div className="bg-gray-50 w-full pb-32 pt-16">
      <div className="bg-white border border-gray-200 w-2/5 mx-auto rounded-lg">
        <p className="font-bold bg-gradient-to-br from-pink-500 to-yellow-500 h-26 text-center text-white text-4xl bg-clip-text text-transparent mt-8">
          Ramen Patrol
        </p>
        <p className="text-center text-gray-400 text-sm mt-8 w-3/4 mx-auto">
          Sign in to see Ramen and videos from your friends.
        </p>
        <p className="w-3/4 underline border-gray-400"></p>
        <div className="text-center mt-8">
          {LOGIN_ITEMS.map((item) => (
            <div className="mt-3">
              <TextBox label={item.label} required={true} disabled={false} />
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 text-sm mt-8 w-3/4 mx-auto">
          People who use our service may have uploaded your contact information
          to Ramen Patrol.
        </p>
        <p className="text-center text-gray-400 text-sm mt-4 w-3/4 mx-auto">
          By log in, you can patrol ramen all og the world . Enjoy your Ramen
          Patrol Life .
        </p>
        <p className="text-center text-gray-400 text-sm mt-4 w-3/4 mx-auto">
          If you don't have any accounts ,<br />
          <span className="font-bold">
            <a href="/signup">create your account</a>
          </span>{" "}
          to patrol Ramen !
        </p>
        <div className="text-center mt-4 mb-8">
          <PrimaryButton onClick={onClickLogin}>
            <div className="h-8 w-32 text-sm flex items-center justify-center">
              <p className="text-white">Log In</p>
            </div>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
