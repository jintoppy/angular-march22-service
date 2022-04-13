import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../student.service';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  constructor(private stuService: StudentService) { }

  //life cycle method
  ngOnInit(): void {    
    this.students = this.stuService.getStudents();
  }

}
