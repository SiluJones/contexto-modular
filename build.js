// build.js — gera o index.html "bundled" a partir do template + modulos.
// Filosofia (lastro da pesquisa): build BURRO, ordem EXPLICITA via manifesto, falha RUIDOSA.
// Replace literal com split/join (nao interpreta '$' dos template-literals). Zero dependencia.
const fs = require("fs");
const path = require("path");

const manifest = JSON.parse(fs.readFileSync("build-manifest.json", "utf8"));
let out = fs.readFileSync(manifest.template, "utf8");

for (const mod of manifest.modules) {
  if (!fs.existsSync(mod.file)) throw new Error("FALHA: modulo ausente -> " + mod.file);
  const count = out.split(mod.marker).length - 1;
  if (count !== 1) throw new Error("FALHA: marcador '" + mod.marker + "' aparece " + count + "x (esperado 1)");
  const content = fs.readFileSync(mod.file, "utf8");
  out = out.split(mod.marker).join(content); // literal, seguro com '$'
}

// nenhum marcador pode sobrar
const left = out.match(/\/\/__KCU_NICHE:[a-z]+__\/\//g);
if (left) throw new Error("FALHA: marcadores nao resolvidos -> " + left.join(", "));

fs.mkdirSync(path.dirname(manifest.output), { recursive: true });
fs.writeFileSync(manifest.output, out);
console.log("OK: " + manifest.output + " (" + Buffer.byteLength(out, "utf8") + " bytes) a partir de " +
  manifest.modules.length + " modulo(s) + template.");
