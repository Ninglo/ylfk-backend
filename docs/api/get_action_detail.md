## 获取动作名称接口

> 维护人员：程珍勇
>
> 创建时间：2020-11-03

### 接口简介

查询数据库中每个动作对应的内容

### 接口详情

#### 请求地址

/get_action_detail/:actionId

#### 请求类型

GET

#### 请求参数

| 参数名   | 类型   | 必填 | 描述         |
| -------- | ------ | ---- | ------------ |
| actionId | string | 是   | 动作的唯一id |

#### 返回正确JSON示例

```node.js
{
	"status": {
		"code": 200,
		"msg": "ok"
	},
	"data": {
		"id":"",              //动作id
		"point":"",           //动作要点
		"intro": "暂无",       //动作详情
		"logo":""             //动作logo的url
		"video":""            //动作视频的url
	}
}
```

#### 返回错误JSON示例

```
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

  删除了actionName字段，新增了id, logo, video字段