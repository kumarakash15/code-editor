const htmlInput = document.getElementById("html-code");
const cssInput = document.getElementById("css-code");
const jsInput = document.getElementById("js-code");
const runBtn = document.getElementById("runBtn");
const clearBtn = document.getElementById("clearBtn");
const output = document.getElementById("output");

// Load saved code from localStorage
window.addEventListener("DOMContentLoaded", () => {
  htmlInput.value = localStorage.getItem("html-code") || "";
  cssInput.value = localStorage.getItem("css-code") || "";
  jsInput.value = localStorage.getItem("js-code") || "";
});

// Save code on input change
[htmlInput, cssInput, jsInput].forEach((input, index) => {
  input.addEventListener("input", () => {
    localStorage.setItem("html-code", htmlInput.value);
    localStorage.setItem("css-code", cssInput.value);
    localStorage.setItem("js-code", jsInput.value);
  });
});

// Run code
runBtn.addEventListener("click", () => {
  const html = htmlInput.value;
  const css = cssInput.value;
  const js = jsInput.value;

  const fullCode = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}<\/script>
      </body>
    </html>
  `;

  output.srcdoc = fullCode;
});

// Clear all code
clearBtn.addEventListener("click", () => {
  htmlInput.value = "";
  cssInput.value = "";
  jsInput.value = "";
  output.srcdoc = "";

  localStorage.removeItem("html-code");
  localStorage.removeItem("css-code");
  localStorage.removeItem("js-code");
});
