export interface Entity072 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record072x0 extends Entity072 {
  kind: 'record-072-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record072x1 extends Entity072 {
  kind: 'record-072-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record072x2 extends Entity072 {
  kind: 'record-072-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record072x3 extends Entity072 {
  kind: 'record-072-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record072x4 extends Entity072 {
  kind: 'record-072-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record072x5 extends Entity072 {
  kind: 'record-072-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record072x6 extends Entity072 {
  kind: 'record-072-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record072x7 extends Entity072 {
  kind: 'record-072-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record072x8 extends Entity072 {
  kind: 'record-072-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record072x9 extends Entity072 {
  kind: 'record-072-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord072 =
  | Record072x0
  | Record072x1
  | Record072x2
  | Record072x3
  | Record072x4
  | Record072x5
  | Record072x6
  | Record072x7
  | Record072x8
  | Record072x9;

export type RecordKind072 = AnyRecord072['kind'];

export type PartialDeep072<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep072<T[K]> : T[K];
};

export type ByKind072 = {
  [R in AnyRecord072 as R['kind']]: R;
};
