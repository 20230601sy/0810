export const AUTHORITIES = [
  { 
    id : 0,
    loginIdPwd : { id : '', pwd : '' },
    loginState : "logout", 
    icons : [ 
              { className : 'fa-user', navTarget : '/login' },
              { className : 'fa-cart-shopping', navTarget : '/login' },
            ]
  },
  { 
    id : 1, 
    loginIdPwd : { id : 'user', pwd : '1234' },
    loginState : 'user', 
    icons : [ 
      { className : 'fa-user', navTarget : '/mypage' },
      { className : 'fa-cart-shopping', navTarget : '/cart' },
    ]
  }, 
  { 
    id : 2, 
    loginIdPwd : { id : 'manager', pwd : '1234' },
    loginState : 'manager',
    icons : [ 
      { className : 'fa-list-check', navTarget : '/login' }, // 수정전
      { className : 'fa-chart-line', navTarget : '/login' }, // 수정전
    ]
  }, 
  { 
    id : 3,
    loginIdPwd : { id : 'admin', pwd : '1234' },
    loginState : "admin", 
    icons : [ 
      { className : 'fa-crown', navTarget : '/login' }, // 수정전
      { className : 'fa-chart-line', navTarget : '/login' }, // 수정전
    ]
  }
]