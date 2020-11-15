const courseModel = require('./courses.js')

async function test() {
    try {
        console.log(1)
        let courseDetail = await courseModel.findOne({'id': '123'})
        console.log(2)
        console.log(courseDetail)
        return courseDetail
    } catch(e) {
        console.log(e)
    }
}
test()
// class CourseService{
//     constructor() {}
//     async getAction(courseId) {
//         try {
//             let courseDetail = await courseModel.findOne({'id': courseId})
//             return courseDetail
//         }
//         catch (e) {
//             console.log(e);
//         }
//     }

//     async insertCourse(data) {
//         try {
//             let res = await courseModel.create(data)
//         }
//         catch (e) {
//             console.log(e)
//         }
//     }
// }

// let tmp = new CourseService()
// tmp.getAction('123').then(res => console.log(res), e => console.log(e)t)