import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
    `
      .max-size {        
        max-width: 30rem;
        max-height: 30rem;
      }
    `
  ]
})
export class DonaComponent {

  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100, 120 ], backgroundColor: [ '#BB35FC', '#813CE6', '#4E35FC', '#334EF2' ] },
      { data: [ 50, 150, 120, 20 ], backgroundColor: [ '#BB35FC', '#813CE6', '#4E35FC', '#334EF2' ] },
      { data: [ 250, 130, 70, 200 ], backgroundColor: [ '#BB35FC', '#813CE6', '#4E35FC', '#334EF2' ] },
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
