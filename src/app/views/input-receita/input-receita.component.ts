import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-receita',
  templateUrl: './input-receita.component.html',
  styleUrls: ['./input-receita.component.scss'],
})
export class InputReceitaComponent implements OnInit {
  listaDeIcone = ['receita01', 'receita02', 'receita03', 'receita04'];

  formulario!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nome: ['', [Validators.required]],
      tempo_de_preparo: ['', [Validators.required]],
      rendimento: ['', [Validators.required]],
      avaliacao: ['', [Validators.required]],
      resumo: ['', [Validators.required]],
      icone: ['', [Validators.required]],
      ingredientes: this.fb.group({
        categoria: ['', [Validators.required]],
        itens: ['', [Validators.required]],
      }),
      modo_preparo: this.fb.group({
        categoria: ['', [Validators.required]],
        itens: ['', [Validators.required]],
      }),
      primeiraImagem: ['', [Validators.required]],
      segundaImagem: ['', [Validators.required]],
    });
    this.getBase64PrimeiraImg();
    this.getBase64SegundaImg();
  }

  getBase64PrimeiraImg(): void {
    const fileInput: any = document.getElementById('inputGroupFile01');

    fileInput.addEventListener('change', (e: any) => {
      const file = fileInput.files[0];
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        this.addImagem('primeiraImagem', reader.result)
        this.renderizarImagem('idImagem01');
      });

      reader.readAsDataURL(file);
    });
  }

  getBase64SegundaImg(): void {
    const fileInput: any = document.getElementById('inputGroupFile02');

    fileInput.addEventListener('change', (e: any) => {
      const file = fileInput.files[0];
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        this.addImagem('segundaImagem', reader.result)
        this.renderizarImagem('idImagem02');
      });

      reader.readAsDataURL(file);
    });
  }

  cadastrar(): void {
    console.log(this.formulario.value);
  }

  addImagem(campo: string, valor: any ): void {
    this.formulario.get(campo)?.setValue(valor);
  }

  renderizarImagem(nome: string): void {
    let img: any = document.getElementById(nome);
    img.src = this.formulario.value.primeiraImagem;
    img.height = '300';
    img.width = '254';
  }
}
