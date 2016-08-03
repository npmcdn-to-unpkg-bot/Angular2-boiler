import { Component } from '@angular/core';
import {MdSlideToggle} from '@angular2-material/slide-toggle';

@Component({
    selector: 'nav-bar',
    templateUrl: `app/components/nav-bar/NavBar.component.html`,
    directives:[MdSlideToggle]
})

export class NavBarComponent { }
