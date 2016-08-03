import { Icon } from './icon'

export class DropdownOptions{
	icon:Icon;
	url:string;
	left_text:string;
	right_text:string;
	on_select:boolean;
	has_sub_options:boolean;
	sub_options_direction:string;
	separator:boolean;
	sub_options:DropdownOptions;
}