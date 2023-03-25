import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Material } from 'src/app/models/material.model';
import { RequestService } from 'src/app/services/request.service'

@Component({
  selector: 'app-display-one',
  templateUrl: './display-one.component.html',
  styleUrls: ['./display-one.component.scss']
})
export class DisplayOneComponent implements OnInit {

  id!: number
  request!: any
  materials!: Material[]

  constructor(private readonly requestService: RequestService, private route: ActivatedRoute){}
  ngOnInit(): void {
    const id = this.route.snapshot.params["id"]
    this.id = id
    this.requestService.getOneRequest(this.id).subscribe(
      {next:(r:any) => {
        this.request = r;
        this.materials = r.neededMaterials;
     }
    })
  }

}
