import { Queues } from '../enums';
import BaseQueue from './base.queue';
import configs from '../configs';
import transport from '../email';

export default class EmailQueue extends BaseQueue {
  private static instance: EmailQueue;

  public static getInstance(): EmailQueue {
    if (!EmailQueue.instance) {
      EmailQueue.instance = new EmailQueue();
    }
    return EmailQueue.instance;
  }

  private constructor() {
    super(Queues.email);
    this.queue.process(this.process);
  }

  private async process({ data }): Promise<void> {
    console.log(data);
    await transport.sendMail({
      to: configs.mail.default.to,
      from: configs.mail.default.from,
      subject: 'Spam, não abra',
      text: JSON.stringify(data),
    });
    console.log(`E-mail enviado com sucesso.`);
  }
}
