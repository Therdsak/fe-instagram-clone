# Instagram Clone

โปรเจคนี้เป็นการทำ Instagram Clone โดยใช้ React เป็น frontend และมีการดึงข้อมูล Pokemon API ผ่าน backend (localhost:3000/api/pokemons) เพื่อแสดงข้อมูลในหน้า Feed

---

## Features

- แสดง Feed ของโพสต์ที่มีข้อมูล Pokemon
- มีระบบ Pagination สำหรับโหลดข้อมูลแบบแบ่งหน้า (Pagination)
- การดึงข้อมูลแบบ Async/Await ผ่าน API ภายในโปรเจค
- มีหน้า AuthPage สำหรับระบบ Authentication (ยังไม่แสดงในภาพแต่มีไฟล์ในโครงสร้าง)
- ใช้ React กับ Redux Toolkit สำหรับการจัดการสถานะของแอป
- มีการใช้ ESLint เพื่อตรวจสอบคุณภาพของโค้ด

---

## วิธีการรันโปรเจค

1. Clone โปรเจคนี้มาที่เครื่องของคุณ



```bash
git clone https://github.com/Therdsak/fe-instagram-clone.git
cd instagram-clone
```

2. ติดตั้ง dependencies ด้วยคำสั่ง


```bash
npm install
```


3. รัน backend server (สมมติ backend รันที่ port 3000)


```bash
npm run backend
```


4. รัน frontend


```bash
npm start
```

5. เปิดเว็บเบราว์เซอร์แล้วเข้าไปที่

```bash
http://localhost:3000
```

## โครงสร้างโปรเจค 

```
instagram-clone/
│
├── public/                 # ไฟล์สาธารณะ เช่น index.html, รูปภาพ
├── src/
│   ├── api/                # โค้ดสำหรับเรียก API ต่างๆ (เช่น fetchPokemons.ts)
│   ├── components/         # Components ของ React เช่น Feed, Header, Post
│   ├── pages/              # หน้าเพจหลัก เช่น AuthPage
│   ├── store/              # Redux store และ slice ต่างๆ สำหรับ state management
│   ├── App.js              # Component หลักของโปรเจค
│   ├── index.js            # จุดเริ่มต้นของ React app
│   ├── App.css             # CSS หลักของโปรเจค
│   └── index.css           # CSS เริ่มต้น
├── package.json            # ข้อมูลโปรเจคและ dependencies
├── README.md               # ไฟล์นี้
└── .gitignore              # ไฟล์กำหนดว่าไฟล์ไหนไม่ต้องถูก git ติดตาม


```

## การใช้งาน

```
- กด double click ที่รูปจะเป็นการ Like
- กด Like หรือ Share ระบบจะนำไป login ก่อนเสมอ
- account test email : test@gmail.com , password : 1234
```