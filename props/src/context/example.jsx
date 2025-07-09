import React, { useContext } from "react";
import { createContext } from "react";

const UserContext = createContext({});
const user = {
  name: "apple-ceo",
  address: "apple park, cupertino",
  age: 50,
  salary: "$1000000",
  isOnline: true,
};
const UserProvider = UserContext.Provider;

export default function ContextExample() {
  return (
    <div>
      <UserProvider value={user}>
        <RenderUserName />
        <RenderUserAddress />
        <RenderUserAge/>
        <RenderUserSalary />
      </UserProvider>
    </div>
  );
}

function RenderUserName() {
  const { name } = useContext(UserContext);

  return (
    <div>
      <p>Name: {name}</p>
    </div>
  );
}

function RenderUserAddress() {
  const { address } = useContext(UserContext);

  return (
    <div>
      <p>{address}</p>
    </div>
  );
}

function RenderUserSalary() {
  const { salary } = useContext(UserContext);

  return (
    <div>
      <p>salary: {salary}</p>
    </div>
  );
}

function RenderUserAge() {
  const { age } = useContext(UserContext);

  return (
    <div>
      <p>Age: {age}</p>
    </div>
  );
}
