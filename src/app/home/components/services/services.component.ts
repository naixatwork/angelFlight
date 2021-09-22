import { Component, OnInit } from '@angular/core';
import {CrispService} from "../../../services/crisp.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(public readonly crispService:CrispService) { }

  ngOnInit(): void {
  }

}
