// 初始化jsPsych
var jsPsych = initJsPsych({
    on_finish: function() {
        // 实验结束时导出数据为Excel文件
        exportDataToExcel();
    }
});

// 创建时间线数组
var timeline = [];

// 输入被试编号的任务
var subject_id = {
    type: jsPsychSurveyText,
    questions: [
        {prompt: "请输入您的编号：", name: 'subject_id', required: true}
    ],
    on_finish: function(data) {
        try {
            // 尝试解析被试编号
            var responses = data.responses ? JSON.parse(data.responses) : {};
            jsPsych.data.addProperties({
                subject_id: responses.subject_id || 'undefined'
            });
        } catch (e) {
            // 解析失败时输出错误信息
            console.error("Error parsing responses:", e);
        }
    }
};
// 将被试编号任务添加到时间线
timeline.push(subject_id);

// 欢迎页面任务
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
// 将欢迎页面任务添加到时间线
timeline.push(welcome);

// 生成指定范围内的随机整数
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 生成数学题
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

// 创建数学题任务
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
            // 检查回答是否正确
            data.correct = data.response == options.indexOf(problem.answer.toString());
            data.rt = data.rt;
        }
    };
}

// 创建放松任务
function createRelaxTrial() {
    return {
        type: jsPsychHtmlButtonResponse,
        stimulus: '<div class="task-container"><p>放松任务</p><video width="100%" height="100%" controls autoplay><source src="video.MP4" type="video/mp4">您的浏览器不支持视频播放。</video></div>',
        choices: ['结束任务'], // 添加结束任务按钮
        button_html: '<button class="jspsych-btn">%choice%</button>',
        on_finish: function(data) {
            var video = document.querySelector('video');
            if (video) {
                video.pause();
            }
        }
    };
}

// 创建练习块
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

    return [instructions_practice, ...practice_trials, end_practice];
}
// 将练习块任务添加到时间线
timeline.push(...createPracticeBlock());

// 正式实验说明任务
var instructions_real = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<div class="task-container">' +
                '<p>正式实验开始</p>' +
                '<p>如果您准备好正式实验，点击下面的按钮开始。</p>' +
                '</div>',
    choices: ['开始']
};
// 将正式实验说明任务添加到时间线
timeline.push(instructions_real);

// 创建正式实验任务
var real_trials = [];
for (var i = 0; i < 50; i++) {
    real_trials.push(createMathTrial());
}
// 将正式实验任务添加到时间线
timeline.push(...real_trials);

// 添加任务切换说明
timeline.push({
    type: jsPsychHtmlButtonResponse,
    stimulus: '<div class="task-container">' +
                '<p>任务一结束</p>' +
                '<p>接下来进行任务二：放松任务</p>' +
                '<p>您只需要尽可能地放松、发呆</p>' +
                '<p>沉浸在轻松的氛围中即可</p>' +
                '</div>',
    choices: ['开始']
});

// 将放松任务添加到时间线
timeline.push(createRelaxTrial());

// 添加脑电安全帽舒适度评分任务
timeline.push({
    type: jsPsychHtmlSliderResponse,
    stimulus:'<div class="task-container">' +
        '<p>请您对脑电安全帽的舒适度进行评分：</p>' +
        '<p>1:非常不舒服,10:非常舒服;</p>' +
        '</div>',
    labels: [1,2,3,4,5,6,7,8,9,10],
    step:1,
    min:1,
    max:10,
    slider_start:5,
    slider_width:500,
    require_movement: true,
    button_label:'确认提交'
});

// 实验结束页面任务
timeline.push({
    type: jsPsychHtmlButtonResponse,
    stimulus: '<div class="task-container">' +
              '<p>实验已结束，感谢您的参与！</p>' +
              '</div>',
    choices: ['结束']
});

// 导出数据为Excel文件的函数
function exportDataToExcel() {
    var data = jsPsych.data.get().json();
    var jsonData = JSON.parse(data);
    
    // 转换数据为Excel格式
    var worksheet = XLSX.utils.json_to_sheet(jsonData);
    var workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "实验数据");

    // 生成Excel文件
    var excelData = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    // 创建下载链接并点击
    var blob = new Blob([excelData], { type: 'application/octet-stream' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = '实验数据.xlsx';
    a.click();
    URL.revokeObjectURL(url);
}

// 启动实验
jsPsych.run(timeline);