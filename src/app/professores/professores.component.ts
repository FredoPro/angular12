import { Component, OnInit, TemplateRef } from '@angular/core';
import { Professor } from '../models/Professor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo='Professores';
  profSelected!: Professor;
  profEstado!: boolean;
  public profForm!: FormGroup;
  modalRef?: BsModalRef;
  professores=[
    {id:1,nome:'Alfredo',disciplina:'Matemática'},
    {id:2,nome:'Joana',disciplina:'L.Portuguesa'},
    {id:3,nome:'Wilma',disciplina:'programação'},
    {id:4,nome:'Telma',disciplina:'História'},
    {id:5,nome:'Mauro',disciplina:'Geografia'},
    {id:6,nome:'Silva',disciplina:'E.Musical'},
    {id:7,nome:'Nelson',disciplina:'Física'},
    {id:8,nome:'Neusa',disciplina:'E.Laboral'}
  ];



 
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  constructor(private fb: FormBuilder,private modalService: BsModalService ) {
    this.criarForm();
   }
   ngOnInit() {
  }
   criarForm(){

    this.profForm=this.fb.group({
    nome:['', Validators.required],
    disciplina:['',Validators.required],



    });
  }
 
  profSelect(prof: Professor) {

    this.profSelected = prof;
    this.profEstado=true;
    this.profForm.patchValue(prof);// envia os valores do objecto no formulário


  }

  voltar() {

    this.profEstado=false;


  }
  profSubmit() {

    console.log(this.profForm.value)
 
   }

}
