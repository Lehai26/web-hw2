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
console.log(" A2 최고 평점:",ratings[maxA],titles[maxA]);

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
console.log(" A5 관객 100만 이상:",bigA);