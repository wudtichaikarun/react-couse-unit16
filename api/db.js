export default {
  articles: [
    {
      id: 1,
      title: 'โหลดเว็บเร็วขึ้นไม่ยาก แค่ใช้ PurifyCSS',
      excerpt: 'ใช้ PurifyCSS เพื่อกรองเฉพาะ CSS ที่ใช้งานจริง โดยตัดส่วนที่ไม่ได้ใช้ออกไป เพื่อให้เว็บโหลดเร็วขึ้น',
      content: 'คุณเคยใช้ Twitter Bootstrap หรือไม่? \nเป็นที่ทราบกันดีว่า CSS Framework ไม่ว่าจะเป็น Twitter Bootstrap, Zurb Foundation หรือแม้กระทั่ง Pure CSS ที่ชื่อเหมือนจะผอมบาง แท้จริงแล้วบวมจนอืดเป็นช้างน้ำระยะสุดท้าย \nสมมติโค้ด HTML ของเรามีการเรียกใช้ button โดยใช้ Bootstrap ในการจัดสไตล์ดังนี้',
      comments: [
        {
          id: 1,
          userId: 2,
          articleId: 1,
          message: 'romantic 1',
          user: {
            id: 2,
            name: 'Romantic',
            email: 'ro@hotmail.com',
            isAdmin: false
          }
        },
        {
          id: 2,
          userId: 2,
          articleId: 1,
          message: 'romantic 1 comment 2',
          user: {
            id: 2,
            name: 'Romantic',
            email: 'ro@hotmail.com',
            isAdmin: false
          }
        }
      ]
    },
    {
      id: 2,
      title: 'GraphQL Best Practices: สร้าง GraphQL ให้คูลยังไง?',
      excerpt: 'เป็นที่ประจักษ์แล้วว่าบริษัทยักษ์ใหญ่หลายแห่งได้มีการใช้งาน GraphQL กันมากขึ้น ทั้ง Facebook (แหงหละ คิดเองแล้วไม่ใช้ได้ไง), Twitter, Github และบริษัทต่อไปอาจเป็นคุณ',
      content: 'เป็นที่ประจักษ์แล้วว่าบริษัทยักษ์ใหญ่หลายแห่งได้มีการใช้งาน GraphQL กันมากขึ้น ทั้ง Facebook (แหงหละ คิดเองแล้วไม่ใช้ได้ไง), Twitter, Github และบริษัทต่อไปอาจเป็นคุณ',
      comments: [
        {
          id: 2,
          userId: 2,
          articleId: 1,
          message: 'romantic 2',
          user: {
            id: 2,
            name: 'Romantic',
            email: 'ro@hotmail.com',
            isAdmin: false
          }
        }
      ]
    }
  ],
  users: [
    {
      id: 1,
      name: 'Romantic',
      email: 'romantic@gmail.com',
      isAdmin: true,
      password: '$2a$12$CPXZMzQhC9tp6DyBQoJu/uzzdu.gjwXwJ6Z6rJu1zS0S.El/fR3na'
    },
    {
      id: 2,
      name: 'Somchai',
      email: 'somchai@haha.com',
      isAdmin: false,
      password: '$2a$12$.rjS5eXZpVo3aC2TuRsV0.8qzBOVPM01zguiMTKwb1BYxIVR7PtQS'
    }
  ],
  comments: [
    { id: 1, userId: 1, articleId: 1, message: 'Lorem Ipsum' },
    { id: 2, userId: 2, articleId: 1, message: 'Lorem Ipsum' },
    { id: 3, userId: 1, articleId: 2, message: 'Lorem Ipsum' }
  ]
}
