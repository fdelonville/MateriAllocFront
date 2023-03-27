import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { elementAt, findIndex } from 'rxjs';
import { Material } from 'src/app/models/material.model';
import { RequestForm } from 'src/app/models/requestform';
import { MaterialService } from 'src/app/services/material.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit{

  materials!: Material[]
  form: FormGroup
  materialIds: number[] = []

  constructor(private readonly materialService: MaterialService, private formBuilder: FormBuilder, private readonly requestService: RequestService){
    this.form = formBuilder.group({
      'justification': [,Validators.required],
      'neededCapacity': [,[Validators.min(1),Validators.max(300),Validators.required]],
      'date': [,Validators.required],
      'beginAt': [,Validators.required],
      'endAt': [,Validators.required],
      'additionalNotes': ['']
    })
  }

  onSubmit(){
    
    if( this.form.valid ){
      let requestForm: RequestForm = {
        userLogin: 'stud_01',
        justification : this.form.get('justification')?.value,
        neededCapacity : this.form.get('neededCapacity')?.value,
        date : this.form.get('date')?.value,
        beginAt : this.form.get('beginAt')?.value,
        endAt : this.form.get('endAt')?.value,
        materialIds : this.materialIds,
        additionalNotes : this.form.get('additionalNotes')?.value
      }
      this.requestService.addRequest(requestForm).subscribe(
        {next: () => this.form.reset()}
      )
      
    }
  }

  onClick(id: number): void{
    if(!this.materialIds.includes(id)){
      this.materialIds.push(id)
      console.log(this.materialIds)
    }
  }

  ngOnInit(): void {
    this.materialService.getAll().subscribe(
      {next:(mat:any) => {
      this.materials = mat;
    }
    })
  }

}