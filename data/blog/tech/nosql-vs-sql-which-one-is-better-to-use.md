---
title: SQL vs NoSQL database, đặt trên bàn cân về tốc độ
date: '2022-08-30'
tags: ['nosql', 'database', 'sql']
draft: false
summary: 'Chuyện là một phần đi phỏng vấn với vị trí Fresher Node.js Developer mình có được hỏi một
câu hỏi là: SQL và NoSQL thì cái nào nhanh hơn, khi nào nên dùng NoSQL và khi nào nên dùng SQL?'
---

Chuyện là một phần đi phỏng vấn với vị trí Fresher Node.js Developer mình có được hỏi một
câu hỏi là:

**"SQL và NoSQL database thì cái nào nhanh hơn, khi nào nên dùng NoSQL và khi nào nên dùng SQL?"**

và mình tự tin trả lời rằng **NoSQL DB nhanh hơn**, ừ thì cũng đúng nhưng cũng sai.
Để biết nó đúng và sai ở đâu thì chúng ta sẽ cùng nhau đi tìm hiểu nhé!

# Tổng quan

### SQL Database

- SQL database là một cơ sở dữ liệu quan hệ, dữ liệu được cấu trúc theo mô hình quan hệ (bảng với các cột, hàng).
- Trái tim của các mô hình quan hệ là SQL (Structed Query Langugue), nó là một ngôn ngữ dùng để lưu trữ, truy xuất thông
  tin trong bảng.

### NoSQL Database

- Lý thuyết của cái này thì khá mơ hồ, những cái nào không phải SQL database thì nó là NoSQL Database.
- Những NoSQL Database không tuân thủ theo một mô hình cụ thể nào, hiện nay có 4 mô hình căn bản của NOSQL khá nổi tiếng
  như:
  - **Key-value database**: Dữ liệu được lưu dưới dạng key-value, giúp cho dữ liệu dễ dàng lưu trữ, và sử dụng. Ví dụ
    như: _Redis, Berkeley DB, và Amazon DynamoDB, ..._
  - **Document database**: Dữ liệu được lưu trữ ở dạng như JSON or XML, với mỗi một document thì nó sẽ được gắn 1 key
    duy nhất, không bị giới hạn các trường hoặc các yếu tố khác. Ví dụ như _MongoDB, Couch DB, Base X,..._.
  - **Column-oriented databases**: Dữ liệu được lưu dưới dạng cột thay vid hàng, tạo cho dễ dàng truy vấn và tập hợp
    dữ liệu một các nhanh chóng. VD: _HBase, Bigtable, Cloudera,..._
  - **Graph database**: Dữ liệu được lưu trữ dưới cấu trúc graph để chỉ định làm thế nào dữ liệu có thể được kết nối
    với nhau. VD: Neo4J, InfiniteGraph.

# So sánh SQL database và NoSQL database.

Sau đây là bảng so sánh các điểm khác nhau giữa NOSQL database và NoSQL Database mà mình tìm hiểu được.

### Mô hình

Cơ sở dữ liệu SQL chủ yếu được gọi là Cơ sở dữ liệu quan hệ (RDBMS); trong khi cơ sở dữ liệu NoSQL chủ yếu được gọi là
cơ sở dữ liệu phi quan hệ hoặc phân tán.

### Ngôn ngữ

Cơ sở dữ liệu SQL định nghĩa và thao tác với ngôn ngữ truy vấn có cấu trúc dựa trên dữ liệu (SQL). Nhìn từ một phía,
ngôn ngữ này vô cùng mạnh mẽ. SQL là một trong những tùy chọn linh hoạt và được sử dụng rộng rãi nhất hiện có, điều này
làm cho nó trở thành một lựa chọn an toàn, đặc biệt cho các truy vấn phức tạp lớn.
Mặt khác, nó có thể bị hạn chế. SQL yêu cầu bạn sử dụng các lược đồ được xác định trước để xác định cấu trúc dữ liệu của
bạn trước khi bạn làm việc với nó.
Ngoài ra, tất cả dữ liệu của bạn phải theo cùng một cấu trúc.
Điều này đòi hỏi bạn phải biết được cấu trúc của các bảng trước khi thực hiện các hành động như truy vấn, cập nhật,...
.Một sự thay đổi trong cấu trúc sẽ vừa khó khăn vừa gây gián đoạn cho toàn bộ hệ thống của bạn.

Cơ sở dữ liệu NoSQL có lược đồ động cho dữ liệu phi cấu trúc.
Dữ liệu được lưu trữ theo nhiều cách có nghĩa là nó có thể được lưu ở dạng bảng, JSON, Key-value, Graph,...hay bất cứ
kiểu dữ liệu mà bạn mong muốn mà không cần biết trước cấu trúc của dữ liệu. Điều này tạo nên sự linh hoạt cho dữ liệu.

### Khả năng mở rộng

Trong hầu hết các tình huống, cơ sở dữ liệu SQL có thể mở rộng theo chiều dọc.
Điều này có nghĩa là bạn có thể tăng tải trên một máy chủ bằng cách tăng những thứ như RAM, CPU hoặc SSD.
Nhưng mặt khác, cơ sở dữ liệu NoSQL có thể mở rộng theo chiều ngang.
Điều này có nghĩa là bạn xử lý nhiều lưu lượng hơn bằng cách sharding hoặc thêm nhiều máy chủ hơn trong cơ sở dữ liệu
NoSQL của mình.
Nó tương tự như việc thêm nhiều tầng hơn vào cùng một tòa nhà so với việc thêm nhiều tòa nhà vào khu vực lân cận. Do đó,
NoSQL cuối cùng có thể trở nên lớn hơn và mạnh hơn, làm cho các cơ sở dữ liệu này trở thành lựa chọn ưu tiên cho các tập
dữ liệu lớn hoặc luôn thay đổi.

### Cấu trúc dữ liệu

Cơ sở dữ liệu SQL dựa trên bảng,
mặt khác, cơ sở dữ liệu NoSQL có thể là key-value, graph, document,... Điều này làm cho cơ sở dữ liệu SQL quan hệ trở
thành một lựa chọn tốt hơn cho các ứng dụng yêu cầu giao dịch nhiều hàng như hệ thống kế toán hoặc cho các hệ thống kế
thừa được xây dựng cho cấu trúc quan hệ.

### Thuộc tính theo sau

Cơ sở dữ liệu SQL tuân theo các thuộc tính ACID (Tính nguyên tử, Tính nhất quán, Tính cách ly và Độ bền) trong khi cơ sở
dữ liệu NoSQL tuân theo định lý Brewers CAP (Tính nhất quán, Tính khả dụng và Dung sai phân vùng).

# Kết luận:

**SQL**

- Dùng trong các hệ thống cần tính nhất quán, chặt chẽ trong dữ liệu như bank, sàn giao dịch,...
- Thích hợp cho các câu truy vấn phức tạp.
- Cộng đồng lớn.
- Khả năng mở rộng theo chiều ngang tăng RAM, CPU,...

**NOSQL**

- Dùng trong các hệ thống có dữ liệu lớn, không yêu cầu quá khắt khao và tính trặt trẽ của dữ liệu.
- Không thích hợp cho các truy vấn quá phức tạp. Tối ưu hoá cho việc tìm kiếm đơn thuần.
- Cộng đồng ít hơn SQL ( trong thời điểm mình viết bài này).
- Khả năng mở rộng theo chiều dọc ( tăng service thay vì tăng tài nguyên).
