const router = require('koa-router')()
const fs = require('fs')
const path = require('path')

router.get('/get_videos/:videoPath', async(ctx)=>{
    try{
        let videopath = ctx.params.videoPath
        let ext = path.extname(videopath)
        let vpath = path.join(__dirname, '../static/videos', videopath)
        
        if((ext == ".mp4") && fs.existsSync(vpath) && fs.statSync(vpath).isFile()){
            // console.log('entry')
            let contentType = "video/mp4"

            const res = ctx.res
            ctx.set({
                "Content-type": contentType
            })
            let vReadStream = fs.createReadStream(vpath)
            ctx.body = vReadStream
            // vReadStream.on("data", (chunk)=>{
            //     console.log(1)
            //     res.write(chunk)
            // })
            // vReadStream.on("end", ()=>{
            //     res.end()
            // })
            // vReadStream.pipe(res)
        }
        else{
            ctx.body = {
                status:{
                    "code" : 404, 
                    "msg" : 'not found' + vpath
                }
                
            }
        }
    }
    catch(e){
        console.log(e)
    }
        

})

module.exports = router