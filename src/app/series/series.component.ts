import { Component, OnInit } from '@angular/core';
import { Serie } from './series';
import { SerieService } from './series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent implements OnInit {
  constructor(private serieService: SerieService) {}
  series: Array<Serie> = [];
  promedio = 0;

  getSeries() {
    this.serieService.getSeries().subscribe((series) => {
      series.forEach((serie) => {
        this.promedio += serie.seasons;
      });
      this.promedio = this.promedio / series.length;
      this.series = series;
    });
  }

  ngOnInit() {
    this.getSeries();
  }
}
