import { Info } from '../types';
import props, { Props } from './props';

export type MyTitleInfoType = Info<Props>;

const info: MyTitleInfoType = {
  name: 'MyTitle',
  version: '0.0.1',
  label: '标题',
  thumbnail: '//yun.tuia.cn/tuia/jimo-web-pro/df_image_widget@1x.png',
  props,
};

export default info;
