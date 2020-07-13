import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

interface myData{
  data: Object
}
interface myString{
  first_name: string
}


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  

  constructor(private http: HttpClient) { }
  getEmployeeList() : Observable<any>{
    return this.http.get<myData>('https://reqres.in/api/users?page=2')    

  }

  createEmployee(employee: object): Observable<any>{
    return this.http.post('https://reqres.in/api/users', employee);
  }
  updateEmployee(id: number, value: any): Observable<any> {

    return this.http.put(`https://reqres.in/api/users/${id}`, value);
  }
  getEmployee(id: number): Observable<any>{

    return this.http.get(`https://reqres.in/api/users/${id}`)
  }
  deleteEmployee(id: number): Observable<any>{

    return this.http.delete(`https://reqres.in/api/users/${id}`)
    
    
  }

 




}
