import { Component, OnInit } from '@angular/core';
import { Instrument } from '../model/instrument.model';
import { InstrumentService } from '../services/instrument.service';
import { TypeInstrumentService } from '../services/type-instrument.service';
import { ActivatedRoute,Router } from '@angular/router';
import {FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-instrument',
  templateUrl: './add-instrument.component.html',
  styleUrls: ['./add-instrument.component.css']
})
export class AddInstrumentComponent implements OnInit {
newInstrument: Instrument;
  message: string="";
  typeList:any=[];
  InstrumentForm: FormGroup;
constructor(private instrumentService: InstrumentService,
            private router :Router,
            private typeInstrumentService: TypeInstrumentService,
            private formBuilder:FormBuilder) {
              
              this.InstrumentForm = this.formBuilder.group({

                nomInstrument : new FormControl(''),
                prixInstrument : new FormControl(''),
              //  date : new FormControl(''),
              typeInstrument : new FormControl('')
              })
             }

addInstrument(){
//console.log(this.newInstrument);
 this.newInstrument = new Instrument(this.InstrumentForm.value.nomInstrument,this.InstrumentForm.value.prixInstrument, this.InstrumentForm.value.typeInstrument);
    
 this.instrumentService.ajouterInstrument(this.newInstrument).subscribe(prod => {
  console.log(prod);
  });
  this.ngOnInit();
  this.router.navigate(['instruments']);
}



  ngOnInit(): void {
    this.onSelectType();
  }
  onSelectType(){
    this.typeInstrumentService.listeTypes().subscribe(response =>{
      console.log(response)
      this.typeList = response;
      
    }); 
  }

}
