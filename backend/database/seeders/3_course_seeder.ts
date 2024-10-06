import Course from '#models/course'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Course.createMany([
      {
        id: 'W05APR-SI1312W',
        name: 'Podstawy elektrotechniki',
        registrationId: 'W05-APR-SI-1I',
      },
      {
        id: 'W13W05-SI1737W',
        name: 'Analiza matematyczna 1',
        registrationId: 'W05-APR-SI-1I',
      },
    ])
  }
}
