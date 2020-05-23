import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Policy } from  '../../model/policy';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  policies:  Policy[];
  selectedPolicy:  Policy  = { id :  null , number:null, amount:  null};
  constructor( private api : ApiService) { }

  ngOnInit() {
    this.api.readPolicies().subscribe( ( policies : Policy[] ) => {
        this.policies = policies;
        console.log( this.policies );
    });
  }

}
