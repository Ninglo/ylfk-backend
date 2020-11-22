## 添加课程数据的接口

### 接口简介

向数据库添加课程数据

### 请求地址

/add_course

### 请求类型

POST

### 请求参数

| 参数名  | 类型           | 必填 | 描述                                           |
| ------- | -------------- | ---- | ---------------------------------------------- |
| id      | string         | 是   | 课程的唯一id                                   |
| name    | string         | 是   | 课程的名称                                     |
| length  | number         | 是   | 用户开始康复计划的时间，默认为第一次登陆的时间 |
| actions | array [Object] | 是   | 课程包含的动作                                 |
| logo    | string         | 否   | 课程的logo，默认为空                           |
| info    | string         | 否   | 课程的信息，默认为空                           |

- 参数示例

  ```
  {
      "id": "5",
      "name": "腿部康复",
      "length":"20",
      "actions":[
          {
              "id":"6",
              "length":"20",
              "now":"3"
          }
      ],
      "logo":"图片url",
      "info":"一段介绍"
      
  }
  ```

### 返回正确JSON示例

```
{
	"status": {
		"code": 200,
		"msg": "ok"
	}
}
```



### 返回错误JSON示例

```
{
	"status": {
		"code": 500,
		"msg": "error"
	}
}
```

