/** @format */

import { waifuInfo } from "../utils/dummyData";
import Waifu from "./Waifu";

const WaifuList = <T extends JSX.Element>() => {
  return (
    <div className="flex gap-5 mt-10 mb-10 flex-wrap relative">
      {waifuInfo.map((i, index) => {
        return (
          <Waifu
            key={index}
            waifuName={i.waifuName}
            src={i.src}
            comment={i.comment}
          />
        );
      })}
    </div>
  );
};

export default WaifuList;
