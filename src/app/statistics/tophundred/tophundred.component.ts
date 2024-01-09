import { Component, OnInit } from '@angular/core';
import { ListplayerService } from '../../listplayer.service';

@Component({
  selector: 'app-tophundred',
  templateUrl: './tophundred.component.html',
  styleUrls: ['./tophundred.component.scss']
})
export class TophundredComponent implements OnInit {

  top5playershundred: any[] = [];
  playersList: any[] = [];

  constructor(public data: ListplayerService) { }

  ngOnInit(): void {

    for (let i = 0; i < this.data.playerbio.length; i++) {
      this.playersList.push(this.data.playerbio[i])
    }

    this.maximumhundredD()

    for (let i = 0; i < 5; i++) {
      this.top5playershundred.push(this.playersList[i])
    }
  }

  // method for sorting
  maximumhundredD() {
    this.playersList = this.playersList.sort(function (a, b) {
      return b.nohundred - a.nohundred
    })
  }
}
