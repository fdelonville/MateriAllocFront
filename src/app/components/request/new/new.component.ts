import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private readonly materialService: MaterialService, private formBuilder: FormBuilder, private readonly requestService: RequestService){
    this.form = formBuilder.group({
      'userLogin': 'stud_01',
      'justification': ['',[Validators.minLength(5),Validators.required]],
      'neededCapacity': [,[Validators.min(1),Validators.required]],
      'date': [,Validators.required],
      'beginAt': [,Validators.required],
      'endAt': [,Validators.required],
      'materialIDs': this.formBuilder.array([]),
      'additionalNotes': ['']
    })
  }

  get materialList(): FormArray {
    return this.form.controls["materialIDs"] as FormArray
  }

  newMaterial(): FormControl{
    return this.formBuilder.control({
      id: '',
    })
 }

  onSubmit(){
    console.log (this.form.value)
    if( this.form.valid ){
      const requestForm: RequestForm = {...this.form.value}
      this.requestService.addRequest(requestForm).subscribe()
      this.form.reset()
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
