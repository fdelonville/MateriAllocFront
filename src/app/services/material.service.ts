import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Material } from '../models/material.model';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private readonly httpClient: HttpClient) {}
  getAll(){
    return this.httpClient.get<Material>('http://localhost:8080/api/material')
  }
}
