# Flowwit (HacktivOverflow)
----------------------------------------
## deployed at : http://flowwit.fildabert.com
## baseUrl: http://localhost:3000/api


## Endpoint



## User Schema
| Key | Type | Description |
| --- | ---- | ----------- |
|username|String|user's username|
| email | String | user's email |
| password | String | user's password |
| watchedTags | Array | user's watched tags |

#### Register User

```
POST
http://localhost:3000/users/register
Body:
{
    username: filbert1,
    email: filbert1@mail.com
    password: filbert1
}
```

```
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDM0YjY0YTZiM2UzZTIxNjZhMGE5ODYiLCJ1c2VybmFtZSI6ImZpbGJlcnQxIiwiZW1haWwiOiJmaWxiZXJ0MUBtYWlsLmNvbSIsImlhdCI6MTU2MzczNTYyNiwiZXhwIjoxNTYzNzU3MjI2fQ.bSrSYG5EzlN8yRU9rMgz8TV_cAFReRp7way2IyAHZV8",
    "username": "filbert1"
}
```

#### Login User

```
POST
http://localhost:3000/users/login
Body:
{
    username: "filbert1",
    password: "filbert1"
}
```

```
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDM0YjY0YTZiM2UzZTIxNjZhMGE5ODYiLCJ1c2VybmFtZSI6ImZpbGJlcnQxIiwiZW1haWwiOiJmaWxiZXJ0MUBtYWlsLmNvbSIsImlhdCI6MTU2MzczNTk1MiwiZXhwIjoxNTYzNzU3NTUyfQ.tu0aOvkkU5z7z2XQMjQU3QLYMXAfY9APndUftGvQrSw",
    "username": "filbert1"
}
```

### Get user's watched tags
```
GET
http://localhost:3000/users/tags
Headers: 
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDM0YjY0YTZiM2UzZTIxNjZhMGE5ODYiLCJ1c2VybmFtZSI6ImZpbGJlcnQxIiwiZW1haWwiOiJmaWxiZXJ0MUBtYWlsLmNvbSIsImlhdCI6MTU2MzczNTk1MiwiZXhwIjoxNTYzNzU3NTUyfQ.tu0aOvkkU5z7z2XQMjQU3QLYMXAfY9APndUftGvQrSw"
}
```

```
{
  watchedTags: [ 'Boi', 'Cron' ],
  _id: 5d41231340457c1bdf8fafde,
  username: 'filbert',
  password: '$2b$10$Q5vPLlR7MJTIawdWpw3ysOU1m0QVCAWW0cCr8osY4DGI3BUDF.iBG',
  email: 'filbert@mail.com',
  createdAt: 2019-07-31T05:11:47.375Z,
  updatedAt: 2019-08-01T04:37:02.965Z,
  __v: 16
}
```

### Add watched tags
```
PUT
http://localhost:3000/users/tags
Headers: 
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDM0YjY0YTZiM2UzZTIxNjZhMGE5ODYiLCJ1c2VybmFtZSI6ImZpbGJlcnQxIiwiZW1haWwiOiJmaWxiZXJ0MUBtYWlsLmNvbSIsImlhdCI6MTU2MzczNTk1MiwiZXhwIjoxNTYzNzU3NTUyfQ.tu0aOvkkU5z7z2XQMjQU3QLYMXAfY9APndUftGvQrSw"
}
Body:
{
    tag: "NewTag"
}
```

```
{
  watchedTags: [ 'Boi', 'Cron', 'NewTag' ],
  _id: 5d41231340457c1bdf8fafde,
  username: 'filbert',
  password: '$2b$10$Q5vPLlR7MJTIawdWpw3ysOU1m0QVCAWW0cCr8osY4DGI3BUDF.iBG',
  email: 'filbert@mail.com',
  createdAt: 2019-07-31T05:11:47.375Z,
  updatedAt: 2019-08-01T04:37:02.965Z,
  __v: 16
}
```

### Edit/Delete tags
```
PATCH
http://localhost:3000/users/tags
Headers: 
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDM0YjY0YTZiM2UzZTIxNjZhMGE5ODYiLCJ1c2VybmFtZSI6ImZpbGJlcnQxIiwiZW1haWwiOiJmaWxiZXJ0MUBtYWlsLmNvbSIsImlhdCI6MTU2MzczNTk1MiwiZXhwIjoxNTYzNzU3NTUyfQ.tu0aOvkkU5z7z2XQMjQU3QLYMXAfY9APndUftGvQrSw"
}
Body:
{
    tags: ['Cron']
}
```

```
{
  watchedTags: [ 'Cron' ],
  _id: 5d41231340457c1bdf8fafde,
  username: 'filbert',
  password: '$2b$10$Q5vPLlR7MJTIawdWpw3ysOU1m0QVCAWW0cCr8osY4DGI3BUDF.iBG',
  email: 'filbert@mail.com',
  createdAt: 2019-07-31T05:11:47.375Z,
  updatedAt: 2019-08-01T04:37:02.965Z,
  __v: 16
}
```

## Post Schema
| Key | Type | Description |
| --- | ---- | ----------- |
|title|String|Post's title|
| description | String | Post's description |
| author | String | Post's author |
| tags | Array | Post's tags |
| comments | Array(ObjectId) | Post's comments |
| upvotes | Array(ObjectId) | Post's upvotes |
| downvotes | Array(ObjectId) | Post's downvotes |


### Create New Post
```
POST
http://localhost:3000/posts/add
Headers: 
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDM0YjY0YTZiM2UzZTIxNjZhMGE5ODYiLCJ1c2VybmFtZSI6ImZpbGJlcnQxIiwiZW1haWwiOiJmaWxiZXJ0MUBtYWlsLmNvbSIsImlhdCI6MTU2MzczNTk1MiwiZXhwIjoxNTYzNzU3NTUyfQ.tu0aOvkkU5z7z2XQMjQU3QLYMXAfY9APndUftGvQrSw"
}
Body:
{
    title: "Post 1",
    description: "Description 1",
    userId: "3546453412343434534"
    tags: ['Cron'],
}
```

```
{
  tags: [ 'Cron' ],
  comments: [],
  upvotes: [ 5d41231340457c1bdf8fafde ],
  downvotes: [],
  _id: 5d42a0fbaf5a9e1f6d9b04d5,
  title: 'Post 1',
  description: 'Descriptioin 1',
  author: 5d41231340457c1bdf8fafde,
  createdAt: 2019-08-01T08:21:15.543Z,
  updatedAt: 2019-08-01T08:21:15.543Z,
  __v: 0
}
```

### Get all posts
```
GET
http://localhost:3000/posts/all
```

```
[
    {
        tags: [ 'Cron' ],
        comments: [],
        upvotes: [ 5d41231340457c1bdf8fafde ],
        downvotes: [],
        _id: 5d42a0fbaf5a9e1f6d9b04d5,
        title: 'Post 1',
        description: 'Descriptioin 1',
        author: 5d41231340457c1bdf8fafde,
        createdAt: 2019-08-01T08:21:15.543Z,
        updatedAt: 2019-08-01T08:21:15.543Z,
        __v: 0
    },
    {...Post}
]
```

### Get Post by tag
```
GET
http://localhost:3000/posts/tag/:tag
Params: Cron
```

```
[
    {
        tags: [ 'Cron' ],
        comments: [],
        upvotes: [ 5d41231340457c1bdf8fafde ],
        downvotes: [],
        _id: 5d42a0fbaf5a9e1f6d9b04d5,
        title: 'Post 1',
        description: 'Descriptioin 1',
        author: 5d41231340457c1bdf8fafde,
        createdAt: 2019-08-01T08:21:15.543Z,
        updatedAt: 2019-08-01T08:21:15.543Z,
        __v: 0
    },
    {...Post}
]
```

### Get my Posts
```
GET
http://localhost:3000/posts/myposts
Headers: 
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDM0YjY0YTZiM2UzZTIxNjZhMGE5ODYiLCJ1c2VybmFtZSI6ImZpbGJlcnQxIiwiZW1haWwiOiJmaWxiZXJ0MUBtYWlsLmNvbSIsImlhdCI6MTU2MzczNTk1MiwiZXhwIjoxNTYzNzU3NTUyfQ.tu0aOvkkU5z7z2XQMjQU3QLYMXAfY9APndUftGvQrSw"
}
```

```
[
    {
        tags: [ 'Cron' ],
        comments: [],
        upvotes: [ 5d41231340457c1bdf8fafde ],
        downvotes: [],
        _id: 5d42a0fbaf5a9e1f6d9b04d5,
        title: 'Post 1',
        description: 'Descriptioin 1',
        author: 5d41231340457c1bdf8fafde,
        createdAt: 2019-08-01T08:21:15.543Z,
        updatedAt: 2019-08-01T08:21:15.543Z,
        __v: 0
    },
    {...Post}
]
```

### Upvote a post
```
PUT
http://localhost:3000/posts/upvote
Headers: 
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDM0YjY0YTZiM2UzZTIxNjZhMGE5ODYiLCJ1c2VybmFtZSI6ImZpbGJlcnQxIiwiZW1haWwiOiJmaWxiZXJ0MUBtYWlsLmNvbSIsImlhdCI6MTU2MzczNTk1MiwiZXhwIjoxNTYzNzU3NTUyfQ.tu0aOvkkU5z7z2XQMjQU3QLYMXAfY9APndUftGvQrSw"
},
Body: 
{
    postId: 5d42a0fbaf5a9e1f6d9b04d5,
    userId: 5d41231340457c1bdf8fafde
}
```

```
{
  tags: [ 'asd', 'Post' ],
  comments: [],
  upvotes: [ 5d41231340457c1bdf8fafde ],
  downvotes: [],
  _id: 5d42a0fbaf5a9e1f6d9b04d5,
  title: 'Testing123',
  description: 'asdasdklasj',
  author: 5d41231340457c1bdf8fafde,
  createdAt: 2019-08-01T08:21:15.543Z,
  updatedAt: 2019-08-01T08:36:55.490Z,
  __v: 2
}
```

### Downvote a post
```
PUT
http://localhost:3000/posts/downvote
Headers: 
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDM0YjY0YTZiM2UzZTIxNjZhMGE5ODYiLCJ1c2VybmFtZSI6ImZpbGJlcnQxIiwiZW1haWwiOiJmaWxiZXJ0MUBtYWlsLmNvbSIsImlhdCI6MTU2MzczNTk1MiwiZXhwIjoxNTYzNzU3NTUyfQ.tu0aOvkkU5z7z2XQMjQU3QLYMXAfY9APndUftGvQrSw"
},
Body: 
{
    postId: 5d42a0fbaf5a9e1f6d9b04d5,
    userId: 5d41231340457c1bdf8fafde
}
```

```
{
  tags: [ 'asd', 'Post' ],
  comments: [],
  upvotes: [],
  downvotes: [ 5d41231340457c1bdf8fafde ],
  _id: 5d42a0fbaf5a9e1f6d9b04d5,
  title: 'Testing123',
  description: 'asdasdklasj',
  author: 5d41231340457c1bdf8fafde,
  createdAt: 2019-08-01T08:21:15.543Z,
  updatedAt: 2019-08-01T08:36:55.490Z,
  __v: 2
}
```

### Unvote a post
```
PUT
http://localhost:3000/posts/unvote
Headers: 
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDM0YjY0YTZiM2UzZTIxNjZhMGE5ODYiLCJ1c2VybmFtZSI6ImZpbGJlcnQxIiwiZW1haWwiOiJmaWxiZXJ0MUBtYWlsLmNvbSIsImlhdCI6MTU2MzczNTk1MiwiZXhwIjoxNTYzNzU3NTUyfQ.tu0aOvkkU5z7z2XQMjQU3QLYMXAfY9APndUftGvQrSw"
},
Body: 
{
    postId: 5d42a0fbaf5a9e1f6d9b04d5,
    upvotes: [],
    downvotes: []
}
```

```
{
  tags: [ 'asd', 'Post' ],
  comments: [],
  upvotes: [],
  downvotes: [],
  _id: 5d42a0fbaf5a9e1f6d9b04d5,
  title: 'Testing123',
  description: 'asdasdklasj',
  author: 5d41231340457c1bdf8fafde,
  createdAt: 2019-08-01T08:21:15.543Z,
  updatedAt: 2019-08-01T08:36:55.490Z,
  __v: 2
}
```

### Delete a post
```
DELETE
http://localhost:3000/posts/add?id={postId}
Headers: 
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDM0YjY0YTZiM2UzZTIxNjZhMGE5ODYiLCJ1c2VybmFtZSI6ImZpbGJlcnQxIiwiZW1haWwiOiJmaWxiZXJ0MUBtYWlsLmNvbSIsImlhdCI6MTU2MzczNTk1MiwiZXhwIjoxNTYzNzU3NTUyfQ.tu0aOvkkU5z7z2XQMjQU3QLYMXAfY9APndUftGvQrSw"
}
```

```
{deletedCount: 1}
```


### Get Post of the day
```
GET
http://localhost:3000/posts/potd
```

```
[
    {
        tags: [ 'Cron' ],
        comments: [],
        upvotes: [ 5d41231340457c1bdf8fafde ],
        downvotes: [],
        _id: 5d42a0fbaf5a9e1f6d9b04d5,
        title: 'Post 1',
        description: 'Descriptioin 1',
        author: 5d41231340457c1bdf8fafde,
        createdAt: 2019-08-01T08:21:15.543Z,
        updatedAt: 2019-08-01T08:21:15.543Z,
        __v: 0
    },
    {...Potd}
]
```


## Comment Schema
| Key | Type | Description |
| --- | ---- | ----------- |
| description | String | Comment's description |
| author | String | Comment's author |
| post | ObjectId | Which post this comment belongs to |
| upvotes | Array(ObjectId) | Comment's upvotes |
| downvotes | Array(ObjectId) | Comment's downvotes |


router.post("/add", authenticate, commentController.create)
router.get("/all", commentController.findAll)
router.put("/upvote", authenticate, commentController.upvote)
router.put("/downvote", authenticate, commentController.downvote)
router.put("/unvote", authenticate, commentController.unvote)
router.delete("/delete", authenticate, commentController.del)
router.put("/edit", authenticate, commentController.update)

### Create a comment
```
POST
http://localhost:3000/comments/add
Headers: 
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDM0YjY0YTZiM2UzZTIxNjZhMGE5ODYiLCJ1c2VybmFtZSI6ImZpbGJlcnQxIiwiZW1haWwiOiJmaWxiZXJ0MUBtYWlsLmNvbSIsImlhdCI6MTU2MzczNTk1MiwiZXhwIjoxNTYzNzU3NTUyfQ.tu0aOvkkU5z7z2XQMjQU3QLYMXAfY9APndUftGvQrSw"
}
Body:
{
    description: "comment 234"
    postId: 5d42a0fbaf5a9e1f6d9b04d5
    userId: 5d42a832bab6992164e6d0c7
}
```

```
{
  tags: [ 'asd', 'Post' ],
  comments: [ 5d42a832bab6992164e6d0c7 ],
  upvotes: [ 5d41231340457c1bdf8fafde ],
  downvotes: [],
  _id: 5d42a0fbaf5a9e1f6d9b04d5,
  title: 'Testing123',
  description: 'asdasdklasj',
  author: 5d41231340457c1bdf8fafde,
  createdAt: 2019-08-01T08:21:15.543Z,
  updatedAt: 2019-08-01T08:52:02.809Z,
  __v: 3
}
```

### Get all comments of a post
```
GET
http://localhost:3000/comments/all?postId={5d42a0fbaf5a9e1f6d9b04d5}
```

```
[
  {
    upvotes: [ 5d41231340457c1bdf8fafde ],
    downvotes: [],
    _id: 5d42a832bab6992164e6d0c7,
    description: 'testing 234<br>',
    author: {
      watchedTags: [Array],
      _id: 5d41231340457c1bdf8fafde,
      username: 'filbert',
      password: '$2b$10$Q5vPLlR7MJTIawdWpw3ysOU1m0QVCAWW0cCr8osY4DGI3BUDF.iBG',
      email: 'filbert@mail.com',
      createdAt: 2019-07-31T05:11:47.375Z,
      updatedAt: 2019-08-01T04:37:02.965Z,
      __v: 16
    },
    post: 5d42a0fbaf5a9e1f6d9b04d5,
    createdAt: 2019-08-01T08:52:02.799Z,
    updatedAt: 2019-08-01T08:52:02.799Z,
    __v: 0
  },
  {...Comment}
]
```

### Upvote a comment
```
PUT
http://localhost:3000/comments/upvote
Headers: 
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDM0YjY0YTZiM2UzZTIxNjZhMGE5ODYiLCJ1c2VybmFtZSI6ImZpbGJlcnQxIiwiZW1haWwiOiJmaWxiZXJ0MUBtYWlsLmNvbSIsImlhdCI6MTU2MzczNTk1MiwiZXhwIjoxNTYzNzU3NTUyfQ.tu0aOvkkU5z7z2XQMjQU3QLYMXAfY9APndUftGvQrSw"
}
Body: 
{
    commentId: 5d42a832bab6992164e6d0c7
    userId: 5d41231340457c1bdf8fafde
}
```

```
{
  upvotes: [ 5d41231340457c1bdf8fafde ],
  downvotes: [],
  _id: 5d42a832bab6992164e6d0c7,
  description: 'testing 234<br>',
  author: 5d41231340457c1bdf8fafde,
  post: 5d42a0fbaf5a9e1f6d9b04d5,
  createdAt: 2019-08-01T08:52:02.799Z,
  updatedAt: 2019-08-01T08:59:18.686Z,
  __v: 2
}
```

### Downvote a comment
```
PUT
http://localhost:3000/comments/downvote
Headers: 
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDM0YjY0YTZiM2UzZTIxNjZhMGE5ODYiLCJ1c2VybmFtZSI6ImZpbGJlcnQxIiwiZW1haWwiOiJmaWxiZXJ0MUBtYWlsLmNvbSIsImlhdCI6MTU2MzczNTk1MiwiZXhwIjoxNTYzNzU3NTUyfQ.tu0aOvkkU5z7z2XQMjQU3QLYMXAfY9APndUftGvQrSw"
}
Body: 
{
    commentId: 5d42a832bab6992164e6d0c7
    userId: 5d41231340457c1bdf8fafde
}
```

```
{
  upvotes: [],
  downvotes: [ 5d41231340457c1bdf8fafde ],
  _id: 5d42a832bab6992164e6d0c7,
  description: 'testing 234<br>',
  author: 5d41231340457c1bdf8fafde,
  post: 5d42a0fbaf5a9e1f6d9b04d5,
  createdAt: 2019-08-01T08:52:02.799Z,
  updatedAt: 2019-08-01T08:59:18.686Z,
  __v: 2
}
```

### Unvote a comment
```
PUT
http://localhost:3000/comments/unvote
Headers: 
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDM0YjY0YTZiM2UzZTIxNjZhMGE5ODYiLCJ1c2VybmFtZSI6ImZpbGJlcnQxIiwiZW1haWwiOiJmaWxiZXJ0MUBtYWlsLmNvbSIsImlhdCI6MTU2MzczNTk1MiwiZXhwIjoxNTYzNzU3NTUyfQ.tu0aOvkkU5z7z2XQMjQU3QLYMXAfY9APndUftGvQrSw"
}
Body: 
{
    upvotes: [],
    downvotes: []
}
```

```
{
  upvotes: [],
  downvotes: [],
  _id: 5d42a832bab6992164e6d0c7,
  description: 'testing 234<br>',
  author: 5d41231340457c1bdf8fafde,
  post: 5d42a0fbaf5a9e1f6d9b04d5,
  createdAt: 2019-08-01T08:52:02.799Z,
  updatedAt: 2019-08-01T08:59:18.686Z,
  __v: 2
}
```

### Delete a comment
```
DELETE
http://localhost:3000/comments/delete?post={postId}&commentid={commentId}
Headers: 
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDM0YjY0YTZiM2UzZTIxNjZhMGE5ODYiLCJ1c2VybmFtZSI6ImZpbGJlcnQxIiwiZW1haWwiOiJmaWxiZXJ0MUBtYWlsLmNvbSIsImlhdCI6MTU2MzczNTk1MiwiZXhwIjoxNTYzNzU3NTUyfQ.tu0aOvkkU5z7z2XQMjQU3QLYMXAfY9APndUftGvQrSw"
}
```

```
{deletedCount: 1}
```

### Edit a comment
```
POST
http://localhost:3000/comments/edit?commentid={commentId}
Headers: 
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDM0YjY0YTZiM2UzZTIxNjZhMGE5ODYiLCJ1c2VybmFtZSI6ImZpbGJlcnQxIiwiZW1haWwiOiJmaWxiZXJ0MUBtYWlsLmNvbSIsImlhdCI6MTU2MzczNTk1MiwiZXhwIjoxNTYzNzU3NTUyfQ.tu0aOvkkU5z7z2XQMjQU3QLYMXAfY9APndUftGvQrSw"
}
Body:
{
    description: "Edited"
}
```

```
{
  upvotes: [ 5d41231340457c1bdf8fafde ],
  downvotes: [],
  _id: 5d42a832bab6992164e6d0c7,
  description: 'Edited',
  author: 5d41231340457c1bdf8fafde,
  post: 5d42a0fbaf5a9e1f6d9b04d5,
  createdAt: 2019-08-01T08:52:02.799Z,
  updatedAt: 2019-08-01T09:07:34.346Z,
  __v: 2
}
```

## Error Cases

```
400: BAD REQUEST
Usually happens when user made a bad request. eg: failing to fill in all the required fields or filling an invalid input type 
{
    code: 400,
    message: (Error Message) 
}
```

```
401: UNAUTHORIZED
Usually happens when user is not authorized to make an action. eg: Attempting to create an article without loggin in first
{
    code: 401,
    message: (Error Message)
}
```

```
404: NOT FOUND
Usually happens when user is making a request to a path that does not exist
{
    code: 404,
    message: (Error Message)
}
```

```
500: INTERNAL SERVER ERROR
Happens when there is an error on the backend side
{
    code: 500,
    message: Internal Server Error
}
```