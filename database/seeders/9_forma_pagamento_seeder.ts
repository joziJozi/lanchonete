import FormaPagamento from '#models/forma_pagamento'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {

    await FormaPagamento.createMany([
      {id: 1, nome: 'dinheiro'},
      {id: 2, nome:'pix'},
      {id: 3, nome: 'debito'},
      {id: 4, nome: 'credito'},

    ])
  }
}