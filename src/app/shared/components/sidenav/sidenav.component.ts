import { Component, OnInit } from '@angular/core';
import { faDashboard, faUserGraduate,faChalkboardTeacher, faRulerVertical, faBookReader, faSearch, faComment, faBell, faSignOut, faBookOpen, faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  icons ={
    dashboardIcon: faDashboard,
    userGraduateIcon: faUserGraduate,
    teacherIcon: faChalkboardTeacher,
    stdIcon: faRulerVertical,
    subIcon: faBookReader,
    searchIcon: faSearch,
    close: faClose,
    comment: faComment,
    bell: faBell,
    signout: faSignOut,

  }
  // Maintain track of whether sidenav is open or close.
  sideNavCollapse = true;
  navbarCollapse = true;
  constructor() { }

  ngOnInit(): void {
  }

  
}
