import { Component, Input, OnInit } from '@angular/core';
import {Dropdown} from '../configs/schemas/dropdown';
import { DomSanitizationService, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
    selector: 'drop-down',
    templateUrl: `app/components/drop-down/drop-down.component.html`,
    styleUrls:[`app/components/drop-down/drop-down.component.css`]
})

export class DropDownComponent implements OnInit { 
	@Input('options') drop:Dropdown;

	public clicked=false;
	public subClicked=false;
	
	// public to_sanatize:Dropdown;

constructor(
	private sanitizer: DomSanitizationService
	) {

	// this.drop['style'] = sanitizer.bypassSecurityTrustStyle(this.to_sanatize);
	// console.log(this.to_sanatize);
}

ngOnInit(){
		this.drop['style'] = this.sanitizer.bypassSecurityTrustStyle(this.drop['style']);



}

event_prevent(e:any,sub_opt:boolean){
			if(sub_opt){
						e.stopPropagation();
						e.preventDefault();
			}
}

open_suboptions(condition:boolean){
	if(condition){
		this.clicked=!this.clicked;
	}
		if(this.drop['change_title']){
			this.drop['text']=this.drop['options']['left_text'];
		}
}

open_subSuboptions(condition:boolean){
	if(condition){
		this.subClicked=!this.subClicked;
	}
}

}
