export interface Entity003 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record003x0 extends Entity003 {
  kind: 'record-003-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record003x1 extends Entity003 {
  kind: 'record-003-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record003x2 extends Entity003 {
  kind: 'record-003-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record003x3 extends Entity003 {
  kind: 'record-003-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record003x4 extends Entity003 {
  kind: 'record-003-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record003x5 extends Entity003 {
  kind: 'record-003-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record003x6 extends Entity003 {
  kind: 'record-003-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record003x7 extends Entity003 {
  kind: 'record-003-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record003x8 extends Entity003 {
  kind: 'record-003-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record003x9 extends Entity003 {
  kind: 'record-003-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord003 =
  | Record003x0
  | Record003x1
  | Record003x2
  | Record003x3
  | Record003x4
  | Record003x5
  | Record003x6
  | Record003x7
  | Record003x8
  | Record003x9;

export type RecordKind003 = AnyRecord003['kind'];

export type PartialDeep003<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep003<T[K]> : T[K];
};

export type ByKind003 = {
  [R in AnyRecord003 as R['kind']]: R;
};
