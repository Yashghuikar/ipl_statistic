import { Component, OnInit } from '@angular/core';
import { ListplayerService } from '../../listplayer.service';

@Component({
  selector: 'app-topscorers',
  templateUrl: './topscorers.component.html',
  styleUrls: ['./topscorers.component.scss']
})
export class TopscorersComponent implements OnInit {

  top5playersscorers: any[] = [];
  playersList: any[] = [];

  constructor(public data: ListplayerService) { }

  ngOnInit(): void {
    for (let i = 0; i < this.data.playerbio.length; i++) {
      this.playersList.push(this.data.playerbio[i])
    }

    this.maximumscorersD()

    for (let i = 0; i < 5; i++) {
      this.top5playersscorers.push(this.playersList[i])
    }
  }

  // method for sorting
  maximumscorersD() {
    this.playersList = this.playersList.sort(function (a, b) {
      return b.noscrores - a.noscrores
    })
  }
}
