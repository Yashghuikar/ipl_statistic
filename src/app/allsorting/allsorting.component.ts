import { Component, OnInit } from '@angular/core';
import { ListplayerService } from '../listplayer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-allsorting',
  templateUrl: './allsorting.component.html',
  styleUrls: ['./allsorting.component.scss']
})
export class AllsortingComponent implements OnInit {


  topPSixes: any[] = [];
  topPFifty: any[] = [];
  topPRuns: any[] = [];
  topPHundred: any[] = [];

  constructor(public data: ListplayerService, private route: ActivatedRoute) { }

  top5playerssixes: any[] = [];
  top5playerssixe: any[] = [];

  top5playersscorers: any[] = [];
  top5playersscorerss: any[] = [];


  top5playersfifty: any[] = [];
  top5playersfiftyy: any[] = [];



  top5playershundred: any[] = [];
  top5playershundredd: any[] = [];

  playersList: any[] = [];
  query: any;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.query = params['sort'];
    })


    for (let i = 0; i < this.data.playerbio.length; i++) {
      this.playersList.push(this.data.playerbio[i])
    }
  }

  ngDoCheck(): void {

    if (this.query == 'top5PlayersWithMaxSixes') {
      this.maximumsixesD()
      console.log(this.top5playerssixes)
    } else if (this.query == 'top5PlayersWithMaxScorers') {
      this.maximumscorersD()
    } else if (this.query == 'top5PlayersWithMax50s') {
      this.maximumfiftyD()
    } else if (this.query == 'top5PlayersWithMax100s') {
      this.maximumhundredD()
    }
  }

  // method for sorting
  maximumsixesD() {

    this.top5playerssixes = this.playersList.sort(function (a, b) {
      return b.nosixes - a.nosixes
    })
    for (let i = 0; i < 5; i++) {
      this.top5playerssixe.push(this.top5playerssixes[i])
    }
    this.top5playersfifty = [];
    this.top5playershundred = [];
    this.top5playersscorers = [];

  }

  maximumfiftyD() {
    this.top5playersfifty = this.playersList.sort(function (a, b) {
      return b.nofifty - a.nofifty
    })
    for (let i = 0; i < 5; i++) {
      this.top5playersfiftyy.push(this.top5playersfifty[i])
    }
    this.top5playerssixes = [];
    this.top5playershundred = [];
    this.top5playersscorers = [];
  }

  maximumhundredD() {
    this.top5playershundred = this.playersList.sort(function (a, b) {
      return b.nohundred - a.nohundred
    })
    for (let i = 0; i < 5; i++) {
      this.top5playershundredd.push(this.top5playershundred[i])
    }
    this.top5playersfifty = [];
    this.top5playerssixes = [];
    this.top5playersscorers = [];
  }

  maximumscorersD() {
    this.top5playersscorers = this.playersList.sort(function (a, b) {
      return b.noscrores - a.noscrores
    })
    for (let i = 0; i < 5; i++) {
      this.top5playersscorerss.push(this.top5playersscorers[i])
    }
    this.top5playersfifty = [];
    this.top5playershundred = [];
    this.top5playerssixes = [];
  }
}
