export interface Entity034 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record034x0 extends Entity034 {
  kind: 'record-034-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record034x1 extends Entity034 {
  kind: 'record-034-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record034x2 extends Entity034 {
  kind: 'record-034-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record034x3 extends Entity034 {
  kind: 'record-034-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record034x4 extends Entity034 {
  kind: 'record-034-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record034x5 extends Entity034 {
  kind: 'record-034-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record034x6 extends Entity034 {
  kind: 'record-034-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record034x7 extends Entity034 {
  kind: 'record-034-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record034x8 extends Entity034 {
  kind: 'record-034-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record034x9 extends Entity034 {
  kind: 'record-034-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord034 =
  | Record034x0
  | Record034x1
  | Record034x2
  | Record034x3
  | Record034x4
  | Record034x5
  | Record034x6
  | Record034x7
  | Record034x8
  | Record034x9;

export type RecordKind034 = AnyRecord034['kind'];

export type PartialDeep034<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep034<T[K]> : T[K];
};

export type ByKind034 = {
  [R in AnyRecord034 as R['kind']]: R;
};
