import { Icon } from './icon';
import {DropdownOptions} from './dropdown_options';


export class Dropdown{
	icon:Icon;
	text:string;
	dropup:boolean;
	materialize:boolean;
	styles:{};
	change_title:boolean;
	cover_area:boolean;
	options:DropdownOptions;
	options_direction:string;

}