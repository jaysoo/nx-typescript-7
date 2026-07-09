export interface Entity062 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record062x0 extends Entity062 {
  kind: 'record-062-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record062x1 extends Entity062 {
  kind: 'record-062-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record062x2 extends Entity062 {
  kind: 'record-062-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record062x3 extends Entity062 {
  kind: 'record-062-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record062x4 extends Entity062 {
  kind: 'record-062-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record062x5 extends Entity062 {
  kind: 'record-062-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record062x6 extends Entity062 {
  kind: 'record-062-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record062x7 extends Entity062 {
  kind: 'record-062-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record062x8 extends Entity062 {
  kind: 'record-062-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record062x9 extends Entity062 {
  kind: 'record-062-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord062 =
  | Record062x0
  | Record062x1
  | Record062x2
  | Record062x3
  | Record062x4
  | Record062x5
  | Record062x6
  | Record062x7
  | Record062x8
  | Record062x9;

export type RecordKind062 = AnyRecord062['kind'];

export type PartialDeep062<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep062<T[K]> : T[K];
};

export type ByKind062 = {
  [R in AnyRecord062 as R['kind']]: R;
};
