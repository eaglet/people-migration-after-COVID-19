import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';

declare var tableau: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

    @ViewChild('vizContainer') containerDiv: ElementRef;
    displayData1 = true;
    displayData2 = false;
    viz: any;
    constructor() { }

    ngOnInit() {
        // this.initTableau();
    }

    ngAfterViewInit() {
        this.initTableau();
    }

    initTableau() {
        const placeholderDiv = document.getElementById('vizContainer');
        // Replace this url with the url of your Tableau dashboard
        // const url = 'https://public.tableau.com/views/All_Reports_0/Dashboard1?:embed=y&:display_count=yes';
        const url = 'https://public.tableau.com/views/Regional_15949143850120/Obesity?:language=en&:display_count=y&:origin=viz_share_link';
        const options = {
            hideTabs: true,
            width: '100%',
            height: '800px',
            onFirstInteractive: function() {
                // The viz is now ready and can be safely used.
                console.log('Run this code when the viz has finished     loading.');
            }
        };
        // Creating a viz object and embed it in the container div.
        this.viz = new tableau.Viz(placeholderDiv, url, options);
    }

    changeTab(tabName: string) {
        if (tabName === 'Data1') {
          this.displayData1 = true;
          this.displayData2 = false;
        }
        if (tabName === 'Data2') {
            this.displayData1 = false;
            this.displayData2 = true;
        }
    }

}
