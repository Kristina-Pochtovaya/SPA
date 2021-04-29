import {
  Component, Input, ChangeDetectionStrategy,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-user',
  templateUrl: './input-user.component.html',
  styleUrls: ['./input-user.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputUserComponent {
  @Input() control: FormControl;

  @Input() id: string;

  @Input() class: string;

  @Input() classLabel: string;

  @Input() textLabel: string;

  @Input() type: string;

  showErrorMessage(): string {
    return Object.values(this.control.errors).join();
  }
}

export default InputUserComponent;
