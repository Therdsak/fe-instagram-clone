# Instagram Clone

โปรเจกต์นี้เป็นการสร้าง Instagram Clone ด้วย React, React Query และ TypeScript

## คุณสมบัติหลัก

- ดึงข้อมูล Pokemon API มาแสดงใน Feed
- ใช้ React Query สำหรับการจัดการข้อมูลและสถานะการโหลด
- มีระบบ Infinite Scroll (ในอนาคต)
- ระบบการล็อกอิน (กำลังพัฒนา)

## โครงสร้างโปรเจกต์

- `src/api/fetchPokemons.ts` - ฟังก์ชันสำหรับดึงข้อมูล Pokemon
- `src/components/Feed.js` - คอมโพเนนต์หลักสำหรับแสดง Feed
- `src/components/Post.js` - คอมโพเนนต์สำหรับโพสต์แต่ละโพสต์
- `src/pages/AuthPage.js` - หน้าล็อกอิน
- `src/store` - โฟลเดอร์สำหรับ Redux slice และ state management

## การติดตั้ง

1. คลอนโปรเจกต์นี้ลงในเครื่อง

```bash
git clone <url-โปรเจกต์ของคุณ>

npm install

npm start


เครื่องมือและไลบรารี

React

React Query

Redux Toolkit

TypeScript

ESLint

Prettier

ข้อควรระวัง

ปัจจุบันฟีเจอร์ Infinite Scroll ยังไม่เสร็จสมบูรณ์

มีการใช้งาน Pokemon API เป็นตัวอย่างการดึงข้อมูลจาก API 

ต้องรัน API Pokemon ที่เขียนเองก่อนเสมอ
```
