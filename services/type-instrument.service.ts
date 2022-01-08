import { Injectable } from '@angular/core';
import { TypeInstrument } from '../model/typeInstrument.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class TypeInstrumentService {

apiURL: string = 'http://localhost:8080/instruments/api/type';
//types : TypeInstrument[]; //un tableau de
 // typeInstrument: TypeInstrument[] = [];
  constructor(private http : HttpClient) {
    /*
      this.types = [
      { idType : 1, nomType : "corde",  dateCreation: new Date("01/14/2011")},
      { idType : 2, nomType : "percussion", dateCreation : new Date("12/17/2010")}
      ];*/
      
   }


   listeTypes(): Observable<TypeInstrument[]> {
  //  return this.types;
  return this.http.get<TypeInstrument[]>(this.apiURL);
  }
  ajouterType( prod: TypeInstrument):Observable<TypeInstrument>{
    return this.http.post<TypeInstrument>(this.apiURL, prod, httpOptions);
  }

  supprimerType(id : number){
    {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }
  }

  consulterProdui(id: number): Observable<TypeInstrument> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<TypeInstrument>(url);
    }
    updateTypeInstrument(p:TypeInstrument)
{
  return this.http.put<TypeInstrument>(this.apiURL, p, httpOptions);

}

}
