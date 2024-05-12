import ProdutoComanda from '#models/produto_comanda'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {

    await ProdutoComanda.createMany([
      {produtoId:3,comandaId:2},
      {produtoId:3,comandaId:2},
      {produtoId:1,comandaId:2},
      {produtoId:4,comandaId:2},
      {produtoId:3,comandaId:3},
      {produtoId:1,comandaId:3},
      {produtoId:2,comandaId:4},
      {produtoId:1,comandaId:4},
    ])
  }
  }