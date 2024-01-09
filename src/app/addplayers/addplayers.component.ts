import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TeamsService } from '../teams.service';
import { ListplayerService } from '../listplayer.service';

@Component({
  selector: 'app-addplayers',
  templateUrl: './addplayers.component.html',
  styleUrls: ['./addplayers.component.scss']
})
export class AddplayersComponent implements OnInit {


  flag = 1;
  name = "";
  role = "";
  date = "";
  batting = "";
  team = "";
  match = "";
  run: any;
  sixes: any;
  four: any;
  hundred: any;
  fifty: any;
  color = "";
  textcolor = "";
  wordColor = "";

  constructor(public tmp: TeamsService, public data: ListplayerService) { }

  disabledBat = true;
  disabledDate = true;
  disabledTeam = true;
  disabledRole = true;
  disabledMatch = true;
  disabledScored = true;
  disabledSixes = true;
  disabledFour = true;
  disabledHundred = true;
  disabledFifty = true;


  ngOnInit(): void {
  }

  ngDoCheck(): void {

    if (this.name.length > 3) {
      this.disabledDate = false;
    }
    if (this.date.length > 1) {
      this.disabledBat = false;
    }
    if (this.batting.length > 1) {
      this.disabledRole = false;
    }
    if (this.role.length > 1) {
      this.disabledTeam = false;
    }
    if (this.team.length > 1) {
      this.disabledMatch = false;
    }
    if (this.match.length > 1) {
      this.disabledScored = false;
    }
    if (this.run > 1) {
      this.disabledSixes = false;
    }
    if (this.sixes > 1) {
      this.disabledFour = false;
    }
    if (this.four > 1) {
      this.disabledHundred = false;
    }
    if (this.hundred > 1) {
      this.disabledFifty = false;
    }

  }

  nameItemError = "";
  dateItemError = "";
  roleItemError = "";
  battingItemError = "";
  teamItemError = "";
  matchItemError = "";
  runItemError = "";
  sixesItemError = "";
  fourItemError = "";
  hundredItemError = "";
  fiftyItemError = "";


  findFunction(data: NgForm) {
    console.log(data);
  }

  // Method use for validations

  getElementName(event: any) {
    this.name = event.target.value;
    var pattern = /^[a-zA-Z_ ]*$/;
    if (this.name.length <= 1) {
      this.nameItemError = "*Name should not be empty";
    } else if (!pattern.test(this.name)) {
      this.nameItemError = "*Name contain only character";
    } else {
      this.nameItemError = "";
    }
  }

  getElementRole(event: any) {
    this.role = event.target.value;
    var pattern = /^[a-zA-Z_ ]*$/;
    if (this.role.length <= 1) {
      this.roleItemError = "*Role should not be empty";
    } else if (!pattern.test(this.role)) {
      this.roleItemError = "*Role contain only character";
    } else {
      this.roleItemError = "";
    }
  }

  getElementDate(event: any) {
    // this.date = event.target.value;
    // if (this.date.length <= 1) {
    //   this.dateItemError = "*Date of birth should not be empty";
    // }
    // else {
    //   this.dateItemError = "";
    // }.
    this.date = event.target.value
    var userYear = new Date(this.date).getFullYear();
    var currentYear = new Date().getFullYear();
    if (currentYear - userYear < 21) {
      this.dateItemError = "*Player age is not less than 21 year"
    } else {
      this.dateItemError = ""
    }
  }

  getElementBatting(event: any) {
    this.batting = event.target.value;
    if (this.batting.length <= 1) {
      this.battingItemError = "*Batting field should not be empty";
    }
    else {
      this.battingItemError = "";
    }
  }

  getElementTeam(event: any) {
    this.team = event.target.value;
    if (this.team.length <= 1) {
      this.teamItemError = "*Team should not be empty";
    }
    else {
      this.teamItemError = "";
    }
  }

  getElementMatch(event: any) {
    this.match = event.target.value;

    if (this.match.length <= 0) {
      this.matchItemError = "*Field should not be empty";
    }
    else {
      this.matchItemError = "";
    }
  }

  getElementRun(event: any) {
    this.run = event.target.value;

    if (this.run.length <= 0) {
      this.runItemError = "*Field should not be empty";
    }
    else {
      this.runItemError = "";
    }
  }

  getElementSixes(event: any) {
    this.sixes = event.target.value;

    if (this.sixes.length <= 0) {
      this.sixesItemError = "*Field should not be empty";
    }
    else {
      this.sixesItemError = "";
    }
  }

  getElementFour(event: any) {
    this.four = event.target.value;
    if (this.four.length <= 0) {
      this.fourItemError = "*Field should not be empty";
    }
    else {
      this.fourItemError = "";
    }
  }

  getElementHundred(event: any) {
    this.hundred = event.target.value;
    if (this.hundred.length <= 0) {
      this.hundredItemError = "*Field should not be empty";
    }
    else {
      this.hundredItemError = "";
    }
  }

  getElementFifty(event: any) {
    this.fifty = event.target.value;

    if (this.fifty.length <= 0) {
      this.fiftyItemError = "*Field should not be empty";
    }
    else {
      this.fiftyItemError = "";
    }
  }

  //  Method is use for add new player in list and match the jersery and text color

  addplayer() {
    for (let i = 0; i < this.tmp.data.length; i++) {
      if (this.tmp.data[i].teams == this.team) {
        this.color = this.tmp.data[i].jerseyColor,
          this.wordColor = this.tmp.data[i].textColor;
      }
    }
    var newPlayer = { "id": this.data.playerbio.length + this.flag, "fullname": this.name, "dob": this.date, "batting": this.batting, "role": this.role, "jerseyColor": this.color, "textColor": this.wordColor, "teams": this.team, "nosixes": this.sixes, "noscrores": this.run, "nohundred": this.hundred, "nofifty": this.fifty }
    console.log(newPlayer);
    this.data.playerbio.push(newPlayer);
    alert(`The details of ${this.name} is successfully added.`);
    console.log(this.color);
  }

  // Method use for reset all Fields

  resetFields() {
    this.name = "";
    this.role = "";
    this.date = "";
    this.batting = "";
    this.team = "";
    this.match = "";
    this.run = ""
    this.sixes = ""
    this.four = ""
    this.hundred = ""
    this.fifty = ""

    this.nameItemError = "";
    this.dateItemError = "";
    this.roleItemError = "";
    this.battingItemError = "";
    this.teamItemError = ""
    this.matchItemError = ""
    this.runItemError = ""
    this.sixesItemError = ""
    this.fourItemError = ""
    this.hundredItemError = ""
    this.fiftyItemError = ""
  }
}
