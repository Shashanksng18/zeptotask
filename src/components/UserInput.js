import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import UserList from "./UserList";
const UserInput = ({
  onChangeHandler,
  selectedUser,
  handleShow,
  RemoveHandler,
  users,
  selectHandler,
  show
}) => {
  return (
    <>
     <ul className="flex flex-wrap gap-4 relative">
        {selectedUser.map((item, index) => (
          <li
            key={index + 1}
            className="ml-2 bg-slate-200 rounded-xl px-4 py-1 flex item-center justify-start gap-2 z-[999] h-10"
          >
            <img
              className="w-[20px] aspect-square object-contain roundex-[50%]"
              src={item.image}
            />
            <span>{item.name}</span>
            <RxCross2
              className="inline-block ml-2"
              onClick={() => RemoveHandler(item)}
            />
          </li>
        ))}
       <li className="border-b-4 border-blue-300 relative">
        <input
          type="text"
          onChange={(e) => onChangeHandler(e)}
          onClick={handleShow}
          className="outline-none relative py-4"
        />
         <UserList users={users} selectHandler={selectHandler} show={show} selectedUser={selectedUser}/>
      </li>
     
      </ul>
      
    
     
    </>
  );
};

export default UserInput;
