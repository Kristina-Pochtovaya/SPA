export enum MatChip3PageArrayEnum {
  Id = 'Id',
  Male = 'Male',
  Children = 'Children',
  Job = 'Job',
}

export interface ImatChip3PageArrayDto {
  color: string;
  selected: boolean;
  class: string;
  id: string;
}

export const matChip3PageArray: ImatChip3PageArrayDto[] = [
  {
    color: 'primary',
    selected: true,
    class: 'userAbout',
    id: MatChip3PageArrayEnum.Id,
  },
  {
    color: 'warn',
    selected: true,
    class: 'userAbout',
    id: MatChip3PageArrayEnum.Male,
  },
  {
    color: 'accent',
    selected: true,
    class: 'userAbout',
    id: MatChip3PageArrayEnum.Children,
  },
  {
    color: 'accent',
    selected: true,
    class: 'userAbout',
    id: MatChip3PageArrayEnum.Job,
  },
];
