import {Injectable, Logger} from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

@Injectable()
export class MailService {
  private readonly  logger = new Logger('MailService')
  private transporter: nodemailer.Transporter;
  
  constructor() {
    const transportOptions: SMTPTransport.Options = {
      host: process.env.MAIL_HOST,
      port: parseInt(process.env.MAIL_PORT, 10),
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    };
    
    this.transporter = nodemailer.createTransport(transportOptions);
  }
  
  /**
   * Send an email.
   * @param to Recipient's email address.
   * @param subject Email subject.
   * @param text Email body as plain text.
   */
  async sendMail(to: string, subject: string, text: string) {
    const mailOptions = {
      from: process.env.MAIL_USER,
      to,
      subject,
      text,
    };
    
    try {
      const info = await this.transporter.sendMail(mailOptions);
      this.logger.log(`Message sent: ${info.messageId}`)
    } catch (e) {
      this.logger.error(e)
    }
  }
}
