import { Pipe, PipeTransform } from '@angular/core';
  
@Pipe({
    name: 'ukrDate'
})
export class DatePipe implements PipeTransform {
  transform(date: Date): string{
    const months: string[] = ["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"];
    let newDate = new Date(date);
    let formatdate = newDate.getDate() + " " + months[newDate.getMonth()] + " " + newDate.getFullYear();
    return formatdate;
  }
}