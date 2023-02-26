"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Core = require("@actions/core");
const turndown_1 = require("turndown");
const turndown_plugin_gfm_1 = require("turndown-plugin-gfm");
const htmlText = Core.getInput('html-text');
Core.info('Input HTML Text: ' + htmlText);
const markdownText = new turndown_1.default().use(turndown_plugin_gfm_1.gfm).turndown(htmlText);
Core.setOutput('markdown-text', markdownText);
Core.info('Output Markdown Text: ' + htmlText);