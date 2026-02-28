根据此描述要求针对pages\careers\index.vue中的组件作出以下修改，因为是响应式，需要考虑到窄屏适配的问题 以及字体大小动态适配等，不要产生其他额外的逻辑，按照要求来实现即可。



1. 图片资源替换：当前路由下所有的图片都放在了assets\images\careers 按要求替换
    - 顶部海报换成hero文件，注意这次不是全屏效果，图片正好撑满屏幕即可
    - 底部图片换成work.png

2. careers-intro__text和careers-jobs不应该是左右结构，他们虽然整体是左右，但是一个是左上角 一个是右下角，也就是说没有齐平展示，有一个错位的效果
另外decorative-square应该是在顶部海报的右下角绝对定位的位置，大概在bottom-border正好居中，距离屏幕右侧40px的间距的样子 这个方块的大小大概150*150px的大小


3.文案替换
- JOIN US的元素删除，下面的描述颜色换成#606060，字体换成17px底下的描述换成“
ROLES
We warmly welcome talented individuals 
who want to change our modern lives 
through robotics and create value with us.


接下来下面右侧的列表依次换成：
Perception Algorithm Engineer (Grasping) 2
Decision and Planning Algorithm Engineer 2
Perception Algorithm Engineer (Path Planning) 1
SLAM Algorithm Engineer 3
Motor Control Algorithm Engineer 2
Reinforcement Learning Algorithm Engineer 2
ACCOUNTANT 
PRODUCT MANAGER
TEST ENGINEER


紧接着右侧的这个列表下方再添加文字描述：
XITU has created an equal and efficient work environment,aiming to build a 
corporate culture of Customer Obsession, Value Creation, and Beginning with 
the End in Mind.
这串描述文字的视觉效果和列表的左侧对齐了，字体大概17px，颜色也是#606060

接下来careers-culture里的描述删除，背景色也去掉


