import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ngo } from '../ngo';

/* 
"courseId": 102,
        "courseTrainingSector": "Horticulture",
        "courseName": "HortiWay",
        "courseDetails": "Seeding",
        "courseDuration": "1 year",
        "ngo": {
            "username": "Ajay1234",
            "name": "Ajay",
            "location": "Mumbai",
            "password": "FyWorld69"
        } */

export class fetchNgoCourse{
  constructor(
    public courseId: number,
    public courseTrainingSector: string,
    public courseName: string,
    public courseDetails: string, 
    public courseDuration: string,
    public courseStatus: boolean,
    public ngo: Ngo
  ) {}
}

@Component({
  selector: 'app-display-ngo-details',
  templateUrl: './display-ngo-details.component.html',
  styleUrls: ['./display-ngo-details.component.css']
})

export class DisplayNgoDetailsComponent implements OnInit {
  
  courseDetails: fetchNgoCourse[] = [];
  neededArray: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getCourseDetails();
  }

  getCourseDetails(){
    this.httpClient.get<any>('http://localhost:8051/ngoCourse-api/fetch').subscribe(response=>{
      console.log(response);
      this.courseDetails = response;

      console.log(this.courseDetails);
    });
  }

  deleteCourse(courseId:number){
    this.httpClient.delete<any>('http://localhost:8051/admin-api/deleteCourse/'+courseId).subscribe(response=>{
      alert('Deleted course successfully!');
    });
  }

  updateCourseStatus(courseId:number){
    this.httpClient.get<any>('http://localhost:8051/admin-api/updateCourseStatus/'+courseId).subscribe(response=>{
      alert('Course update successful!');
    });
  }
}
