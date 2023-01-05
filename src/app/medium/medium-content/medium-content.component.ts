import { Component, OnInit } from '@angular/core';
import { BlogData } from 'src/app/shared/interfaces/blog.interfaces';
import { cards } from 'src/app/shared/interfaces/cards.intefaces';
import { MediumService } from '../medium.service';


@Component({
  selector: 'app-medium-content',
  templateUrl: './medium-content.component.html',
  styleUrls: ['./medium-content.component.css']
})
export class MediumContentComponent implements OnInit {
  blogsData!: BlogData[];
  constructor(private mediumService: MediumService) { }


  sideNavCollapse = true;
  navbarCollapse = false;

  ngOnInit(): void {
    // this.getcards();
    this.fetchBlogs();
  }
  // getcards(){
  //   this.cards = this.viewBlogService.fetchcards();
  // }
  // cards !: cards[]

  fetchBlogs():void{
    this.mediumService.fetchBlogs().subscribe((value:BlogData []) => {
      this.blogsData = value;
    });
  }

  
}
