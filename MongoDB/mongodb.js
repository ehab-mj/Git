// 5:20
// no sql -> we are not writing in scrater
// no sql -> data = documents
// mongodb atlas

// 0.0.0.0 = i can access any ip in the world

// command to do new database = use ...
// create new collection = db.createCollection('users')
// command -> show collection -> users
// to delete -> db.users.drop()

//* db  .  collectionName  .  method()

// add a new obj
// db.users.insertOne({
// format BSON
// first_name: 'sara',
// lasr_name: 'Ahmed',
// city: 'Ramallah',
// })
//! it will be added to data base with primary key

// insertMany -> adding more data to
// db.users.insertMany
// format BSON
// first_name: 'sara',
// lasr_name: 'Ahmed',
// city: 'Ramallah',
// }).....

// db.students.find -> show the data
// if i want only people from naplus
db.students.find({ city: 'Nablus' })
// retun first one and with high grade
// must be true for both like &&
db.students.findOne({ city: 'Nablus', grade: 'A+' })

// db.students.find({where}, {projection -> a specific thing to return}) -> 1 = include, 0 -> not include
db.students.find({}, { first_name: 1, id: 0 })

// return people from nablus
db.students.find({ city: 'Nablus' }, { first_name: 1, id: 0 })

// advanced filter -> want to play on score
// gt -> greater than
// lt -> list than
// ne -> not equal to
// in -> in or in -> 
// nin -> in and not in
// and -> in this city and with grade A
// nor -> 
db.students.find({ score: { $gt: 90 } })
db.students.find({ score: { $lt: 70 } })
db.students.find({ city: { $in: ['Haifa', 'Krayot'] } })
db.students.find({ $and: [{ city: 'Ramalah', grade: 'A' }] })

// start with s
db.students.find({ first_name: { regex: '/^S/' } })
// end with s
db.students.find({ first_name: { regex: '/S$/' } })
// end with ar /ar/
// if it was small letter or capital /^s/i

// if field exists -> $exists: true
db.students.find({ first_name: { $exist: true } })
// phone not exist
db.students.find({ phone: { $exist: false } }) // retuning all 

// if i want to make them more مرتب
// from big to small
db.students.find().sort({ score: -1 })

// only in this city
db.students.find({ ciry: 'Ramallah' }).sort({ score: -1 })
// we can use limit
db.students.find({ ciry: 'Ramallah' }).sort({ score: -1 }.limit(2))

// skip first 3 and return 3 
db.students.find().sort({ score: -1 }.skip(3).limit(3))

// set change field
// update -> updateOne, updateMany
db.students.updateOne({
    first_name: 'Ehab'
}, {
    // adding
    $set: { phone: '' }
})

db.students.updateOne({
    first_name: 'Ehab'
}, {
    // changing
    $set: { grade: 100 }
    // unset -> removing
})

// updateMany -> same but inclusding all like city
db.students.updateMany({
    // adding to all a new field
    $set: { phone: '' }
})

// i want to update on only one
// $push -> on one 
db.students.updateOne({
    $push: { course: ['Data'] }
})

// if i want to delete one -> deleteOne

// $match -> filter to document
// match == where -> return students higher than 80
db.students.aggregate({
    $match: { city: 'Haifa', grade: '' }
})

// 6:50
// group -> what students do you want to do group
db.students.aggregate([
    {
        $group: {
            _id: '$city',
            total: { $sum: 1 }
        }
    }
])

db.students.aggregate([
    {
        $group: {
            _id: '$city',
            // منحسب
            avg_score: { $avg: '$score' },
            top_score: { $max: '$score' }
        }
    }
])