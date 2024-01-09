import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TeamsService {

  constructor() { }

  dataset: any[] = [];
  public data = [

    {
      id: 1,
      jerseyColor: "#FFFF00",
      teams: "Chennai Super Kings",
      textColor: "#000000"
    },
    {
      id: 2,
      jerseyColor: "#00BFFF",
      teams: "Delhi Capitals",
      textColor: "#000000"
    },
    {
      id: 3,
      jerseyColor: "#191970",
      teams: "Gujarat Titans",
      textColor: "#FFFFFF"
    },
    {
      id: 4,
      jerseyColor: "#800080",
      teams: "Kolkata Knight Riders",
      textColor: "#FFFFFF"
    },
    {
      id: 5,
      jerseyColor: "#00CED1",
      teams: "Lucknow Super Gaints",
      textColor: "#000000"
    },
    {
      id: 6,
      jerseyColor: "#0000CD",
      teams: "Mumbai Indians",
      textColor: "#FFFFFF"

    },
    {
      id: 7,
      jerseyColor: "#DC143C",
      teams: "Punjab Kings",
      textColor: "#FFFFFF"
    },
    {
      id: 8,
      jerseyColor: "#FF69B4",
      teams: "Rajasthan Royals",
      textColor: "#000000"
    },
    {
      id: 9,
      jerseyColor: "#F70D1A",
      teams: "Royal Challengers Bangalore",
      textColor: "#FFFFFF"
    },
    {
      id: 10,
      jerseyColor: "#FF5F1F",
      teams: "Sunrisers Hyderabad",
      textColor: "#FFFFFF"
    },
  ];


}
