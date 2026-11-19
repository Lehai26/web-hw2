// ===== Part A =====


let sumA =0;
for(let i=0;i<ratings.length;i++)
{
    sumA += ratings[i];
}

const avgA = sumA/ratings.length;
console.log(" A1 평균 평점:",avgA);

let maxA = 0;
for(let i=0;i<ratings.length;i++){
    if(ratings[i]>ratings[maxA]){
        maxA=i;
    }
}
console.log(" A2 최고 평점:",titles[maxA],ratings[maxA]);

let CountA = 0;
for(let i=0;i<ratings.length;i++){
    if(ratings[i]>=8.0){
        CountA++;
    }
}
console.log(" A3 8점 이상: ",CountA,"편");


let d2020A= 0;
let d2010A = 0;
let d2000A = 0;
let olderA = 0;
for(let i= 0;i<years.length;i++){
   const decade = years[i] - (years[i] % 10);
   switch (decade) {
  case 2020:
    d2020A++;
    break;
  case 2010:
    d2010A++;
    break;
    case 2000:
        d2000A++;
        break; 
  default:
    olderA++;
    break;
}
  
}
console.log(" A4 2020년대 ",d2020A,"편, 2010년대 ",d2010A,"편, 2000년대 ",d2000A,"편, 그 이전 ",olderA,"편");

let bigA = "";
for(let i = 0;i<audiences.length;i++){
    if (audiences[i] >= 180) {
  bigA = bigA + titles[i] + " ";
}
}
if(bigA ===""){
    bigA = "없음";
}
console.log(" A5 관객 1000만 이상:",bigA);

// ===== Part B =====

// 이름 : 입력 ⇒ 출력
function formatNumber(n){
    return Number(n).toLocaleString("ko-KR") ;
 }


 function average(list) { 
    let sumB = 0;
    for(let i=0;i<list.length;i++)
{
   sumB = sumB + list[i].rating;
}
 return sumB / list.length;
 }

 function best(list) {
    let topB = 0;
    for(let i = 0;i<list.length;i++){
        if(list[i].rating > list[topB].rating){
            topB = i;
        }
    }
    return list[topB];
 }

 function yearsSince(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    return now.getFullYear() - date.getFullYear();
 }

 function filterByRating(list, min) {
    const filtered = [];
    for(let i = 0;i<list.length;i++){
        if(list[i].rating >= min){
            filtered.push(list[i]);
        }
    }
    return filtered;
 }

 function search(list, keyword) { 
    const results = [];
    const w = keyword.trim().toLowerCase();
    for(let i = 0;i<list.length;i++){
        if(list[i].title.includes(w)){
            results.push(list[i]);
        }
    }
    return results;
 }


   function sortBy(list, key, desc = false) {
    const sign = desc ? -1 : 1;

    return [...list].sort((a, b) => {
        if (typeof a[key] === "string") {
            return sign * a[key].localeCompare(b[key]);
        } else {
            return sign * (a[key] - b[key]);
        }
    });
}


const line1 = "전체 10편, 평균 평점 "+average(movies).toFixed(1)+"점";
const bestMovie = best(movies);
const line2 = " 최고 " + bestMovie.title + " (" + bestMovie.rating + "점)"+" / 개봉 "+ yearsSince(bestMovie.date)+
"년 전";
const topAudienceMovie = sortBy(movies, "audience", true)[0];
const line3 = "관객 1위: "+ topAudienceMovie.title + " (누적 "+ formatNumber(topAudienceMovie.audience)+"명)/ 개봉 "+ yearsSince(topAudienceMovie.date)+"년 전";
document.getElementById("out").textContent = line1 + "\n" + line2 + "\n" + line3;