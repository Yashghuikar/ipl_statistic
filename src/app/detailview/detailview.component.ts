import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListplayerService } from '../listplayer.service';

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.scss']
})
export class DetailviewComponent implements OnInit {
  id: any;
  item: any = [];
  logo = "assets/images/avatar.svg";


  constructor(private route: ActivatedRoute, public data: ListplayerService,) {
  }

  // param method is use for to get id and also use in routing module
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.getPlayerData()
  }
  // method is use for display particular id data 
  getPlayerData() {
    for (let i = 0; i < this.data.dataset1.length; i++) {
      if (this.data.dataset1[i].id == this.id) {
        this.item = this.data.dataset1[i]
      }
    }
  }

  // method is use for detete the Row
  deleteRow(val: any) {
    console.log(val)
    this.data.playerbio = this.data.playerbio .filter(item => item !== val)
    console.log(this.data.dataset1)
    //alert(`Player details Deleted Successfully`)
  }
}
