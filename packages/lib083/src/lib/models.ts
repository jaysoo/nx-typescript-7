export interface Entity083 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record083x0 extends Entity083 {
  kind: 'record-083-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record083x1 extends Entity083 {
  kind: 'record-083-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record083x2 extends Entity083 {
  kind: 'record-083-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record083x3 extends Entity083 {
  kind: 'record-083-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record083x4 extends Entity083 {
  kind: 'record-083-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record083x5 extends Entity083 {
  kind: 'record-083-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record083x6 extends Entity083 {
  kind: 'record-083-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record083x7 extends Entity083 {
  kind: 'record-083-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record083x8 extends Entity083 {
  kind: 'record-083-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record083x9 extends Entity083 {
  kind: 'record-083-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord083 =
  | Record083x0
  | Record083x1
  | Record083x2
  | Record083x3
  | Record083x4
  | Record083x5
  | Record083x6
  | Record083x7
  | Record083x8
  | Record083x9;

export type RecordKind083 = AnyRecord083['kind'];

export type PartialDeep083<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep083<T[K]> : T[K];
};

export type ByKind083 = {
  [R in AnyRecord083 as R['kind']]: R;
};
