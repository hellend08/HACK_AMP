import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-processes',
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.scss']
})

export class ProcessesComponent implements AfterViewInit {

  showTable!: boolean;

  displayedColumns: string[] = [ 'empresa', 'distrito', 'rubro'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor() { }

}

export interface PeriodicElement {
  empresa: string;
  distrito: string;
  rubro: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {empresa: 'google', distrito: 'Lima', rubro: 'ns'},
  {empresa: 'aws', distrito: 'Lima', rubro: 'ns'},
  {empresa: 'softtek', distrito: 'Lima', rubro: 'ns'},
  {empresa: 'cisco', distrito: 'Lima', rubro: 'ns'},
  {empresa: 'tcs', distrito: 'Lima', rubro: 'ns'},
  {empresa: 'google', distrito: 'Lima', rubro: 'ns'},
  {empresa: 'aws', distrito: 'Lima', rubro: 'ns'},
  {empresa: 'softtek', distrito: 'Lima', rubro: 'ns'},
  {empresa: 'cisco', distrito: 'Lima', rubro: 'ns'},
  {empresa: 'tcs', distrito: 'Lima', rubro: 'ns'},
  {empresa: 'google', distrito: 'Lima', rubro: 'ns'},
  {empresa: 'aws', distrito: 'Lima', rubro: 'ns'},
  {empresa: 'softtek', distrito: 'Lima', rubro: 'ns'},
  {empresa: 'cisco', distrito: 'Lima', rubro: 'ns'},
  {empresa: 'tcs', distrito: 'Lima', rubro: 'ns'},
];
