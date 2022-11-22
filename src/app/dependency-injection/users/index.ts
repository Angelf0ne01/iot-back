import { UserPostController } from "../../../app/controllers/users/UserPostController";
import { ContainerBuilder, Definition } from "node-dependency-injection";
import { CreateUser } from "./../../../context/iot/users/application/create/CreateUser";
import { MongoUserRepository } from "../../../context/iot/users/infraestructure/MongoUserRepository";
import { MongoClientFactory } from "../../../context/shared/infrastructure/persistence/mongo/MongoClientFactory";
import { MongoConfigFactory } from "../../../context/iot/shared/infraestructure/persistence/mongo/MongoConfigFactory";

export const UserRegister = (container: ContainerBuilder) => {
  //repository shared factory

  const definitionMongoFactory = new Definition();
  definitionMongoFactory.setFactory(MongoConfigFactory, "createConfig");
  container.setDefinition(
    "Iot.shared.MongoConfigFactory",
    definitionMongoFactory
  );

  //repository
  const definitionMongoClientFactory = new Definition();
  definitionMongoClientFactory.args = ["iot", "Iot.shared.MongoConfigFactory"];
  definitionMongoClientFactory.setFactory(MongoClientFactory, "createClient");
  container.setDefinition(
    "Iot.shared.ConnectionManager",
    definitionMongoClientFactory
  );

  //Database
  container
    .register("Iot.users.domain.MongoUserRepository", MongoUserRepository)
    .addArgument("Iot.shared.ConnectionManager");

  //user-case
  container
    .register("Iot.users.application.CreateUser", CreateUser)
    .addArgument("Iot.users.infraestructure.MongoUserRepository");

  //controller
  container.register(
    "Apps.iot.controllers.UserPostController",
    UserPostController
  );
};
