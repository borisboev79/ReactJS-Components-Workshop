import UserListItem from "./UserListItem";
import * as userService from "../services/userService";
import { useEffect, useState } from "react";
import CreateUserModal from "./AddUserModal";
import UserInfoModal from "./UserInfoModal";
import DeleteUserModal from "./DeleteUserMOdal";

const UserListTable = (props) => {
  const [users, setUsers] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    userService
      .getAll()
      .then((result) => setUsers(result))
      .catch((error) => console.log(err));
  }, []);

  const addUserClickHandler = () => {
    setShowAdd(true);
  };

  const closeAddUserClickHandler = () => {
    setShowAdd(false);
  };

  const userCreateHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = Object.fromEntries(formData);

    const newUser = await userService.add(data);

    setUsers((state) => [...state, newUser]);

    setShowAdd(false);
  };

  const showInfoClickHandler = async (userId) => {
    setSelectedUser(userId);
    setShowInfo(true);
  };

  const closeUserInfoClickHandler = () => {
    setShowInfo(false);
  };

  const showEditUserClickHandler = (userId) => {
    setSelectedUser(userId);
    setShowEdit(true);
  };

  const userEditHandler = async (e) => {
    e.preventDefault();

    const user = userService.getOne(selectedUser);

    const formData = new FormData(user);

    const data = Object.fromEntries(formData);

    const newUser = await userService.edit(data);

 //   setUsers((state) => [...state, newUser]);

    setShowAdd(false);
  };

  const closeUserEditClickHandler = () => {
    setShowEdit(false);
  };

  const showDeleteUserInfoClickHandler = (userId) => {
    setSelectedUser(userId);
    setShowDelete(true);
  };

  const closeDeleteUserClickHandler = () => {
    setShowDelete(false);
  };

  const userDeleteHandler = async (userId) => {
    userService.deleteOne(userId);

    setUsers((state) => state.filter((u) => u._id !== userId));

    setShowDelete(false);
  };

  return (
    <div className="table-wrapper">
      {showAdd && (
        <CreateUserModal
          closeModal={closeAddUserClickHandler}
          onUserAdd={userCreateHandler}
          command="add"
        />
      )}

      {showInfo && (
        <UserInfoModal
          closeInfo={closeUserInfoClickHandler}
          userId={selectedUser}
        />
      )}

      {showEdit && (
        <CreateUserModal
          closeEdit={closeUserEditClickHandler}
          onUserEdit={userEditHandler}
          command="edit"
        />
      )}

      {showDelete && (
        <DeleteUserModal
          closeDelete={closeDeleteUserClickHandler}
          onDelete={userDeleteHandler}
          userId={selectedUser}
        />
      )}

      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>
              First name
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-down"
                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                ></path>
              </svg>
            </th>
            <th>
              Last name
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-down"
                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                ></path>
              </svg>
            </th>
            <th>
              Email
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-down"
                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                ></path>
              </svg>
            </th>
            <th>
              Phone
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-down"
                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                ></path>
              </svg>
            </th>
            <th>
              Created
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-down"
                className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                ></path>
              </svg>
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserListItem
              key={user._id}
              userId={user._id}
              createdAt={user.createdAt}
              firstName={user.firstName}
              lastName={user.lastName}
              imageUrl={user.imageUrl}
              email={user.email}
              phoneNumber={user.phoneNumber}
              showInfo={showInfoClickHandler}
              showDelete={showDeleteUserInfoClickHandler}
              showEdit={showEditUserClickHandler}
            />
          ))}
        </tbody>
      </table>
      <button className="btn-add btn" onClick={addUserClickHandler}>
        Add new user
      </button>
    </div>
  );
};

export default UserListTable;
