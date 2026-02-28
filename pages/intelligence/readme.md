根据此描述要求针对pages\intelligence\index.vue中的组件作出以下修改，因为是响应式，需要考虑到窄屏适配的问题 以及字体大小动态适配等，不要产生其他额外的逻辑，按照要求来实现即可。

1. 重新实现顶部的海报区域，要求1:1还原，菜单复用公共组件，按照下面要求引入图片资源
    - 完整的顶部海报区域UI稿参考文件assets\images\intelligence\UI.jpg
    - 海报区域整体是黑色背景27, 27, 28
    - 海报正中间叠加新的纹理背景hero-bg.png 右侧是一个类型大型的X的logo 对应hero-icon.png
    - 海报中间有一个XITU Intelligence.的标签，字体要再大一点，白色的。XITU Intelligence后面加一个小数. 小数点是主题色 青绿色的那种。举例屏幕左边的边距和顶部的菜单举例左边屏幕的间距一样，看上去是对齐的效果对齐的。字体大小大概35px，窄屏场景下视情况缩小
    - 纹理背景下面是一段文字描述，字体大概24px，颜色为 127, 128, 129 内容为：The Skyeye, our AI system, is a generalist humanoid Vision-Language-Action modelthat learns and improves over time as it acquires new skills.
    - 



2. 图片资源替换：当前路由下所有的图片都放在了assets\images\intelligence 按要求替换
  - 中间intelligence-features__grid里4个图标分别是icon-1、icon-2、icon-3、icon-4四个文件，下面的标题和描述字体还要大一点。 这4个图标最大按照2*2展示 现在最大是1行4个 改成1行2个
  - intelligence-gallery里的四个机器人图片分别对应robot-1、robot-2、robot-3、robot-4、 四个文件
  - intelligence-flow区域的图片换成assets\images\intelligence\process.png



3. 文案修改： 从上至下替换一下文案
    - 海报下面的一大段文字 在黑色区域：上面已经提到你修改了。接下来改intelligence-features__grid里的四个item文案
    - 4个图标下面的标题分别是Vision-Language Models、Voice Interaction、Lidar-based world perception、Autonomous obstacle avoidance，下面还对应了4个描述，分别是
  We’re incorporating the ability for Skywalker to perceive the visual scenes around them, improving awareness of their surroundings.
  Speak commands naturally, and Skywalker will understand, provide helpful information, and execute tasks.
  Skywalker uses lidar technology to map its surroundings in real-time.
  Skywalker autonomously avoids obstacles, ensuring smooth navigation in dynamic environments.





