import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

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
    displayData3 = false;
    viz: any;
    viz2: any;
    viz3: any;
    constructor() { }

    ngOnInit() {
        // this.initTableau();
    }

    ngAfterViewInit() {
        this.initTableau();
    }

    initTableau() {
        const placeholderDiv = document.getElementById('vizContainer');
        const placeholderDiv2 = document.getElementById('vizContainer2');
        const placeholderDiv3 = document.getElementById('vizContainer3');
        const url = 'https://public.tableau.com/views/PeopleMigrationAfterCOVID-FlightPathStatesLevel/Dashboard1?:language=en&:display_count=y&:origin=viz_share_link';
        const url2 = 'https://public.tableau.com/views/RealEstate-ListingsPrice/Dashboard2?:language=en&:display_count=n&:origin=viz_share_link';
        const url3 = 'https://public.tableau.com/shared/4Q5ZSS9BC?:display_count=n&:origin=viz_share_link';

        const options = {
            hideTabs: false,
            width: '100%',
            height: '1200px',
            onFirstInteractive: function() {
                // The viz is now ready and can be safely used.
                console.log('Run this code when the viz has finished     loading.');
            }
        };
        const options2 = {
            hideTabs: false,
            width: '100%',
            height: '1200px',
            onFirstInteractive: function() {
                // The viz is now ready and can be safely used.
                console.log('Run this code when the viz has finished     loading.');
            }
        };
        const options3 = {
            hideTabs: false,
            width: '100%',
            height: '1200px',
            onFirstInteractive: function() {
                // The viz is now ready and can be safely used.
                console.log('Run this code when the viz has finished     loading.');
            }
        };
        // Creating a viz object and embed it in the container div.
        this.viz = new tableau.Viz(placeholderDiv, url, options);
        this.viz2 = new tableau.Viz(placeholderDiv2, url2, options2);
        this.viz2 = new tableau.Viz(placeholderDiv3, url3, options3);
    }

    changeTab(tabName: string) {
        if (tabName === 'Data1') {
          this.displayData1 = true;
          this.displayData2 = false;
          this.displayData3 = false;
        }
        if (tabName === 'Data2') {
            this.displayData1 = false;
            this.displayData2 = true;
            this.displayData3 = false;
        }
        if (tabName === 'Data3') {
            this.displayData1 = false;
            this.displayData2 = false;
            this.displayData3 = true;
        }
    }

}
