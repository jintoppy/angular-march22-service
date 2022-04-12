import { Injectable } from '@angular/core';
import { Student } from './models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [
    {
      name: 'RR',
      class: '10'
    },
    {
      name: 'JJ',
      class: '12'
    },
    {
      name: 'KK',
      class: '13'
    }
  ]
  constructor() { }
  getStudents(){
    return this.students;
  }
}
