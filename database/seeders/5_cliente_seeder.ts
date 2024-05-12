import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Cliente from '#models/cliente'

export default class extends BaseSeeder {
  async run() {
    
    await Cliente.createMany([
        {nome: 'Joziane',cpf: '999.999.999-99',telefone: '99999-9999', email: 'joziane@gmail.com'},
        {nome: 'Gustavo',cpf: '999.999.999-99',telefone: '99999-9999', email: 'gustavo@gmail.com'},
        {nome: 'Juan',cpf: '999.999.999-99',telefone: '99999-9999', email: 'juan@gmail.com'},
        {nome: 'Karin',cpf: '999.999.999-99',telefone: '99999-9999', email: 'karin@gmail.com'},
       
       ])

  }
}