import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Comanda from './comanda.js'
import { HasMany } from '@adonisjs/lucid/types/relations'

export default class FormaPagamento extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare produtoId: number

  @column()
  declare comandaId: number

  @column()
  declare quantidade: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(()=>Comanda)
  declare comandas: HasMany<typeof Comanda>
}