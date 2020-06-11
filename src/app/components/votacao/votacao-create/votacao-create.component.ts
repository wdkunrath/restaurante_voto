import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VotacaoService } from '@app/services/votacao.service';
import { SemanaService } from '@app/services/semana.service';
import { DiaSemanaService } from '@app/services/diaSemana.service';
import { RestaurantService } from '@app/services/restaurant.service';
import { Restaurant } from '@app/models/restaurant.model';
import { DiaSemana } from '@app/models/diaSemana.model';
import { Votacao } from '@app/models/votacao.model';
import { Semanas } from '@app/models/semana.model';

@Component({
  selector: 'app-votacao-create',
  templateUrl: './votacao-create.component.html',
  styleUrls: ['./votacao-create.component.css']
})
export class VotacaoCreateComponent implements OnInit {
  constructor(
    private votacaoService: VotacaoService,
    private router: Router,
    private semanaService: SemanaService,
    private diaSemanaService: DiaSemanaService,
    private restaurantService: RestaurantService) { }

  semanas: Semanas[];
  diaSemanas: DiaSemana[];
  restaurants: Restaurant[];

  selectedSemana = ():any =>{this.semanaService.read().subscribe(semanas => {
    this.semanas = semanas;
  });}

  selectedDiaSemana = ():any =>{this.diaSemanaService.read().subscribe(diaSemanas => {
    this.diaSemanas = diaSemanas;
  });}

  selectedRestaurant = ():any =>{this.restaurantService.read().subscribe(restaurants => {
    this.restaurants = restaurants;
  });}

  votacao: Votacao = {
    semana: this.selectedSemana(),
    diaSemana: this.selectedDiaSemana(),
    restaurant: this.selectedRestaurant(),
    user: JSON.parse(localStorage.getItem('currentUser'))
  }


  ngOnInit(): void { }

  createVotacao(): void {
    this.votacaoService.create(this.votacao).subscribe(() => {
      this.votacaoService.showMessage('Restaurante de Votação Cadastrado com Sucesso!');
      this.router.navigate(['/votacao'])
    })

  }

  cancel(): void {
    this.router.navigate(['/votacao'])
  }
}
