import Registration from '#models/registration'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Registration.createMany([
      {
        id: 'W05-APR-SI-1I',
        name: 'W5 zapisy wydziałowe dla kierunku APR SI, 2024/25Z W05-APRP-000P-OSIW7',
        department: 'Wydział Elektryczny [W5]',
        round: 1,
      },
      // {
      //   name: 'W13-HWDP-SI-3',
      //   department: 'Wydział Matematyki [W13]',
      //   round: 2,
      // },
      // {
      //   name: 'W4-IST-SI-3',
      //   department: 'Wydział Informatyki i Telekomunikacji [W4N]',
      //   round: 1,
      // },
    ])
  }
}
