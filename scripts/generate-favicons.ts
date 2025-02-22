import { FaviconSettings, MasterIcon, generateFaviconFiles, generateFaviconHtml } from '@realfavicongenerator/generate-favicon';
import { getNodeImageAdapter, loadAndConvertToSvg } from "@realfavicongenerator/image-adapter-node";
import fs from 'fs/promises';
import path from 'path';

async function generateFavicons() {
  const imageAdapter = await getNodeImageAdapter();

  // Load the master icon from static/favicon.svg
  const masterIcon: MasterIcon = {
    icon: await loadAndConvertToSvg("static/favicon.svg"),
  }

  const faviconSettings: FaviconSettings = {
    icon: {
      desktop: {
        regularIconTransformation: {
          type: "background",
          backgroundColor: "#ffffff",
          backgroundRadius: 0.7,
          imageScale: 0.7,
        },
        darkIconType: "none",
      },
      touch: {
        transformation: {
          type: "background",
          backgroundColor: "#ffffff",
          backgroundRadius: 0,
          imageScale: 0.7,
        },
        appTitle: "FP"
      },
      webAppManifest: {
        transformation: {
          type: "background",
          backgroundColor: "#ffffff",
          backgroundRadius: 0,
          imageScale: 0.7,
        },
        backgroundColor: "#ffffff",
        themeColor: "#ffffff",
        name: "FP",
        shortName: "FP"
      }
    },
    path: "/assets/favicons/",
  };

  // Generate favicon files
  const files = await generateFaviconFiles(masterIcon, faviconSettings, imageAdapter);

  // Ensure the output directory exists
  await fs.mkdir('static/assets/favicons', { recursive: true });

  // Save the generated files
  for (const [filename, content] of Object.entries(files)) {
    await fs.writeFile(
      path.join('static/assets/favicons', filename),
      content
    );
  }

  // Generate and save HTML
  const html = await generateFaviconHtml(faviconSettings);
  return html;
}

generateFavicons().catch(console.error); 