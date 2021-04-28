import { IUserInfoDto } from "./first-page/first-page.component";
import { SecondPageComponent } from "./second-page/second-page.component";
import { ThirdPageComponent } from "./third-page/third-page.component";

export const tabConfig = [
    { title: 'second page', component: SecondPageComponent, data: [{
      idx: 1,
      FirstName: 'Vasya',
      LastName: 'Pupkin',
      Ages: '21',
      Email: 'v.pupkin@gmail.com',
      Password: '123456789'
  
    }] },
    { title: 'third page', component: ThirdPageComponent,data: [{
      idx: 1,
      FirstName: 'Vasya',
      LastName: 'Pupkin',
      Ages: '21',
      Email: 'v.pupkin@gmail.com',
      Password: '123456789'
    }] }
  ];
  
  export interface ITabConfigDto {
    title: string;
    component: any;
    data: IUserInfoDto[]
  }