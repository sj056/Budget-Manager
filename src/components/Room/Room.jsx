import React from "react";
import Members from "./Member";
import Table from "./Table";
import "../../css/Room.css";
export default function Room() {
  return (
    <div>
      <h1 className="room_h1">Room Name</h1>
      <Members />
      <Table />
    </div>
  );
}
