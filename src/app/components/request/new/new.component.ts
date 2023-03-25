import { Component, OnInit } from '@angular/core';
import { Material } from 'src/app/models/material.model';
import { MaterialService } from 'src/app/services/material.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit{

  materials!: Material[]

  constructor(private readonly materialService: MaterialService){}
  
  ngOnInit(): void {
    this.materialService.getAll().subscribe(
      {next:(mat:any) => {
      this.materials = mat;
    }
    })
  }

}
