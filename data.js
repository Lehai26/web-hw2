// data.js : 내 영화 10편 데이터 / 레탄하이(2551017)) 
// 영화 한 편 = 객체 하나. 키 8개 : title, year, date, rating, poster




const movies = [
 { 
    type:"mine",
    rank: null,
    titles:"미션 파서블", 
    years:2021, 
    date:"2021-02-17",
    ratings:7.40,
    poster: "/xul24PvmhG1smXsAcOPCeeuKLUN.jpg" ,
    audiences:0},
 
 { 
    type: "mine",
    rank: null,
    titles: "미션 임파서블",
     years: 1996, 
     date: "1996-05-22",
    ratings: 7.03, 
    poster: "/6vDaYhZypJzd8r0NnSY2JPIX6Y5.jpg" ,
    audiences:0},

    

 {type: "mine",
    rank: null,
    
    titles: "미션",
     years: 1986, 
     date: "1986-09-06",
 ratings: 7.40, 
 poster: "/lZeIe0FsT4jKsVvJxg90ygHsmf2.jpg" ,
    audiences:0},
 
 { 
    type: "mine",
    rank: null,
    titles: "미션 임파서블: 로그네이션", 
    years: 2015,
     date: "2015-07-28",
 ratings: 7.20,
  poster: "/s2426EIW0arpjN0R0qErJfXQxZD.jpg" ,
    audiences:0},
 { 

    type: "mine",
    rank: null,
    titles: "미션 임파서블: 파이널 레코닝", 
    years: 2025, 
    date: "2025-05-17",
 ratings: 7.16,
  poster: "/iNJsojTGQoOWL9f9U23jsibONVu.jpg" ,
    audiences:0},

    { 
        
  type: "boxoffice",
    rank: 1,
    titles: "미션: 구출작전 ", 
    years: 2025, 
    date: "2025-09-04",
    ratings: 6.4,
    poster: "/2ceVO8N44bAllaevPl2CKyFejCv.jpg",
    audiences: 2248126},

     { 
        
    type: "boxoffice",
    rank: 2,
    titles: "라스트 미션 ", 
    years: 2018, 
    date: "2018-12-14",
    ratings: 6.8,
    poster: "/rgXoleAFRubQxoH4d1JeUAHHeM.jpg",
    audiences:3374510},

     { 
        
    type: "boxoffice",
    rank: 3,
    titles: " 미션 ", 
    years: 2024, 
    date: "2024-11-30",
    ratings: 7.1,
    poster: "/gHQTg7KgC7VPMcy6f6zfJc8fu34.jpg",
    audiences:104874},

{ 
        
    type: "boxoffice",
    rank: 4,
    titles: " 미션 임파서블: 폴아웃 ", 
    years: 2018, 
    date: "2018-07-25",
    ratings: 7.4,
    poster: "/u8gdbmvbypmVmoCJyPkBiJyvAvv.jpg",
    audiences: 1999477},

    { 
        
    type: "boxoffice",
    rank: 5,
    titles: " 트랜스포터: 라스트 미션 ", 
    years: 2008, 
    date: "2008-11-26",
    ratings: 6.1,
    poster: "/ai5gzHA5uWT0krEXrMfepdmJ6Qg.jpg",
    audiences:77153},


];


// ===== Part A : 배열 4개 =====

const titles = [
"미션 파서블",
 "미션 임파서블",
"미션",
 "미션 임파서블: 로그네이션", 
 "미션 임파서블: 파이널 레코닝", 
 "미션: 구출작전 ", 
 "라스트 미션 ",
" 미션 ", 
" 미션 임파서블: 폴아웃 ", 
 " 트랜스포터: 라스트 미션 ", 
];

const ratings = [
    7.40,
    7.03,
    7.40,
    7.20,
    7.16,
    6.4,
    6.8,
    7.1,
    7.4,
    6.1
];

const years = [
    2021,
    1996,
    1986,
    2015,
    2025,
    2025,
    2018,
    2024,
    2018,
    2008
];

const audiences = [
    0,
    0,
    0,
    0,
    0,
    2248126,
    3374510,
    104874,
    1999477,
    77153
];

