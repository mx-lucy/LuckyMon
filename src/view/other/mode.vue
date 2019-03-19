<template>
    <div>
      <div>
        <h4> MVC,MVP,MVVM是三种常见的前端架构模式(Architectural Pattern),它通过分离关注点来改进代码组织方式。
          不同于设计模式(Design Pattern),只是为了解决一类问题而总结出的抽象方法，一种架构模式往往能使用多种设计模式。</h4>
        <div class="MVCclass">
          <h4>MVC模式</h4>
          <canvas id="MVCCanvas" width="400px" height="260px" style="border:1px solid #d3d3d3;"></canvas>
          <h4>MVC设计模式</h4>
          <ul><p>MVC的全名是Model View Controller，是模型(model)－视图(view)－控制器(controller)的缩写，是一种软件设计典范。
            它是用一种业务逻辑、数据与界面显示分离的方法来组织代码，将众多的业务逻辑聚集到一个部件里面，
            在需要改进和个性化定制界面及用户交互的同时，不需要重新编写业务逻辑，达到减少编码的时间。
            MVC 设计模型是一种使用 Model View Controller（ 模型-视图-控制器）设计创建 Web 应用程序的模式。 </p>
            <li>
              <strong>Model（模型）</strong>是应用程序中用于处理应用程序数据逻辑的部分。 通常模型对象负责在数据库中存取数据。
            </li>
            <li>
              <strong>View（视图）</strong> 是应用程序中处理数据显示的部分。 通常视图是依据模型数据创建的
            </li>
            <li>
              <strong>Controller（控制器）</strong>是应用程序中处理用户交互的部分。 通常控制器负责从视图读取数据，控制用户输入，并向模型发送数据。
            </li>
            <li>
              <strong>使用的MVC的目的</strong>在于将M和V的实现代码分离，从而使同一个程序可以使用不同的表现形式。
              比如Windows系统资源管理器文件夹内容的显示方式，下面两张图中左边为详细信息显示方式，右边为中等图标显示方式，文件的内容并没有改变，改变的是显示的方式。
              不管用户使用何种类型的显示方式，文件的内容并没有改变，达到M和V分离的目的。
            </li>
            <li>
              <strong>MVC的优点</strong>1.耦合性低 2.重用性高 3.部署快，生命周期成本低 4.可维护性高
            </li>
            <li>
              <strong>MVC的缺点</strong>1.完全理解MVC比较复杂。2.调试困难。3.不适合小型，中等规模的应用程序
              4.增加系统结构和实现的复杂性 5.视图与控制器间的过于紧密的连接并且降低了视图对模型数据的访问
            </li>
            <li>
              <strong>MVC举例</strong>1.jsp+servlet+javabean模式。2.Struts2框架 3.ASP.NET MVC
            </li>
          </ul>
          <h4>MVC框架</h4>
          <ul>
            <p>软件生产中有三种级别的重用：内部重用（即在同一应用中能公共使用的抽象块），代码重用（即将通用模块组合成库或工具集，以便在多个应用和领域都能使用），
              应用框架的重用（即为专用领域提供通用的或现成的基础结构，以获得最高级别的重用性）</p>
            <li><strong>框架与模式</strong>框架通常是代码重用,所以我们在使用框架的时候总是引入很多包。框架是软件，而设计模式是软件的“知识”。所以模式是框架的基础。</li>
            <li><strong>常见的框架</strong> C++语言的QT、MFC、gtk ;Java语言的SSH 、SSI ;php语言的 smarty(MVC模式) ;python语言的django(MTV模式)等等；</li>
            <li><strong>常见的设计模型</strong> MVC、MTV、MVP、CBD、ORM等等</li>
          </ul>
        </div>
        <div class="MVCclass">
          <h4>MVP模式</h4>
          <div style="width: 300px;height: 250px;"></div>
          <ul><p>简称：MVP 全称：Model-View-Presenter ；MVP 是从经典的模式MVC演变而来，
            它们的基本思想有相通的地方：Controller/Presenter负责逻辑的处理，Model提供数据，View负责显示。</p>
            <li>
              <strong>MVP与MVC</strong>在MVP中View并不直接使用Model，它们之间的通信是通过Presenter (MVC中的Controller)来进行的，
              所有的交互都发生在Presenter内部，而在MVC中View会直接从Model中读取数据而不是通过 Controller。
            </li>
            <li>
              <strong>优点</strong>1、模型与视图完全分离，我们可以修改视图而不影响模型
              2、可以更高效地使用模型，因为所有的交互都发生在一个地方——Presenter内部
              3、我们可以将一个Presenter用于多个视图，而不需要改变Presenter的逻辑。这个特性非常的有用，因为视图的变化总是比模型的变化频繁。
              4、如果我们把逻辑放在Presenter中，那么我们就可以脱离用户接口来测试这些逻辑（单元测试）
            </li>
            <li>
              <strong>缺点</strong>由于对视图的渲染放在了Presenter中，所以视图和Presenter的交互会过于频繁。还有一点需要明白，
              如果Presenter过多地渲染了视图，往往会使得它与特定的视图的联系过于紧密。一旦视图需要变更，那么Presenter也需要变更了。
              比如说，原本用来呈现Html的Presenter现在也需要用于呈现Pdf了，那么视图很有可能也需要变更。
            </li>
            <li>
              <strong>典型MVP模式</strong>
            </li>
          </ul>
        </div>
        <div class="MVCclass">
          <h4>MVVM设计模式</h4>
          <div style="width: 400px;height: 300px;"></div>
          <ul><p>MVVM是Model-View-ViewModel的简写。它本质上就是MVC 的改进版。
            MVVM 就是将其中的View 的状态和行为抽象化，让我们将视图 UI 和业务逻辑分开。
            MVVM（Model-View-ViewModel）框架的由来便是MVP（Model-View-Presenter）模式与WPF结合的应用方式时发展演变过来的一种新型架构框架。
            它立足于原有MVP框架并且把WPF的新特性糅合进去，以应对客户日益复杂的需求变化。</p>
            <li><strong>视图模型</strong>视图模型是暴露公共属性和命令的视图的抽象。MVVM没有MVC模式的控制器，也没有MVP模式的presenter，有的是一个绑定器。
              在视图模型中，绑定器在视图和数据绑定器之间进行通信。</li>
            <li><strong>MVVM优点</strong>MVVM模式和MVC模式一样，主要目的是分离视图（View）和模型（Model），有几大优点
              1. 低耦合。视图（View）可以独立于Model变化和修改，一个ViewModel可以绑定到不同的"View"上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变。
              2. 可重用性。你可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑。
              3. 独立开发。开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计，使用Expression Blend可以很容易设计界面并生成xaml代码。
              4. 可测试。界面素来是比较难于测试的，而现在测试可以针对ViewModel来写。</li>
            <li><strong>缺点</strong></li>
            <li><strong>典型MVVM模式</strong>Simple Mvvm，Mvvm Light和Prism。 vue</li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'mode',
  methods: {
    print () {
      // var c0 = document.getElementById('myCanvas0')
      var ctx = document.getElementById('MVCCanvas').getContext('2d')
      ctx.fillStyle = '#ff0000'
      ctx.fillRect(150, 50, 100, 50)
      ctx.fillStyle = '#ffff00'
      ctx.fillRect(260, 150, 100, 50)
      ctx.fillStyle = '#00ff00'
      ctx.fillRect(10, 150, 160, 50)
      ctx.font = '30px Verdana'
      ctx.fillStyle = '#000000'
      ctx.fillText('View', 170, 85)
      ctx.fillText('Model', 270, 185)
      ctx.fillText('Controller', 15, 185)
      ctx.fillStyle = '#0000ff'
      ctx.moveTo(200, 100)
      ctx.lineTo(310, 150)
      ctx.stroke()
      ctx.moveTo(200, 100)
      ctx.lineTo(80, 150)
      ctx.stroke()
      ctx.moveTo(170, 175)
      ctx.lineTo(260, 175)
      ctx.stroke()
    }
  },
  mounted () {
    this.print()
  }
}
</script>

<style scoped>
  .MVCclass{
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }
  .MVCclass ul{
    text-align: left;
  }
  .MVCclass li{
    list-style-type: none;
    text-align: left;
  }
  .MVCclass li strong{
    font-size: 1.5em;
    color: #000000;
  }
  .MVCclass li:hover{
    color: blue;
  }

</style>
