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