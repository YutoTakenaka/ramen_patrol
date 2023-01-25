import Footer from "../organisms/Footer";
import LoginIndex from "../organisms/LoginIndex";

export default function Login() {
  return (
    <div className="w-full m-auto min-h-screen flex flex-col">
      <LoginIndex />
      <Footer />
    </div>
  );
}
