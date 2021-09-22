import { Component, OnInit } from '@angular/core';
import {CrispService} from "../services/crisp.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public readonly crispService:CrispService) { }

  ngOnInit(): void {
  }

}
