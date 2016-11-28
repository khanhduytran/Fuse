// Type definitions for Fuse.js 2.5.0

declare module 'fuse.js' {
  export class Fuse {
    constructor(list: any[], options?: FuseOptions)
    search<T>(pattern: string): T[];
    search(pattern: string): any[];
  }

  interface FuseOptions {
    id?: string;
    caseSensitive?: boolean;
    include?: string[];
    shouldSort?: boolean;
    searchFn?: any;
    sortFn?: (a: { score: number }, b: { score: number }) => number;
    getFn?: (obj: any, path: string) => any;
    keys?: string[] | { name: string; weight: number }[];
    verbose?: boolean;
    tokenize?: boolean;
    tokenSeparator?: RegExp;
    matchAllTokens?: boolean;
    location?: number;
    distance?: number;
    threshold?: number;
    maxPatternLength?: number;
  }
}

declare const Fuse;
