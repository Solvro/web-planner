import vine from '@vinejs/vine'

const timeFormat = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/

export const createGroupValidator = vine.compile(
  vine.object({
    id: vine.string(),
    name: vine.string(),
    group: vine.string(),
    lecturer: vine.string(),
    day: vine.string(),
    courseId: vine.string(),
    type: vine.string(),
    startTime: vine.string(),
    endTime: vine.string(),
    week: vine.enum(['-', 'TP', 'TN']),
  })
)
