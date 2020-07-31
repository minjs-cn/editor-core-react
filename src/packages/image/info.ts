import { Info } from '../types';
import props, { Props } from './props';

export type MyImageInfoType = Info<Props>;

const info: MyImageInfoType = {
  name: 'MyImage',
  version: '0.0.1',
  label: '图片',
  thumbnail: '//yun.tuia.cn/tuia/jimo-web-pro/df_image_widget@1x.png',
  props,
};

export default info;
