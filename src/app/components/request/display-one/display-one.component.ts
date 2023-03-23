import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service'

@Component({
  selector: 'app-display-one',
  templateUrl: './display-one.component.html',
  styleUrls: ['./display-one.component.scss']
})
export class DisplayOneComponent implements OnInit {

  id!: number
  request!: any

  constructor(private readonly requestService: RequestService){}
  ngOnInit(): void {
    this.requestService.getOneRequest(this.id).subscribe(
      {next:(r:any) => {
        this.request = r;
     }
    })
  }

}
