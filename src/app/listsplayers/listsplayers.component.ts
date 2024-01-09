import { Component, OnInit } from '@angular/core';
import { ListplayerService } from '../listplayer.service';


@Component({
  selector: 'app-listsplayers',
  templateUrl: './listsplayers.component.html',
  styleUrls: ['./listsplayers.component.scss']
})
export class ListsplayersComponent implements OnInit {

  constructor(public data:ListplayerService) { }

  ngOnInit(): void {
this.data.loadPageFunction(1);
  }
}
