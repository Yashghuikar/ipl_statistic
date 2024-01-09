import { Injectable } from '@angular/core';
import { DetailviewComponent } from './detailview/detailview.component';

@Injectable({
  providedIn: 'root'
})
export class ListplayerService {
  fullname: any;

  constructor() {
    let len = 4;
    let page = 1;
    let start = (page * len) - len;
    let end = page * len;
    end = this.playerbio.length < end ? this.playerbio.length : end;
    for (let condition = start; condition < end; condition++) {
      this.dataset1.push(this.playerbio[condition]);
    }
  }

  // here dataset1 is use for pagination...
  dataset1: any[] = [];

  public playerbio = [
    {
      id: 1,
      fullname: "Mahendra Singh Dhoni",
      dob: '2022-07-05',
      batting: "Right-handed",
      role: "Wicket-keeper, batsman",
      jerseyColor: "#FFFF00",
      teams: "Chennai Super Kings",
      textColor: "#000000",
      nosixes: 5,
      noscrores: 250,
      nohundred: 9,
      nofifty: 5
    },
    {
      id: 2,
      fullname: "Lasit Malinga",
      dob: '2022-03-25',
      batting: "left-batsman",
      role: "Wicket",
      jerseyColor: "#0000CD",
      teams: "Mumbai Indians",
      textColor: "#FFFFFF",
      nosixes: 4,
      noscrores: 350,
      nohundred: 6,
      nofifty: 6
    },
    {
      id: 3,
      fullname: "Jos Buttler",
      dob: '2022-05-07',
      batting: "Right-handed",
      role: "Wicket-keeper-batsman",
      jerseyColor: "#F70D1A",
      teams: "Royal Challengers Bangalore",
      textColor: "#FFFFFF",
      nosixes: 1,
      noscrores: 150,
      nohundred: 5,
      nofifty: 7
    },
    {
      id: 4,
      fullname: "David Warner",
      dob: '2022-09-23',
      batting: "left-handed",
      role: "Wicket-keeper-batsman",
      jerseyColor: "#FF5F1F",
      teams: "Sunrisers Hyderabad",
      textColor: "#FFFFFF",
      nosixes: 11,
      noscrores: 50,
      nohundred: 7,
      nofifty: 2
    },
    {
      id: 5,
      fullname: "Johnson",
      dob: '2022-02-12',
      batting: "left-handed",
      role: "batsman-bowler",
      jerseyColor: "#00CED1",
      teams: "Lucknow Super Gaints",
      textColor: "#000000",
      nosixes: 9,
      noscrores: 550,
      nohundred: 2,
      nofifty: 11
    },
    {
      id: 6,
      fullname: "Michel Stark",
      dob: '2022-10-18',
      batting: "Rightt-handed",
      role: "Faster-bowler",
      jerseyColor: "#DC143C",
      teams: "Punjab Kings",
      textColor: "#FFFFFF",
      nosixes: 3,
      noscrores: 650,
      nohundred: 10,
      nofifty: 10
    },
  ];

  loadPageFunction(page: number) {
    let len = 4;
    let start = (page * len) - len;
    let end = page * len;
    end = this.playerbio.length < end ? this.playerbio.length : end;
    this.dataset1 = [];
    for (let condition = start; condition < end; condition++) {
      this.dataset1.push(this.playerbio[condition])
    }
  }
}
