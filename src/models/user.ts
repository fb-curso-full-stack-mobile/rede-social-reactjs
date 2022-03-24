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

export function fullname(user?: User) {
  if (user) {
    if (user.name && user.surname) {
      return `${user.name} ${user.surname}`;
    } else {
      return user.name || user.surname;
    }
  }
  return "";
}
