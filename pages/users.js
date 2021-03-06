import styles from '../styles/users.module.css';
import User from "../components/user";
import usersList from "../store/usersList";
import {observer} from "mobx-react-lite"
import MainContainer from "../components/mainContainer";
import Sort from "../components/sort";

const Users = observer(() => {

  return (
    <MainContainer keywords={'users page'}>
      <h1 className={styles.heading}>Users</h1>
      <Sort/>
      <div className={styles.users_list}>
        {usersList.users.map(user => <User key={user.id} user={user}/>)}
      </div>
    </MainContainer>
  );
});

export default Users;
