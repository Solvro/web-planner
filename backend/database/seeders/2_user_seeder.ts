import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'
import { DateTime } from 'luxon'
export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      { id: '123', password: 'aa', updatedAt: DateTime.now() },
      { id: '234', password: 'bb', updatedAt: DateTime.now() },
    ])
  }
}
