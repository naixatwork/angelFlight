import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Visa} from "./visa.model";

@Injectable()
export class VisaService {
  public availableVisas: Visa[] = [
    {
      id: 'student',
      type: 'student',
      name: 'تحصیلی',
      icon: 'school',
      countries: [
        {
          id: 'US',
          name: 'آمریکا',
          imageUrl: 'https://www.countryflags.io/us/flat/48.png',
        },
        {
          id: 'CA',
          name: 'کانادا',
          imageUrl: 'https://www.countryflags.io/ca/flat/48.png',
        },
        {
          id: 'AU',
          name: 'استرالیا',
          imageUrl: 'https://www.countryflags.io/au/flat/48.png',
        },
        {
          id: 'NZ',
          name: 'نیوزیلند',
          imageUrl: 'https://www.countryflags.io/nz/flat/48.png',
        },
        {
          id: 'UK',
          name: 'بریتانیا',
          imageUrl: 'https://www.countryflags.io/gb/flat/48.png',
        },
        {
          id: 'DE',
          name: 'آلمان',
          imageUrl: 'https://www.countryflags.io/de/flat/48.png',
        },
        {
          id: 'AT',
          name: 'اتریش',
          imageUrl: 'https://www.countryflags.io/at/flat/48.png',
        },
        {
          id: 'SE',
          name: 'سوئد',
          imageUrl: 'https://www.countryflags.io/SE/flat/48.png',
        },
        {
          id: 'FI',
          name: 'فنلاند',
          imageUrl: 'https://www.countryflags.io/fi/flat/48.png',
        },
        {
          id: 'AT',
          name: 'اتریش',
          imageUrl: 'https://www.countryflags.io/at/flat/48.png',
        },
        {
          id: 'NR',
          name: 'نروژ',
          imageUrl: 'https://www.countryflags.io/no/flat/48.png',
        },
        {
          id: 'AT',
          name: 'اتریش',
          imageUrl: 'https://www.countryflags.io/at/flat/48.png',
        },
        {
          id: 'ES',
          name: 'اسپانیا',
          imageUrl: 'https://www.countryflags.io/es/flat/48.png',
        },
        {
          id: 'PT',
          name: 'پرتغال',
          imageUrl: 'https://www.countryflags.io/pt/flat/48.png',
        },
        {
          id: 'IT',
          name: 'ایتالیا',
          imageUrl: 'https://www.countryflags.io/it/flat/48.png',
        },
        {
          id: 'RU',
          name: 'روسیه',
          imageUrl: 'https://www.countryflags.io/ru/flat/48.png',
        },
        {
          id: 'TR',
          name: 'ترکیه',
          imageUrl: 'https://www.countryflags.io/tr/flat/48.png',
        },
        {
          id: 'HU',
          name: 'مجارستان',
          imageUrl: 'https://www.countryflags.io/ru/flat/48.png',
        },
        {
          id: 'NL',
          name: 'هلند',
          imageUrl: 'https://www.countryflags.io/nl/flat/48.png',
        },
        {
          id: 'SW',
          name: 'سوئیس',
          imageUrl: 'https://www.countryflags.io/sw/flat/48.png',
        },
        {
          id: 'FR',
          name: 'فرانسه',
          imageUrl: 'https://www.countryflags.io/fr/flat/48.png',
        },
        {
          id: 'RU',
          name: 'روسیه',
          imageUrl: 'https://www.countryflags.io/ru/flat/48.png',
        },
        {
          id: 'GR',
          name: 'یونان',
          imageUrl: 'https://www.countryflags.io/gr/flat/48.png',
        },
        {
          id: 'CY',
          name: 'قبرس',
          imageUrl: 'https://www.countryflags.io/cy/flat/48.png',
        },
        {
          id: 'PL',
          name: 'لهستان',
          imageUrl: 'https://www.countryflags.io/pl/flat/48.png',
        },
        {
          id: 'DN',
          name: 'دانمارک',
          imageUrl: 'https://www.countryflags.io/dn/flat/48.png',
        },
        {
          id: 'BG',
          name: 'بلغارستان',
          imageUrl: 'https://www.countryflags.io/bg/flat/48.png',
        },
      ]
    },
    {
      id: 'work',
      type: 'work',
      name: 'کاری',
      icon: 'work',
      countries: [
        {
          id: 'CA',
          name: 'کانادا',
          imageUrl: 'https://www.countryflags.io/ca/flat/48.png',
        },
        {
          id: 'AU',
          name: 'استرالیا',
          imageUrl: 'https://www.countryflags.io/au/flat/48.png',
        },
        {
          id: 'NZ',
          name: 'نیوزیلند',
          imageUrl: 'https://www.countryflags.io/nz/flat/48.png',
        },
        {
          id: 'DE',
          name: 'آلمان',
          imageUrl: 'https://www.countryflags.io/de/flat/48.png',
        },
        {
          id: 'SW',
          name: 'سوئیس',
          imageUrl: 'https://www.countryflags.io/sw/flat/48.png',
        },
        {
          id: 'ES',
          name: 'اسپانیا',
          imageUrl: 'https://www.countryflags.io/es/flat/48.png',
        },
        {
          id: 'IT',
          name: 'ایتالیا',
          imageUrl: 'https://www.countryflags.io/it/flat/48.png',
        },
        {
          id: 'TR',
          name: 'ترکیه',
          imageUrl: 'https://www.countryflags.io/tr/flat/48.png',
        },
        {
          id: 'FR',
          name: 'فرانسه',
          imageUrl: 'https://www.countryflags.io/fr/flat/48.png',
        },
        {
          id: 'AT',
          name: 'اتریش',
          imageUrl: 'https://www.countryflags.io/at/flat/48.png',
        },
        {
          id: 'CY',
          name: 'قبرس',
          imageUrl: 'https://www.countryflags.io/cy/flat/48.png',
        },
        {
          id: 'UK',
          name: 'بریتانیا',
          imageUrl: 'https://www.countryflags.io/gb/flat/48.png',
        },
        {
          id: 'SK',
          name: 'اسلواکی',
          imageUrl: 'https://www.countryflags.io/sl/flat/48.png',
        },
        {
          id: 'PL',
          name: 'لهستان',
          imageUrl: 'https://www.countryflags.io/pl/flat/48.png',
        },
        {
          id: 'DN',
          name: 'دانمارک',
          imageUrl: 'https://www.countryflags.io/dk/flat/48.png',
        },
        {
          id: 'NR',
          name: 'نروژ',
          imageUrl: 'https://www.countryflags.io/no/flat/48.png',
        },
      ]
    },
    {
      id: 'invest',
      type: 'invest',
      name: 'سرمایه گذاری',
      icon: 'account_balance',
      countries: []
    }
  ]

  public selectedVisa$: BehaviorSubject<Visa> = new BehaviorSubject<Visa>(this.availableVisas[0])

  constructor() {
  }
}
