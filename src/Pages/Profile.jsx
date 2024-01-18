import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  userDeleteSuccessAction,
  userUpdateSuccessAction,
} from "../Redux/LoginForm/action";
import Navbar from "../Components/Navbar";

const Profile = () => {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const { form, isLoading } = useSelector((store) => {
    return {
      form: store.reducer.FormDat,
      isLoading: store.reducer.isLoading,
    };
  });

  const handleDelete = (id) => {
    console.log(id, "id");
    const updatedData = data.filter((item) => item.id !== id);
    dispatch(userDeleteSuccessAction(id));
  };

  const handleEdit = (item) => {
    setEditData(item);
    setIsEditing(true);
  };

  const handleUpdate = () => {
    dispatch(userUpdateSuccessAction(editData));
    setEditData({});
    setIsEditing(false);
  };

  useEffect(() => {
    setData(form);
  }, [form]);

  return (
    <div>
      <Navbar />
      <h1>Profile</h1>
      {form.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>EMAIL</th>
              <th>MOBILE</th>
              <th>PASSWORD</th>
            </tr>
          </thead>
          <tbody>
            {form.map((item) => (
              <tr key={item.id}>
                <td>
                  {isEditing && editData.id === item.id ? (
                    <input
                      type="text"
                      value={editData.email}
                      onChange={(e) =>
                        setEditData({ ...editData, email: e.target.value })
                      }
                    />
                  ) : (
                    item.email
                  )}
                </td>
                <td>{item.mobile}</td>
                <td>
                  {isEditing && editData.id === item.id ? (
                    <input
                      type="password"
                      value={editData.password}
                      onChange={(e) =>
                        setEditData({ ...editData, password: e.target.value })
                      }
                    />
                  ) : (
                    item.password
                  )}
                </td>
                <td>
                  {isEditing && editData.id === item.id ? (
                    <button onClick={handleUpdate}>Save</button>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(item)}>Update</button>
                      <button onClick={() => handleDelete(item.id)}>
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Profile;
