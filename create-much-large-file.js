const { writeFileSync } = require('fs')

for (let i = 0; i < 100000; i++) {
  writeFileSync('./content/largest-file.txt', `This is a huge file ${i}\n`, {
    flag: 'a',
  })
}
