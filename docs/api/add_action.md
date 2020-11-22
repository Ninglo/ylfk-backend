## 添加动作数据的接口

### 接口简介

向数据库添加动作的数据

### 请求地址

/add_action

### 请求类型

POST

### 请求参数

| 参数名 | 类型   | 必填 | 描述                 |
| ------ | ------ | ---- | -------------------- |
| id     | string | 是   | 动作的唯一id         |
| name   | string | 是   | 课程的名称           |
| point  | number | 否   | 动作的要点，默认为无 |
| info   | string | 否   | 动作的信息，默认为无 |
| video  | string | 否   | 动作的视频，默认为无 |

- 参数示例

  ```
  {
      "id": "1",
      "name": "动作1",
      "point": "要点XXX", 
      "intro": "动作介绍", 
      "logo": "图片的url", 
      "video": "视频的url" 
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

