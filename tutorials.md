# jsPsych 实验设计教程

## 简介

本教程将引导你使用 jsPsych 创建一个包含两部分任务的实验：计算任务和放松任务。目标是使不熟悉 jsPsych 的读者也能按照教程步骤完成实验设计。

## 基础准备

### 1. 基本的 HTML、CSS 和 JavaScript 知识

- **HTML**：超文本标记语言 (HTML) 是用来构建网页内容的骨架。可以通过 [W3school-HTML](https://www.w3schools.com/html/default.asp) 的教程开始学习。
- **CSS**：层叠样式表 (CSS) 用于设置网页内容的样式。可以通过 [W3school-CSS](https://www.w3schools.com/css/default.asp) 的教程开始学习。
- **JavaScript**：JavaScript 是一种编程语言，用于网页的交互功能。可以通过 [W3school-JavaScript Tutorial](https://www.w3schools.com/js/default.asp) 的教程开始学习。

### 2. 能够使用文本编辑器

文本编辑器是用来编写和编辑代码的工具。以下是几个常用的文本编辑器：

- **VSCode**：微软的 Visual Studio Code 是一个免费的开源代码编辑器。下载地址：[VSCode 下载](https://code.visualstudio.com/Download)
- **Sublime Text**：一个轻量级且功能强大的代码编辑器。下载地址：[Sublime Text 下载](https://www.sublimetext.com/download)

### 3. 可以访问互联网以下载 jsPsych 库及其插件

为了运行 jsPsych 实验，你需要从互联网上下载相关的库和插件。可以通过以下步骤完成：

- **打开文本编辑器**：如 VSCode 或 Sublime Text。
- **创建项目文件夹**：在你的电脑上创建一个新的文件夹，用于存放实验文件。
- **jsPsych 库**：建议直接访问 jsPsych 官网获取最新信息和代码。你可以在 jsPsych 的 [官方文档](https://www.jspsych.org/) 中如下图位置找到所有插件的详细说明和使用示例。
![jspsych官网插件](./1.png)

## 详细介绍

### 基本HTML标签

以下是一些常见的HTML标签及其用法：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>页面标题</title>
</head>
<body>
    <h1>一级标题</h1>
    <p>这是一个段落。</p>
    <a href="https://example.com">点击这里</a>
    <img src="image.jpg" alt="描述文字">
</body>
</html>
```

### 在线服务器（html文件）

为了简化开发流程，你可以使用 jsPsych 提供的在线服务器来加载插件，而无需下载到本地。只需在你的 HTML 文件中引用相关的插件 URL 即可。

```html
<script src="https://unpkg.com/@jspsych/plugin-html-keyboard-response@1.1.3"></script>
<script src="https://unpkg.com/@jspsych/plugin-html-button-response@1.2.0"></script>
<script src="https://unpkg.com/@jspsych/plugin-survey-text@1.1.3"></script>
<script src="https://unpkg.com/@jspsych/plugin-audio-button-response@1.2.0"></script>
<script src="https://unpkg.com/@jspsych/plugin-instructions@1.1.4"></script>
<script src="https://unpkg.com/@jspsych/plugin-preload@1.1.3"></script>
<script src="https://unpkg.com/@jspsych/plugin-html-slider-response@1.1.3"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.17.0/xlsx.full.min.js"></script>
```

### HTML文档简化

在构建 jsPsych 实验时，为了避免 HTML 文件过长和结构混乱，我们可以将文件拆分为 HTML、CSS 和 JavaScript 三个部分。

#### 示例

假设我们有以下文件结构：

```bash
/project-folder
├── index.html
├── styles.css
└── script.js
```

HTML文件：`index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>集中&放松实验</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="task-container">
        <p>您好，欢迎参加本次实验。</p>
        <p>如果您准备好了，点击下面的按钮开始。</p>
        <button id="start-button">开始</button>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

CSS 文件：`styles.css`

```css
body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
}

.task-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    max-width: 600px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    text-align: center;
}
```

JavaScript 文件：`script.js`

```js
document.getElementById('start-button').addEventListener('click', function() {
    alert('实验开始！');
});
```

### CSS文件

#### CSS 文件的作用

CSS（层叠样式表）用于描述 HTML 文档的样式。它负责控制网页的布局、颜色、字体等，使网页更具视觉吸引力和用户友好性。

#### 弹性盒子（Flexbox）

弹性盒子（Flexbox）是 CSS3 中的一种布局模式，它可以使复杂的布局结构变得更加简单和灵活。Flexbox 布局通过将容器的子元素按行或列对齐和分布，可以轻松实现各种常见的布局需求，例如居中对齐、等宽排列等。

#### 示例

HTML文件：`index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox 示例</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="flex-container">
        <div class="flex-item">Item 1</div>
        <div class="flex-item">Item 2</div>
        <div class="flex-item">Item 3</div>
    </div>
</body>
</html>
```

CSS 文件：`styles.css`

```css
.flex-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
}

.flex-item {
    background-color: #007BFF;
    color: white;
    padding: 20px;
    margin: 10px;
    border-radius: 5px;
}
```

### JavaScript文件

#### JavaScript 文件的作用

JavaScript 是一种用于实现网页动态行为的脚本语言。通过 JavaScript，可以增强网页的交互性和功能性。

#### 示例

HTML文件：`index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript 示例</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1 id="title">欢迎来到我的网页</h1>
    <button id="changeColorButton">改变标题颜色</button>
    <script src="script.js"></script>
</body>
</html>
```

JavaScript 文件：`script.js`

```js
const title = document.getElementById('title');
const button = document.getElementById('changeColorButton');

button.addEventListener('click', () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    title.style.color = randomColor;
});
```

### 时间线

在心理学实验中，时间线（timeline）是实验设计的核心部分，它定义了实验的各个步骤及其顺序。 

以上是jsPsych实验设计的基本教程，通过这些内容，你应该能够创建一个简单的jsPsych实验，并掌握一些基本的HTML、CSS和JavaScript技能。