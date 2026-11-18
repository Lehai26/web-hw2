// ===== Part A =====
console.log(titles.length);
console.log(ratings.length);
console.log(years.length);
console.log(audiences.length);


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
console.log(" A3 8.0점 이상: 4편",CountA);