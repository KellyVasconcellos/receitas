import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IReceitas } from 'src/app/interfaces/receitas';
import { ReceitasService } from 'src/app/services/receitas.service';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.scss'],
})
export class ReceitaComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private receitasServie: ReceitasService
  ) {}

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');

    this.receitasServie.getReceita(id!).subscribe((response: IReceitas) => {
      console.log(response);
    });
  }
}
