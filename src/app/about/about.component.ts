import { Component, OnInit } from '@angular/core';
import { SuggestionService } from '../suggestion.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  suggestion = {
    name: '',
    email: '',
    text: ''
  };
  constructor(private suggestionService: SuggestionService) {}

  ngOnInit() {}
  sendSuggestion() {
    this.suggestionService
      .sendSuggestion(this.suggestion)
      .subscribe((data: any) => {
        console.log(data);
        if (data.success) {
          alert('已收到你的來信');
          location.reload();
        }
      }, (response) => {
        console.log(response);
        alert('plz try angain');
      });
  }
}
