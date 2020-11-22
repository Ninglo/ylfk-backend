const router = require('koa-router')()
const courseService = require('../service/courses')

router.get('/get_course_plan/:courseId', async (ctx, next) =>{
    try{
        let res = {}
        let id = ctx.params.courseId
        let data = await courseService.getCourse(id)
        if (res === null) {
            res = {
                status: {
                    "code": 404,
                    "msg": "not found"
                }
            }
            ctx.body = res
        }
        else {
            res = {
                status: {
                    "code": 200,
                    "msg": "ok"
                },
                data: data
            }
            ctx.body = res
        }
    }
    catch (e) {
        console.log(e)
    }
})


router.post('/add_course', async (ctx, next) => {
    try {
        let course = ctx.request.body
        let data = await courseService.getCourse(course.id)
        if (data != null) {
            res = { 
                status: {
                    "code": 500,
                    "msg": "error"
                }
            }
            ctx.body = res
            return
        }
        await courseService.insertCourse(course)
        res = {
            status: {
                "code": 200,
                "msg": "ok"
            }
        }
        ctx.body = res
    }
    catch (e) {
        res = { 
            status: {
                "code": 500,
                "msg": "error"
            }
        }
        ctx.body = res
        // console.log(e)
    }
})
module.exports = router