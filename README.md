Debouncing

- typing slow:200ms
- typing fast:50ms

performance:

- Iphone pro max =14 letters API calls\*1000=14000
- with debouncing: 3 letters API calls\*1000=3000

Debouncing with 200ms:

- if difference between 2 keystrokes is < 200ms no api call will be made
- if difference between 2 keystrokes is >200ms api call for each keystroke will be made

Nested Comments-

- <CommentContiner/> -container to render commentList
- <CommentList/> -renders comment + it replies recursively
-     <Comment/> -single comment
  recursion of CommentList component done to recursively show comment replies
