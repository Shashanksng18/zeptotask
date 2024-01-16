import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
const UserInput = ({
  onChangeHandler,
  selectedUser,
  handleShow,
  RemoveHandler,
}) => {
  return (
    <>
      <input
        type="text"
        onChange={(e) => onChangeHandler(e)}
        onClick={handleShow}
        className="outline-none border-blue-300 w-full border-b-2 py-4"
      />
      <ul className="fixed top-2 left-0 flex flex-wrap">
        {selectedUser.map((item, index) => (
          <li key={index+1} className="relative ml-2 bg-slate-200 rounded-xl px-4 py-1 flex item-center justify-start gap-2">
            <img
              className="w-[30px] aspect-square object-contain"
              src={item.image}
            />
            {item.name}
            <RxCross2
              className="inline-block ml-2"
              onClick={() => RemoveHandler(item)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserInput;
