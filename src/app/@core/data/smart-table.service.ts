import { Injectable } from '@angular/core';

@Injectable()
export class SmartTableService {

  data = [{
    country: 'LB',
    views: 245,
    percentage: '78%',
  }, {
    country: 'UAE',
    views: 312,
    percentage: '28%',
  }];

  getData() {
    return this.data;
  }
}
