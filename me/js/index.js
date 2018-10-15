/* 注释 */
// 写点啥呢？

var option = {
    title : {
        text: '设计',
        subtext: '仅供参考'
    },
    tooltip : {
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['PS','AI','CDR','Sketch','C4D','其它']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            type:'bar',
            data:[80.0, 90.2, 50.6, 70.7, 40.6, 60],
       
        }
    ]
};
                    

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('echarts-bar01'),'light');


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);






option = {
    title : {
        text: '编程',
        subtext: '仅供参考'
    },
    tooltip : {
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['HTML','CSS','JS','python','php','其它']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            type:'bar',
            data:[90.0, 90.2, 50.6, 60.7, 40.6, 70],
       
        }
    ]
};
                    

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('echarts-bar02'),'light');


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);





var option = {
    title : {
        text: '软件',
        subtext: '仅供参考'
    },
    tooltip : {
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['Axure','Word','Excel','PPT','XMind','其它']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            type:'bar',
            data:[80.0, 90.2, 70.6, 60.7, 70.6, 80],
       
        }
    ]
};
                    

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('echarts-bar03'),'light');


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);



var option = {
    title : {
        text: '产品',
        subtext: '仅供参考',
        x:'left'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'right',
        y : '10px',
        data:['文档撰写','项目控制','需求整理','竞品调研','协调沟通','原型设计','其它']
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true, 
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        x: '25%',
                        width: '50%',
                        funnelAlign: 'left',
                        max: 1548
                    }
                }
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:535, name:'文档撰写'},
                {value:234, name:'项目控制'},
                {value:135, name:'需求整理'},
                {value:248, name:'竞品调研'},
                {value:548, name:'协调沟通'},
                {value:548, name:'原型设计'},
                {value:310, name:'其它'},
            ]
        }
    ]
};
  
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('echarts-pie01'),'light');


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);




var option = {
    title : {
        text: '涉及',
        subtext: '仅供参考',
        x:'left'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'right',
        y : '10px',
        data:['电商','旅游','股票','社交','工具','金融','其它']
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true, 
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        x: '25%',
                        width: '50%',
                        funnelAlign: 'left',
                        max: 1548
                    }
                }
            },
        }
    },
    calculable : true,
    series : [
        {
            name:'来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:635, name:'电商'},
                {value:260, name:'旅游'},
                {value:234, name:'社交'},
                {value:135, name:'工具'},
                {value:135, name:'金融'},
                {value:248, name:'其它'}
            ]
        }
    ]
};
  
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('echarts-pie02'),'light');


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);





