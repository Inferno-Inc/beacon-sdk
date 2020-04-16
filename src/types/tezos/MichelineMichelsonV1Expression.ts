import { MichelsonPrimitives } from '../..'

export type MichelineMichelsonV1Expression =
  | { int: string }
  | { string: string } // eslint-disable-line id-blacklist
  | { bytes: string }
  | MichelineMichelsonV1Expression[]
  | {
      prim: MichelsonPrimitives
      args?: MichelineMichelsonV1Expression[]
      annots?: string[]
    }
