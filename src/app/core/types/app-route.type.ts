import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Route,
  RouterOutlet,
  RouterOutletContract,
} from '@angular/router';
import { TranslateKey } from '../../../assets/i18n/enums/translate-key.enum';
import { Observable } from 'rxjs';

export type ObjectLiteral = {
  [key: string | symbol]: any;
};

type AppData = {
  breadcrumb?: keyof typeof TranslateKey;
  title?: keyof typeof TranslateKey;
};

export type AppRoutes = AppRoute[];

export type AppRoute = Omit<Route, 'data' | 'children'> & {
  data?: AppData;
  children?: AppRoutes;
};

type ExtendAppData<ExtendedObject extends ObjectLiteral | AppData> =
  ExtendedObject extends AppData
    ? AppData
    : AppData & Partial<ExtendedObject>;

export declare class AppActivatedRouteSnapshot<
  ExtendedObject extends ObjectLiteral = AppData,
> extends ActivatedRouteSnapshot {
  data: ExtendAppData<ExtendedObject>;
}

export declare class AppActivatedRoute<
  ExtendedObject extends ObjectLiteral = AppData,
> extends ActivatedRoute {
  data: Observable<ExtendAppData<ExtendedObject>>;
  snapshot: AppActivatedRouteSnapshot<ExtendedObject>;
}

export declare class AppRouterOutlet<
  ExtendedObject extends ObjectLiteral = AppData,
> extends RouterOutlet {
  get activatedRouteData(): ExtendAppData<ExtendedObject>;
}

export type AppRouterOutletContract<
  ExtendedObject extends ObjectLiteral = AppData,
> =
  | Omit<RouterOutletContract, 'activatedRouteData'>
  | {
      activatedRouteData: ExtendAppData<ExtendedObject>;
    };
