import Schedule from '#models/schedule'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Schedule.createMany([
      { id: 'aa', userId: '123' },
      { id: 'bb', userId: '234' },
      { id: 'cc', userId: '123' },
    ])
  }
}
