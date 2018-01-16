import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-d3-line',
  template: `
    <ngx-charts-line-chart
      [scheme]="colorScheme"
      [results]="multi"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel">
    </ngx-charts-line-chart>
  `,
})
export class D3LineComponent implements OnDestroy {
  multi = [
    {
      name: 'January',
      series: [
        {
          name: '1',
          value: 7300,
        },
        {
          name: '2',
          value: 8140,
        },
        {
          name: '3',
          value: 8240,
        },
        {
          name: '4',
          value: 8340,
        },
        {
          name: '5',
          value: 8440,
        },
        {
          name: '6',
          value: 8540,
        },
        {
          name: '7',
          value: 8640,
        },
        {
          name: '8',
          value: 8740,
        },
        {
          name: '9',
          value: 8840,
        },
        {
          name: '10',
          value: 8910,
        },
        {
          name: '11',
          value: 8920,
        },
        {
          name: '12',
          value: 8930,
        },
        {
          name: '13',
          value: 8940,
        },
        {
          name: '14',
          value: 8950,
        },
        {
          name: '15',
          value: 8960,
        },
        {
          name: '16',
          value: 8970,
        },
        {
          name: '17',
          value: 8980,
        },
        {
          name: '18',
          value: 8990,
        },
        {
          name: '19',
          value: 8991,
        },
        {
          name: '20',
          value: 8992,
        },
        {
          name: '21',
          value: 8920,
        },
        {
          name: '22',
          value: 1234,
        },
        {
          name: '23',
          value: 3232,
        },
        {
          name: '24',
          value: 2345,
        },
        {
          name: '25',
          value: 1111,
        },
        {
          name: '26',
          value: 3333,
        },
        {
          name: '27',
          value: 4432,
        },
        {
          name: '28',
          value: 5432,
        },
        {
          name: '29',
          value: 1234,
        },
        {
          name: '30',
          value: 5555,
        }
      ],
    },
    {
      name: 'February',
      series: [
        {
          name: '1',
          value: 3300,
        },
        {
          name: '2',
          value: 3140,
        },
        {
          name: '3',
          value: 3240,
        },
        {
          name: '4',
          value: 3840,
        },
        {
          name: '5',
          value: 3440,
        },
        {
          name: '6',
          value: 3540,
        },
        {
          name: '7',
          value: 1000,
        },
        {
          name: '8',
          value: 1200,
        },
        {
          name: '9',
          value: 1800,
        },
        {
          name: '10',
          value: 2345,
        },
        {
          name: '11',
          value: 2323,
        },
        {
          name: '12',
          value: 4444,
        },
        {
          name: '13',
          value: 5555,
        },
        {
          name: '14',
          value: 1234,
        },
        {
          name: '15',
          value: 4432,
        },
        {
          name: '16',
          value: 2312,
        },
        {
          name: '17',
          value: 3214,
        },
        {
          name: '18',
          value: 1123,
        },
        {
          name: '19',
          value: 4321,
        },
        {
          name: '20',
          value: 7654,
        }
      ],
    },
  ];
  showLegend = true;
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  xAxisLabel = 'Days';
  showYAxisLabel = true;
  yAxisLabel = 'Visitors Per Day For 4 months';
  colorScheme: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
