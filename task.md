## Error Type
Build Error

## Error Message
Error evaluating Node.js code

## Build Output
./app/globals.css
Error evaluating Node.js code
CssSyntaxError: G:\Godivatech\TrueWaves\truewaves scaff\website\app\globals.css:100:1: Unexpected }
    [at Input.error (turbopack:///[project]/node_modules/postcss/lib/input.js:135:16)]
    [at Parser.unexpectedClose (turbopack:///[project]/node_modules/postcss/lib/parser.js:587:22)]
    [at Parser.end (turbopack:///[project]/node_modules/postcss/lib/parser.js:330:12)]
    [at Parser.parse (turbopack:///[project]/node_modules/postcss/lib/parser.js:456:16)]
    [at parser (turbopack:///[project]/node_modules/postcss/lib/parse.js:11:12)]
    [at new LazyResult (turbopack:///[project]/node_modules/postcss/lib/lazy-result.js:165:16)]
    [at Processor.process (turbopack:///[project]/node_modules/postcss/lib/processor.js:53:14)]
    [at transform (turbopack:///[turbopack-node]/transforms/postcss.ts:70:51)]
    [at run (turbopack:///[turbopack-node]/child_process/evaluate.ts:89:29)]
    [at run (turbopack:///[turbopack-node]/child_process/evaluate.ts:112:11)]

Import trace:
  Client Component Browser:
    ./app/globals.css [Client Component Browser]
    ./app/layout.tsx [Server Component]

Next.js version: 16.2.4 (Turbopack)
