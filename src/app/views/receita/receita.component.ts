import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/components/modal/modal.component';
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
  firstImage: string = '';
  secondImage: string = '';
  stars: Array<number> = [];

  constructor(
    private router: Router,
    private receitasService: ReceitasService,
    private modalService: NgbModal
  ) {
    const route = this.router.getCurrentNavigation();
    this.state = route?.extras.state;
  }

  ngOnInit(): void {
    // const fileInput:any = document.getElementById('fileInput');

    // fileInput.addEventListener('change', (e:any) => {
    //   const file = fileInput.files[0];
    //   const reader = new FileReader();

    //   reader.addEventListener('load', () => {
    //     // Base64 Data URL 👇
    //     console.log(reader.result);
    //     // let img : any = document.getElementById('img')
    //     // img.src = reader.result
    //   });

    //   reader.readAsDataURL(file);
    // });

    this.receitasService
      .getReceita(this.state.id)
      .subscribe((response: IReceitas) => {
        this.receita = response;
        this.stars = Array(response.avaliacao);

        this.firstImage = this.receita.primeiraImagem
        this.secondImage = this.receita.segundaImagem
      });
  }

  openModal() {
    const modalRef = this.modalService.open(ModalComponent, { centered: true });
    modalRef.closed.subscribe(() => {
      this.receitasService.deleteReceita(this.receita.id).subscribe(() => {
        this.router.navigateByUrl('/home');
      });
    });
  }
}
