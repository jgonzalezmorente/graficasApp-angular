import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartDataset, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  
  @Input() horizontal: boolean = false;
  
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,    
    scales: {
      x: {},
      y: {
        // min: 10
      }
    },
    plugins: {      
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }  
  };
  
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];
  
  @Input() barCharLabels: string[] = [];
  @Input() barCharData: ChartDataset<'bar', number[]>[] = [];
  
  public _barChartData: ChartData<'bar'> = {    
    labels: [],
    datasets: []
  };

  ngOnInit(): void {

    this.barChartOptions!['indexAxis'] = this.horizontal ? 'y' : 'x';
    this._barChartData!['labels']  = this.barCharLabels;
    this._barChartData!['datasets'] = this.barCharData;

  }
  
  // events
  // public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
  //   console.log(event, active);
  // }
  
  // public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
  //   console.log(event, active);
  // }

  public randomize(): void {
    this._barChartData.datasets.map( dataset => dataset.data = dataset.data.map( _ => Math.round( Math.random() * 100 ) ) );    
    this.chart?.update();
  }

}
