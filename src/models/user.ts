export type User = {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  birthdate: string | null;
  createdAt: Date;
  updatedAt: Date;
};
