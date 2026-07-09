export interface Entity099 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record099x0 extends Entity099 {
  kind: 'record-099-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record099x1 extends Entity099 {
  kind: 'record-099-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record099x2 extends Entity099 {
  kind: 'record-099-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record099x3 extends Entity099 {
  kind: 'record-099-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record099x4 extends Entity099 {
  kind: 'record-099-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record099x5 extends Entity099 {
  kind: 'record-099-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record099x6 extends Entity099 {
  kind: 'record-099-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record099x7 extends Entity099 {
  kind: 'record-099-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record099x8 extends Entity099 {
  kind: 'record-099-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record099x9 extends Entity099 {
  kind: 'record-099-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord099 =
  | Record099x0
  | Record099x1
  | Record099x2
  | Record099x3
  | Record099x4
  | Record099x5
  | Record099x6
  | Record099x7
  | Record099x8
  | Record099x9;

export type RecordKind099 = AnyRecord099['kind'];

export type PartialDeep099<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep099<T[K]> : T[K];
};

export type ByKind099 = {
  [R in AnyRecord099 as R['kind']]: R;
};
