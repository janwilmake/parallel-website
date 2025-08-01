import { readFile, writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import { dirname } from "path";

async function fetchAndSaveUrls() {
  try {
    // Read the README.md file
    const readmeContent = await readFile("urls.md", "utf-8");

    // Split into lines and filter out empty lines
    const urls = readmeContent
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line && line.startsWith("http"));

    console.log(`Found ${urls.length} URLs to fetch`);

    // Process each URL
    for (const url of urls) {
      try {
        console.log(`Fetching: ${url}`);

        // Fetch the URL
        const response = await fetch("https://r.jina.ai/" + url);

        if (!response.ok) {
          console.error(
            `Failed to fetch ${url}: ${response.status} ${response.statusText}`
          );
          continue;
        }

        // Get the content
        const content = await response.text();

        // Extract the last segment of the pathname
        const urlObj = new URL(url);
        const lastSegment = urlObj.pathname.slice(1) || "index";
        const filename = `${lastSegment}.md`;

        // Ensure the directory exists
        const dir = dirname(filename);
        if (dir !== "." && !existsSync(dir)) {
          await mkdir(dir, { recursive: true });
          console.log(`Created directory: ${dir}`);
        }

        // Save to file
        await writeFile(filename, content, "utf-8");
        console.log(`Saved: ${filename}`);
      } catch (error) {
        console.error(`Error processing ${url}:`, error.message);
      }
    }

    console.log("Finished processing all URLs");
  } catch (error) {
    console.error("Error reading README.md:", error.message);
  }
}

// Run the script
fetchAndSaveUrls();
