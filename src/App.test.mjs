import assert from 'node:assert/strict'
import { after, before, test } from 'node:test'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { createServer } from 'vite'
import { projects } from './projects.js'

let App
let vite

before(async () => {
  vite = await createServer({ appType: 'custom', logLevel: 'silent', server: { middlewareMode: true } })
  ;({ default: App } = await vite.ssrLoadModule('/src/App.jsx'))
})

after(async () => vite.close())

test('shows five projects before the closed project archive', () => {
  const html = renderToStaticMarkup(createElement(App))
  const archiveMarker = '<details class="project-archive">'

  assert.match(html, /<details class="project-archive">/)
  assert.doesNotMatch(html, /<details class="project-archive" open/)

  const [visibleHtml, afterArchiveMarker] = html.split(archiveMarker)
  const [archivedHtml] = afterArchiveMarker.split('</details>')
  const countProjects = (markup) => (markup.match(/<article\b/g) || []).length
  const projectNames = (markup) => [...markup.matchAll(/<h3>([^<]+)<\/h3>/g)].map(([, name]) => name)

  assert.equal(countProjects(visibleHtml), 5)
  assert.equal(countProjects(archivedHtml), projects.length - 5)
  assert.deepEqual(projectNames(visibleHtml), [
    '3ZA Digital',
    'Yourz Itinerary',
    'Yourz Gift',
    'Format Forge',
    'Location Service',
  ])
  assert.deepEqual(projectNames(archivedHtml), [
    'Songket Dashboard',
    'Anniversary Site',
    'Safety Riding',
    'Family Timeline',
    'Vendor Management System',
    'Kota Siaga',
  ])
})
