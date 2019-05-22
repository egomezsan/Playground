import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalizado'})
export class CapitalizadoPipe implements PipeTransform {
    transform(value: string, todas: boolean = true): string {
        let nombres = value.toLowerCase().split(' ');
        if (todas) {
            for (const INDEX in nombres) {
                if (INDEX) {
                 nombres[INDEX] = nombres[INDEX][0].toUpperCase() + nombres[INDEX].substring(1);
                }
            }
        } else {
         nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substring(1);
        }

        return nombres.join(' ');
    }
}
