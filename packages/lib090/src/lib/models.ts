export interface Entity090 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record090x0 extends Entity090 {
  kind: 'record-090-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record090x1 extends Entity090 {
  kind: 'record-090-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record090x2 extends Entity090 {
  kind: 'record-090-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record090x3 extends Entity090 {
  kind: 'record-090-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record090x4 extends Entity090 {
  kind: 'record-090-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record090x5 extends Entity090 {
  kind: 'record-090-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record090x6 extends Entity090 {
  kind: 'record-090-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record090x7 extends Entity090 {
  kind: 'record-090-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record090x8 extends Entity090 {
  kind: 'record-090-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record090x9 extends Entity090 {
  kind: 'record-090-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord090 =
  | Record090x0
  | Record090x1
  | Record090x2
  | Record090x3
  | Record090x4
  | Record090x5
  | Record090x6
  | Record090x7
  | Record090x8
  | Record090x9;

export type RecordKind090 = AnyRecord090['kind'];

export type PartialDeep090<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep090<T[K]> : T[K];
};

export type ByKind090 = {
  [R in AnyRecord090 as R['kind']]: R;
};
