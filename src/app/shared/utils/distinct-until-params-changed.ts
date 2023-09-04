import { distinctUntilChanged, MonoTypeOperatorFunction } from 'rxjs';
import { isNil } from 'lodash';

export const distinctUntilParamsChanged = <T>(
  propKeys: Array<T extends object ? keyof T : keyof T>,
  whenDuplicate?: () => void
): MonoTypeOperatorFunction<T> => {
  return distinctUntilChanged<T>((prev, curr) => {
    const isEqual = propKeys.every(key => prev[key] === curr[key]);

    if (isEqual && !isNil(whenDuplicate)) whenDuplicate();

    return isEqual;
  });
};
