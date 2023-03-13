/** @format */

import { useToast } from "../contexts/ToastContext";
import { waifuInfo } from "../utils/dummyData";
import Waifu from "./Waifu";

const WaifuList = () => {
  const { toggle, changeToggle, changeText } = useToast();


  const deleteComment = (id: number) => {
      waifuInfo.splice(id, 1);
      changeToggle(true);
      changeText(<div>Xóa bình luận thành công</div>)
  };

  return (
    <div className="flex gap-5 mt-10 mb-10 flex-wrap relative">
      {waifuInfo.map((i, index) => {
        return (
          <Waifu
            key={index}
            id={i.id}
            waifuName={i.waifuName}
            src={i.src}
            comment={i.comment}
            deleteComment={() => {
              deleteComment(index);
            }}
          />
        );
      })}
    </div>
  );
};

export default WaifuList;
