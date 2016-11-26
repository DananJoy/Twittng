import { Component } from '@angular/core';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'home',
  providers: [ UserService ],
  templateUrl: 'app/components/home/home.component.html',
  styleUrls: ['app/components/home/style.css'],
})

export class HomeComponent  {

  constructor(private userService : UserService) { }

  tweetText = '';

  isUserInCollection(collection: string[], userId: string) : boolean {
    return collection.indexOf(userId) != -1;
  }

  onFav(tweet) {
    if (!this.isUserInCollection(tweet.fav,this.userService.getCurrentUser())) {
      tweet.fav.push(this.userService.getCurrentUser());
      console.log(tweet.fav);
    }
  }

  onRt(tweet) {
    if (!this.isUserInCollection(tweet.rt, this.userService.getCurrentUser())) {
      tweet.rt.push(this.userService.getCurrentUser());
      console.log(tweet.rt);
    }
  }

  onNewTweet() {
    console.log(this.tweetText);
    this.tweets.unshift(
      {
        avatar : "https://dummyimage.com/500x500/212121/DADADA.png&text=x",
        uname : "Wawan",
        text: this.tweetText,
        date : new Date(),
        fav: [],
        rt: []
      }
    );
    this.tweetText = '';
  }



  tweets = [
    {
      avatar : "https://dummyimage.com/500x500/212121/DADADA.png&text=x",
      uname : "Wawan",
      text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor. ",
      date : new Date(),
      fav: [],
      rt: []
    },
    {
      avatar : "https://dummyimage.com/500x500/DADADA/212121.png&text=o",
      uname : "Rex",
      text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor. ",
      date : new Date(),
      fav: [],
      rt: []
    },
    {
      avatar : "https://dummyimage.com/500x500/212121/DADADA.png&text=x",
      uname : "Hayate",
      text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor. ",
      date : new Date(),
      fav: [],
      rt: []
    },
    {
      avatar : "https://dummyimage.com/500x500/DADADA/212121.png&text=o",
      uname : "Jamil",
      text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor. ",
      date : new Date(),
      fav: [],
      rt: []
    },
    {
      avatar : "https://dummyimage.com/500x500/212121/DADADA.png&text=x",
      uname : "Luna",
      text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor. ",
      date : new Date(),
      fav: [],
      rt: []
    },
    {
      avatar : "https://dummyimage.com/500x500/DADADA/212121.png&text=o",
      uname : "Sapix",
      text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor. ",
      date : new Date(),
      fav: [],
      rt: []
    },
  ];

}
