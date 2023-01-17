import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Room } from '../models/Room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  
  private readonly apiUrl = environment.apiUrl


  constructor(
    private http: HttpClient
  ) { }

  getRoomsByHotelId(id: number): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.apiUrl}/rooms/hotel?hotelId=${id}`);
  }
}
