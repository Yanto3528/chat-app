import React from "react";
import { useCurrentRoom } from "../../../context/current-room.context";

const ChatTop = () => {
  const name = useCurrentRoom((v) => v.name);

  return <div>{name}</div>;
};

export default React.memo(ChatTop);