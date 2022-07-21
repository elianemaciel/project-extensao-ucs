import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { ApiRestService } from 'src/app/services/api-rest.service';
import { ToastService } from 'src/app/services/toast-service';

@Component({
  selector: 'page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {
  characters: Array<Character> = [];
  openModal = false;
  video = 'https://www.youtube.com/embed/tPOMG0D57S0';
  constructor(public toastService: ToastService, private apiRestService: ApiRestService) {}

  async ngOnInit(): Promise<void> {
    const resp = await this.apiRestService.getListCharacter();
    console.log(resp);
    this.characters = resp.results as Array<Character>;
  }

  async addItem(event: Character) {
    console.log('ddsda');
    const resp = await this.apiRestService.postExemplo();
    console.log(resp);
    this.characters.push(event);
  }

  editItem(character: Character) {}

  removeItem(character: Character) {
    const index = this.characters.indexOf(character);
    if (index > -1) {
      this.characters.splice(index, 1);
      this.toastService.show('Item foi removido');
    }
  }
}
