import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  listaImages = [
    {route: 'assets/images/logos/tcs.png', style: 'w-[90px] xl:w-[110px] 2xl:w-[140px]'},
    {route: 'assets/images/logos/cisco.png', style: 'w-[70px] xl:w-[80px] 2xl:w-[90px]'},
    {route: 'assets/images/logos/aws.png', style: 'w-[60px] xl:w-[70px] 2xl:w-[90px]'},
    {route: 'assets/images/logos/google-cloud-white.png', style: 'w-[90px] xl:w-[110px] 2xl:w-[140px]'},
    {route: 'assets/images/logos/microsoft-white.png', style: 'w-[90px] xl:w-[110px] 2xl:w-[140px]'},
    {route: 'assets/images/logos/softtek-white.png', style: 'w-[70px] xl:w-[80px] 2xl:w-[90px]'},
    {route: 'assets/images/logos/nttdata-white.png', style: 'w-[80px] xl:w-[110px] 2xl:w-[140px]'},
    {route: 'assets/images/logos/ninja-project.png', style: 'w-[80px] xl:w-[90px]'},
    {route: 'assets/images/logos/sg.png', style: 'w-[70px] xl:w-[70px] 2xl:w-[90px]'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
