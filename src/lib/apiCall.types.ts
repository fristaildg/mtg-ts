export const GET = 'GET'
export const POST = 'POST'
export const PUT = 'PUT'
export const DELETE = 'DELETE'

export const LOGIN = 'LOGIN'
export const REGISTER = 'REGISTER'

export const PENDING = 'PENDING'
export const REJECTED = 'REJECTED'
export const SUCCESS = 'SUCCESS'
export const CLEAR = 'CLEAR'

export type Method = typeof GET | typeof POST | typeof PUT | typeof DELETE

export type Session = typeof LOGIN | typeof REGISTER

export type AsyncActionStatus = typeof PENDING | typeof REJECTED | typeof SUCCESS | typeof CLEAR

export interface Body {
  [key: string]: any
}

export interface MtgQueryObj {
  [key: string]: any
}

export interface Config {
  method: Method
  headers: Headers
  body?: string
}