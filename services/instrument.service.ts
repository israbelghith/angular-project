import { Injectable } from '@angular/core';
import { Instrument } from '../model/instrument.model';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';



const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
 
  instruments: Instrument[]=[]; //un tableau de Instrument

 apiURL: string = 'http://localhost:8080/instruments/api';
  produitsRecherche  : Instrument[];
  constructor(private http : HttpClient,
              private authService : AuthService)
 {
/*this.instruments = [
{ idInstrument : 1, nomInstrument : "Violon", prixInstrument : 3000.600},
{ idInstrument : 2, nomInstrument : "Piano", prixInstrument : 450},
{ idInstrument : 3, nomInstrument :"Guitare", prixInstrument : 900.123}
];*/
}


  

listeInstruments():Observable<Instrument[]> {
let jwt = this.authService.getToken();//récupérer le token
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.get<Instrument[]>(this.apiURL,{headers:httpHeaders}
);

}
ajouterInstrument( instr: Instrument):Observable<Instrument>{
  return this.http.post<Instrument>(this.apiURL, instr, httpOptions);
  }
  

supprimerInstrument(id : number){
  const url = `${this.apiURL}/${id}`;
  return this.http.delete(url, httpOptions);}

    consulterInstrument(id: number): Observable<Instrument> {
      const url = `${this.apiURL}/${id}`;
      return this.http.get<Instrument>(url);
      }
      
  updateInstrument(p:Instrument) : Observable<Instrument>
{
  return this.http.put<Instrument>(this.apiURL, p, httpOptions);
}

rechercherParCategorie(idType: number): Instrument[]{
  this.produitsRecherche = [];
  this.instruments.forEach((cur, index) => {
  if(idType == cur.typeInstrument.idType) {
  console.log("cur "+cur);
  this.produitsRecherche.push(cur);
  }
  });
  return this.produitsRecherche;
  }
}
