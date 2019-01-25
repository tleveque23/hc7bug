import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

/**
 * This component is a copy from the module highcharts-angular
 * https://github.com/highcharts/highcharts-angular
 *
 * We do a copy of the component because as today (2018-05-02), this module is not a real Angular package and it need to be added in the typescript
 * compiler source path and be compiled when we build. And this cause compilation error when we update Angular.
 */

@Component({
  selector: 'highcharts-chart',
  template: ''
})

export class HighchartsChartComponent {
  constructor(private el: ElementRef) { }

  chart: any;
  @Input() Highcharts: any;
  @Input() constructorType: string;
  @Input() callbackFunction: any;
  optionsValue: any;
  @Input()
  set options(val) {
    this.optionsValue = val;
    this.updateOrCreateChart();
  }
  updateValue = false;
  @Output() updateChange = new EventEmitter(true);
  @Input() set update(val) {
    if (val) {
      this.updateOrCreateChart();
      this.updateChange.emit(false); // clear the flag after update
    }
  }

  updateOrCreateChart = function () {
    if (this.chart && this.chart.update) {
      this.chart.update(this.optionsValue);
    } else {
      this.chart = this.Highcharts[this.constructorType || 'chart'](
        this.el.nativeElement,
        this.optionsValue,
        this.callbackFunction || null
      );
      this.optionsValue.series = this.chart.userOptions.series;
    }
  };
}
