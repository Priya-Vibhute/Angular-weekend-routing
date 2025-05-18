import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  imports: [],
  templateUrl: './productdetail.component.html',
  styleUrl: './productdetail.component.css'
})
export class ProductdetailComponent {

  constructor(private activateroute:ActivatedRoute)
  {

  }

  ngOnInit()
  {
    // this.activateroute.params
  }



}
