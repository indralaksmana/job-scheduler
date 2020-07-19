'use strict'

// Base Model
import { Model } from 'objection';

export default class Customer extends Model {

  code: string
  name: string
  address: string
  id_parentcust: number
  code_parentcust: string
  id_global: number
  code_global: string
  id_regional: number
  code_regional: string
  id_area: number
  code_area: string
  id_province: number
  code_province: string
  id_city: number
  code_city: string
  id_outlettype: number
  code_outlettype: string
  id_channel: number
  code_channel: string
  id_subchannel: number
  code_subchannel: string
  note: string
  status: number
  created_at: any
  updated_at: any
  created_user: number
  modified_user: number

  static tableName = 'm_cust_so';

  async $beforeInsert() {
    this.created_at = new Date();
  }

  async $beforeUpdate() {
    this.updated_at = new Date();
  }

  static jsonSchema = {
    type: 'object',
    required: ['code','name'],

    properties: {
      id: { type: 'integer' },
      code: { type: 'string', minLength: 1, maxLength: 64 },
      name: { type: 'string', minLength: 1, maxLength: 128 },
      address: { type: 'string', minLength: 1, maxLength: 512 },
      id_parentcust: { type: 'integer' },
      code_parentcust: { type: 'string', minLength: 1, maxLength: 64 },
      id_global: { type: 'integer' },
      code_global: { type: 'string', minLength: 1, maxLength: 64 },
      id_regional: { type: 'integer' },
      code_regional: { type: 'string', minLength: 1, maxLength: 64 },
      id_area: { type: 'integer' },
      code_area: { type: 'string', minLength: 1, maxLength: 64 },
      id_province: { type: 'integer' },
      code_province: { type: 'string', minLength: 1, maxLength: 64 },
      id_city: { type: 'integer' },
      code_city: { type: 'string', minLength: 1, maxLength: 64 },
      id_outlettype: { type: 'integer' },
      code_outlettype: { type: 'string', minLength: 1, maxLength: 64 },
      id_channel: { type: 'integer' },
      code_channel: { type: 'string', minLength: 1, maxLength: 64 },
      id_subchannel: { type: 'integer' },
      code_subchannel: { type: 'string', minLength: 1, maxLength: 64 },
      note: { type: 'string', minLength: 1, maxLength: 256 },
      status: { type: 'integer' },
      updated_at: {type: 'string', format: 'date-time', nullable: true},
      created_at: {type: 'string', format: 'date-time', nullable: false},
      created_user: { type: 'integer' },
      modified_user: { type: 'integer' },
    }
  }
}