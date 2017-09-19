const _ = require('lodash')
const Moment = require('moment')
const MomentRange = require('moment-range')
const moment = MomentRange.extendMoment(Moment)
const chalk = require('chalk')
const chunk = require('chunk')
const prepend = require('prepend')

const now = moment()
console.log(now.year())
let year = now.range('year')

const month = {

}

for(let month of year.by('months'))
{
    console.log(_.pad(month.format('MMMM'), 26, '-'))
    console.log ('S   M   T   W   T   F   S   ')
    
    let days = Array.from(month.range('month').by('days'))

    console.log('--------------------------')
    let paddedDays = _.map(days, day => {
        let date = day.date()
        if (day.month() == 8 && day.date() == 10) {
            date = chalk.red(date)
        }
        if (day.month() == 10 && day.date() == 26) {
            date = chalk.blue(date)
        }
        if (day.month() == 11 && day.date() == 25) {
            date = chalk.green(date)
        }

        return _.padEnd(date, 2, ' ')
    })
    
    for (let i = 0; i < month.day(); i++){
        paddedDays.unshift("  ")
    }


    let weeks =_.chunk(paddedDays, 7)

    weeks.forEach(function(week){
        console.log(week.join("  "))
    })
}