import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-search-bottom-sheet',
  templateUrl: './search-bottom-sheet.component.html',
  styleUrls: ['./search-bottom-sheet.component.css']
})
export class SearchBottomSheetComponent implements OnInit {
  searchOptions:any[] = [
    {display:'Title',route:'title'},
    {display:'Genre',route:'genre'},
    {display:'Year',route:'relyear'},
    {display:'Director',route:'director'},
    {display:'MPA Rating',route:'rating'}
  ];

  constructor(private bottomSheetRef:MatBottomSheetRef<NavbarComponent>,private router:Router) { }

  onSubmit(value):void{
    this.router.navigate(['/search', value.option, value.query]);
    this.bottomSheetRef.dismiss();
  }

  ngOnInit() {
  }

}
