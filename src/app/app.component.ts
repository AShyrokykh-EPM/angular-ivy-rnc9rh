import { Component } from '@angular/core';
import { GridSizeChangedEvent, FirstDataRenderedEvent } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  columnDefs = [
      {
        headerName: 'Make', 
        field: 'make', 
        minWidth: 550,
        resizable: true,
      },
      {
        headerName: 'Model', 
        field: 'model', 
        minWidth: 150, 
        resizable: true,
      },
      {
        headerName: 'Price', 
        field: 'price', 
        minWidth: 250,
        resizable: true,
      }
  ];

  rowData = [
      { 
        make: 'Toyota', 
        model: 'Celica', 
        price: 35000
      },
      { 
        make: 'Ford', 
        model: 'Mondeo', 
        price: 32000
      },
      { 
        make: 'Porsche', 
        model: 'Boxter', 
        price: 72000
      },
  ];

  onGridSizeChanged(params: GridSizeChangedEvent): void {
    params.api.sizeColumnsToFit();
  }

  onFirstDataRendered(params: FirstDataRenderedEvent): void {
    params.api.sizeColumnsToFit();
  }
}
