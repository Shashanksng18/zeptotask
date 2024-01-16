import React from "react";
import image from "../utils/images/download.png";

const UserList = ({ users, selectHandler, show }) => {
  return (
    <div className="bg-slate-200 h-[400px]">
      {show && (
        <ul className="w-[300px] bg-white flex items-center justify-start flex-col m-auto h-[200px] overflow-scroll absolute  left-4">
          {users.map((item, index) => (
            <li
              key={index + 2}
              className="py-2 w-full flex items-center justify-start gap-4 border-b-2 border-slate-100"
              onClick={() => selectHandler(index)}
            >
              <img
                className="w-[30px] aspect-square object-contain"
                src={item.image}
                alt="image"
              />
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
