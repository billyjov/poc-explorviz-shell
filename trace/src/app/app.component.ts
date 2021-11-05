import {
  Component,
  Directive,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { getValueOfMap } from './shared/helpers/get-value-of-map';
import {
  DynamicLandscapeData,
  LandscapeData,
} from './shared/models/landscape-data';
import { Class } from './shared/utils/landscape-schemes/structure-data';
import { getHashCodeToClassMap } from './shared/utils/landscape-structure-helpers';
import { getSortedTraceSpans } from './shared/utils/trace-helpers';

interface Country {
  id: number;
  name: string;
  flag: string;
  area: number;
  population: number;
}

export type SortColumn = keyof Country | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = {
  asc: 'desc',
  desc: '',
  '': 'asc',
};

const compare = (v1: string | number, v2: string | number) =>
  v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()',
  },
})
export class NgbdSortableHeader {
  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.sortable, direction: this.direction });
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  /**
   * Provided by Shell app.
   *
   * @type {LandscapeData}
   * @memberof AppComponent
   */
  public landscapeData: LandscapeData;
  public filteredTraces: DynamicLandscapeData;
  public isShellPresent: boolean = false;
  public sortBy: string = 'traceId';

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  ngOnInit() {

  }

  public getFirstClass(id: string) {
    return getValueOfMap([this.firstClasses, id]);
  }

  public getLastClass(id: string) {
    return getValueOfMap([this.lastClasses, id]);
  }

  private get firstClasses() {
    const sortedSpanLists = this.applicationTraces.map((trace) =>
      getSortedTraceSpans(trace)
    );

    const hashCodeToClassInLandscapeMap = getHashCodeToClassMap(
      this.landscapeData.structureLandscapeData
    );

    const traceIdToFirstClassMap = new Map<string, Class>();

    this.applicationTraces.forEach((trace, index) => {
      const spanList = sortedSpanLists[index];

      const firstClassHashCode = spanList[0].hashCode;
      const firstClass = hashCodeToClassInLandscapeMap.get(firstClassHashCode)!;

      traceIdToFirstClassMap.set(trace.traceId, firstClass);
    });

    return traceIdToFirstClassMap;
  }

  private get lastClasses() {
    const sortedSpanLists = this.applicationTraces.map((trace) =>
      getSortedTraceSpans(trace)
    );

    const hashCodeToClassInLandscapeMap = getHashCodeToClassMap(
      this.landscapeData.structureLandscapeData
    );

    const traceIdToLastClassMap = new Map<string, Class>();

    this.applicationTraces.forEach((trace, index) => {
      const spanList = sortedSpanLists[index];

      const lastClassHashCode = spanList[spanList.length - 1].hashCode;
      const lastClass = hashCodeToClassInLandscapeMap.get(lastClassHashCode)!;

      traceIdToLastClassMap.set(trace.traceId, lastClass);
    });

    return traceIdToLastClassMap;
  }

  private get applicationTraces() {
    const hashCodeToClassMap = getHashCodeToClassMap(
      this.landscapeData.application
    );

    return this.landscapeData.dynamicLandscapeData.filter(
      (trace) =>
        trace.spanList.some(
          (span) => hashCodeToClassMap.get(span.hashCode) !== undefined
        )
    );
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting traces
    if (direction === '' || column === '') {
      this.filteredTraces = this.landscapeData.dynamicLandscapeData;
    } else {
      this.filteredTraces = [...this.landscapeData.dynamicLandscapeData].sort(
        (a, b) => {
          const res = compare(a[column], b[column]);
          return direction === 'asc' ? res : -res;
        }
      );
    }
  }
}
