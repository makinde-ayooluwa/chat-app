#!/usr/bin/env node

/**
 * Expo SDK 54 reset-project script
 * Moves existing app files to app-example and creates a fresh app folder.
 */

const fs = require("fs");
const path = require("path");

const root = process.cwd();

const folders = [
  "app",
  "components",
  "constants",
  "hooks",
];

const appExample = path.join(root, "app-example");

function moveFolder(folder) {
  const source = path.join(root, folder);

  if (!fs.existsSync(source)) return;

  const destination = path.join(appExample, folder);

  fs.renameSync(source, destination);
  console.log(`Moved ${folder} → app-example/${folder}`);
}

console.log("🧹 Resetting project...");

if (!fs.existsSync(appExample)) {
  fs.mkdirSync(appExample);
}

// Move old folders
folders.forEach(moveFolder);

// Create new app folder
const appDir = path.join(root, "app");

if (!fs.existsSync(appDir)) {
  fs.mkdirSync(appDir);
}


// Create index.tsx
fs.writeFileSync(
  path.join(appDir, "index.jsx"),
`import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to start building your app.</Text>
    </View>
  );
}
`
);


// Create _layout.tsx
fs.writeFileSync(
  path.join(appDir, "_layout.jsx"),
`import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
`
);

console.log("✅ Reset complete!");
console.log("📁 Your old files are inside app-example/");
console.log("🚀 Start coding from app/index.tsx");