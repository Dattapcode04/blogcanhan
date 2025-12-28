# Hướng Dẫn Thêm Ảnh

## Cấu trúc thư mục

```
images/
├── avatar.png          # Ảnh đại diện của bạn (500x500px khuyến nghị)
├── projects/           # Ảnh dự án
│   ├── project-1.jpg
│   ├── project-2.jpg
│   └── project-3.jpg
└── blog/               # Ảnh bài viết blog
    ├── post-1.jpg
    ├── post-2.jpg
    └── post-3.jpg
```

## Hướng dẫn

### 1. Ảnh đại diện (avatar.png)
- Đặt ảnh của bạn vào thư mục `images/`
- Tên file: `avatar.png` hoặc `avatar.jpg`
- Kích thước khuyến nghị: 500x500px hoặc lớn hơn
- Định dạng: PNG, JPG, JPEG

### 2. Ảnh dự án (projects/)
- Đặt ảnh dự án vào thư mục `images/projects/`
- Tên file: `project-1.jpg`, `project-2.jpg`, v.v.
- Kích thước khuyến nghị: 800x600px hoặc tỷ lệ 4:3
- Định dạng: JPG, PNG
- Sau đó cập nhật đường dẫn trong `index.html`:
  ```html
  <img src="assets/images/projects/project-1.jpg" alt="Project 1" />
  ```

### 3. Ảnh bài viết blog (blog/)
- Đặt ảnh bài viết vào thư mục `images/blog/`
- Tên file: `post-1.jpg`, `post-2.jpg`, v.v.
- Kích thước khuyến nghị: 800x400px hoặc tỷ lệ 2:1
- Định dạng: JPG, PNG
- Sau đó cập nhật đường dẫn trong `index.html`:
  ```html
  <img src="assets/images/blog/post-1.jpg" alt="Blog Post 1" />
  ```

## Lưu ý

- Nếu ảnh không tồn tại, website sẽ tự động hiển thị placeholder
- Nên nén ảnh để tối ưu tốc độ tải trang
- Sử dụng công cụ như TinyPNG hoặc ImageOptim để giảm kích thước file

