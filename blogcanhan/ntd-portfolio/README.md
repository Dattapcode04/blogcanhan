# Blog Cá Nhân - Personal Blog

Trang web blog cá nhân với thiết kế hiện đại, responsive và dễ sử dụng.

## 📁 Cấu trúc thư mục

```
ntd-portfolio/
│
├── index.html          # Trang chủ
├── assets/
│   ├── css/
│   │   └── style.css   # File CSS chính
│   │
│   ├── js/
│   │   └── main.js     # File JavaScript chính
│   │
│   └── images/
│       ├── avatar.png      # Ảnh đại diện của bạn
│       ├── projects/       # Ảnh dự án
│       │   ├── project-1.jpg
│       │   └── ...
│       └── blog/           # Ảnh bài viết
│           ├── post-1.jpg
│           └── ...
│
└── README.md           # File hướng dẫn này
```

## 🚀 Cách sử dụng

### 1. Thêm ảnh đại diện

Đặt ảnh đại diện của bạn vào thư mục `assets/images/` với tên `avatar.png`. 
Nếu không có ảnh, website sẽ tự động hiển thị placeholder.

**Lưu ý:** 
- Kích thước ảnh khuyến nghị: 500x500px hoặc lớn hơn
- Định dạng: PNG, JPG, hoặc JPEG
- Để thay đổi tên file, cập nhật đường dẫn trong `index.html` (dòng có `src="assets/images/avatar.png"`)

### 2. Mở website

Đơn giản mở file `index.html` trong trình duyệt web của bạn. Bạn có thể:
- Double-click vào file `index.html`
- Hoặc sử dụng Live Server extension trong VS Code
- Hoặc sử dụng bất kỳ local server nào

### 3. Tùy chỉnh nội dung

#### Thay đổi thông tin cá nhân:
- Mở file `index.html`
- Tìm và chỉnh sửa phần "About" (khoảng dòng 100-110)
- Thay đổi tên, mô tả theo ý bạn

#### Thêm dự án (Projects):
1. **Thêm ảnh dự án:**
   - Đặt ảnh vào `assets/images/projects/` với tên như `project-1.jpg`, `project-2.jpg`, v.v.
   - Kích thước khuyến nghị: 800x600px

2. **Thêm dự án vào website:**
   - Mở file `index.html`
   - Tìm phần `<!-- Projects Section -->` (khoảng dòng 91)
   - Copy toàn bộ `<article class="project-card">...</article>` từ PROJECT 1
   - Paste và chỉnh sửa các thông tin:
     - `src="assets/images/projects/project-1.jpg"` → đường dẫn ảnh dự án
     - `project-category` → thể loại (AI/ML, Web App, Mobile App, v.v.)
     - `project-title` → tên dự án
     - `project-description` → mô tả ngắn
     - `tech-tag` → các công nghệ sử dụng (thêm/bớt tags)
     - `project-link-demo` → link demo (hoặc `#` nếu chưa có)
     - `project-link-github` → link GitHub (hoặc `#` nếu chưa có)

#### Thêm bài viết blog:
1. **Thêm ảnh bài viết:**
   - Đặt ảnh vào `assets/images/blog/` với tên như `post-1.jpg`, `post-2.jpg`, v.v.
   - Kích thước khuyến nghị: 800x400px

2. **Thêm bài viết vào website:**
   - Mở file `index.html`
   - Tìm phần `<!-- Blog Section -->` (sau Projects Section)
   - Copy toàn bộ `<article class="blog-card">...</article>` từ BLOG POST 1
   - Paste và chỉnh sửa các thông tin:
     - `src="assets/images/blog/post-1.jpg"` → đường dẫn ảnh bài viết
     - `blog-date` → ngày tháng đăng bài
     - `blog-title` → tiêu đề bài viết
     - `blog-excerpt` → đoạn tóm tắt ngắn
     - `blog-link` → link đến bài viết đầy đủ

#### Thay đổi màu sắc:
- Mở file `assets/css/style.css`
- Tìm phần `:root` ở đầu file
- Thay đổi các biến màu theo ý bạn:
  ```css
  :root {
      --primary-color: #4a5568;
      --secondary-color: #718096;
      --accent-color: #2d3748;
      /* ... */
  }
  ```

#### Cập nhật thông tin liên hệ:
- Tìm phần "Contact Section" trong `index.html`
- Cập nhật số điện thoại, email, và link mạng xã hội

## 🎨 Tính năng

- ✅ **Responsive Design**: Tự động điều chỉnh trên mọi thiết bị
- ✅ **Smooth Scrolling**: Cuộn mượt mà giữa các phần
- ✅ **Active Navigation**: Highlight phần đang xem
- ✅ **Mobile Menu**: Menu điều hướng cho mobile
- ✅ **Form Validation**: Kiểm tra dữ liệu form
- ✅ **Fade-in Animations**: Hiệu ứng xuất hiện mượt mà
- ✅ **Modern UI**: Thiết kế hiện đại, đẹp mắt
- ✅ **Projects Section**: Hiển thị dự án với overlay và tech tags
- ✅ **Blog Section**: Hiển thị bài viết với ảnh và excerpt

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: ≤ 480px

## 🔧 Tùy chỉnh nâng cao

### Thêm Google Analytics:
Thêm vào phần `<head>` của `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
```

### Kết nối với Backend:
Trong file `assets/js/main.js`, tìm các hàm xử lý form và thay thế phần `alert()` bằng code gửi dữ liệu đến server của bạn.

### Thêm Blog Posts từ JSON:
Bạn có thể tạo file `posts.json` và load động các bài viết thay vì hardcode trong HTML.

## 📝 Ghi chú

- Website sử dụng Google Fonts (Inter) - cần kết nối internet để load font
- Tất cả các form hiện tại chỉ hiển thị alert, bạn cần tích hợp với backend để xử lý thực sự
- Ảnh avatar sẽ tự động fallback về placeholder nếu không tìm thấy file

## 🌐 Deploy

Bạn có thể deploy website này lên:
- **Netlify**: Kéo thả thư mục vào Netlify
- **Vercel**: Kết nối với GitHub repository
- **GitHub Pages**: Push code lên GitHub và bật Pages
- **Bất kỳ hosting static nào khác**

## 📄 License

Tự do sử dụng cho mục đích cá nhân và thương mại.

---

**Chúc bạn có một blog đẹp! 🎉**

