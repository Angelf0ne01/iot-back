import { UserEmail } from "context/iot/users/domain/UserEmail";
import { UserId } from "context/iot/users/domain/UserId";
import { UserName } from "context/iot/users/domain/UserName";
import { UserPassword } from "context/iot/users/domain/UserPassword";
import { User } from "../../domain/User";
import { UserRepositorty } from "../../domain/UserRepository";

export class CreateUser {
  private constructor(private readonly userRepository: UserRepositorty) {}

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
