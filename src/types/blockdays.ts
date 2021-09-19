import { IService } from './service';

export interface IBlockDays {
  service: IService['_id'];
  date: Date;
  note?: string;
}
