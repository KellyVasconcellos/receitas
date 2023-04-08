import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-receita',
  templateUrl: './input-receita.component.html',
  styleUrls: ['./input-receita.component.scss']
})
export class InputReceitaComponent implements OnInit {

  formulario! : FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }



  ngOnInit(): void {
    this.formulario = this.fb.group({
      nome: ['',[ Validators.required]],
      tempo_de_preparo: ['', [Validators.required]],
      rendimento: ['', [Validators.required]],
      avaliacao: ['', [Validators.required]],
      resumo: ['', [Validators.required]],
      ingredientes: this.fb.group({
        categoria: ['', [Validators.required]],
        itens: ['', [Validators.required]]
      }),
      modo_preparo: this.fb.group({
        categoria: ['', [Validators.required]],
        itens: ['', [Validators.required]]
      })
    })
  }

  cadastrar():void {
    console.log(this.formulario.value)
  }

}
