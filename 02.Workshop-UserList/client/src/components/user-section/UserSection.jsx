import { useEffect, useState } from "react";
import Search from "../search/Search";
import UserPagination from "./user-list/user-paginantion/UserPagination";
import UserList from "./user-list/UserList";
import UserAdd from "./user-add/UserAdd";
import UserDetails from "./user-details/UserDetails";
import UserDelete from "./user-delete/UserDelete";

const baseUrl = "http://localhost:3030/jsonstore";

export default function UserSection() {
  const [users, setUsers] = useState([]);
  const [showAddUser, setShowAddUser] = useState(false)
  const [showUserDetails, setShowUserDetails] = useState(null)
  const [showUserDelete, setShowUserDelete] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    (async function getUsers() {
      try {
        const response = await fetch(`${baseUrl}/users`);
        const result = await response.json();
        const users = Object.values(result);
        setUsers(users);
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false)
      }
    })();
  }, []);

  const addUserClickHandler = () => {
    setShowAddUser(true)
  }

  const addUserCloseHandler = () => {
    setShowAddUser(false)
  }

  const addUserSave = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const userData = {
      ...Object.fromEntries(formData),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    const response = await fetch(`${baseUrl}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })

    const newUser = await response.json()
    setUsers(oldUsers => [...oldUsers, newUser])

    setIsLoading(false)
    setShowAddUser(false)
  }

  const userDetailsClickHandler = (user) => {
    setShowUserDetails(user)
  }

  const userDetailsCloseHandler = () => {
    setShowUserDetails(null)
  }

  const userDeleteClickHandler = (userId) => {
    setShowUserDelete(userId)

  }

  const userDeleteHandler = async () => {
    setIsLoading(true)

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await fetch(`${baseUrl}/users/${showUserDelete}`, {
        method: 'DELETE',
      })
    } catch (error) {
      console.error(error.message);
    }
    setUsers(oldUsers => oldUsers.filter(user => user._id !== showUserDelete))

    setIsLoading(false)
    setShowUserDelete(null)

  }

  return (
    <section className="card users-container">
      <Search />

      <UserList users={users} isLoading={isLoading} onShowUserDetails={userDetailsClickHandler} userDeleteClickHandler={userDeleteClickHandler} />


      {showUserDelete && <UserDelete onDelete={userDeleteHandler} onClose={() => setShowUserDelete(null)} />}
      {showUserDetails && <UserDetails showUserDetails={showUserDetails} onClose={userDetailsCloseHandler} />}

      <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>
      {showAddUser && <UserAdd onClose={addUserCloseHandler} onSave={addUserSave} />}

      <UserPagination />
    </section>
  );
}
