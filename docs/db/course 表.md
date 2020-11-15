### `course` 表

- `id<string>` ：必选，课程唯一 ID
- `name<string>` ：必选，课程名称
- `length<int>` ：必选，课程总的进度 `== len(actions)`
- `actions<Array>` ：必选，课程，每个元素一个动作的**对象**
  - `<Object>: {`
    - `id<string>` ：动作的唯一 ID
  - `}`
- `logo<string>` ：课程 `logo` 的 `url` ，默认为 `"..."`
- `info<string>` ：课程介绍，默认为 `"无"`
- ... 其他属性