const router = require('koa-router')()
const courseService = require('../service/course')

router.get('/get_course_plan/:courseId', async (ctx, next) =>{
    try{
        let id = ctx.params.courseId
        let res = await courseService.getAction(id)
        if (res === null) {
            return {
                status: {
                    "code": 404,
                    "msg": "not found"
                }
            }
        }
        else {
            ctx.body = res
            return {
                status: {
                    "code": 200,
                    "msg": "ok"
                },
                data: {
                    "name": res.name,
                    "actions": res.actions
                }
            }
        }
    }
    catch (e) {
        console.log(e)
    }
})


router.post('/add_course', async(ctx, next) =>{
    try{
        let course = ctx.request.body
        let res = await courseService.getAction(course.couseId)
        if (res != null) {
            ctx.body = '已存在'
            return
        }
        const newCourse = {
            'id':course.courseId,
            'name':course.name,
            'length':course.length,
            'actions':[
                {
                    'actionId':couse.actionId
                }
            ],
            'logo':course.logo,
            'info':course.info

        }
        res = await courseService.insertCourse(newCourse)
        ctx.body = res
    }
    catch(e){
        console.log(e)
    }
})

module.exports = router