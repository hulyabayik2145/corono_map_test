import { useState } from "react";
import Map from "../../components/Map";

import { Tooltip } from "react-tooltip";

const MapPage = () => {
  const [toolTipContent, setTooltipContent] = useState("");
  return (
    <div className="h-[calc(100vh-74px)] bg-zinc-800 text-white  overflow-hidden flex flex-col justify-center items-center wrapper md:pt-20">
      <h6 className="px-6 pt-6">Detay görüntüle: {toolTipContent}</h6>
      <Map setTooltipContent={setTooltipContent} />
      {/* <Tooltip content={"Deneme"} /> */}
    </div>
  );
};

export default MapPage;
