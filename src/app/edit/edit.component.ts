import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListplayerService } from '../listplayer.service';
import { TeamsService } from '../teams.service';




@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id: any;
  item: any = [];
  name = "";
  date = "";
  role = "";
  team = "";
  batting = "";


  nameItemError = "";
  dateItemError = "";
  battingItemError = "";
  roleItemError = "";
  teamItemError = "";
  color: any;
  wordColor: any;
  avatar = "assets/images/avatar.svg"

  constructor(private route: ActivatedRoute, public data: ListplayerService, public tmp: TeamsService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.getPlayerData()
  }

  // method for display data in input field

  getPlayerData() {
    for (let i = 0; i < this.data.playerbio.length; i++) {
      if (this.data.playerbio[i].id == this.id) {
        this.item = this.data.playerbio[i]
      }
    }
  }

  // This method work for edit data

  editPlayer(name: any, date: any, batting: any, role: any, team: any) {
    for (let i = 0; i < this.data.playerbio.length; i++) {
      for (let i = 0; i < this.tmp.data.length; i++) {
        if (this.tmp.data[i].teams == this.team) {
          this.color = this.tmp.data[i].jerseyColor,
            this.wordColor = this.tmp.data[i].textColor;
        }
      }
      if (this.data.playerbio[i].id == this.id) {
        this.item = this.data.playerbio[i]
        this.data.playerbio[i].fullname = name;
        this.data.playerbio[i].dob = date;
        this.data.playerbio[i].batting = batting;
        this.data.playerbio[i].role = role;
        this.data.playerbio[i].teams = team;
        this.data.playerbio[i].jerseyColor = this.color;
        this.data.playerbio[i].textColor = this.wordColor;

        console.log(this.color);
        console.log(this.wordColor);

        alert("Player details successfully update");

      }
    }
  }


  getElementName(event: any) {
    this.name = event.target.value;
    var pattern = /^[a-zA-Z_ ]*$/;
    if (this.name.length <= 1) {
      this.nameItemError = "*Name should not be empty";
    } else if (!pattern.test(this.name)) {
      this.nameItemError = "*Name should contain only character";
    } else {
      this.nameItemError = "";
    }
  }

  getElementDate(event: any) {
    this.date = event.target.value;
    if (this.date.length <= 1) {
      this.dateItemError = "*Date should not be empty";
    }
    else {
      this.dateItemError = "";
    }
  }

  getElementBatting(event: any) {
    this.batting = event.target.value;
    if (this.batting.length <= 1) {
      this.battingItemError = "*Batting should not be empty";
    }
    else {
      this.battingItemError = "";
    }
  }

  getElementRole(event: any) {
    this.role = event.target.value;
    var pattern = /^[a-zA-Z_ ]*$/;
    if (this.role.length <= 1) {
      this.roleItemError = "*Role should not be empty";
    } else if (!pattern.test(this.name)) {
      this.roleItemError = "*Role should contain only character";
    } else {
      this.roleItemError = "";
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
}
