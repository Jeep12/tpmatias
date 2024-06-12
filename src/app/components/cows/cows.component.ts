// src/app/components/cows/cows.component.ts
import { Component, OnInit } from '@angular/core';
import { Cow } from 'src/app/Utils/Cow';
import { ApiCowsService } from 'src/app/services/api-cows.service';

@Component({
  selector: 'app-cows',
  templateUrl: './cows.component.html',
  styleUrls: ['./cows.component.css']
})
export class CowsComponent implements OnInit {
  cows: Cow[] = [];

  constructor(private serviceApi: ApiCowsService) {}

  ngOnInit() {
    this.serviceApi.getData().subscribe((response: Cow[]) => {
      this.cows = response;
      console.log(this.cows);
    });
  }


  removeCow(id: string) {
    const confirmation = window.confirm('¿Estás seguro de que deseas eliminar esta vaca?');
    
    if (confirmation) {
      this.serviceApi.deleteCow(id).subscribe(() => {
        this.cows = this.cows.filter(cow => cow.id !== id);
      });
    }
  }
  
  
}
