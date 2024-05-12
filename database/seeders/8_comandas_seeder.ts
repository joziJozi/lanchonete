import Comanda from '#models/comanda'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {

  await Comanda.createMany([
    {mesa: '1', funcionarioId: 1, clienteId: 1, forma_pagamentoId: 1, dataPagamento:  new Date("2022-04-23")  },
    {mesa: '2', funcionarioId: 2, clienteId: 2, forma_pagamentoId: 2, dataPagamento:  new Date("2022-04-22")  },
    {mesa: '3', funcionarioId: 3, clienteId: 3, forma_pagamentoId: 3, dataPagamento:  new Date("2022-04-21")  },
    {mesa: '4', funcionarioId: 4, clienteId: 4, forma_pagamentoId: 4, dataPagamento:  new Date("2022-04-20")  },
  ])
}
}