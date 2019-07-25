export interface UsersRedux {
  data: User[];
  loading: boolean;
  selected?: number;
}

export interface User {
  id: number;
  name: string;
}
