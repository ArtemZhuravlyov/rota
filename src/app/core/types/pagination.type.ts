import { User } from '@core/types/user.interface';

export type PaginationParams = {
  pageSize: number;
  pageIndex: number;
};

export type CommonPaginationParams = {
  userId: User['id'];
  companyId: User['companyId'];
} & PaginationParams;
