/* eslint-disable react/prop-types */
import '../assets/styles/App.scss';

const UserInfo = (props) => {
  const { users } = props;
  return (
    <div className="container">
      {users.map((user, index) => (
        <div className='item' key={index}>
          <h4>Name: {user.name}</h4>
          <h4>Age: {user.age}</h4>
          <h4>City: {user.city}</h4>
        </div>
      ))}
    </div>
  );
};

export default UserInfo;
