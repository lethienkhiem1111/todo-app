# TODO App Backend

## Bussiness

### User Stories

Người dùng có thể tạo nhiều todo item
Người dùng có thể mark done 1 hoặc nhiều todo item
Người dùng có thể xem toàn bộ todo (Bao gồm đã hoàn thành và chưa hoàn thành)
Người dùng có thể filter những todo đã hoàn thành
Người dùng có thể filter những todo chưa hoàn thành
Người dùng có thể xóa todo theo id
Người dùng có thể xóa tất cả todos
Người dùng có thể xóa toàn bộ những todo đã hoàn thành
Người dùng có thể sửa nội dung

## Analyse

### Build APIs (Restfull API)

- Create Todo (Create single toto for each time) (`/api/createTodo`)
- Update Todo & Mark this todo as complete (`/api/updateTodo`)
- Get All Todo (`/api/todos`)
- Get All completed todos (`/api/todos`, params: `completed: true`)
- Get All activated todos (`/api/todos`, params: `completed: false`)
- Delete Todo by Id (`/api/deleteTodo`)
- Clear completed todos | clear all (`/api/clearCompleted`) (params: `completed: true | ''`)

### Database
- Dialect Mysql
- Database name: todos

> All api are accept JSON body, response JSON