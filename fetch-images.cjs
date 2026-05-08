const https = require('https');
const fs = require('fs');

const urls = [
"https://postimg.cc/qztfwn89", "https://postimg.cc/HVJGz5QM", "https://postimg.cc/fJ34CXxr", "https://postimg.cc/rKd6jWS3", "https://postimg.cc/RN3rdfcY", "https://postimg.cc/xckr5HvD", "https://postimg.cc/VdSygMqP", "https://postimg.cc/ZCXGMRc7", "https://postimg.cc/7fjFW6Vt", "https://postimg.cc/bs47BJTB", "https://postimg.cc/6yFkm30P", "https://postimg.cc/7fjFW6Vc", "https://postimg.cc/PP0gRx49", "https://postimg.cc/bs47BJTK", "https://postimg.cc/N5Z3zM43", "https://postimg.cc/D8R9MZ6k", "https://postimg.cc/N5Z3zMDc", "https://postimg.cc/HVFqhxzm", "https://postimg.cc/nCNyPz2L", "https://postimg.cc/2VgsK6Gm", "https://postimg.cc/YhT5s9Rp", "https://postimg.cc/xcBw4C5j", "https://postimg.cc/TpBz4w0Y", "https://postimg.cc/ZCXGMRH5", "https://postimg.cc/fJ1GrLCL", "https://postimg.cc/mtKv5Djt", "https://postimg.cc/svbkNXmM", "https://postimg.cc/F7wMBRpd", "https://postimg.cc/xcBw4C5N", "https://postimg.cc/tsPKQjvR", "https://postimg.cc/bZb7chVN", "https://postimg.cc/hXxkWBZt", "https://postimg.cc/87W2QSXs", "https://postimg.cc/0zmTRsXN", "https://postimg.cc/FYcM54CR", "https://postimg.cc/VJMxQ8ZJ", "https://postimg.cc/cvYpySkr", "https://postimg.cc/186khQ7g", "https://postimg.cc/yD9M4HpR", "https://postimg.cc/0zmTRsX7", "https://postimg.cc/zyWsZr2F", "https://postimg.cc/gxRCFWtX", "https://postimg.cc/BjDr907K", "https://postimg.cc/pm8wbHc8", "https://postimg.cc/VJMxQ8Zj", "https://postimg.cc/pm8wbHcY", "https://postimg.cc/LJfcKpQD", "https://postimg.cc/sMSkdrHK", "https://postimg.cc/gxRCFWtN", "https://postimg.cc/mPMvfspX", "https://postimg.cc/0zmTRsXV", "https://postimg.cc/v49JFs2P", "https://postimg.cc/xk2W94BL", "https://postimg.cc/v1spGNC0", "https://postimg.cc/2qDPCKg4", "https://postimg.cc/v1spGNCL", "https://postimg.cc/HJgfThF9", "https://postimg.cc/NycWQzZ8", "https://postimg.cc/4KgrXSj1", "https://postimg.cc/NycWQzZD", "https://postimg.cc/qtT9p5Wj", "https://postimg.cc/PLjBdR03", "https://postimg.cc/KK2dmHC9", "https://postimg.cc/sBrt3NbN"
];

const fetchUrl = (url) => {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const match = data.match(/<a href="(https:\/\/i\.postimg\.cc\/[^"]+)"/);
        resolve({ url, direct: match ? match[1] : null });
      });
    }).on('error', () => resolve({ url, direct: null }));
  });
};

async function run() {
  const BATCH_SIZE = 10;
  const results = [];
  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    const batch = urls.slice(i, i + BATCH_SIZE);
    const promises = batch.map(fetchUrl);
    const batchRes = await Promise.all(promises);
    results.push(...batchRes);
  }
  fs.writeFileSync('image_mapping.json', JSON.stringify(results, null, 2));
  console.log("Mapping saved to image_mapping.json");
}
run();
