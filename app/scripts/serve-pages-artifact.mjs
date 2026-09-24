import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { extname, resolve, sep } from 'node:path'

const dist = resolve(process.cwd(), 'dist')
const base = '/zapan'
const port = Number(process.env.PORT ?? 4175)

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml; charset=utf-8',
}

async function sendFile(response, filePath, statusCode = 200) {
  const body = await readFile(filePath)
  response.writeHead(statusCode, {
    'Cache-Control': 'no-store',
    'Content-Type': contentTypes[extname(filePath)] ?? 'application/octet-stream',
  })
  response.end(body)
}

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url ?? '/', 'http://127.0.0.1')
    const pathname = decodeURIComponent(url.pathname)

    if (pathname === base || pathname === `${base}/`) {
      await sendFile(response, resolve(dist, 'index.html'))
      return
    }

    if (!pathname.startsWith(`${base}/`)) {
      response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
      response.end('Not found')
      return
    }

    const relativePath = pathname.slice(base.length + 1)
    const candidate = resolve(dist, relativePath)
    const insideDist = candidate === dist || candidate.startsWith(`${dist}${sep}`)
    if (insideDist) {
      try {
        const info = await stat(candidate)
        if (info.isFile()) {
          await sendFile(response, candidate)
          return
        }
      } catch {
        // GitHub Pages falls through to 404.html for client-side routes.
      }
    }

    await sendFile(response, resolve(dist, '404.html'), 404)
  } catch (error) {
    response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' })
    response.end(error instanceof Error ? error.message : 'Server error')
  }
})

server.listen(port, '127.0.0.1', () => {
  console.log(`Pages artifact server listening on http://127.0.0.1:${port}${base}/`)
})
