import { Component, OnInit } from '@angular/core';
import { BlogData } from 'src/app/shared/interfaces/blog.interfaces';
import { MediumService } from '../medium.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  constructor(private mediumService: MediumService) { }

  ngOnInit(): void {
    this.fetchBlog()
  }
  
  // inside observable value will not call until we will not write .subscribe()
  // promise will not execute till we do not give .subscribe
  fetchBlog():void{
    this.mediumService.fetchBlog("sluggg").subscribe((data: any) => 
      console.warn(data))
  }

}

