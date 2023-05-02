import { Routes, Route } from "react-router";
import Register from "./Register";
import Home from "./Home"
import AddMeeting from "./AddMeeting";
import AddUser from "./AddUser";
import ViewUsers from "./ViewUsers";
import ViewRooms from "./ViewRooms";
import styles from '../styles/app.module.css'
import HomeInitial from "./HomeInitial";

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/home" element={<Home />}>
          <Route path="" element={<HomeInitial />}></Route>
          <Route path="addNewUser" element={<AddUser />}></Route>
          <Route path="addNewMeeting" element={<AddMeeting />}></Route>
          <Route path="viewUsers" element={<ViewUsers />}></Route>
          <Route path="viewRooms" element={<ViewRooms />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
