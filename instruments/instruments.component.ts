import { Component, OnInit } from '@angular/core';
import { Instrument } from '../model/instrument.model';
import { InstrumentService } from '../services/instrument.service';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.css']
})


export class InstrumentsComponent implements OnInit {
instruments : Instrument[]=[]; //un tableau d'instrument 

 constructor(private instrumentService: InstrumentService,
             private router :Router,
             public authService: AuthService ) {
//this.instruments = instrumentService.listeInstruments();
}
supprimerInstrument(p: Instrument)
{
//console.log(p);
let conf = confirm("Etes-vous sûr ?");
 if (conf)
this.instrumentService.supprimerInstrument(p.idInstrument).subscribe(() => {
  console.log("Instrument supprimé");
  this.SuprimerInstrumentDuTableau(p);

  });

}
SuprimerInstrumentDuTableau(prod : Instrument) {
  this.instruments.forEach((cur, index) => {
  if(prod.idInstrument=== cur.idInstrument) {
  this.instruments.splice(index, 1);
  }
  });
  }
ngOnInit(): void {
  this.instrumentService.listeInstruments().subscribe(prods => {
  console.log(prods);
  this.instruments = prods;
  });
  }

}
