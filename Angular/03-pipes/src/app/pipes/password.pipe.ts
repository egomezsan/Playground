import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(password: string, mask: boolean = true): string {
    if (mask) {
      let maskedPassword = '';
      for (const c of password) {
        maskedPassword += '*';
      }
      password = maskedPassword;
    }
    return password;
  }

}
