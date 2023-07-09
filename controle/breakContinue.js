const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
  if (x == 5) {
    break //encerra o escopo mais próximo que no caso seria o for
  }

  console.log(`${x} = ${nums[x]}`)
}

for (let y in nums) {
  if (y == 5) {
    continue //pula a condição, e segue a repetição do escopo for
  }

  console.log(`${y} = ${nums[y]}`)
}
