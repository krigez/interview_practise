const UsersPage = ({users}) => {
  return (
  <>
    <ul>
      {users.map((item) => (
        <li key={item.id}>{item.firstName}</li>
      ))}
    </ul>
  </>
  
  
  )
};

export default UsersPage;
