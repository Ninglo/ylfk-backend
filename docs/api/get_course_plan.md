## 获取课程名称和安排表的接口

> 维护人员：裴雷
>
> 创建时间：2020-11-03

### 接口简介

查询数据库中课程名称和课程安排表

### 接口详情

#### 请求地址

/get_course_plan/:id

#### 请求类型

GET

#### 请求参数

| 参数名 | 类型   | 必填 | 描述         |
| ------ | ------ | ---- | ------------ |
| id     | string | 是   | 课程的唯一id |

#### 返回正确JSON示例

```node.js
{
	"status": {
		"code": 200,
		"msg": "ok"
	},
	"data": {
		"id": "",             //课程id
		"name": "暂无",        //课程名称
		"length": 13，        //课程的总进度
		"actions": [          //包含一次课程需要完成的动作
			{
				"id":""       //动作的id
			},
			{},
			...
		],
		"logo":"",            //课程logo的url
		"info":"暂无"          //课程介绍
	}
}
```

#### 返回错误JSON示例

```node.js
{
	"status": {
		"code": 500,
		"msg": "error"
	}
}
```

#### 备注说明

暂无

#### 修改日志

- 【2020-11-08】

  actions里的数组调整为对象类型，并新增了length, logo, info三个字段