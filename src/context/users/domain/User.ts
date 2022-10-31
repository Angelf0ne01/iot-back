import { UserEmail } from "./UserEmail";
import { UserName } from "./UserName";
import { UserPassword } from "./UserPassword";

class User {
  constructor(
    private readonly email: UserEmail,
    private readonly password: UserPassword,
    private readonly name: UserName
  ) {}
}
