import { readFile, writeFile } from "fs/promises";
import { basename } from "path";

async function fetchAndSaveUrls() {
  try {
    // Read the README.md file
    const readmeContent = await readFile("README.md", "utf-8");

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
        const response = await fetch(url);

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
        const lastSegment = basename(urlObj.pathname) || "index";
        const filename = `${lastSegment}.md`;

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
