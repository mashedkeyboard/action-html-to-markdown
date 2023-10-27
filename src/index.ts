import * as Core from '@actions/core'
import TurndownService from 'turndown'

const htmlText = Core.getInput('html-text')

Core.info('Input HTML Text: ' + htmlText)

// Don't escape markdown: I want to write in it.
TurndownService.prototype.escape = (x: any) => x;

const service = new TurndownService({
  headingStyle: 'atx',
});

service.addRule('removeH1s', {
  filter: ['h1'],
  replacement: function (content) {
    return ''
  }
});

const markdownText = service.turndown(htmlText)

Core.setOutput('markdown-text', markdownText)

Core.info('Output Markdown Text: ' + markdownText)
