根据此描述要求针对pages\company\index.vue中的组件作出以下修改，因为是响应式，需要考虑到窄屏适配的问题 以及字体大小动态适配等，不要产生其他额外的逻辑，按照要求来实现即可。



1. 图片资源替换：当前路由下所有的图片都放在了assets\images\company按要求替换
    - 调整顶部海报的结构，实际上没有全屏海报，只有一个大图hero.png，此图片不是全屏，也不是背景图，而是在菜单下方和正文内容宽度一样的一个图片
    - 中间的company-gallery__grid三个图片换成 robot-1、 robot-2、 robot-3、这三个图应该是没有圆角，也没有间距 紧紧挨在一起的，现在中间有两个白色的间距要去掉，图片的高度在长一点，接近宽6.1 长7.2的比例
    - 紧接着philosophy-icon的图标换成icon-png






2. 文案替换  
    1.company-about__desc里的字体设置为26px， 换成Xitu Zhijing Technology (Shanghai) Co., Ltd. was established on July 25, 2023. Focusing on the application of embodied intelligence products, the company integrates large-scale AI models and robotic hardware, acting as both a robot manufacturer and a system solution provider. Initially, the company's products target the AMR (Autonomous Mobile Robot) market, while also laying the groundwork for the humanoid robot sector,serving leading clients in the warehousing and logistics industry.
    2. Company Philosophy下面的P标签里换成这个描述：
    Our company's journey will be a long one. To make a meaningful impact on the mass market, we need a championship team dedicated to our mission, significant engineering innovation, and substantial investment. We face many uncertainties.
However, if we succeed, we have the potential to make a profound positive impact on humanity and change the world.

3. Market Opportunity下面的P标签换成
Since the outbreak of COVID-19, global demand for robots has surged:
• Labor shortages, especially for physically demanding jobs such as warehouse workers
• Sharp rise in labor costs
• Increased workplace safety requirements

在下面有一段主题色的文字 替换成
As a major manufacturing hub, China has a relatively mature supply chain for the robotics industry. Effectively leveraging the global mature supply chain for robotics production and expanding productsales in international markets will be crucial to future business success!

4. 紧接着company-values里的三个标题分别换成Master Plan、Our Vision、Our Mission，描述分别换成
Market and Customer Demand Driven,Emphasizing System and Software Technical Advantages.

EWe are committed to success and have the opportunity to make a positive impact on humanity, improve lives, and change the world. To become an internationally leading intelligent robotics solution provider.

Deeply understand robotics deployment scenarios, work backwards fromthe end goal, and customize automation solutions for customers.
Provide internationally leading products and technologies, delivering excellent products and services tailored to customer needs.





