import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from 'src/app/services/toast-service';

@Component({
  selector: 'page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {
  students = [
    {
      name: 'Eliane',
      idade: 28,
    },
    {
      name: ' João',
      idade: 28,
    },
    {
      name: 'Pedro',
      idade: 26,
    },
    {
      name: 'Zé',
      idade: 26,
    },
    {
      name: 'chico',
      idade: 26,
    },
  ];
  constructor(private modalService: NgbModal, public toastService: ToastService) {}

  ngOnInit(): void {}

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then();
  }
  addItem() {}

  editItem(student: { name: string; idade: number }) {}
  removeItem(student: { name: string; idade: number }) {
    const index = this.students.indexOf(student);
    if (index > -1) {
      this.students.splice(index, 1);
      this.toastService.show('Item foi removido');
    }
  }
}
