export interface Entity066 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record066x0 extends Entity066 {
  kind: 'record-066-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record066x1 extends Entity066 {
  kind: 'record-066-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record066x2 extends Entity066 {
  kind: 'record-066-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record066x3 extends Entity066 {
  kind: 'record-066-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record066x4 extends Entity066 {
  kind: 'record-066-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record066x5 extends Entity066 {
  kind: 'record-066-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record066x6 extends Entity066 {
  kind: 'record-066-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record066x7 extends Entity066 {
  kind: 'record-066-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record066x8 extends Entity066 {
  kind: 'record-066-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record066x9 extends Entity066 {
  kind: 'record-066-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord066 =
  | Record066x0
  | Record066x1
  | Record066x2
  | Record066x3
  | Record066x4
  | Record066x5
  | Record066x6
  | Record066x7
  | Record066x8
  | Record066x9;

export type RecordKind066 = AnyRecord066['kind'];

export type PartialDeep066<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep066<T[K]> : T[K];
};

export type ByKind066 = {
  [R in AnyRecord066 as R['kind']]: R;
};
