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
        console.log( 'policies', this.policies );
    });
  }

  createOrUpdatePolicy(form){
    if(this.selectedPolicy && this.selectedPolicy.id){
      form.value.id = this.selectedPolicy.id;
      this.api.updatePolicy(form.value).subscribe((policy: Policy)=>{
        console.log("Policy updated" , policy);
      });
    }
    else{

      this.api.createPolicy(form.value).subscribe((policy: Policy)=>{
        console.log("Policy created, ", policy);
      });
    }

  }

  selectPolicy(policy: Policy){
    this.selectedPolicy = policy;
  }

  deletePolicy(id){
    this.api.deletePolicy(id).subscribe((policy: Policy)=>{
      console.log("Policy deleted, ", policy);
    });
  }

}
