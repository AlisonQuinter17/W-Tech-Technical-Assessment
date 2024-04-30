import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContentComponent } from "../content/content.component";
import { SelectService } from '../../services/select.service';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
    imports: [CommonModule, ContentComponent]
})
export class SidebarComponent {
  dropdownVisible: string = '';
  opt: string = '';

  constructor(private selectService: SelectService) {}

  toggleDropdown(menu: string): void {
    this.dropdownVisible = this.dropdownVisible === menu ? '' : menu;
  }

  onSelectOption(option: any) {
    this.selectService.changeOption(option);
  }
}
