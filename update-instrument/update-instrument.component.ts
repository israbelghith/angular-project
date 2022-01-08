import { Component, OnInit } from '@angular/core';
import { Instrument } from '../model/instrument.model';
import { InstrumentService } from '../services/instrument.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TypeInstrumentService } from '../services/type-instrument.service';



@Component({
  selector: 'app-update-instrument',
  templateUrl: './update-instrument.component.html',
  styles: [
  ]
})
export class UpdateInstrumentComponent implements OnInit {
  currentInstrument :Instrument;
  message: string="";
  typeList:any=[];
  InstrumentForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private instrumentService: InstrumentService, 
    private typeInstrumentService: TypeInstrumentService,
    private formBuilder:FormBuilder) {
      this.InstrumentForm = this.formBuilder.group({
        idInstrument : new FormControl(''),
        nomInstrument : new FormControl(''),
        prixInstrument: new FormControl(''),
        //date : new FormControl(''),
        typeInstrument : new FormControl('')
      })
     }

  ngOnInit(): void {
  
      this.onSelectType();
      console.log("Id:", this.activatedRoute.snapshot.params['id']);
      this.instrumentService.consulterInstrument(this.activatedRoute.snapshot.params['id']).subscribe(
        bug => {
          this.currentInstrument = bug;
          console.log(bug);
          this.InstrumentForm.controls['idInstrument'].setValue(bug.idInstrument);
          this.InstrumentForm.controls['nomInstrument'].setValue(bug.nomInstrument);
          this.InstrumentForm.controls['prixInstrument'].setValue(bug.prixInstrument);
         // this.InstrumentForm.controls['date'].setValue(bug.dateCreation);
          this.InstrumentForm.controls['typeInstrument'].setValue(bug.typeInstrument.nomType);
        },
        (error) => {
          console.log(error);
        } 
      ) ;
    }
  
  

  updateInstrument() {
   this.instrumentService.updateInstrument(this.currentInstrument).subscribe(() => {
  this.router.navigate(['instruments']);
  },(error) => {
     alert("Problème lors de la modification !"); }
  );
    }

    onSelectType(){
      this.typeInstrumentService.listeTypes().subscribe(response =>{
        console.log(response)
        this.typeList = response;
        
      }); 
    }

}
