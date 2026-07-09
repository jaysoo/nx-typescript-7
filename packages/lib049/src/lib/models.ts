export interface Entity049 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record049x0 extends Entity049 {
  kind: 'record-049-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record049x1 extends Entity049 {
  kind: 'record-049-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record049x2 extends Entity049 {
  kind: 'record-049-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record049x3 extends Entity049 {
  kind: 'record-049-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record049x4 extends Entity049 {
  kind: 'record-049-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record049x5 extends Entity049 {
  kind: 'record-049-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record049x6 extends Entity049 {
  kind: 'record-049-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record049x7 extends Entity049 {
  kind: 'record-049-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record049x8 extends Entity049 {
  kind: 'record-049-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record049x9 extends Entity049 {
  kind: 'record-049-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord049 =
  | Record049x0
  | Record049x1
  | Record049x2
  | Record049x3
  | Record049x4
  | Record049x5
  | Record049x6
  | Record049x7
  | Record049x8
  | Record049x9;

export type RecordKind049 = AnyRecord049['kind'];

export type PartialDeep049<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep049<T[K]> : T[K];
};

export type ByKind049 = {
  [R in AnyRecord049 as R['kind']]: R;
};
