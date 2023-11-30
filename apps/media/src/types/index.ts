

export interface User {
  id: number;
  name: string;
}

export interface UsersState {
  data?: User[];
  isLoading: boolean;
  error?: string;
}

export type ThunkFunction = (arg?: unknown) => void;

export interface Album {
  id: number;
  title: string;
  userId: number;
}

export interface Photo {
  id: number;
  albumId: number;
  url: string;
}
