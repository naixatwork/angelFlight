import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {VisaService} from "./visa.service";
import {Visa} from "./visa.model";
import {CrispService} from "../../../services/crisp.service";

@Component({
  selector: 'app-visa',
  templateUrl: './visa.component.html',
  styleUrls: ['./visa.component.scss']
})
export class VisaComponent implements OnInit, AfterViewInit {
  @ViewChild('world') world!: ElementRef;

  constructor(public readonly visaService: VisaService, public readonly crispService: CrispService) {
  }

  ngOnInit(): void {
    this.selectedVisaInit();
  }

  ngAfterViewInit(): void {
    this.worldInit();
  }

  private selectedVisaInit() {
    this.visaService.selectedVisa$.subscribe(() => {
      this.worldInit();
    })
  }

  private worldInit(): void {
    if (!this.world) return;
    for (let continent of this.world.nativeElement.children) {
      for (let country of continent.children) {
        country.style.fill = '#fff';
        for (let availableCountry of this.visaService.selectedVisa$.value.countries) {
          if (availableCountry.id === country.id) {
            country.style.fill = '#7DD3FC'
          }
        }
      }
    }
  }

  public onVisaTypeClick(visa: Visa): void {
    this.visaService.selectedVisa$.next(visa);
  }

}
