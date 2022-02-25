import { HttpClient } from '@angular/common/http';
import {
  Component,
  Directive,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { formatNumber } from './shared/helpers/format-number';
import { getValueOfMap } from './shared/helpers/get-value-of-map';
import {
  DynamicLandscapeData,
  LandscapeData,
} from './shared/models/landscape-data';
import { Trace } from './shared/utils/landscape-schemes/dynamic-data';
import { Class } from './shared/utils/landscape-schemes/structure-data';
import { getHashCodeToClassMap } from './shared/utils/landscape-structure-helpers';
import {
  calculateDuration,
  getSortedTraceSpans,
  sortTracesByDuration,
  sortTracesById,
} from './shared/utils/trace-helpers';

interface Column {
  traceId: string;
  firstClazz: string;
  lastClazz: string;
  duration: TimeUnit;
}

export type SortColumn = keyof Column | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = {
  asc: 'desc',
  desc: '',
  '': 'asc',
};

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

export type TimeUnit = 'ns' | 'ms' | 's';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  /**
   * Provided by Shell app.
   *
   * @type {LandscapeData}
   * @memberof AppComponent
   */
  public landscapeData: LandscapeData;
  public filteredTraces: DynamicLandscapeData;
  public isShellPresent: boolean = false;
  public selectedTrace: Trace | null = null;
  public traceTimeUnit: TimeUnit = 'ms';
  public sortBy: string = 'traceId';
  public filter = new FormControl('');
  isSortedAsc: boolean = true;

  filterTerm: string = '';

  private subscriptions = new Subscription();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.initLandscapeData();

    this.subscriptions.add(
      this.filter.valueChanges
        .pipe(
          startWith(''),
          map((text) => {
            this.filterTerm = text;
            this.filteredTraces = this.filterAndSortTraces();
            return text;
          })
        )
        .subscribe()
    );
  }

  private initLandscapeData(): void {
    if (!this.isShellPresent) {
      this.subscriptions.add(
        this.http
          .get<any>('../assets/mocks/landscape-data.json')
          .subscribe((data: LandscapeData) => {
            this.landscapeData = data;
            this.filteredTraces = this.landscapeData?.dynamicLandscapeData;
          })
      );
    } else {
      this.filteredTraces = this.landscapeData?.dynamicLandscapeData;
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  get traces() {
    return this.filterAndSortTraces();
  }

  get traceDurations() {
    return this.traces?.map((trace) => calculateDuration(trace));
  }

  public selectTrace(trace: Trace): void {
    // Reset highlighting when highlighted trace is clicked again
    if (trace === this.selectedTrace) {
      this.selectedTrace = null;
      this.removeHighlighting();
      return;
    }

    this.selectedTrace = trace;
  }

  public getFirstClass(id: string) {
    // console.log('id: ', id);
    // console.log('first: ', this.firstClasses);
    return getValueOfMap([this.firstClasses, id]);
  }

  public getLastClass(id: string) {
    return getValueOfMap([this.lastClasses, id]);
  }

  public getDuration(index: number) {
    return formatNumber([this.traceDurations[index], this.traceTimeUnit]);
  }

  private get firstClasses() {
    const sortedSpanLists = this.applicationTraces.map((trace) =>
      getSortedTraceSpans(trace)
    );

    const hashCodeToClassInLandscapeMap = getHashCodeToClassMap(
      this.landscapeData?.structureLandscapeData
    );

    const traceIdToFirstClassMap = new Map<string, Class>();

    this.applicationTraces?.forEach((trace, index) => {
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

    this.applicationTraces?.forEach((trace, index) => {
      const spanList = sortedSpanLists[index];

      const lastClassHashCode = spanList[spanList.length - 1].hashCode;
      const lastClass = hashCodeToClassInLandscapeMap.get(lastClassHashCode)!;

      traceIdToLastClassMap.set(trace.traceId, lastClass);
    });

    return traceIdToLastClassMap;
  }

  private get applicationTraces() {
    const hashCodeToClassMap = getHashCodeToClassMap(
      this.landscapeData?.application
    );

    return this.landscapeData?.dynamicLandscapeData.filter((trace) =>
      trace.spanList.some(
        (span) => hashCodeToClassMap.get(span.hashCode) !== undefined
      )
    );
  }

  toggleTraceTimeUnit() {
    const timeUnit = this.traceTimeUnit;

    if (timeUnit === 'ns') {
      this.traceTimeUnit = 'ms';
    } else if (timeUnit === 'ms') {
      this.traceTimeUnit = 's';
    } else if (timeUnit === 's') {
      this.traceTimeUnit = 'ns';
    }
  }

  filterAndSortTraces() {
    if (this.selectedTrace) {
      return [this.selectedTrace];
    }

    const filteredTraces: Trace[] = [];
    const filter = this.filterTerm;
    this.applicationTraces?.forEach((trace) => {
      if (filter === '' || trace.traceId.toLowerCase().includes(filter)) {
        filteredTraces.push(trace);
        return;
      }

      const firstClass = this.firstClasses.get(trace.traceId);
      const lastClass = this.lastClasses.get(trace.traceId);

      if (
        (firstClass && firstClass.name.toLowerCase().includes(filter)) ||
        (lastClass && lastClass.name.toLowerCase().includes(filter))
      ) {
        filteredTraces.push(trace);
      }
    });

    if (this.sortBy === 'traceId') {
      sortTracesById(filteredTraces, this.isSortedAsc);
    }
    if (this.sortBy === 'firstClassName') {
      this.sortTracesByFirstClassName(filteredTraces, this.isSortedAsc);
    }
    if (this.sortBy === 'lastClassName') {
      this.sortTracesByLastClassName(filteredTraces, this.isSortedAsc);
    }
    if (this.sortBy === 'traceDuration') {
      sortTracesByDuration(filteredTraces, this.isSortedAsc);
    }

    return filteredTraces;
  }

  sortTracesByFirstClassName(traces: Trace[], ascending = true) {
    traces.sort((a, b) => {
      const firstClassA = this.firstClasses.get(a.traceId)!;
      const firstClassB = this.firstClasses.get(b.traceId)!;

      if (firstClassA.name > firstClassB.name) {
        return 1;
      }
      if (firstClassB.name > firstClassA.name) {
        return -1;
      }
      return 0;
    });

    if (!ascending) {
      traces.reverse();
    }
  }

  sortTracesByLastClassName(traces: Trace[], ascending = true) {
    traces.sort((a, b) => {
      const lastClassA = this.lastClasses.get(a.traceId)!;
      const lastClassB = this.lastClasses.get(b.traceId)!;

      if (lastClassA.name > lastClassB.name) {
        return 1;
      }
      if (lastClassB.name > lastClassA.name) {
        return -1;
      }
      return 0;
    });

    if (!ascending) {
      traces.reverse();
    }
  }

  private removeHighlighting(): void {
    window.dispatchEvent(new CustomEvent('trace:remove-highlighting'));
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers?.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting traces
    if (direction === '' || column === '') {
      this.filteredTraces = this.filterAndSortTraces();
    } else {
      direction === 'asc'
        ? (this.isSortedAsc = true)
        : (this.isSortedAsc = false);
      this.filteredTraces = this.filterAndSortTraces();
    }
  }
}
