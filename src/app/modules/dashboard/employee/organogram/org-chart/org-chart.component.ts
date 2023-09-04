import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
// @ts-ignore
import { OrgChart } from 'd3-org-chart';
import { OrganogramChartItem } from '@core/types/organogram';
import { ButtonTypeEnum } from '@core/enums/button-type.enum';

@Component({
  selector: 'app-org-chart',
  templateUrl: './org-chart.component.html',
  styleUrls: ['./org-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class OrgChartComponent implements AfterViewInit {
  @ViewChild('chartContainer') chartContainer!: ElementRef;
  @Input() data!: OrganogramChartItem[] | null;
  chart: OrgChart;

  ngAfterViewInit() {
    if (!this.chart) {
      this.chart = new OrgChart();
    }
    this.updateChart();
  }

  updateChart() {
    if (!this.data || !this.chart) {
      return;
    }

    this.chart
      .container(this.chartContainer.nativeElement)
      .data(this.data)
      .nodeWidth(() => 340)
      .nodeHeight(() => 90)
      .childrenMargin(() => 50)
      .compactMarginBetween(() => 25)
      .compactMarginPair(() => 50)
      .neightbourMargin(() => 25)
      .siblingsMargin(() => 25)
      .buttonContent(({ node }: any) => this.buildExpandButton(node))
      .nodeContent((d: { data: OrganogramChartItem }) => this.buildOrgItem(d.data))
      .render();
  }

  exportToPng(): void {
    this.chart.exportImg();
  }

  private buildOrgItem(data: OrganogramChartItem): string {
    return `
      <div style="display: flex; align-items: center; justify-content: space-between; background-color: white; box-shadow: 0 10px 20px #00000008; border-radius: 20px; height: 100%; width: 100%">
        <div style="width: 60px; height: 60px; border-radius: 50%; border: 2px solid #E4EDF4; margin-left: 15px; overflow: hidden">
<!--          <img src="${data.imageUrl}" style="object-fit: contain" width="60">-->
        </div>

        <div style="flex: 1 1 auto; margin-left: 15px">
          <div style="font-size: 20px; color: #221F1F">${data.name}</div>
          <div style="margin-top: 5px; font-size: 15px; color: #808080">${data.positionName}</div>
        </div>

        <div style="display: flex; align-items: center; justify-content: center; width: 50px; height: 50px; border-radius: 50%; border: 1px solid #DDDDDD; background-color: #f5f6f8; margin-right: 20px; font-size: 17px; color: #808080">${data.initials}</div>
      </div>
  `;
  }

  private buildExpandButton(node: any): string {
    return `
      <div class="expand-btn" style="color: #716E7B; border-radius: 5px; padding: 4px; font-size: 10px; margin:auto auto; background-color: white; border: 1px solid #E4E2E9; display: flex; align-items: center">
        ${
          node.children
            ? `<div class="arrow-up"></div>`
            : `<div class="arrow-down"></div>`
        }
        <div>${node.data._directSubordinates}</div>
      </div>
    `
  }

  protected readonly ButtonTypeEnum = ButtonTypeEnum;
}
