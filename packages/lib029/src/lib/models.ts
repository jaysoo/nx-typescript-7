export interface Entity029 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record029x0 extends Entity029 {
  kind: 'record-029-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record029x1 extends Entity029 {
  kind: 'record-029-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record029x2 extends Entity029 {
  kind: 'record-029-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record029x3 extends Entity029 {
  kind: 'record-029-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record029x4 extends Entity029 {
  kind: 'record-029-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record029x5 extends Entity029 {
  kind: 'record-029-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record029x6 extends Entity029 {
  kind: 'record-029-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record029x7 extends Entity029 {
  kind: 'record-029-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record029x8 extends Entity029 {
  kind: 'record-029-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record029x9 extends Entity029 {
  kind: 'record-029-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord029 =
  | Record029x0
  | Record029x1
  | Record029x2
  | Record029x3
  | Record029x4
  | Record029x5
  | Record029x6
  | Record029x7
  | Record029x8
  | Record029x9;

export type RecordKind029 = AnyRecord029['kind'];

export type PartialDeep029<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep029<T[K]> : T[K];
};

export type ByKind029 = {
  [R in AnyRecord029 as R['kind']]: R;
};
