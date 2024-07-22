const fs = require("fs");
const path = require("path");
const glob = require("glob");
// let crypto = require("crypto");

const targetDirectory = __dirname; // Set the path to your pages directory

function extractIds(content) {
  const idRegex = /type="([^"]+)"/g;
  const ids = [];

  let match;

  while ((match = idRegex.exec(content)) !== null) {
    ids.push(match[1]);
  }

  return ids;
}

function extractProps(content) {
  console.log(content);
  const typeRegex = /type="([^"]+)"/g;
  const props = [];

  let match;

  while ((match = typeRegex.exec(content)) !== null) {
    props.push({
      type: match[1],
      id: `${match[1]}_${Math.floor(Math.random() * 100000000000000) + 1}`,
    });
  }

  return props;
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const props = extractProps(content);
  // console.log(ids);
  const components = props.map((item) => ({
    type: item.type,
    props: { id: item.id },
  }));

  return {
    content: components,
    root: { props: {} },
    zones: {},
  };
}

function generateJson() {
  const files = glob.sync(`../my-app/app/product-details/page.tsx`);
  const result = {};

  files.forEach((file) => {
    const relativePath = path.relative(targetDirectory, file);
    const dirPath = path.dirname(relativePath);
    const folderName = path.basename(dirPath);
    const jsonContent = processFile(file);
    // console.log(dirPath, jsonContent);

    result["/"] = jsonContent;
  });

  fs.writeFileSync("database.json", JSON.stringify(result, null, 2), "utf-8");
}

generateJson();
