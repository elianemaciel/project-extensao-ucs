import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-edit-student-modal',
  templateUrl: './edit-student-modal.component.html',
  styleUrls: ['./edit-student-modal.component.scss'],
})
export class EditStudentModalComponent implements OnInit, OnChanges {
  @Input() open = false;
  @Input() student: { name: string; idade?: number } = { name: '' };
  @Output() eventAddItem: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('content') content: any;
  formStudent!: FormGroup;

  constructor(private formBuilder: FormBuilder, private modalService: NgbModal) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['open'].currentValue) {
      this.onOpen(this.content);
    }
  }

  ngOnInit(): void {
    this.createForm({ name: '', idade: 0 });
  }

  createForm(student: { name: string; idade?: number }) {
    this.formStudent = this.formBuilder.group({
      name: [student.name],
      idade: [student.idade],
    });
  }

  onOpen(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then();
  }

  onSubmit() {
    console.log(this.formStudent.value);
    this.eventAddItem.emit(this.formStudent.value);
  }
}
