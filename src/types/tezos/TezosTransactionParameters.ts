import { MichelineMichelsonV1Expression } from '../..'

export interface TezosTransactionParameters {
  entrypoint: 'default' | 'root' | 'do' | 'set_delegate' | 'remove_delegate' | string
  value: MichelineMichelsonV1Expression
}
