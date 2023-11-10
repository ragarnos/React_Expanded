import Header from "./Header";
import UserInfo from "./UserInfo";

const users = [
  { name: "Jon", age: 34, city: "Kiev" },
  { name: "Sara", age: 30, city: "Lviv" },
  { name: "Oleg", age: 25, city: "Dnipro" },
];

function Content() {
  return (
    <>
      <Header />
      <UserInfo users={users}></UserInfo>
    </>
  );
}
export default Content;
