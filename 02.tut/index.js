const fs = require('fs');
const path = require('path');
const fsPromist = require('fs').promises;

const fileOps = async () => { 
  try {
    const data = await fsPromist.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
    console.log(data);
    await fsPromist.unlink(path.join(__dirname, 'files', 'starter.txt'));
    await fsPromist.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
    await fsPromist.appendFile(
      path.join(__dirname, 'files', 'promiseWrite.txt'),
      '\n\n nice to meet you'
    );
    await fsPromist.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'));
    const newData = await fsPromist.readFile(
      path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8'
    );
    console.log(newData);
  } catch (err) { 
    console.log(err);
  }
}
fileOps();

// fs.readFile(path.join(__dirname, 'files', 'starter.txt'),'utf8', (err, data) => { 
//   if (err) throw err;
//   console.log(data)
// })

console.log('hello...')


// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'nice to meet you.', (err) => {
//   if (err) throw err;
//   console.log('write complete');

//   fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\n yes it is.', (err) => {
//     if (err) throw err;
//     console.log('append complete');

//     fs.rename(
//       path.join(__dirname, 'files', 'reply.txt'),
//       path.join(__dirname, 'files', 'newreply.txt'),
//       (err) => {
//         if (err) throw err;
//         console.log('rename complete');
//       }
//     );
//   });
// });



// exit on uncaught errors
process.on('uncaughtExcepthin', err => { 
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1)
})