const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const root = path.resolve(__dirname, "..");

const foldersToDelete = [
  "node_modules",
  ".expo",
  "dist",
  "web-build",
];

console.log("🧹 Resetting project...");

foldersToDelete.forEach((folder) => {
  const folderPath = path.join(root, folder);

  if (fs.existsSync(folderPath)) {
    console.log(`🗑️ Removing ${folder}...`);
    fs.rmSync(folderPath, { recursive: true, force: true });
  }
});

const lockFiles = [
  "package-lock.json",
  "yarn.lock",
  "pnpm-lock.yaml",
];

lockFiles.forEach((file) => {
  const filePath = path.join(root, file);

  if (fs.existsSync(filePath)) {
    console.log(`🗑️ Removing ${file}...`);
    fs.rmSync(filePath, { force: true });
  }
});

console.log("📦 Installing dependencies...");

try {
  execSync("npm install", {
    cwd: root,
    stdio: "inherit",
  });

  console.log("✅ Project reset complete!");
} catch (err) {
  console.error("❌ Failed to install dependencies.");
  process.exit(1);
}