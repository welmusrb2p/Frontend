import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import endPoints from '../endPionts';
import { WeaponModel } from '../models/weapon.model';

@Injectable({
  providedIn: 'root'
})
export class WeaponService {

  constructor(private httpClient: HttpClient) { }

  public GetWeapon(id: any) {
    return this.httpClient.get<any>(`${endPoints.weapon.get}/${id}`);
   }

  public addWeapon(weapon: WeaponModel) {
    return this.httpClient.post<any>(endPoints.weapon.update, weapon);
   }

  public updateWeapon(weapon: WeaponModel) {
    return this.httpClient.put<any>(endPoints.weapon.update, weapon);
   }

   public deleteWeapon(id: any) {
    return this.httpClient.delete<any>(`${endPoints.weapon.delete}/${id}`);
   }
}