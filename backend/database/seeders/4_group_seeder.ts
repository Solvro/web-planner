import Group from '#models/group'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Group.createMany([
      {
        id: '1W05APR-SI1312Wwyklad',
        name: 'Podstawy elektrotechniki',
        startTime: '15:15:00',
        endTime: '16:55:00',
        group: '1',
        lecturer: 'Paweł Kostyła',
        week: '-',
        day: 'poniedzi',
        type: 'W',
        courseId: 'W05APR-SI1312W',
      },
      {
        id: '2W13W05-SI1737Wwyklad',
        name: 'Analiza matematyczna 1',
        startTime: '7:30:00',
        endTime: '9:00:00',
        group: '2',
        lecturer: 'Tomasz Stroiński',
        week: '-',
        day: 'wtor',
        type: 'W',
        courseId: 'W13W05-SI1737W',
      },
    ])
  }
}
