import { useNavigate } from "react-router-dom";
import PrimaryButton from "../molecules/buttons/PrimaryButton";
import TextBox from "../molecules/inputs/TextField";

const SIGN_UP_ITEMS = [
  { label: "Mobile Number" },
  { label: "Email" },
  { label: "Username" },
  { label: "Password" },
];
export default function SignUpIndex() {
  const navigate = useNavigate();
  const onClickSignUp = () => {
    navigate("/");
  };
  return (
    <div className="bg-gray-50 w-full pb-32 pt-16">
      <div className="bg-white border border-gray-200 w-2/5 mx-auto rounded-lg">
        <p className="font-bold bg-gradient-to-br from-pink-500 to-yellow-500 h-26 text-center text-white text-4xl bg-clip-text text-transparent mt-8">
          Ramen Patrol
        </p>
        <p className="text-center text-gray-400 text-sm mt-8 w-3/4 mx-auto">
          Sign up to see Ramen and videos from your friends.
        </p>
        <p className="w-3/4 underline border-gray-400"></p>
        <div className="text-center mt-8">
          {SIGN_UP_ITEMS.map((item) => (
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
          By signing up, you agree to our Terms , Privacy Policy and Cookies
          Policy .
        </p>
        <div className="text-center mt-4 mb-8">
          <PrimaryButton onClick={onClickSignUp}>
            <div className="h-8 w-32 text-sm flex items-center justify-center">
              <p className="text-white">Sign up</p>
            </div>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
