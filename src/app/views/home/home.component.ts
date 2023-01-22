import { Component, OnInit } from '@angular/core';
import { IReceitas } from 'src/app/interfaces/receitas';
import { ReceitasService } from 'src/app/services/receitas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  menuBox: Array<IReceitas> = [];

  constructor(private receitasServie: ReceitasService) {}

  ngOnInit(): void {
    this.getReceitas()
  }

  getReceitas(): void{
    this.receitasServie.getAllReceitas()
      .subscribe((response: Array<IReceitas>) => {

        this.menuBox = response;
      })
  }

}
