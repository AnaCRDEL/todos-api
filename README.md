## **Todos API solution**

#### Solution for [ironhack-lab-todos-api](https://gist.github.com/gsicuto/e9af6d426185c53a9470e61c44b7e8e6)
#### Front-end repository link:  [lab-todo-client](https://github.com/D-Kunrath/lab-todo-client)

#
### TECHNOLOGIES:

-   Nodejs;
-   Express;
#
### USAGE:

Online:  [Todos API](https://lab-todos.herokuapp.com/todos)

-or-

Local:

-   Clone this repo;
-   `npm i` ;
-   Set your environment variables with:

```
PORT=         // use the one you prefer
DB_URI=       // your local mongoDB storage or AtlasDB
```

-   Use  `npm start`  (node) or  `npm run dev`  (nodemon) to start application at:

```
http://localhost:<PORT>
```
#
### Endpoints:

| Method | Endpoint   | Payload                                | Response  | Action                     |
| ------ | ---------- | -------------------------------------- | --------- | -------------------------- |
| GET    | /todos     | \-                                     | \[todos\] | Get All Todos form DB      |
| POST   | /todos     | {"title":String, "completed": Bollean} | {todo}    | Create New Todo            |
| PUT    | /todos/:id | {"title":String, "completed": Bollean} | {todo}    | Update Existing Todo by Id |
| DELETE | /todos/:id | \-                                     | \-        | Deletes todo               |

#
### Response fields:
todo: {
    title: String,
    completed: Boolean
}