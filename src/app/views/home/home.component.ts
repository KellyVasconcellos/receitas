import { Component, OnInit } from '@angular/core';
import { IReceitas } from 'src/app/interfaces/receitas';
import { ReceitasService } from 'src/app/services/receitas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private receitasServie: ReceitasService) {

  }
  ngOnInit(): void {
    this.getReceitas()
  }

  getReceitas(): void{
    this.receitasServie.getReceitas()
      .subscribe((response: Array<IReceitas>) => {
        console.log(response)
      })
  }

}
