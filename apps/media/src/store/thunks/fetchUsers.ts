import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get('http://localhost:3005/users');

  // DEV ONLY
  // await pause(10000);
  return response.data;
});

// const pause = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
