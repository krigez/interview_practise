import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Users.module.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filterUsers, setFilterUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const usersPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://dummyjson.com/users?limit=300&select=firstName,age,id"
        );
        const data = await res.json();
        setUsers(data.users);
        setTotalPages(Math.ceil(data.users.length / usersPerPage));
      } catch (err) {
        console.error("Error fetching users", err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const start = (page - 1) * usersPerPage;
    const end = start + usersPerPage;
    setFilterUsers(users.slice(start, end));
  }, [page, users]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Paginated User List</h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ type: "spring", duration: 0.4 }}
        >
          {filterUsers.map((item, index) => {
            const globalIndex = (page - 1) * usersPerPage + index + 1;
            return (
              <div key={item.id} className={styles.userCard}>
                {globalIndex}. {item.firstName} (Age: {item.age})
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      <div className={styles.pagination}>
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          ⬅ Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={page === i + 1 ? styles.active : ""}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default Users;
