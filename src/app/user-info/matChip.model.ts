export enum MatChipArrayEnum {
  Id = 'Id',
  FirstName = 'FirstName',
  LastName = 'LastName',
  Ages = 'Ages',
  Email = 'Email',
  Password = 'Password',
}

export interface ImatChipArrayDto {
  color: string;
  selected: boolean;
  class: string;
  id: string;
}

export const matChipArray: ImatChipArrayDto[] = [
  {
    color: 'primary',
    selected: true,
    class: 'userAbout',
    id: MatChipArrayEnum.Id,
  },
  {
    color: 'warn',
    selected: true,
    class: 'userAbout',
    id: MatChipArrayEnum.FirstName,
  },
  {
    color: 'warn',
    selected: true,
    class: 'userAbout',
    id: MatChipArrayEnum.LastName,
  },
  {
    color: 'accent',
    selected: true,
    class: 'userAbout',
    id: MatChipArrayEnum.Ages,
  },
  {
    color: '',
    selected: false,
    class: 'userAbout purple',
    id: MatChipArrayEnum.Email,
  },
  {
    color: '',
    selected: false,
    class: 'userAbout darkGreen',
    id: MatChipArrayEnum.Password,
  },
];
