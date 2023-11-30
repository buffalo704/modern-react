import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {User} from "../../types";

export const removeUser = createAsyncThunk('users/remove', async (user:User) => {
  await axios.delete(`http://localhost:3005/users/${user.id}`);

  return user;
});
