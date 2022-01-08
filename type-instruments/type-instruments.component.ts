import { Component, OnInit } from '@angular/core';
import { TypeInstrument } from '../model/typeInstrument.model';
import { TypeInstrumentService } from '../services/type-instrument.service';
import { ActivatedRoute ,Router} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-type-instruments',
  templateUrl: './type-instruments.component.html',
  styleUrls: ['./type-instruments.component.css']
})
export class TypeInstrumentsComponent implements OnInit {
  typeInstruments : TypeInstrument[]; //un tableau de chaînes de caractères
  
  constructor(private typeInstrumentService: TypeInstrumentService , 
    private activatedRoute: ActivatedRoute,
    private router :Router,
    public authService: AuthService) {
   // this.typeInstruments = typeInstrumentService.listeTypes();
  }

  supprimerType(p: TypeInstrument)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.typeInstrumentService.supprimerType(p.idType).subscribe(() => {
console.log("type supprimé");
this.SuprimerTypeDuTableau(p);

});
}
SuprimerTypeDuTableau(prod : TypeInstrument) {
  this.typeInstruments.forEach((cur, index) => {
  if(prod.idType=== cur.idType) {
  this.typeInstruments.splice(index, 1);
  }
  });
  }

  ngOnInit(): void {
    this.typeInstrumentService.listeTypes().subscribe(prods => {
      console.log(prods);
      this.typeInstruments = prods;
      });
  }
 

}
