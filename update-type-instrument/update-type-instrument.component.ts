import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeInstrument } from '../model/typeInstrument.model';
import { TypeInstrumentService } from '../services/type-instrument.service';

@Component({
  selector: 'app-update-type-instrument',
  templateUrl: './update-type-instrument.component.html',
  styles: [
  ]
})
export class UpdateTypeInstrumentComponent implements OnInit {
  currentTypeInstrument = new TypeInstrument();
  
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private typeService: TypeInstrumentService) { }

  ngOnInit(): void {
   
    this.typeService.consulterProdui(this.activatedRoute.snapshot.params.id).
    subscribe( prod =>{ this.currentTypeInstrument = prod; } ) ;
  
  }
  updateTypeInstrument()
  { //console.log(this.currentProduit);

  this.typeService.updateTypeInstrument(this.currentTypeInstrument).subscribe(prod => {
    this.router.navigate(['typeInstruments']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
  }
 
  

}
