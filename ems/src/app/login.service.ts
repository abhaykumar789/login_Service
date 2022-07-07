import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { IUser } from '../app/user';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
   public users=[];
   constructor(private http:HttpClient){

    //  this.getUserLoginDetails().subscribe((data)->this.users=>{
    //   values.forEach((obj,index))
    // })
       
   }

   getUserLoginDetails():Observable<IUser[]>{
      return this.http.get<IUser[]>("../assets/myjson.json");
      
   }
   
  checkUserNameAndPassword(username:string,password:string):boolean{
         this.getUserLoginDetails().subscribe((value)=>{
            value.forEach((obj,index)=>{
               console.log(obj)
            })
         });
         //console.log(this.users);
         
         //validation code
         return true;
  } 


}