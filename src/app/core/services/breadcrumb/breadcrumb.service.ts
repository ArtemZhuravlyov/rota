import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from "@angular/router";
import { BehaviorSubject, filter } from "rxjs";
import { Breadcrumb } from "../../types/breadcrumb";

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private readonly breadcrumbs$ = new BehaviorSubject<Breadcrumb[]>([]);

  readonly breadcrumbs = this.breadcrumbs$.asObservable();

  constructor(private router: Router) {
    this.initBreadcrumbs();
  }

  private initBreadcrumbs(): void {
    let breadcrumbs: Breadcrumb[] = [];
    this.addBreadcrumb(this.router.routerState.snapshot.root, [], breadcrumbs);

    this.breadcrumbs$.next(breadcrumbs);

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(event => {
      breadcrumbs = [];
      const root = this.router.routerState.snapshot.root;
      this.addBreadcrumb(root, [], breadcrumbs);

      this.breadcrumbs$.next(breadcrumbs);
    });
  }

  private addBreadcrumb(route: ActivatedRouteSnapshot , parentUrl: string[], breadcrumbs: Breadcrumb[]) {
    if (route) {

      const routeUrl = parentUrl.concat(route.url.map(url => url.path));

      if ((route.data as any).breadcrumb) {
        const breadcrumb = {
          label: this.getLabel(route.data),
          url: '/' + routeUrl.join('/')
        };

        if(!breadcrumbs?.find( obj => obj.label === breadcrumb.label)) {
          breadcrumbs.push(breadcrumb);
        }
      }


      this.addBreadcrumb(route.firstChild!, routeUrl, breadcrumbs);
    }
  }

  private getLabel(data: any) {
    return typeof data.breadcrumb === 'function' ? data.breadcrumb(data) : data.breadcrumb;
  }
}
