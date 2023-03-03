import React, {
  ChangeEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { waifuInfo } from "../utils/dummyData";
import { useUser } from "../contexts/AuthContext";
import { AiFillCheckCircle, AiOutlineSend } from "react-icons/ai";
import { useToast } from "../contexts/ToastContext";
import CusTomButton from "./shared/CustomButton";
import { RiDeleteBack2Line } from "react-icons/ri";

function Comment({
  openForm,
  onClick,
}: {
  openForm: boolean;
  onClick: () => void;
}) {
  const [username, setUserName] = useState("");
  const [content, setContent] = useState("");
  const { changeToggle, changeText } = useToast();

  const user = useUser();

  console.log(waifuInfo);

  useEffect(() => {
    setUserName(user?.user_metadata?.name);
  }, [user]);

  window.onkeydown = (e) => {
    if (e.key === "Enter") {
      handleForm();
      e.preventDefault();
    }
  };

  function handleForm() {
    if (content != "" || content === undefined) {
      waifuInfo.push({
        id: Math.floor(Math.random() * 100),
        waifuName: username,
        src: user?.user_metadata?.avatar_url,
        comment: content,
      });
      setContent("");
      changeToggle(true);
      changeText(
        <div className="flex items-center">
          Thêm bình luận thành công
          <AiFillCheckCircle className="text-green-500 border-spacing-5 ml-2 text-[22px]" />
        </div>
      );
    } else {
      changeToggle(true);
      changeText(<div>Vui lòng nhập bình luận</div>);
    }
  }

  function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleForm();
  }

  return (
    <div className="w-full">
      <div
        className={`w-[500px] min-h-[300px] border-frame bg-[#232323] z-50 py-4 px-10 rounded-lg `}
      >
        <form
          onSubmit={handleSubmit}
          method="post"
          className="flex flex-col justify-center gap-2"
        >
          <div className="flex justify-between">
            <label className="text-white font-semibold" htmlFor="name">
              Name
            </label>
            <RiDeleteBack2Line
              className={`text-3xl text-white cursor-pointer `}
              onClick={onClick}
            />
          </div>
          <input
            className="outline-none w-full h-4 p-4 rounded-md"
            type="text"
            id="name"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label className="text-white font-semibold" htmlFor="comment">
            Comment
          </label>
          <textarea
            className="outline-none w-full h-[100px] p-4 rounded-md"
            id="comment"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <CusTomButton classNames="w-10 rounded text-white bg-green-500 rounded-sm mx-auto flex justify-center items-center text-2xl">
            <AiOutlineSend />
          </CusTomButton>
        </form>
      </div>
    </div>
  );
}

export default Comment;
