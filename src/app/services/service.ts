import { HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';

export class Service {
  constructor(private tokenStorage: TokenStorageService) {}
  headers(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.tokenStorage.getToken()}`,
    });
  }
}
