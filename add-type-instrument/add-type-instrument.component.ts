import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { TypeInstrument } from '../model/typeInstrument.model';
import { TypeInstrumentService } from '../services/type-instrument.service';

@Component({
  selector: 'app-add-type-instrument',
  templateUrl: './add-type-instrument.component.html',
  styleUrls: ['./add-type-instrument.component.css']
})
export class AddTypeInstrumentComponent implements OnInit {
  newType = new TypeInstrument();
  constructor(private produitService: TypeInstrumentService,
    private activatedRoute: ActivatedRoute,
    private router :Router) { }

    
  ngOnInit(): void {
    //this.currentTypeInstrument = this.produitService.consulterType(this.activatedRoute.snapshot.params.id);
    //console.log(this.currentTypeInstrument);

  }
  addType(){
   // this.produitService.ajouterType(this.newType);
  
    this.produitService.ajouterType(this.newType)
    .subscribe(prod => {
    console.log(prod);
    });
    this.router.navigate(['typeInstruments']);
    
    }
    

}
