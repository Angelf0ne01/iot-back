
import { User } from "../../domain/User";
import { UserEmail } from "../../domain/UserEmail";
import { UserId } from "../../domain/UserId";
import { UserName } from "../../domain/UserName";
import { UserPassword } from "../../domain/UserPassword";
import { UserRepositorty } from "../../domain/UserRepository";

export class CreateUser {
  private constructor(private readonly userRepository: UserRepositorty) { }

  async run(
    id: UserId,
    username: UserName,
    email: UserEmail,
    password: UserPassword
  ): Promise<void> {
    const user = User.create(id, username, email, password);
    this.userRepository.save(user);
  }
}
