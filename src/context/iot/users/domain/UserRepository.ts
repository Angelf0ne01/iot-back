import { User } from "./User";
import { UserEmail } from "./UserEmail";
import { UserId } from "./UserId";
import { UserPassword } from "./UserPassword";

export interface UserRepositorty {
  delete(userId: UserId): Promise<void>;
  save(user: User): Promise<void>;
  update(user: User): Promise<void>;
  findAll(): Promise<User[] | null>;
  findByEmailAndPassword(
    email: UserEmail,
    password: UserPassword
  ): Promise<User | null>;
}
