import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Cliente from './cliente.js'
import FormaPagamento from './forma_pagamento.js'
import Funcionario from './funcionario.js'
import { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Comanda extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare mesa: string

  @column()
  declare funcionarioId: number

  @column()
  declare clienteId: number

  @column()
  declare forma_pagamentoId: number

  @column()
  declare dataPagamento: Date

  @column()
  declare data: Date

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=>Cliente)
  declare cliente: BelongsTo<typeof Cliente>

  @belongsTo(()=>FormaPagamento)
  declare formapagamento: BelongsTo<typeof FormaPagamento>

  @belongsTo(()=>Funcionario)
  declare funcionario: BelongsTo<typeof Funcionario>
}