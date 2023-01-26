import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstImage } from 'src/app/enums/first-image';
import { SecondImage } from 'src/app/enums/second-image';
import { IReceitas } from 'src/app/interfaces/receitas';
import { ReceitasService } from 'src/app/services/receitas.service';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.scss'],
})
export class ReceitaComponent implements OnInit {

  state: any;
  receita!: IReceitas;
  firstImage: string = ""
  secondImage: string = ""

  constructor(
    private router: Router,
    private receitasServie: ReceitasService
  ) {
    const route = this.router.getCurrentNavigation();
    this.state = route?.extras.state;
  }

  ngOnInit(): void {

    this.receitasServie.getReceita(this.state.id)
      .subscribe((response: IReceitas) => {

      this.receita = response;

      switch (this.receita.icone) {
        case "receita01":
          this.firstImage = FirstImage.receita01
          this.secondImage = SecondImage.receita01
          break;
        case "receita02":
          this.firstImage = FirstImage.receita02
          this.secondImage = SecondImage.receita02
          break;
        case "receita03":
          this.firstImage = FirstImage.receita03
          this.secondImage = SecondImage.receita03
          break;
        case "receita04":
          this.firstImage = FirstImage.receita04
          this.secondImage = SecondImage.receita04
          break;
        default:
          break;
      }

    });
  }
}
