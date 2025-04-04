import { useState, useEffect } from "react";
import UsersPage from "./UsersPage";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState(null);
  const [filteredUsers, setFilteredusers] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users)
        setFilteredusers(data.users)
      });
  }, []);

  useEffect(() => {
    const filterUsers = () => {
      let abc =
        users?.length &&
        users.filter((item) => {
          return item.firstName.toLowerCase().includes(search);
        });

      setFilteredusers(abc);
    };
    filterUsers(search);
  }, [search, users]);



  const handleSearch = (inp) => {
    setSearch(inp.toLowerCase());
  };

  return (
    <>
      <div>here is search</div>
      <input
        type="search"
        value={search}
        placeholder="searchHere"
        onChange={(e) => handleSearch(e.target.value)}
      />

      <div>
        List of Users
        <div>
          {
           users ? <UsersPage users={filteredUsers}></UsersPage> : <></>
          } 
        </div>
      </div>
    </>
  );
};

export default SearchBar;
