import { CompletionItemKind } from 'vscode-languageserver'
const keywords = ["let", "true", "false", "if", "then", "else"]

export const txFields = [
  'type',
  'id',
  'fee',
  'feeAssetId',
  'timestamp',
  'amount',
  'bodyBytes',
  'senderPk',
  'aliasText',
  'assetName',
  'assetDescription',
  'attachment',
  'decimals',
  'chainId',
  'version',
  'reissuable',
  'proof',
  'transferAssetId',
  'assetId',
  'recipient',
  'minSponsoredAssetFee',
]

export const txTypes = [
  'TransferTransaction',
  'IssueTransaction',
  'ReissueTransaction',
  'BurnTransaction',
  'LeaseTransaction',
  'LeaseCancelTransaction',
  'MassTransferTransaction',
  'CreateAliasTransaction',
  'SetScriptTransaction',
  'SponsorFeeTransaction',
  'ExchangeTransaction',
  'DataTransaction',
]

export const generalSuggestions = (kind: any) => [
  {
    label: 'ifelse',
    kind,
    insertText: {
      value: 'if (${1:condition}) then $2 else $3',
    },
  },
  {
    label: 'match',
    kind,
    insertText: {
      value: `match (\${1:obj}) {
    case $1:\${2:type} => $0
    case _ =>
  }`,
    },
  },
  {
    label: 'base58',
    kind,
    insertText: {
      value: `base58'$0'`,
    },
  },
]

export const cryptoFunctions = (kind: any) => [
  {
    label: 'keccak256',
    kind,
    insertText: {
      value: 'keccak256(${0:BYTE_VECTOR})',
    },
    detail: "Computes the keccak 256 bit hash"
  },
  {
    label: 'blake2b256',
    kind,
    insertText: {
      value: 'blake2b256(${0:BYTE_VECTOR})',
    },
    detail: "Computes the blake2b 256 bit hash"
  },
  {
    label: 'sha256',
    kind,
    insertText: {
      value: 'sha256(${0:BYTE_VECTOR})',
    },
    detail: "Computes the sha 256 bit hash"
  },
  {
    label: 'sigVerify',
    kind,
    insertText: {
      value: 'sigVerify(${1:bytes: BYTE_VECTOR}, ${2:signature: BYTE_VECTOR}, ${3:publicKey: BYTE_VECTOR})',
    },
    detail: "Validated signature for bytes and public key",
  },
]

export const contextFields = (kind: any) => [
  {
    label: 'height',
    kind,
    insertText: {
      value: 'height',
    },
    detail: "Retrieves current blockchain height",
  },
  {
    label: 'tx',
    kind,
    insertText: {
      value: 'tx',
    },
    detail: "Retrieves current transaction being processed",
  },
]

export const contextFunctions = (kind: any) => [
  {
    label: 'getTransactionById',
    kind,
    insertText: {
      value: 'getTransactionById(${1:transactionId: BYTE_VECTOR})',
    },
    detail: "Retrieves transaction by it's id",
  },
  {
    label: 'transactionHeightById',
    kind,
    insertText: {
      value: 'transactionHeightById(${1:transactionId: BYTE_VECTOR})',
    },
    detail: "Retrieves transaction's height by it's id",
  },
  {
    label: 'addressFromRecipient',
    kind,
    insertText: {
      value: 'addressFromRecipient(${1:recipient: Obj(bytes)})',
    },
    detail: "Retrieves adress from recipient obj",
  },
  {
    label: 'addressFromString',
    kind,
    insertText: {
      value: 'addressFromString(${1:base58})',
    },
    detail: "Retrieves adress from base58 string",
  },
  {
    label: 'addressFromPublicKey',
    kind,
    insertText: {
      value: 'addressFromPublicKey(${1:publicKey: BYTE_VECTOR})',
    },
    detail: "Retrieves adress from publicKey bytes",
  },
  {
    label: 'accountBalance',
    kind,
    insertText: {
      value: 'accountBalance(${1:addressOrAlias: Obj(bytes)})',
    },
    detail: "Returns account balance for address or alias",
  },
  {
    label: 'accountAssetBalance',
    kind,
    insertText: {
      value: 'accountAssetBalance(${1:addressOrAlias: Obj(bytes)}, ${2:assetId: BYTE_VECTOR})',
    },
    detail: "Returns asset balance for address or alias",
  },
  {
    label: 'getLong',
    kind,
    insertText: {
      value: 'getLong(${1:address: Obj(bytes)}, ${2:key: STRING})',
    },
    detail: "Gets long value from address data table",
  },
  {
    label: 'getBoolean',
    kind,
    insertText: {
      value: 'getBoolean(${1:address: Obj(bytes)}, ${2:key: STRING})',
    },
    detail: "Gets boolean value from address data table",
  },
  {
    label: 'getBytes',
    kind,
    insertText: {
      value: 'getBytes(${1:address: Obj(bytes)}, ${2:key: STRING})',
    },
    detail: "Gets bytevector value from address data table",
  },
  {
    label: 'getString',
    kind,
    insertText: {
      value: 'getString(${1:address: Obj(bytes)}, ${2:key: STRING})',
    },
    detail: "Gets string value from address data table",
  },
]

export const suggestions = keywords.map(label => ({ label, kind: CompletionItemKind.Keyword }))
.concat(generalSuggestions(CompletionItemKind.Snippet))
.concat(cryptoFunctions(CompletionItemKind.Function))
.concat(contextFunctions(CompletionItemKind.Function))
.concat(contextFields(CompletionItemKind.Field))