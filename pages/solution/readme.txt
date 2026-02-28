根据此描述要求针对pages\solution\index.vue中的组件作出以下修改，因为是响应式，需要考虑到窄屏适配的问题 以及字体大小动态适配等，不要产生其他额外的逻辑，按照要求来实现即可。



1. 图片资源替换：当前路由下所有的图片都放在了assets\images\solution 按要求替换
    - 顶部海报换成hero文件
    - 下面的6个机器人换成robot-1 一直到 robot-6


2.solution-products 区域布局与文案调整
    - 实际现在是一行3个展示，一共2行6个item，实际上在PC默认应该是3列去展示，每一列上下两行，也就是说现在的1、4是一组  2、5是一组、 3、6是一组，他们是上下对应关系，然后每一列的的div靠近左侧border中间的位置 有一条很长的箭头将两者联系起来。其实就相当于上面是原型，下面是应用实现的一个指示，所以是这样一个布局
    - 现在展示在第一列的每个第一张图底下的黑色按钮实现的不对，图片给一个灰色的边框 96, 96, 96 底部的product-item__label按钮和图片的宽度保持一致，紧紧挨在图片的下方，三个product-item__label按钮里的文字分别是Gen 1-L、Gen 1-W、Gen 2-W，字体要很大 差不多25px的样子，居中展示
接下来是这里面的描述文字调整
第一列文案 上面 
·Complete overall robotic skeleton
·Equipped with essential sensors and actuators
·Capable of basic functions including standing, squatting, and walking
·Basic object recognition implemented
·Simple object handling enabled
·Integrated with LLM for basic human-robot interaction
·Launch Date: 2024
下面
Full size humanoid robot, designed for heavy duty use cases, featuring a highly biomimetic torso structure and motion control, and is capable of functions, e.g., slow/fast-speed walking, obstacle avoidance, and uphill and downhill etc.

第二列文案  上面
·Humanoid skeletal and exterior design·Two categories: wheeled and legged·Advanced AI control system
·Safety level: compliant with safety regulations in Europe and North America
·In-house development of key components (joints, controllers, and sensors)
·Integration of linear and rotary joints
·Embodied skills: capable of performing repetitive tasks in application scenarios
·Deployment of a multi-robot fleet management platform, supporting OTA 
·Launch Date: 2025
下面的6个机器人换成robot
Gen 1-W robot features a highly biomimetic torso structure and armmotion control. Equipped with a differential wheel chassis, it offersfunctionalities such as fast/slow walking and motion-based obstacleavoidance.


第三列文案 上面
·Introduction of world models and lifelong learning to enhanceembodied intelligence and generalization capabilities
·Comprehensive implementation of redundancy designmechanisms based on safety redundancy objectives
·Achievement of cross-robot communication, enabling transparenttransmission of perception data across robots, multi-robot task collaboration,and autonomous organization of robot swarm tasks
·Launch Date: 2026
下面
Gen 2-W robotic chassis employs a three-steering-wheel drive system, enabling forward and backward movement, lateral translation, diagonal motion, pivot turn, and Ackermann steering mode, achieving 360-degree omnidirectional mobility.







3. 文案替换  
    1. solution-intro里的文案替换成：The Skywalker features a highly biomimetic torso configuration,flexible arm motion control, and an intelligent motion chassis. Combined with an embodied intelligence large language model, it achieves high-precision, high-efficiency, and highly generalizablemotion control.


4. 顶部海报左侧中间参考前面两个页面也引入你herottle组件，标题是XITU Solution.  也是最后有一个主题色的小数点




