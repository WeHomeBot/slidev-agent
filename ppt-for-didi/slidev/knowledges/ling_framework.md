# Ling（灵）框架技术要点

> Ling 是一个支持大型语言模型（LLM）结构化数据流式输出的工作流框架，旨在实现极致响应速度，提升多智能体协同处理的实时性。

## 🚀 项目简介

- 项目地址：https://github.com/WeHomeBot/ling
- 作者组织：WeHomeBot / Bearbobo
- 当前版本：v0.5.2
- 许可协议：Apache License 2.0

Ling 框架专为解决 LLM 输出结构化数据（如 JSON）时的流式传输问题而设计，避免传统 JSON 格式需完整输出后才能解析的限制，从而提升前端响应速度和用户体验。

## 🧩 核心特性

- JSONL 流式协议支持：通过 JSON Lines（JSONL）协议，实现结构化数据的逐条流式输出。
- Token 异常自动修复：在流式传输过程中，自动检测并修复 JSON 格式中的 token 异常，确保数据完整性。
- 复杂异步工作流支持：支持多智能体（Agent/Bot）协同处理的复杂异步工作流。
- 状态消息推送：在流式输出过程中，支持状态消息的实时推送，便于前端及时响应。
- Server-Sent Events（SSE）支持：利用 SSE 实现服务端向客户端的实时数据推送。

## 🔧 技术实现

- Ling 的核心是一个实时转换器，能够逐字符解析输入的 JSON 数据流，并将内容以 jsonuri 的形式输出。例如：

```json
data: {"uri": "outline/0/topic", "delta": "云"}
data: {"uri": "outline/0/topic", "delta": "朵"}
data: {"uri": "outline/0/topic", "delta": "是"}
data: {"uri": "outline/0/topic", "delta": "由"}
data: {"uri": "outline/0/topic", "delta": "什"}
data: {"uri": "outline/0/topic", "delta": "么"}
data: {"uri": "outline/0/topic", "delta": "构"}
data: {"uri": "outline/0/topic", "delta": "成"}
data: {"uri": "outline/0/topic", "delta": "的"}
data: {"uri": "outline/0/topic", "delta": "？"}
```

这种方式使得前端可以在不等待完整 JSON 输出的情况下，实时接收并处理数据，极大提升了交互体验。

## 🧪 示例代码

以下是一个基于 Express 的示例，展示如何使用 Ling 框架构建一个支持流式输出的 API 服务：

```js
import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Ling } from "@bearbobo/ling";
import type { ChatConfig } from "@bearbobo/ling/types";

const apiKey = process.env.API_KEY as string;
const model_name = process.env.MODEL_NAME as string;
const endpoint = process.env.ENDPOINT as string;

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = 3000;

app.post('/api', async (req, res) => {
  const question = req.body.question;
  const config: ChatConfig = {
    model_name,
    api_key: apiKey,
    endpoint: endpoint,
  };

  const ling = new Ling(config);
  const bot = ling.createBot();
  bot.addPrompt('请以 JSON 格式回答，格式如下：{"answer": "你的回答"}');
  bot.chat(question);
  bot.on('string-response', ({ uri, delta }) => {
    res.write(`data: ${JSON.stringify({ uri, delta })}\n\n`);
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```

## 📦 安装与使用

Ling 已发布至 npm，可通过以下命令安装：

```bash
npm install @bearbobo/ling
```

安装后，可根据项目需求引入并配置相应的工作流逻辑。

33 🔗 相关链接

GitHub 仓库：https://github.com/WeHomeBot/ling
在线文档：https://ling.bearbobo.com
示例项目：[Bearbobo 学伴](https://github.com/WeHomeBot)