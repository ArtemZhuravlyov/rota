import { distinctUntilChanged, MonoTypeOperatorFunction } from 'rxjs';

export const distinctUntilParamsChanged = <T>(
  propKeys: Array<T extends object ? keyof T : keyof T>
): MonoTypeOperatorFunction<T> => {
  return distinctUntilChanged<T>((prev, curr) => {
    return propKeys.every((key) => prev[key] === curr[key]);
  });
};
