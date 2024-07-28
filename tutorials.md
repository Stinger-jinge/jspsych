# jsPsych 实验设计教程


## 简介

本教程将引导你使用 jsPsych 创建一个包含两部分任务的实验：计算任务和放松任务。目标是使不熟悉 jsPsych 的读者也能按照教程步骤完成实验设计。

## 基础准备

### 1. 基本的 HTML、CSS 和 JavaScript 知识
-   **TML**：超文本标记语言 (HTML) 是用来构建网页内容的。你可以把 HTML 看作是网页的骨架。可以通过 [W3school-HTML](https://www.w3schools.com/html/default.asp)） 的教程开始学习。
    
-   **CSS**：层叠样式表 (CSS) 用于设置网页内容的样式，如颜色、字体和布局。可以通过[W3school-CSS](https://www.w3schools.com/css/default.asp)的教程 开始学习。
    
-   **JavaScript**：JavaScript 是一种编程语言，用于网页的交互功能，如按钮点击和表单提交。可以通过[W3school-JavaScript Tutorial](https://www.w3schools.com/js/default.asp) 的教程 开始学习。

### 2. 能够使用文本编辑器

文本编辑器是用来编写和编辑代码的工具。以下是几个常用的文本编辑器：

-   **VSCode**：微软的 Visual Studio Code 是一个免费的开源代码编辑器。下载地址：[VSCode 下载](https://code.visualstudio.com/Download)
    
-   **Sublime Text**：一个轻量级且功能强大的代码编辑器。下载地址：[Sublime Text  下载](https://www.sublimetext.com/download)下载
    

### 3. 可以访问互联网以下载 jsPsych 库及其插件

为了运行 jsPsych 实验，你需要从互联网上下载相关的库和插件。可以通过以下步骤完成：

  **打开文本编辑器**：如 VSCode 或 Sublime Text。
    
 **创建项目文件夹**：在你的电脑上创建一个新的文件夹，用于存放实验文件。
    
 **jsPsych 库**：
jsPsych 提供了丰富的插件库，可以方便地实现各种实验功能。每个插件都有详细的文档和使用示例，建议直接访问 jsPsych 官网获取最新信息和代码。你可以在 jsPsych 的 [官方文档](https://www.jspsych.org/) 中找到所有插件的详细说明和使用示例。

## 详细介绍
在编写HTML时，有一些基本的标签是几乎每个网页都会使用的。以下是一些常见的HTML标签及其用法：

### 基本HTML标签

1.`<!DOCTYPE html>`
   声明文档类型，告诉浏览器这是一个HTML5文档。
   ```
   <!DOCTYPE html>
   ```

2. `<html>`
包含整个HTML文档。
   ```
   <html lang="en">
   </html>
   ```

3. `<head>`
包含文档的元数据，比如标题、字符集、样式表链接等。
   ```
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>页面标题</title>
   </head>
   ```

4. `<title>`
  定义网页的标题，显示在浏览器的标签页上。
   ```
   <title>页面标题</title>
   ```

5. `<meta>`
  提供关于HTML文档的元数据，比如字符集、作者、描述等。
   ```
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

6. `<link>`
  用于链接外部资源，比如CSS样式表。
   ```
   <link rel="stylesheet" href="styles.css">
   ```

7. `<body>`
  包含文档的内容，如文本、图像、链接等。
   ```
   <body>
   </body>
   ```

8. `<h1> 到 <h6>`
  标题标签，表示不同级别的标题。
   ```
   <h1>一级标题</h1>
   <h2>二级标题</h2>
   ```

9. `<p>`
  段落标签，用于包含文本段落。
   ```
   <p>这是一个段落。</p>
   ```

10. `<a>`
链接标签，用于创建超链接。
    ```
    <a href="https://example.com">点击这里</a>
    ```

11. `<img>`
   图像标签，用于在网页中嵌入图像。
    ```
    <img src="image.jpg" alt="描述文字">
    ```
14. `<div>`
   块级容器标签，用于将内容分组。
    ```
    <div>
        <p>这是一个被 <div> 包含的段落。</p>
    </div>
    ```

15. `<span>`
   行内容器标签，用于将内容分组，不会导致换行。
    ```
    <p>这是一个 <span>行内元素</span>。</p>
    ```

16. `<form>`
   表单标签，用于包含用户输入控件。
    ```
    <form action="/submit" method="post">
        <label for="name">名字：</label>
        <input type="text" id="name" name="name">
        <input type="submit" value="提交">
    </form>
    ```

17. `<input>`
   输入控件标签，用于创建各种类型的用户输入控件。
    ```
    <input type="text" placeholder="输入文本">
    <input type="submit" value="提交">
    ```

18. `<button>`
   按钮标签，用于创建按钮。
    ```
    <button type="button">点击我</button>
    ```

 示例

下面是一个包含上述标签的简单HTML文档示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>示例网页</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>欢迎来到我的网页</h1>
    <p>这是一个段落，用于展示基本的HTML标签。</p>
    <a href="https://example.com">点击这里访问示例网站</a>
    <img src="image.jpg" alt="示例图片">
    
    <h2>无序列表</h2>
    <ul>
        <li>列表项 1</li>
        <li>列表项 2</li>
    </ul>
    
    <h2>有序列表</h2>
    <ol>
        <li>列表项 1</li>
        <li>列表项 2</li>
    </ol>
    
    <div>
        <p>这是一个被 <div> 包含的段落。</p>
    </div>
    
    <form action="/submit" method="post">
        <label for="name">名字：</label>
        <input type="text" id="name" name="name">
        <input type="submit" value="提交">
    </form>
</body>
</html>
```
这个示例展示了如何使用基本的HTML标签来创建一个简单的网页。通过理解这些标签的使用方法，您可以构建功能丰富的网页，并逐步添加更多复杂的元素和样式。


### 在线服务器（html文件）
为了简化开发流程，你可以使用 jsPsych 提供的在线服务器来加载插件，而无需下载到本地。只需在你的 HTML 文件中引用相关的插件 URL 即可。例如，在我们的实验设计中：
```html
<!-- 引入各个jsPsych插件 -->
<script src="https://unpkg.com/@jspsych/plugin-html-keyboard-response@1.1.3"></script> <!-- 引入HTML键盘响应插件 -->
<script src="https://unpkg.com/@jspsych/plugin-html-button-response@1.2.0"></script> <!-- 引入HTML按钮响应插件 -->
<script src="https://unpkg.com/@jspsych/plugin-survey-text@1.1.3"></script> <!-- 引入调查文本插件 -->
<script src="https://unpkg.com/@jspsych/plugin-audio-button-response@1.2.0"></script> <!-- 引入音频按钮响应插件 -->
<script src="https://unpkg.com/@jspsych/plugin-instructions@1.1.4"></script> <!-- 引入指令插件 -->
<script src="https://unpkg.com/@jspsych/plugin-preload@1.1.3"></script> <!-- 引入预加载插件 -->
<script src="https://unpkg.com/@jspsych/plugin-html-slider-response@1.1.3"></script><!-- 引入HTML滑动条插件 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.17.0/xlsx.full.min.js"></script> <!-- 引入用于处理Excel文件的库 -->
```
### html文档简化
在构建 jsPsych 实验时，为了避免 HTML 文件过长和结构混乱，我们可以将文件拆分为 HTML、CSS 和 JavaScript 三个部分。通过这种方式，可以更好地管理代码，并使其更易于维护和阅读。我们可以通过在 HTML 文件中使用 `<link>` 和 `<script>` 标签来链接 CSS 和 JavaScript 文件。链接路径分为**绝对路径**和**相对路径**。
#### 绝对路径

绝对路径是指包含完整的 URL 地址的路径，可以用于引用远程服务器上的资源。例如：
```html
<!-- 引入远程服务器上的CSS文件 --> 
<link rel="stylesheet" href="https://example.com/styles.css"> 

<!-- 引入远程服务器上的JavaScript文件 --> 
<script src="https://example.com/script.js"></script>
```
#### 相对路径

相对路径是指相对于当前文件的位置，可以用于引用本地文件系统中的资源。例如：
```html
<!-- 引入同一目录下的CSS文件 -->
<link rel="stylesheet" href="styles.css">

<!-- 引入同一目录下的JavaScript文件 -->
<script src="script.js"></script>
```
### 示例

假设我们有以下文件结构：
```bash
/project-folder
    ├── index.html
    ├── styles.css
    └── script.js
```
HTML文件：index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>集中&放松实验</title>
    <!-- 引入本地CSS文件 -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- 内容 -->
    <div class="task-container">
        <p>您好，欢迎参加本次实验。</p>
        <p>如果您准备好了，点击下面的按钮开始。</p>
        <button id="start-button">开始</button>
    </div>

    <!-- 引入本地JavaScript文件 -->
    <script src="script.js"></script>
</body>
</html>

```
CSS 文件：styles.css
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
JavaScript 文件：script.js
```js
document.getElementById('start-button').addEventListener('click', function() {
    alert('实验开始！');
});
```

## CSS文件 
### CSS 文件的作用

CSS（层叠样式表）用于描述 HTML 文档的样式。它负责控制网页的布局、颜色、字体等，使网页更具视觉吸引力和用户友好性。使用 CSS，可以将内容与表现分离，提升网页的可维护性和可扩展性。

### 如何使用单独的 CSS 文件给 HTML 设置格式

1. 创建一个 CSS 文件，例如 `styles.css`。
2. 在 HTML 文件的 `<head>` 标签中，使用 `<link>` 标签引入 CSS 文件。

### 示例

#### HTML 文件（`index.html`）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>示例网页</title>
    <link rel="stylesheet" href="styles.css"> <!-- 引入外部CSS文件 -->
</head>
<body>
    <h1>欢迎来到我的网页</h1>
    <p>这是一个段落，用于展示基本的HTML标签。</p>
</body>
</html>
```

#### CSS 文件（`styles.css`）

```css
/* 设置 body 的背景颜色和字体样式 */
body {
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
}

/* 设置 h1 标题的颜色和居中对齐 */
h1 {
    color: #333;
    text-align: center;
}

/* 设置段落的字体大小和颜色 */
p {
    font-size: 16px;
    color: #666;
}
```

### 弹性盒子（Flexbox）

弹性盒子（Flexbox）是 CSS3 中的一种布局模式，它可以使复杂的布局结构变得更加简单和灵活。Flexbox 布局通过将容器的子元素按行或列对齐和分布，可以轻松实现各种常见的布局需求，例如居中对齐、等宽排列等。

#### Flexbox 的基本概念

- **Flex 容器**：包含 flex 项目的父元素。
- **Flex 项目**：被直接包含在 flex 容器中的元素。

#### 简单的 Flexbox 示例

##### HTML 文件（`index.html`）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox 示例</title>
    <link rel="stylesheet" href="styles.css"> <!-- 引入外部CSS文件 -->
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

##### CSS 文件（`styles.css`）

```css
/* 设置 Flex 容器的样式 */
.flex-container {
    display: flex; /* 启用弹性盒子布局 */
    justify-content: center; /* 水平居中对齐 */
    align-items: center; /* 垂直居中对齐 */
    height: 100vh; /* 设置容器高度为视口高度 */
    background-color: #f0f0f0;
}

/* 设置 Flex 项目的样式 */
.flex-item {
    background-color: #007BFF;
    color: white;
    padding: 20px;
    margin: 10px;
    border-radius: 5px;
}
```

#### 解释

1. **Flex 容器**
  - `display: flex;`：将容器定义为 Flex 容器。
  - `justify-content: center;`：在主轴（水平方向）上居中对齐项目。
  - `align-items: center;`：在交叉轴（垂直方向）上居中对齐项目。
  - `height: 100vh;`：将容器高度设置为视口高度。

2. **Flex 项目**
  - `background-color: #007BFF;`：设置背景颜色。
  - `color: white;`：设置文本颜色为白色。
  - `padding: 20px;`：设置内边距。
  - `margin: 10px;`：设置外边距。
  - `border-radius: 5px;`：设置圆角边框。

通过这些简单的 CSS 设置，Flexbox 可以轻松实现响应式布局，使网页在不同设备上都能有良好的表现。


##  java script文件
### JavaScript 文件的作用

JavaScript 是一种用于实现网页动态行为的脚本语言。通过 JavaScript，可以增强网页的交互性和功能性，例如响应用户输入、进行表单验证、动态更新内容等。将 JavaScript 代码写在单独的文件中，可以提高代码的可读性和可维护性。

### 如何使用单独的 JavaScript 文件给 HTML 设置逻辑

1. 创建一个 JavaScript 文件，例如 `script.js`。
2. 在 HTML 文件的 `<body>` 标签中，使用 `<script>` 标签引入 JavaScript 文件。

### 示例

#### HTML 文件（`index.html`）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript 示例</title>
    <link rel="stylesheet" href="styles.css"> <!-- 引入外部CSS文件 -->
</head>
<body>
    <h1 id="title">欢迎来到我的网页</h1>
    <button id="changeColorButton">改变标题颜色</button>

    <script src="script.js"></script> <!-- 引入外部JavaScript文件 -->
</body>
</html>
```

#### JavaScript 文件（`script.js`）

```js
// 获取 HTML 元素
const title = document.getElementById('title');
const button = document.getElementById('changeColorButton');

// 定义按钮点击事件的逻辑
button.addEventListener('click', () => {
    // 随机生成颜色
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    // 设置标题的颜色
    title.style.color = randomColor;
});
```

#### 解释

1. **获取 HTML 元素**
  - `const title = document.getElementById('title');`：获取 `id` 为 `title` 的 HTML 元素。
  - `const button = document.getElementById('changeColorButton');`：获取 `id` 为 `changeColorButton` 的按钮元素。

2. **定义按钮点击事件的逻辑**
  - `button.addEventListener('click', () => { ... });`：为按钮添加点击事件监听器。
  - `const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;`：生成一个随机颜色值。
  - `title.style.color = randomColor;`：将标题的颜色设置为随机颜色。

通过这种方式，将 JavaScript 代码与 HTML 分离，可以使代码结构更加清晰，便于管理和维护。


### 插件的使用

在 [官网](https://www.jspsych.org/) 的插件文档中，你可以找到许多现成的代码示例。你可以直接复制这些示例代码到你的项目中，并根据需要进行修改。以下是一个简单的示例，展示了如何使用 html-button-response 插件：
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>简单实验示例</title>
    <script src="https://unpkg.com/jspsych@7.3.4"></script>
    <link href="https://unpkg.com/jspsych@7.3.4/css/jspsych.css" rel="stylesheet" type="text/css" />
    <script src="https://unpkg.com/@jspsych/plugin-html-button-response@1.2.0"></script>
</head>
<body>
    <script>
        var jsPsych = initJsPsych();

        var trial = {
            type: jsPsychHtmlButtonResponse,
            stimulus: 'Hello, jsPsych!',
            choices: ['Continue']
        };

        jsPsych.run([trial]);
    </script>
</body>
</html>
```
### 定义函数
在 JavaScript 文件中定义函数，可以使代码更加模块化和可重用。函数可以封装特定的功能，便于调用和维护。当需要执行相同的操作时，只需调用相应的函数即可，而不必重复编写相同的代码。

### 函数的作用

1. **代码重用**：将重复的代码封装到函数中，避免代码冗余。
2. **代码模块化**：将特定功能的代码封装到函数中，使代码结构更加清晰。
3. **提高可维护性**：函数的独立性使得修改和调试变得更容易。
4. **参数化**：通过传递参数，可以使函数更具通用性和灵活性。

### 如何定义函数

在 JavaScript 中，可以通过 `function` 关键字或箭头函数语法定义函数。

#### 定义函数的语法

1. **函数声明**

```js
function functionName(parameters) {
    // 函数体
}
```

2. **函数表达式**

```js
const functionName = function(parameters) {
    // 函数体
};
```

3. **箭头函数**

```js
const functionName = (parameters) => {
    // 函数体
};
```

### 示例

#### HTML 文件（`index.html`）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript 函数示例</title>
    <link rel="stylesheet" href="styles.css"> <!-- 引入外部CSS文件 -->
</head>
<body>
    <h1 id="title">欢迎来到我的网页</h1>
    <button id="changeColorButton">改变标题颜色</button>
    <button id="resetColorButton">重置标题颜色</button>

    <script src="script.js"></script> <!-- 引入外部JavaScript文件 -->
</body>
</html>
```

#### JavaScript 文件（`script.js`）

```js
// 获取 HTML 元素
const title = document.getElementById('title');
const changeColorButton = document.getElementById('changeColorButton');
const resetColorButton = document.getElementById('resetColorButton');

// 定义随机生成颜色的函数
function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// 定义改变标题颜色的函数
function changeTitleColor() {
    const randomColor = getRandomColor();
    title.style.color = randomColor;
}

// 定义重置标题颜色的函数
function resetTitleColor() {
    title.style.color = 'black';
}

// 为按钮添加点击事件监听器
changeColorButton.addEventListener('click', changeTitleColor);
resetColorButton.addEventListener('click', resetTitleColor);
```

### 解释

1. **定义随机生成颜色的函数**
   ```js
   function getRandomColor() {
       return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
   }
   ```
  - 该函数生成一个随机颜色值并返回。

2. **定义改变标题颜色的函数**
   ```js
   function changeTitleColor() {
       const randomColor = getRandomColor();
       title.style.color = randomColor;
   }
   ```
  - 该函数调用 `getRandomColor` 函数获取随机颜色，并将其设置为标题的颜色。

3. **定义重置标题颜色的函数**
   ```js
   function resetTitleColor() {
       title.style.color = 'black';
   }
   ```
  - 该函数将标题的颜色重置为黑色。

4. **为按钮添加点击事件监听器**
   ```js
   changeColorButton.addEventListener('click', changeTitleColor);
   resetColorButton.addEventListener('click', resetTitleColor);
   ```
  - 当点击按钮时，分别调用 `changeTitleColor` 和 `resetTitleColor` 函数。

通过这种方式，可以将复杂的逻辑分解为多个简单的函数，每个函数完成特定的任务，使代码更加清晰和易于维护。

### 时间线
在心理学实验中，时间线（timeline）是实验设计的核心部分，它定义了实验的各个步骤、顺序以及每个步骤的具体内容。通过时间线，研究者可以精确控制实验流程，确保所有参与者经历一致的实验过程。它可以：
1. **控制实验流程**：确定实验的各个阶段及其顺序。
2. **组织实验内容**：将不同类型的任务和指令模块化管理。
3. **收集数据**：记录每个阶段的数据，以便后续分析。
4. **增强可维护性**：使实验设计清晰、结构化，便于修改和扩展。

### 如何设置时间线

在 jsPsych 中，设置时间线通常包括以下步骤：

1. **初始化 jsPsych**：创建 jsPsych 实例并定义全局设置。
2. **定义各个实验阶段**：使用 jsPsych 提供的插件创建各个阶段的任务。
3. **构建时间线数组**：将各个任务按顺序添加到时间线数组中。
4. **运行实验**：调用 jsPsych 的运行方法执行时间线。

### 示例

以下是一个简单的实验时间线示例：

#### HTML 文件（`index.html`）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>简单实验示例</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://unpkg.com/jspsych@7.3.4"></script>
    <script src="https://unpkg.com/@jspsych/plugin-html-button-response@1.2.0"></script>
</head>
<body>
    <script src="script.js"></script>
</body>
</html>
```

#### JavaScript 文件（`script.js`）

```js
// 初始化 jsPsych
var jsPsych = initJsPsych({
    on_finish: function() {
        jsPsych.data.displayData(); // 实验结束后显示数据
    }
});

// 定义时间线数组
var timeline = [];

// 欢迎页面
var welcome = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p>欢迎参加实验</p><p>点击按钮开始</p>',
    choices: ['开始']
};
timeline.push(welcome);

// 实验任务1：简单反应任务
var reaction_time_task = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p>当你准备好时，点击按钮测量反应时间</p>',
    choices: ['开始测量'],
    on_finish: function(data) {
        var start_time = Date.now();
        document.querySelector('.jspsych-btn').addEventListener('click', function() {
            var reaction_time = Date.now() - start_time;
            jsPsych.data.write({ reaction_time: reaction_time });
        });
    }
};
timeline.push(reaction_time_task);

// 实验任务2：简单问卷
var survey = {
    type: jsPsychSurveyText,
    questions: [
        {prompt: "请输入您的年龄：", name: 'age', required: true},
        {prompt: "请输入您的性别：", name: 'gender', required: true}
    ]
};
timeline.push(survey);

// 结束页面
var end = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p>实验结束，感谢您的参与！</p>',
    choices: ['结束']
};
timeline.push(end);

// 运行实验
jsPsych.run(timeline);
```

### 解释

 - **初始化 jsPsych**
   ```js
   var jsPsych = initJsPsych({
       on_finish: function() {
           jsPsych.data.displayData();
       }
   });
   ```
 使用 `initJsPsych` 函数初始化 jsPsych，并设置实验结束时执行的回调函数，这里是显示实验数据。

 - **定义时间线数组**
   ```js
   var timeline = [];
   ```
 创建一个空数组 `timeline`，用于存储实验各个阶段的任务。

 - **定义各个实验阶段**
 - **欢迎页面**
     ```js
     var welcome = {
         type: jsPsychHtmlButtonResponse,
         stimulus: '<p>欢迎参加实验</p><p>点击按钮开始</p>',
         choices: ['开始']
     };
     timeline.push(welcome);
     ```
	使用 `jsPsychHtmlButtonResponse` 插件定义欢迎页面，显示欢迎信息和一个按钮。
 - **简单反应任务**

     ```js
     var reaction_time_task = {
         type: jsPsychHtmlButtonResponse,
         stimulus: '<p>当你准备好时，点击按钮测量反应时间</p>',
         choices: ['开始测量'],
         on_finish: function(data) {
             var start_time = Date.now();
             document.querySelector('.jspsych-btn').addEventListener('click', function() {
                 var reaction_time = Date.now() - start_time;
                 jsPsych.data.write({ reaction_time: reaction_time });
             });
         }
     };
     timeline.push(reaction_time_task);
     ```
     使用 `jsPsychHtmlButtonResponse` 插件定义反应任务。点击按钮后，测量反应时间并记录数据。
  - **简单问卷**
     ```js
     var survey = {
         type: jsPsychSurveyText,
         questions: [
             {prompt: "请输入您的年龄：", name: 'age', required: true},
             {prompt: "请输入您的性别：", name: 'gender', required: true}
         ]
     };
     timeline.push(survey);
     ```
     使用 `jsPsychSurveyText` 插件定义问卷，收集参与者的基本信息。
   - **结束页面**
     ```js
     var end = {
         type: jsPsychHtmlButtonResponse,
         stimulus: '<p>实验结束，感谢您的参与！</p>',
         choices: ['结束']
     };
     timeline.push(end);
     ```
     使用 `jsPsychHtmlButtonResponse` 插件定义结束页面，显示感谢信息。

4. **运行实验**
   ```js
   jsPsych.run(timeline);
   ```
   调用 `jsPsych.run` 方法执行时间线，开始实验。

通过这种方式，可以清晰地组织和控制实验流程，并确保数据收集的一致性。

##  实战案例：设计一个集中和放松任务的实验

在这个实战案例中，我们将设计一个包含集中任务和放松任务的心理学实验。实验的设计将包括以下步骤：

1. 输入被试编号。
2. 欢迎页面。
3. 练习阶段：一系列计算任务。
4. 正式实验：一系列计算任务。
5. 放松任务：观看视频。
6. 问卷调查：评估舒适度。
7. 结束页面。

#### 实验文件结构

我们将实验文件拆分为三个部分：HTML、CSS 和 JavaScript。这样可以使代码更清晰和更易于维护。

##### HTML 文件 (`index.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>集中&放松实验</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://unpkg.com/jspsych@7.3.4"></script>
    <script src="https://unpkg.com/@jspsych/plugin-html-button-response@1.2.0"></script>
    <script src="https://unpkg.com/@jspsych/plugin-survey-text@1.1.3"></script>
    <script src="https://unpkg.com/@jspsych/plugin-html-slider-response@1.1.3"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.17.0/xlsx.full.min.js"></script>
</head>
<body>
    <script src="script.js"></script>
</body>
</html>
```

##### CSS 文件 (`styles.css`)

```css
/* 重置一些默认样式 */
body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}

/* 定义主体样式 */
body {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* jsPsych HTML 按钮响应的样式 */
#jspsych-html-button-response-stimulus {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
}

/* 任务容器样式 */
.task-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    max-width: 1600px;
    padding: 20px;
    box-sizing: border-box;
    background-color: white;
    border-radius: 10px;
    overflow: auto;
    text-align: center;
}

/* 按钮样式 */
button {
    padding: 10px 20px;
    margin-top: 20px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: #007BFF;
    color: white;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}

/* 居中按钮和文本输入 */
.jspsych-btn, .jspsych-html-button-response-button, .jspsych-survey-text input {
    display: block;
    margin: 10px auto;
    font-size: 18px;
}

.jspsych-btn, .jspsych-html-button-response-button {
    width: 200px;
}

.jspsych-survey-text input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

/* 视频响应样式 */
video {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
}

/* 滑动条响应样式 */
#jspsych-html-slider-response-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px 0;
}

#jspsych-html-slider-response-stimulus {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
}
```

##### JavaScript 文件 (`script.js`)

```js
// 初始化 jsPsych
var jsPsych = initJsPsych({
    on_finish: function() {
        exportDataToExcel();
    }
});

var timeline = [];

// 输入被试编号
var subject_id = {
    type: jsPsychSurveyText,
    questions: [
        {prompt: "请输入您的编号：", name: 'subject_id', required: true}
    ],
    on_finish: function(data) {
        try {
            var responses = data.responses ? JSON.parse(data.responses) : {};
            jsPsych.data.addProperties({
                subject_id: responses.subject_id || 'undefined'
            });
        } catch (e) {
            console.error("Error parsing responses:", e);
        }
    }
};
timeline.push(subject_id);

var welcome = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<div class="task-container">' +
              '<p>您好，欢迎参加本次实验。</p>' +
              '<p>接下来你会看到两类任务：</p>' +
              '<p>第一类：计算任务，计算出具体答案后用鼠标选择正确的选项，只允许选一次，选择后立即下一题。</p>' +
              '<p>第二类：放松任务，周围会放出缓慢的音乐，优美的图片，您只需要让自己放松下来即可。</p>' +
              '<p>如果您准备好了，点击下面的按钮开始。</p>' +
              '</div>',
    choices: ['开始']
};
timeline.push(welcome);

// 生成随机数学问题
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateMathProblem() {
    var types = ['+', '-', '*', '/'];
    var type = types[getRandomInt(0, types.length - 1)];
    var num1, num2, answer;

    if (type === '+') {
        num1 = getRandomInt(1, 1000);
        num2 = getRandomInt(1, 1000);
        answer = num1 + num2;
    } else if (type === '-') {
        num1 = getRandomInt(1, 1000);
        num2 = getRandomInt(1, num1);
        answer = num1 - num2;
    } else if (type === '*') {
        num1 = getRandomInt(1, 100);
        num2 = getRandomInt(1, 100);
        answer = num1 * num2;
    } else {
        num1 = getRandomInt(1, 100);
        num2 = getRandomInt(1, 100);
        answer = num1 * num2;
        num1 = answer;
        answer = num1 / num2;
    }

    return { question: `${num1} ${type} ${num2} = ?`, answer: answer };
}

// 创建数学任务
function createMathTrial() {
    var problem = generateMathProblem();
    var options = [problem.answer, problem.answer + 1, problem.answer - 1, problem.answer + 2];
    options = jsPsych.randomization.shuffle(options);

    return {
        type: jsPsychHtmlButtonResponse,
        stimulus: `<div class="task-container"><p>${problem.question}</p></div>`,
        choices: options.map(option => option.toString()),
        data: {
            task: 'math',
            correct_answer: problem.answer
        },
        on_finish: function(data) {
            data.correct = data.response == options.indexOf(problem.answer.toString());
        }
    };
}

// 创建放松任务
function createRelaxTrial() {
    return {
        type: jsPsychHtmlButtonResponse,
        stimulus: '<div class="task-container"><p>放松任务</p><video width="100%" height="100%" controls autoplay><source src="video.MP4" type="video/mp4">您的浏览器不支持视频播放。</video></div>',
        choices: ['结束任务'],
        button_html: '<button class="jspsych-btn">%choice%</button>',
        on_finish: function(data) {
            var video = document.querySelector('video');
            if (video) {
                video.pause();
            }
        }
    };
}

// 创建练习阶段
function createPracticeBlock() {
    var practice_trials = [];
    for (var i = 0; i < 5; i++) {
        practice_trials.push(createMathTrial());
    }

    var instructions_practice = {
        type: jsPsychHtmlButtonResponse,
        stimulus: '<div class="task-container">' +
                  '<p>接下来将开始计算题练习</p>' +
                  '<p>请在保证准确性的前提下尽可能加快速度</p>' +
                  '<p>如果您准备好了，点击下面的按钮开始。</p>' +
                  '</div>',
        choices: ['开始']
    };

    var end_practice = {
        type: jsPsychHtmlButtonResponse,
        stimulus: '<div class="task-container">' +
                  '<p>练习结束</p>' +
                  '<p>如果您准备好正式实验，点击下面的按钮开始。</p>' +
                  '</div>',
        choices: ['开始']
    };

   

 return [].concat(instructions_practice, practice_trials, end_practice);
}

// 创建正式实验阶段
function createMainExperimentBlock() {
    var main_trials = [];
    for (var i = 0; i < 10; i++) {
        main_trials.push(createMathTrial());
    }

    var instructions_main = {
        type: jsPsychHtmlButtonResponse,
        stimulus: '<div class="task-container">' +
                  '<p>接下来将开始正式的计算题实验</p>' +
                  '<p>请在保证准确性的前提下尽可能加快速度</p>' +
                  '<p>如果您准备好了，点击下面的按钮开始。</p>' +
                  '</div>',
        choices: ['开始']
    };

    return [].concat(instructions_main, main_trials);
}

// 添加到时间线
timeline = timeline.concat(createPracticeBlock());
timeline = timeline.concat(createMainExperimentBlock());
timeline.push(createRelaxTrial());

// 调查问卷
var survey = {
    type: jsPsychSurveyText,
    questions: [
        {prompt: "您在本次实验中有何感受？", name: 'feedback', rows: 5, columns: 40}
    ]
};
timeline.push(survey);

// 结束页面
var end = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<div class="task-container"><p>实验结束，感谢您的参与！</p></div>',
    choices: ['结束']
};
timeline.push(end);

// 运行实验
jsPsych.run(timeline);

// 导出数据为 Excel
function exportDataToExcel() {
    var data = jsPsych.data.get().csv();
    var worksheet = XLSX.utils.aoa_to_sheet([data.split("\n").map(row => row.split(","))]);
    var workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "实验数据");
    XLSX.writeFile(workbook, "experiment_data.xlsx");
}
```

### 解释

1. **输入被试编号**
   使用 `jsPsychSurveyText` 插件创建一个简单的输入框，收集参与者的编号，并将其添加到全局数据属性中。

2. **欢迎页面**
   使用 `jsPsychHtmlButtonResponse` 插件创建一个欢迎页面，向参与者介绍实验并说明任务内容。

3. **生成随机数学问题**
   定义了一个函数 `generateMathProblem`，用于生成随机的数学问题，包括加法、减法、乘法和除法。

4. **创建数学任务**
   使用 `createMathTrial` 函数生成一个数学问题，并使用 `jsPsychHtmlButtonResponse` 插件呈现问题和选择项。记录参与者的选择和正确答案。

5. **创建放松任务**
   使用 `createRelaxTrial` 函数生成一个放松任务，播放视频并让参与者放松。

6. **创建练习和正式实验阶段**
   定义 `createPracticeBlock` 和 `createMainExperimentBlock` 函数，分别生成练习阶段和正式实验阶段的任务序列。

7. **问卷调查**
   使用 `jsPsychSurveyText` 插件创建一个简单的问卷，收集参与者对实验的反馈。

8. **结束页面**
   使用 `jsPsychHtmlButtonResponse` 插件创建一个结束页面，感谢参与者的参与。

9. **运行实验**
   使用 `jsPsych.run` 方法运行时间线，开始实验。

10. **导出数据为 Excel**
    定义 `exportDataToExcel` 函数，将实验数据导出为 Excel 文件，方便后续分析。

通过这个实战案例，您可以了解如何设计一个完整的心理学实验，并通过分离 HTML、CSS 和 JavaScript 文件，使代码结构更加清晰和易于维护。