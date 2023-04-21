async function saveSnippets() {
  console.log('saveSnippets');
  const pres = document.body.getElementsByTagName("pre");
  const snippets = Array.from(pres).map(x => x.textContent);
  for (const snippet of snippets) {
    const prefix = /^[^ ]*Copy code/;
    if (prefix.test(snippet) && snippet.includes('function ')) {
      try {
        const snippet2 = snippet.replace(prefix, '');
        const functions = extractFunctions(snippet2);
        for (const fun of functions) {
          functionContentByName[fun.name] = fun.body;
        }
      } catch (e) {
        console.log("Error", e, snippet);
      }
    }
  }
  for (const funName in functionContentByName) {
    const body = functionContentByName[funName];
    if (seen[funName] !== body) {
      const filename = "function_" + funName + ".js";
      await uploadFileToServer(filename, body);
      seen[funName] = body;
      const preElement = document.getElementById("snippet-" + funName);
      blinkPreTag(preElement, 1000);
    }
  }
}