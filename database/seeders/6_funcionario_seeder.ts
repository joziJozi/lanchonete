import Funcionario from '#models/funcionario'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Funcionario.createMany([
      {nome:'joziane', cpf: '999.999.999-99', endereco: 'QNN 11', sexo: 'F', telefone: '99999-9999',cargoId: 1},
      {nome:'gustavo', cpf: '999.999.999-99', endereco: 'QNN 11', sexo: 'M', telefone: '99999-9999',cargoId: 2},
      {nome:'juan', cpf: '999.999.999-99', endereco: 'QNN 11', sexo: 'M', telefone: '99999-9999',cargoId: 3},
      {nome:'karin', cpf: '999.999.999-99', endereco: 'QNN 11', sexo: 'F', telefone: '99999-9999',cargoId: 4},
    ])
  }
}