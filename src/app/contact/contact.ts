import { Component } from '@angular/core';
import { NetBackgroundComponent } from './background/background';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NetBackgroundComponent, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  sendEmail(form: any) {   // accept the NgForm object
  if (form.invalid) {
    alert('Please fill in all fields.');
    return;
  }

  emailjs.send(
    'service_nzt71st',
    'template_80q4m66',
    {
      from_name: this.formData.name,
      from_email: this.formData.email,
      message: this.formData.message
    },
    'fd-694X1VWB-U8mB_'
  ).then(
    () => {
      alert('✅ Message sent successfully!');
      form.resetForm();  // reset the form using the NgForm reference
      this.formData = { name: '', email: '', message: '' };
    },
    (error) => {
      alert('❌ Failed to send message. Try again later.');
      console.error('EmailJS Error:', error);
    }
  );
}
}