import React from "react";

const UserList = ({ users, selectHandler, show, selectedUser }) => {
  console.log(selectedUser.length)
  return (
    <div className="h-[400px]  rounded-xl absolute w-full mt-3">
      {show && (
        <ul className="w-[250px] bg-white h-auto min-h-[50px] overflow-scroll shadow-white shadow-slate-400">
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
          {selectedUser.length >= 5  && <span>list is empty</span>}
        </ul>
      )}
    </div>
  );
};

export default UserList;
