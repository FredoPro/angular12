import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  titulo = 'Alunos';
  alunoSelected!: Aluno;
  alunoEstado!:boolean;
  texto!:string;
  public alunoForm!: FormGroup;
  public modalRef!: BsModalRef;
  alunos = [
    { id: 1, nome: 'Antonio', sobrenome: 'Joao', telefone: 923568852 },
    { id: 2, nome: 'Joao', sobrenome: 'Edson', telefone: 923589352 },
    { id: 3, nome: 'Fransciso', sobrenome: 'Cunha', telefone: 925588952 },
    { id: 4, nome: 'Gilberto', sobrenome: 'Paulo', telefone: 923568952 },
    { id: 5, nome: 'Mauro', sobrenome: 'Jorge', telefone: 928742952 },
    { id: 6, nome: 'Silva', sobrenome: 'Ricardo', telefone: 922354952 },
    { id: 7, nome: 'Nelson', sobrenome: 'Antunes', telefone: 923968952 },
    { id: 8, nome: 'Neusa', sobrenome: 'Gonsalves', telefone: 921468952 }
  ];


 
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  constructor(private fb: FormBuilder,private modalService: BsModalService ) {
    this.criarForm();
   }

  ngOnInit(): void {
  }

  
  criarForm(){

    this.alunoForm=this.fb.group({
    nome:['', Validators.required],
    sobrenome:['',Validators.required],
    telefone:['',Validators.required]



    });
  }
  alunoSelect(aluno: Aluno) {

    this.alunoSelected = aluno;
    this.alunoEstado = true;
    this.alunoForm.patchValue(aluno);// envia os valores do objecto no formulário
  }

  voltar() {

    this.alunoEstado = false;


  }
  alunoSubmit() {

   console.log(this.alunoForm.value)

  }
 

}
