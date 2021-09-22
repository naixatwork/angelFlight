import {Component, OnInit} from '@angular/core';
import {CrispService} from "../../../services/crisp.service";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FAQComponent implements OnInit {

  constructor(public readonly crispService: CrispService) {
  }

  ngOnInit(): void {
  }

}
