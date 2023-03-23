import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RequestForm } from '../models/requestform';
import { RoomRequest } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private readonly httpClient: HttpClient) {}

  addRequest(requestForm: RequestForm){
    return this.httpClient.post('http://localhost:8080/api/request/new', requestForm)
  }
  getAllRequests(currentStatus: string){
    const params = new HttpParams().set('status', currentStatus)
    return this.httpClient.get<RoomRequest[]>('http://localhost:8080/api/request/future', {params})
  }
  getOneRequest(id: number){
    return this.httpClient.get<RoomRequest>('http://localhost:8080/api/request/' + id)
  }
  acceptRequest(id: number, justification: string, roomID: number){
    return this.httpClient.post('http://localhost:8080/api/request/' + id + '/accept',HttpParams.arguments( justification, roomID))
  }
}
