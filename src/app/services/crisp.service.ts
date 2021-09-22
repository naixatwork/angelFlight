import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrispService {
  constructor() {
  }

  public openChat(): void {
    // @ts-ignore
    window.$crisp.push(["do", "chat:open"])
  }
}
