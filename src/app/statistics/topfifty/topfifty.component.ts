import { Component, OnInit } from '@angular/core';
import { ListplayerService } from '../../listplayer.service';

@Component({
  selector: 'app-topfifty',
  templateUrl: './topfifty.component.html',
  styleUrls: ['./topfifty.component.scss']
})
export class TopfiftyComponent implements OnInit {

  top5playersfifty: any[] = []
  playersList: any[] = [];

  constructor(public data: ListplayerService) { }

  ngOnInit(): void {
    for (let i = 0; i < this.data.playerbio.length; i++) {
      this.playersList.push(this.data.playerbio[i])
    }

    this.maximumfiftyD()

    for (let i = 0; i < 5; i++) {
      this.top5playersfifty.push(this.playersList[i])
    }

  }

  // method for sorting.....
  maximumfiftyD() {
    this.playersList = this.playersList.sort(function (a, b) {
      return b.nofifty - a.nofifty
    })
  }

}
