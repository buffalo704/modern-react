import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {faker} from "@faker-js/faker";

export const addUser = createAsyncThunk('users/add', async () => {
  const response = await axios.post('http://localhost:3005/users',{
    name: faker.person.fullName()
  });

  // DEV ONLY
  // await pause(10000);
  return response.data;
});

// const pause = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
