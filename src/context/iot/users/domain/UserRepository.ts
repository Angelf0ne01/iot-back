import { User } from "./User";
import { UserEmail } from "./UserEmail";
import { UserId } from "./UserId";
import { UserPassword } from "./UserPassword";

export interface UserRepositorty {
  delete: (userId: UserId) => void;
  save: (user: User) => User;
  update: (user: User) => User;
  findAll: () => User[];
  findByEmailAndPassword: (
    email: UserEmail,
    password: UserPassword
  ) => User | null;
}
