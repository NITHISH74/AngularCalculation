import { Component } from "@angular/core";

@Component({
    selector:'Cyclinder-volume',
    templateUrl:'./cyclinder.component.html'
})
export class Cyclindercomponent{
    radius:number;
    height:number;
    volume:number;
    constructor(){
        this.height=0;
        this.radius=0;
        this.volume=22/7*this.radius*this.radius*this.height;
    }
    oncalculate(){
        this.volume=22/7*this.radius*this.radius*this.height

    }
}