import MyTitle, { MyTitleInfoType } from './title/info';
import MyImage, { MyImageInfoType } from './image/info';

export type BasicComponentType = MyTitleInfoType | MyImageInfoType;

export const basicComponents: BasicComponentType[] = [MyTitle, MyImage];
