// p115.mjs - file copy
import fs from 'fs';

fs.readFile('mpi-info.txt', 'utf8', (err, data)=>{
  if (err) throw err;
  // at this moment, file read is done
  // `data` contains content of the input file
  fs.writeFile('copy-mpi-info.txt', data, 'utf8', (err)=>{
    if (err) throw err;
  });
});
