import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Location } from '@angular/common';
import * as moment from 'moment';


@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  assignments : any;
  todayDate: string;
todayAssignment: any;
// dateObject: Date;



  constructor(private _location:Location, private router:Router, private student:StudentService,private snackbar:MatSnackBar,private datepipe:DatePipe) { 

    this.todayDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd'); 
    
    // this.dateObject= moment( this.todayDate).toDate(),'yyyy-MM-dd';
   }

  ngOnInit() {
    this.getAssignments();
  }
 // : void {
 //  this.student.getAssignmentsByInstStandardUser(sessionStorage.getItem('instituteId'),sessionStorage.getItem('standard'),sessionStorage.getItem('userid')).subscribe(
 //     (data:any)=>{
 //       console.log(data);
 //       this.assignments = data;
        // this.assignments.forEach(assignment=>{
        //   let today = new Date();
        //   console.log(this.datepipe.transform(assignment.endDate,'dd-MM-YYYY'),this.datepipe.transform(today,'dd-MM-YYYY'));
        //   if(this.datepipe.transform(today,'dd-MM-YYYY') > this.datepipe.transform(assignment.endDate,'dd-MM-YYYY')){
        //       this.expired.push(assignment);
        //   }else{
        //     console.log('Expired');
        //   }
        // })
 //     }
 //   );
 // }

  getAssignments(){
    this.student.getAssignmentsByInstStandardUser(sessionStorage.getItem('instituteId'),sessionStorage.getItem('standard'),sessionStorage.getItem('userid')).subscribe(
      (data:any)=>
      {
        console.log(data);
        this.assignments=data;
        
      }
    );
this.student.getAssignmentsBytoday(sessionStorage.getItem('instituteId'),sessionStorage.getItem('standard'),sessionStorage.getItem('userid'),this.todayDate).subscribe(
  (data:any)=>
  {
    console.log(data);
    this.todayAssignment=data;
    
  }
);

    }


  styleObject(sub): Object {
    if (sub == 'Mathematics'){
        return {background : "#80000026 "}
    }
    return {}
}

  goToQuestions(id,status){
    this.router.navigate(['student/assignment',id])
  }

  goBack(){
    this._location.back();
  }


}
