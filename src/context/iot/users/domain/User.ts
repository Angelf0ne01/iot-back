import { AggregateRoot } from "@context/shared/domain/AggregateRoot";
import { UserEmail } from "./UserEmail";
import { UserId } from "./UserId";
import { UserName } from "./UserName";
import { UserPassword } from "./UserPassword";

export class User extends AggregateRoot {
  readonly id: UserId;
  readonly name: UserName;
  readonly email: UserEmail;
  readonly password: UserPassword;
  private constructor(
    id: UserId,
    name: UserName,
    email: UserEmail,
    password: UserPassword
  ) {
    super();
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static create(
    id: UserId,
    name: UserName,
    email: UserEmail,
    password: UserPassword
  ) {
    const user = new User(id, name, email, password);
    return user;
  }

  toPrimitives(): any {
    return {
      id: this.id.value,
      name: this.name.value,
      email: this.email.value,
      password: this.password.value,
    };
  }
}
