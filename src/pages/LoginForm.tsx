import supabase from "../configs/supabase";
import Button from "../components/Button";
import { FcGoogle } from "react-icons/fc";
import { SiDiscord } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

const Login = () => {
  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }
  async function signInWithDiscord() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "discord",
    });
  }
  async function signInWithGithub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  }
  return (
    <div className="w-full h-[625px] bg-white flex rounded-full relative">
      <div className="w-[40%]">
        <img
          className="w-full h-full object-cover"
          src={
            "https://i.pinimg.com/564x/13/24/9c/13249cc9077400c9fb41e9d21fa772f8.jpg"
          }
          alt=""
        />
      </div>
      <div className="w-[70%] flex items-center justify-center flex-col gap-6 bg-stone-800 ">
        <div>
          <div className="text-[40px] font-bold text-white">ĐĂNG NHẬP</div>
        </div>
        <Button
          classNames="bg-purple-600 w-[17rem] rounded-sm text-white flex justify-center items-center gap-4 hover:bg-purple-800"
          onClick={signInWithDiscord}
        >
          <SiDiscord className="text-2xl "></SiDiscord>
          <span>Login with Discord</span>
        </Button>
        <Button
          classNames="bg-white w-[17rem] text-black rounded-sm flex justify-center items-center gap-4 hover:bg-slate-300"
          onClick={signInWithGithub}
        >
          <BsGithub className="text-2xl"></BsGithub>
          <span>Login with GitHub</span>
        </Button>
        <Button
          classNames="bg-red-700 w-[17rem] rounded-sm text-white flex justify-center items-center gap-4 hover:bg-red-900"
          onClick={signInWithGoogle}
        >
          <FcGoogle className="text-2xl"></FcGoogle>
          <span>Login with Google </span>
        </Button>
      </div>
    </div>
  );
};

export default Login;
