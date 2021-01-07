
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.scss']
})
export class AdminpanelComponent implements OnInit {

  list: string[] = ['Home', 'Majalis', 'Mahfil', 'Main Menu', 'Sub Menu']
  constructor(private _authService:AuthService) { }

  ngOnInit(): void {
    this._authService.getPrograms().subscribe(
      (response) => {
        console.log(response),
        alert(response)
      },
      (err) => console.log(err)
    )
  }

}
