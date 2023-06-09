import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RoomRequest } from 'src/app/models/request.model';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-display-all',
  templateUrl: './display-all.component.html',
  styleUrls: ['./display-all.component.scss']
})
export class DisplayAllComponent implements OnInit {
  
  requests?: any

  ngOnInit(): void {
    this.requestService.getAllRequests('').subscribe(
      {next:(r:any) => {
      this.requests = r;
    }
    })
  } 

  onSelected(currentStatus:string): void {
    this.requestService.getAllRequests(currentStatus).subscribe(
      {next:(r:any) => {
        this.requests = r;
     }
    })
  }



  constructor(private readonly requestService: RequestService){}  
}
