export interface Entity061 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record061x0 extends Entity061 {
  kind: 'record-061-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record061x1 extends Entity061 {
  kind: 'record-061-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record061x2 extends Entity061 {
  kind: 'record-061-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record061x3 extends Entity061 {
  kind: 'record-061-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record061x4 extends Entity061 {
  kind: 'record-061-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record061x5 extends Entity061 {
  kind: 'record-061-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record061x6 extends Entity061 {
  kind: 'record-061-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record061x7 extends Entity061 {
  kind: 'record-061-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record061x8 extends Entity061 {
  kind: 'record-061-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record061x9 extends Entity061 {
  kind: 'record-061-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord061 =
  | Record061x0
  | Record061x1
  | Record061x2
  | Record061x3
  | Record061x4
  | Record061x5
  | Record061x6
  | Record061x7
  | Record061x8
  | Record061x9;

export type RecordKind061 = AnyRecord061['kind'];

export type PartialDeep061<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep061<T[K]> : T[K];
};

export type ByKind061 = {
  [R in AnyRecord061 as R['kind']]: R;
};
