import db from '@adonisjs/lucid/services/db'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await db.rawQuery(
      "INSERT INTO schedule_groups (schedule_id, group_id) VALUES ('aa', '2W13W05-SI1737Wwyklad'), ('bb', '2W13W05-SI1737Wwyklad'), ('bb', '1W05APR-SI1312Wwyklad'), ('cc', '1W05APR-SI1312Wwyklad')"
    )
  }
}
