import { Component, OnInit } from '@angular/core';
import { ListplayerService } from '../../listplayer.service';

@Component({
  selector: 'app-topsixes',
  templateUrl: './topsixes.component.html',
  styleUrls: ['./topsixes.component.scss']
})
export class TopsixesComponent implements OnInit {

  constructor(public data: ListplayerService) { }
  top5playerssixes: any[] = [];
  playersList: any[] = [];

  ngOnInit(): void {
    for (let i = 0; i < this.data.playerbio.length; i++) {
      this.playersList.push(this.data.playerbio[i])
    }

    this.maximumsixesD()

    for (let i = 0; i < 5; i++) {
      this.top5playerssixes.push(this.playersList[i])
    }
  }

  // method for sorting
  maximumsixesD() {
    this.playersList = this.playersList.sort(function (a, b) {
      return b.nosixes - a.nosixes
    })
  }
}
