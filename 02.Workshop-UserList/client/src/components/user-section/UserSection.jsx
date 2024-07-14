import { useEffect, useState } from "react";
import Search from "../search/Search";
import UserPagination from "./user-list/user-paginantion/UserPagination";
import UserList from "./user-list/UserList";

const baseUrl = "http://localhost:3030/jsonstore";

export default function UserSection() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async function getUsers() {
      try {
        const response = await fetch(`${baseUrl}/users`);
        const result = await response.json();
        const users = Object.values(result);
        setUsers(users);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, []);

  return (
    <section className="card users-container">
      <Search />

      <UserList users={users} />

      <button className="btn-add btn">Add new user</button>

      <UserPagination />
    </section>
  );
}
