### `user` 表

- `id<string>` ：必选，用户唯一 ID
- `name<string>` ：用户的昵称，默认为系统随机给予
- `days<Array>` ：必选，每个用户独有的日程表，每个元素是当天进行的一组课程 `<Array>`
  - `<Array> `：当天要进行的一组课程，每个元素是一个课程的对象，如果当天没有课程，则元素为 null
    - `<Object>: {`
      - `id<string>` ：必选，课程的唯一 ID
      - `length<int>` ：必选，课程总的进度
      - `now<int>` ：默认为 0，课程的当前进度，`<= length`
    - `}`
- `date<string>` ：必选，格式：`yyyy-mm-dd`，用户开始康复计划的时间
- ... 其他属性