import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
    `
      .max-size {        
        max-width: 30rem;
        max-height: 30rem;
      }
    `    
  ]
})
export class DonaHttpComponent implements OnInit {

  constructor( private graficasService: GraficasService ) { }

  ngOnInit(): void {

    // this.graficasService.getUsuariosRedesSociales()
    //   .subscribe( data => {        
    //     this.doughnutChartData.labels = Object.keys( data );
    //     this.doughnutChartData.datasets[0].data = Object.values( data );
    //   });
    
    this.graficasService.getUsuariosRedesSocialesDondaData().subscribe(
      ({ labels, values }) => {

        this.doughnutChartData.labels = labels;
        this.doughnutChartData.datasets[0].data = values;
        
      }
    );

  }


  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [
      { data: [], backgroundColor: [ '#0024F0', '#0A75F7', '#15AEE0', '#0AF7EB', '#09ED97' ] },
    ]
  };


}
