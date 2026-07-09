export interface Entity032 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record032x0 extends Entity032 {
  kind: 'record-032-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record032x1 extends Entity032 {
  kind: 'record-032-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record032x2 extends Entity032 {
  kind: 'record-032-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record032x3 extends Entity032 {
  kind: 'record-032-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record032x4 extends Entity032 {
  kind: 'record-032-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record032x5 extends Entity032 {
  kind: 'record-032-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record032x6 extends Entity032 {
  kind: 'record-032-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record032x7 extends Entity032 {
  kind: 'record-032-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record032x8 extends Entity032 {
  kind: 'record-032-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record032x9 extends Entity032 {
  kind: 'record-032-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord032 =
  | Record032x0
  | Record032x1
  | Record032x2
  | Record032x3
  | Record032x4
  | Record032x5
  | Record032x6
  | Record032x7
  | Record032x8
  | Record032x9;

export type RecordKind032 = AnyRecord032['kind'];

export type PartialDeep032<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep032<T[K]> : T[K];
};

export type ByKind032 = {
  [R in AnyRecord032 as R['kind']]: R;
};
