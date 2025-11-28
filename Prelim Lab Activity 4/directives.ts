import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './directives.html',
  styleUrls: ['./directives.css'],
})
export class Directives {
  isStaticNoteVisible: boolean = false; // fixed spelling
  isNoteVisible: boolean = false;
  isParagraphVisible: boolean = false;

  showNote() {
    this.isNoteVisible = true;
  }

  hideNote() {
    this.isNoteVisible = false;
  }

  toggleNote() {
    this.isParagraphVisible = !this.isParagraphVisible;
  }

  monthNameStatic: string = 'Mar';
  monthNameDynamic: string = 'Mar';

  cityList: string[] = ["Angeles", "San Fernando", "Mabalacat", "Tarlac", "Bataan"]

  studentList: any[] = [
    {stud_name: 'D Esquivel', course: 'Web Development', isActive:false},
    {stud_name: 'J Dizon', course: 'Netword Administration', isActive:false},
    {stud_name: 'F Alejandro', course: 'Systems Development', isActive:false},
    {stud_name: 'J David', course: 'CyberSecurity', isActive:false},
    {stud_name: 'C Quintana', course: 'Web Development', isActive:false},
  ]
}
