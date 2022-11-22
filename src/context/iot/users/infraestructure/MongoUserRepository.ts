
import { MongoRepository } from "../../../shared/infrastructure/persistence/mongo/MongoRepository";
import { User } from "../domain/User";
import { UserEmail } from "../domain/UserEmail";
import { UserId } from "../domain/UserId";
import { UserPassword } from "../domain/UserPassword";
import { UserRepositorty } from "../domain/UserRepository";

interface UserDocument {
    _id: string;
    name: string;
    email: string;
    password: string;
}

export class MongoUserRepository
    extends MongoRepository<User>
    implements UserRepositorty {
    protected collectionName(): string {
        return "users";
    }
    public async delete(userId: UserId): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public save(user: User): Promise<void> {
        return this.persist(user.id.value, user);
    }
    public update(user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public async findAll(): Promise<User[] | null> {
        const collection = await this.collection();
        const documents = await collection.find<UserDocument>({}, {}).toArray();

        return documents.map((document) =>
            User.fromPrimitives({
                name: document.name,
                email: document.email,
                password: document.password,
                id: document._id,
            })
        );
    }
    public findByEmailAndPassword(
        email: UserEmail,
        password: UserPassword
    ): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
}
