import { DomainEventFailoverPublisher } from './../../../../../context/shared/infrastructure/EventBus/DomainEventFailoverPublisher/DomainEventFailoverPublisher';
import { RabbitMqConnection } from './../../../../../context/shared/infrastructure/EventBus/RabbitMq/RabbitMqConnection';
import { RabbitMQEventBus } from './../../../../../context/shared/infrastructure/EventBus/RabbitMq/RabbitMqEventBus';
import { RabbitMQqueueFormatter } from './../../../../../context/shared/infrastructure/EventBus/RabbitMq/RabbitMQqueueFormatter';
import { RabbitMQConfig } from './RabbitMQConfigFactory';

export class RabbitMQEventBusFactory {
    static create(
        failoverPublisher: DomainEventFailoverPublisher,
        connection: RabbitMqConnection,
        queueNameFormatter: RabbitMQqueueFormatter,
        config: RabbitMQConfig
    ): RabbitMQEventBus {
        return new RabbitMQEventBus({
            failoverPublisher,
            connection,
            exchange: config.exchangeSettings.name,
            queueNameFormatter: queueNameFormatter,
            maxRetries: config.maxRetries
        });
    }
}
