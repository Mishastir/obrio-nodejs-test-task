As far as comments are forbidden I've decided to write down README

Reports module approach looks bad, as far as CRON will be called on
every server that application is running on.

The best practice for such task is to use some external queue/storage 
and put message there in [`PurchasesService.create`](../purchases/services/purchases.service.ts) in order to guarantee exactly one execution.

E.g. We can use [Bull](https://github.com/OptimalBits/bull), [RabbitMQ](https://www.rabbitmq.com) etc.

For **Bull** we can use [`delay` param](https://docs.nestjs.com/techniques/queues#job-options-1)

For **RabbitMQ** we can use [
`rabbitmq_delayed_message_exchange` plugin](https://www.rabbitmq.com/blog/2015/04/16/scheduling-messages-with-rabbitmq)
