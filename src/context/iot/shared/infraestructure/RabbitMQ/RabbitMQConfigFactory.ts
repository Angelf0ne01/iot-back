import { ConnectionSettings } from "@context/shared/infrastructure/EventBus/RabbitMq/ConnectionSettings";
import { ExchangeSetting } from "@context/shared/infrastructure/EventBus/RabbitMq/ExchangeSetting";
import config from "../config";

export type RabbitMQConfig = {
  connectionSettings: ConnectionSettings;
  exchangeSettings: ExchangeSetting;
  maxRetries: number;
  retryTtl: number;
};
export class RabbitMQConfigFactory {
  static createConfig(): RabbitMQConfig {
    //return config.get('rabbitmq');
    return {
      connectionSettings: {
        username: "guest",
        password: "guest",
        vhost: "/",
        connection: {
          secure: false,
          hostname: "localhost",
          port: 5672,
        },
      },
      exchangeSettings: {
        name: "domain_events",
      },
      maxRetries: 3,
      retryTtl: 1000,
    };
  }
}
