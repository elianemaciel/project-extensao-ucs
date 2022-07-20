import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-student-modal',
  templateUrl: './edit-student-modal.component.html',
  styleUrls: ['./edit-student-modal.component.scss'],
})
export class EditStudentModalComponent implements OnInit {
  @Input() open = false;
  @Input() student: { name: string; idade?: number } = { name: '' };

  constructor() {}

  ngOnInit(): void {}
}
