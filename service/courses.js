const courseModel = require('../models/courses')

class CourseService{
    async getCourse(courseId) {
        let courseDetail = await courseModel.findOne({'id': courseId})
        return courseDetail
    }

    async insertCourse(data) {
        let res = await courseModel.create(data)
    }
}

module.exports = new CourseService()