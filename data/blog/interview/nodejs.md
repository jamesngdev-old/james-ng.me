---
title: 50+ câu hỏi phỏng vấn Node.js
date: '2022-08-30'
tags: ['interview', 'nodejs']
draft: true
summary: 'Tổng hợp những câu hỏi phỏng vấn về Node.js được phân chia theo từng phần. Đây là những câu hỏi mà mình sưu
tầm và đúc kết được sau nhiều lần đi phỏng vấn.'
---

Tổng hợp những câu hỏi phỏng vấn về Node.js được phân chia theo từng phần. Đây là những câu hỏi mà mình sưu
tầm và đúc kết được sau nhiều lần đi phỏng vấn.

## 1. Node.js là gì?

- Mã nguồn mở dành cho máy chủ ( hiểu đơn giản là nó được dùng bên phía backend)
- Xây dựng dựa trên nhân Chrome's V8 JavaScript Engine của Google.
- Có tính mở rộng cao (highly scalable).
- Hỗ event driven, non-blocking (bất đồng bộ) và môi trường khởi chạy trên đa nền tảng cho việc xây dựng các ứng dụng
  backend

## 2. Mô hình khởi chạy của Node.js

Node.js khởi chạy trong một tiến trình duy nhất và ứng dụng được viết bằng Node.js chỉ chạy duy nhất trong một luồng (
single thread) và
sử dụng ít tài nguyên hơn các nền tảng khác.

## 3. Tính năng nổi bật của Node.js

- Xử lý các tác vụ một cách đồng thời.
- Thực thi code nhanh: Bởi được xây dựng dựa trên V8 Engine của Google.
- Single Thread nhưng khả năng mở rộng cao.
- Cộng đồng người dùng lớn, nhiều thư viện hỗ trợ.

## 4. Buffer trong Node.js

Node.js có thêm một kiểu dữ liệu là Buffer, nó thường được dùng để lưu trữ dữ liệu dạng nhị phân, trong khi đọc file
hoặc nhận dữ liệu từ một
gói tin thông qua mạng.

## 5. Event Loop là gì? Cách hoạt động của Event Loop?

Phần này giải thích thì khá là dài, bạn lên youtube mà xem giải thích nhé. Cũng hay hỏi câu dạng dạng như này, đây là
một video mà mình tìm được
giải thích bằng tiếng Việt khá dễ hiểu:

- https://www.youtube.com/watch?v=64ASqMjj9_o&t=883s

## 6. Non Blocking và Blocking?

- **Non-Blocking**: Thực thi một hàm và ko cần đợi hàm đó chạy xong mà vẫn thực thi hàm tiếp theo.
- **Blocking**: Ngược lại với Non-blocking, thực thi một hàm mà phải đợi hàm đó chạy xong thì mới chạy hàm tiếp
  theo.

Xem ví dụ bên dưới để hiểu thêm:

```javascript
// Non-blocking
const fs = require('fs')
fs.readFile('/file.md', (err, data) => {
  if (err) throw err
})
console.log('Ko thèm care file đọc xong chưa. Vẫn hiển thị')

// Blocking
const fs = require('fs')
const data = fs.readFileSync('/file.md')
console.log('Đợi file đọc xong thì mới hiển thị')
```

## 7. Callback function là gì?

Callback function là một function được truyền vào làm tham số của một function khác. Khi tác vụ hoàn thành, callback
function sẽ được gọi.

Ví dụ:

```javascript
// Đây là một callback function .
const fs = require('fs')
fs.readFile('/file.md', (err, data) => {
  if (err) throw err
  console.log('File content: ', data)
})
```

Việc sử dụng callback concept sẽ giúp Node.js xử lý nhiều request cùng 1 lúc một cách nhanh hơn so với việc đợi từng
request hoàn thành theo cách thông thường.

## 7. Event EventEmitter trong Node.js?

EventEmiiter là môt class dùng để tương tác giữa các tối tượng trong Node.js. Nó được xử dụng để tạo và xử lý các event.

Tham khảo:

- https://github.com/learning-zone/nodejs-interview-questions
- https://www.simplilearn.com/tutorials/nodejs-tutorial/nodejs-interview-questions
