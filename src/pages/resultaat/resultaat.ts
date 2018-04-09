import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

/**
 * Generated class for the ResultaatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultaat',
  templateUrl: 'resultaat.html',
})
export class ResultaatPage {

  @ViewChild('barCanvas1') barCanvas1;
  @ViewChild('barCanvas2') barCanvas2;
  @ViewChild('barCanvas3') barCanvas3;
  @ViewChild('barCanvas4') barCanvas4;
  @ViewChild('barCanvas5') barCanvas5;
  @ViewChild('barCanvas6') barCanvas6;
  @ViewChild('barCanvas7') barCanvas7;
  @ViewChild('barCanvas8') barCanvas8;


  barChart1: any;
  barChart2: any;
  barChart3: any;
  barChart4: any;
  barChart5: any;
  barChart6: any;
  barChart7: any;
  barChart8: any;


 m4p1data: any;
 m4p2data: any;
 m4p3data: any;

 m4p1tekst: any;
 m4p2tekst: any;
 m4p3tekst: any;

 m4p4data:any;
 m4p5data:any;
 m4p6data:any;
 m4p7data:any;
 m4p8data:any;

 m4p4tekst:any;
 m4p5tekst:any;
 m4p6tekst:any;
 m4p7tekst:any;
 m4p8tekst:any;

 m4p9data:any;
 m4p10data:any;
 m4p11data:any;
 m4p12data:any;


 m4p9tekst:any;
 m4p10tekst:any;
 m4p11tekst:any;
 m4p12tekst:any;

 m4p13data:any;
 m4p14data:any;
 m4p15data:any;
 m4p16data:any;
 m4p17data:any;


 m4p13tekst:any;
 m4p14tekst:any;
 m4p15tekst:any;
 m4p16tekst:any;
 m4p17tekst:any;

 m4p18data:any;
 m4p19data:any;
 m4p20data:any;
 m4p21data:any;
 m4p22data:any;
 m4p23data:any;


  m4p24data:any;
  m4p25data:any;
  m4p26data:any;
  m4p27data:any;
  m4p28data:any;
  m4p29data:any;

  m4p30data:any;
  m4p31data:any;
  m4p32data:any;
  m4p33data:any;
  m4p34data:any;



 m4p18tekst:any;
 m4p19tekst:any;
 m4p20tekst:any;
 m4p21tekst:any;
 m4p22tekst:any;
 m4p23tekst:any;


  m4p24tekst:any;
  m4p25tekst:any;
  m4p26tekst:any;
  m4p27tekst:any;
  m4p28tekst:any;
  m4p29tekst:any;


  m4p30tekst:any;
  m4p31tekst:any;
  m4p32tekst:any;
  m4p33tekst:any;
  m4p34tekst:any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.m4p1data = parseInt(localStorage.getItem('m4p1data'));
    this.m4p2data = parseInt(localStorage.getItem('m4p2data'));
    this.m4p3data = parseInt(localStorage.getItem('m4p3data'));
    this.m4p1tekst = localStorage.getItem('m4p1tekst');
    this.m4p2tekst = localStorage.getItem('m4p2tekst');
    this.m4p3tekst = localStorage.getItem('m4p3tekst');

    this.m4p4data = parseInt(localStorage.getItem('m4p4data'));
    this.m4p5data = parseInt(localStorage.getItem('m4p5data'));
    this.m4p6data = parseInt(localStorage.getItem('m4p6data'));
    this.m4p7data = parseInt(localStorage.getItem('m4p7data'));
    this.m4p8data = parseInt(localStorage.getItem('m4p8data'));
    this.m4p4tekst = localStorage.getItem('m4p4tekst');
    this.m4p5tekst = localStorage.getItem('m4p5tekst');
    this.m4p6tekst = localStorage.getItem('m4p6tekst');
    this.m4p7tekst = localStorage.getItem('m4p7tekst');
    this.m4p8tekst = localStorage.getItem('m4p8tekst');


    this.m4p9data = parseInt(localStorage.getItem('m4p9data'));
    this.m4p10data = parseInt(localStorage.getItem('m4p10data'));
    this.m4p11data = parseInt(localStorage.getItem('m4p11data'));
    this.m4p12data = parseInt(localStorage.getItem('m4p12data'));
    this.m4p9tekst = localStorage.getItem('m4p9tekst');
    this.m4p10tekst = localStorage.getItem('m4p10tekst');
    this.m4p11tekst = localStorage.getItem('m4p11tekst');
    this.m4p12tekst = localStorage.getItem('m4p12tekst');

    this.m4p13data = parseInt(localStorage.getItem('m4p13data'));
    this.m4p14data = parseInt(localStorage.getItem('m4p14data'));
    this.m4p15data = parseInt(localStorage.getItem('m4p15data'));
    this.m4p16data = parseInt(localStorage.getItem('m4p16data'));
    this.m4p17data = parseInt(localStorage.getItem('m4p17data'));



    this.m4p13tekst = localStorage.getItem('m4p13tekst');
    this.m4p14tekst = localStorage.getItem('m4p14tekst');
    this.m4p15tekst = localStorage.getItem('m4p15tekst');
    this.m4p16tekst = localStorage.getItem('m4p16tekst');
    this.m4p17tekst = localStorage.getItem('m4p17tekst');

    this.m4p18data = parseInt(localStorage.getItem('m4p18data'));
    this.m4p19data = parseInt(localStorage.getItem('m4p19data'));
    this.m4p20data = parseInt(localStorage.getItem('m4p20data'));
    this.m4p21data = parseInt(localStorage.getItem('m4p21data'));
    this.m4p22data = parseInt(localStorage.getItem('m4p22data'));
    this.m4p23data = parseInt(localStorage.getItem('m4p23data'));

    this.m4p24data = parseInt(localStorage.getItem('m4p24data'));
    this.m4p25data = parseInt(localStorage.getItem('m4p25data'));
    this.m4p26data = parseInt(localStorage.getItem('m4p26data'));
    this.m4p27data = parseInt(localStorage.getItem('m4p27data'));
    this.m4p28data = parseInt(localStorage.getItem('m4p28data'));
    this.m4p29data = parseInt(localStorage.getItem('m4p29data'));

    this.m4p30data = parseInt(localStorage.getItem('m4p30data'));
    this.m4p31data = parseInt(localStorage.getItem('m4p31data'));
    this.m4p32data = parseInt(localStorage.getItem('m4p32data'));
    this.m4p33data = parseInt(localStorage.getItem('m4p33data'));
    this.m4p34data = parseInt(localStorage.getItem('m4p34data'));



    this.m4p18tekst = localStorage.getItem('m4p18tekst');
    this.m4p19tekst = localStorage.getItem('m4p19tekst');
    this.m4p20tekst = localStorage.getItem('m4p20tekst');
    this.m4p21tekst = localStorage.getItem('m4p21tekst');
    this.m4p22tekst = localStorage.getItem('m4p22tekst');
    this.m4p23tekst = localStorage.getItem('m4p23tekst');

    this.m4p24tekst = localStorage.getItem('m4p24tekst');
    this.m4p25tekst = localStorage.getItem('m4p25tekst');
    this.m4p26tekst = localStorage.getItem('m4p26tekst');
    this.m4p27tekst = localStorage.getItem('m4p27tekst');
    this.m4p28tekst = localStorage.getItem('m4p28tekst');
    this.m4p29tekst = localStorage.getItem('m4p29tekst');
    this.m4p30tekst = localStorage.getItem('m4p30tekst');
    this.m4p31tekst = localStorage.getItem('m4p31tekst');
    this.m4p32tekst = localStorage.getItem('m4p32tekst');
    this.m4p33tekst = localStorage.getItem('m4p33tekst');
    this.m4p34tekst = localStorage.getItem('m4p34tekst');




  }

  ionViewDidLoad() {

    this.barChart1 = new Chart(this.barCanvas1.nativeElement, {


      type: 'horizontalBar',

      data: {
        labels: ["Stelling 1", "Stelling 2", "Stelling 3",  "Stelling 4", "Stelling 5", "Stelling 6"],
        datasets: [{
          label: 'uw mening',
          data: [this.m4p1data,this.m4p2data,this.m4p3data,this.m4p4data,this.m4p5data,this.m4p6data],
          backgroundColor: [
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4'
          ],
          borderColor: [
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              suggestedMin: -100,
              suggestedMax: 100
            }
          }],
          xAxes: [{
            ticks: {
              min: -100,
              max: 100
            }
          }]
        }
      }

    });
    this.barChart2 = new Chart(this.barCanvas2.nativeElement, {


      type: 'horizontalBar',

      data: {
        labels: ["Stelling 1", "Stelling 2", "Stelling 3",  "Stelling 4"],
        datasets: [{
          label: 'uw mening',
          data: [this.m4p7data,this.m4p8data,this.m4p9data,this.m4p10data],
          backgroundColor: [
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4'
          ],
          borderColor: [
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              suggestedMin: -100,
              suggestedMax: 100
            }
          }],
          xAxes: [{
            ticks: {
              min: -100,
              max: 100
            }
          }]
        }
      }

    });
    this.barChart3 = new Chart(this.barCanvas3.nativeElement, {


      type: 'horizontalBar',

      data: {
        labels: ["Stelling 1", "Stelling 2", "Stelling 3",  "Stelling 4", "Stelling 5", "Stelling 6"],
        datasets: [{
          label: 'uw mening',
          data: [this.m4p11data,this.m4p12data,this.m4p13data,this.m4p14data,this.m4p15data,this.m4p16data,this.m4p17data],
          backgroundColor: [
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4'
          ],
          borderColor: [
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              suggestedMin: -100,
              suggestedMax: 100
            }
          }],
          xAxes: [{
            ticks: {
              min: -100,
              max: 100
            }
          }]
        }
      }

    });
    this.barChart4 = new Chart(this.barCanvas4.nativeElement, {


      type: 'horizontalBar',

      data: {
        labels: ["Stelling 1", "Stelling 2", "Stelling 3",  "Stelling 4"],
        datasets: [{
          label: 'uw mening',
          data: [this.m4p18data,this.m4p19data,this.m4p20data,this.m4p21data],
          backgroundColor: [
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4'
          ],
          borderColor: [
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              suggestedMin: -100,
              suggestedMax: 100
            }
          }],
          xAxes: [{
            ticks: {
              min: -100,
              max: 100
            }
          }]
        }
      }

    });
    this.barChart5 = new Chart(this.barCanvas5.nativeElement, {


      type: 'horizontalBar',

      data: {
        labels: ["Stelling 1", "Stelling 2", "Stelling 3"],
        datasets: [{
          label: 'uw mening',
          data: [this.m4p22data,this.m4p23data,this.m4p24data],
          backgroundColor: [
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4'
          ],
          borderColor: [
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              suggestedMin: -100,
              suggestedMax: 100
            }
          }],
          xAxes: [{
            ticks: {
              min: -100,
              max: 100
            }
          }]
        }
      }

    });
    this.barChart6 = new Chart(this.barCanvas6.nativeElement, {


      type: 'horizontalBar',

      data: {
        labels: ["Stelling 1", "Stelling 2", "Stelling 3",  "Stelling 4"],
        datasets: [{
          label: 'uw mening',
          data: [this.m4p25data,this.m4p26data,this.m4p27data,this.m4p28data],
          backgroundColor: [
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4'
          ],
          borderColor: [
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              suggestedMin: -100,
              suggestedMax: 100
            }
          }],
          xAxes: [{
            ticks: {
              min: -100,
              max: 100
            }
          }]
        }
      }

    });
    this.barChart7 = new Chart(this.barCanvas7.nativeElement, {


      type: 'horizontalBar',

      data: {
        labels: ["Stelling 1", "Stelling 2", "Stelling 3"],
        datasets: [{
          label: 'uw mening',
          data: [this.m4p29data,this.m4p30data,this.m4p31data],
          backgroundColor: [
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4'
          ],
          borderColor: [
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              suggestedMin: -100,
              suggestedMax: 100
            }
          }],
          xAxes: [{
            ticks: {
              min: -100,
              max: 100
            }
          }]
        }
      }

    });
    this.barChart8 = new Chart(this.barCanvas8.nativeElement, {


      type: 'horizontalBar',

      data: {
        labels: ["Stelling 1", "Stelling 2", "Stelling 3"],
        datasets: [{
          label: 'uw mening',
          data: [this.m4p32data,this.m4p33data,this.m4p34data],
          backgroundColor: [
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4'
          ],
          borderColor: [
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              suggestedMin: -100,
              suggestedMax: 100
            }
          }],
          xAxes: [{
            ticks: {
              min: -100,
              max: 100
            }
          }]
        }
      }

    });

  }
}
