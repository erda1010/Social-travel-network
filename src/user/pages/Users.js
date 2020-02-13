import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Jane Max",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/59/That_Poppy_profile_picture.jpg",
      places: 10
    }
  ];
  return <UsersList items={USERS} />;
};

export default Users;
