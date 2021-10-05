export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}

export type SortColumn =  '';
export type SortDirection = 'asc' | 'desc' | '';
