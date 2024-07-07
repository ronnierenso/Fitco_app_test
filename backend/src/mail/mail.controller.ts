import { Controller, Get } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller()
export class MailController {
  constructor(private readonly mailService: MailService) {}
  
  @Get('send-email')
  async sendEmail() {
    await this.mailService.sendMail('ronnieitor@gmail.com', 'Test Email', 'This is a test email.');
    return 'Email sent';
  }
}
