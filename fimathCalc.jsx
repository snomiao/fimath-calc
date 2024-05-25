import React, { Component } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import {mathList} from './mathList.js'
import evalFimath from './evalFimath.js'
import './style.css';

class FimathCalc extends Component {
  constructor() {
    super();

    this.state = {
      title: '雪星的金融数学计算器 v2.0 - 雪星实验室',
      v: '',
      // i: '[1000 a(10,i), 800 a(10,i) + vi(i) * Ia(9,i) * ((1239.1-800)/9) ]',
      i: '...',
    };
  }
  componentDidMount() {
    // var hashFormular = decodeURIComponent(window.location.hash.slice(1,-1)) // 去头去尾
    var hashFormular = decodeURIComponent(window.location.hash.slice(3)) // 去头
    this.state.i=hashFormular
    this.input()
  }
  eval(code){
    var code = code
    // 百分号转换
    .replace(/(\d+(?:\.?\d+)?)%/g,(_,num)=>"("+num+"*0.01)")
    // 幂运算转换
    .replace(/\^/g,()=>"**")
    // ~转成+号
    .replace(/~/g,(_,num)=>"("+num+"*0.01)")
    // 省略乘号
    // 2 2
    // 2(   2w
    // )(   w(    )w
    .replace(/(\d)(\s+)(\d)/g   ,(_,l,s,r)=>l+"*"+r)
    .replace(/(\))(\s+)(\d)/g   ,(_,l,s,r)=>l+"*"+r)
    .replace(/(\d)(\s+)(\(|[a-z])/ig,(_,l,s,r)=>l+"*"+r)
    .replace(/(\))(\s+)(\()/ig   ,(_,l,s,r)=>l+"*"+r)
    .replace(/([a-z])(\s+)(\()/ig   ,(_,l,s,r)=>l+"*"+r)
    .replace(/(\))(\s+)([a-z])/ig   ,(_,l,s,r)=>l+"*"+r)
    .replace(/([a-z])(\s+)([a-z])/ig   ,(_,l,s,r)=>l+"*"+r)
    // .replace(/(\w)(\s+?)(\w)/g   ,(_,l,s,r)=>l+"*"+r)
      // 把var转回来
      // .replace(/var\((.*?)\);/g,(_,num)=>"("+num+"*0.01)")
    // code = `(()=>(${code}))()`
    console.log('evalFimath: ', code)
    return evalFimath(code)
  }
  inputV(e=undefined){
    var v = e.target.value
    this.state.v = v
    this.setState({v})
    this.input();
  }
  input(e=undefined){
    var i = e ? (e.target ? (e.target.value||"") : e) : this.state.i;
    this.setState({i})
    // window.location.hash=encodeURI("#"+i+"#")
    window.location.hash="#f-" + encodeURIComponent(i)
    // eval
    var o;
    try{o=this.eval(i)}catch(err){o=err.toString()}
    if(o===undefined){ o = ""}
    // console.log("code out")
    // console.log('i', i)
    // console.log('o', o)

    // out
    var outJSON = JSON.stringify(o)
    var outString = o.toString()
    this.setState({outString, outJSON})
    
    // 自动设定高度
    this.nameInput.style.height = 'auto'; 
    this.nameInput.style.height = this.nameInput.scrollHeight + 'px'; 
  }
  appendCode(code){
    var gotoTop = async ()=>{
      this.nameInput.scrollIntoView()
      this.nameInput.focus()
      // window.scrollTo(0, 0)
      // document.body.scrollTop = 0; // For Safari
      // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    gotoTop()
    setTimeout(gotoTop,1)
    setTimeout(gotoTop,16)
    setTimeout(gotoTop,200)
    setTimeout(gotoTop,500)

    var i, code = code.trim();
    if(code.startsWith("<<")){
      i = code.slice(2).trim() + " " + this.state.i;
    }else{
      i = (this.state.i && this.state.i + (this.state.i.trim().endsWith(",") ? "" : ',')) + code;
    }
    this.input(i)
  }
  render() {
    return (
      <div>
        <title>{this.state.title}</title>
        <h1>{this.state.title}</h1>
        {
          //预定义变量：<div className="codeInput var"><input value={this.state.v} onChange={e=>this.inputV(e)} autoComplete/></div>
        }
        <h3>算式输入：</h3>
        <div className="codeInput">
          <textarea value={this.state.i}
            onChange={e=>this.input(e)}
            autoComplete="on"
            ref={(input)=>{ this.nameInput = input}} 
            />
        </div>
        {/* <h3>公式输出：</h3> */}
        {/* <div className="fomularOutput"><BlockMath>{this.state.o}</BlockMath></div> */}
        <h3>数据输出：</h3>
        <div className="codeOutput"><code>{this.state.outJSON}</code></div>
        {/* <h3>代码输出：</h3> */}
        {/* <div className="codeOutput"><code>{this.state.outString}</code></div> */}

        <h3>快速输入：</h3>
        <div className='quick-btn-list'>

        {
          mathList.trim().split(/\r?\n/g)
          .map((line, index)=>
            line.startsWith("\\text{") 
          ?  (<BlockMath key={index}>{line}</BlockMath>) 
          : ((line)=>{
            var [code, math] = line.match(/(.*?)=>(.*)/).slice(1)
            return ( 
              <button className="fomular" onClick={()=>this.appendCode(code)}>
                    <InlineMath key={line} >{'\\displaystyle'+math}</InlineMath>
                  </button>
                )
              }
            )(line))
          }
          </div>
        <h3>注意事项：</h3>
        <p>需要注意的就是它有变量污染的问题……比如你先打个i=1然后删掉，然后它会记住这个i。如果需要清理这些个变量的话，刷新一下页面就可以了。</p>

        <h3>关于</h3>
        <p>制作 by 雪星实验室 (20200616)</p>
        <p>2024-05-26 更新: 追加内部収益率函数</p>
      </div>
    );
  }
}

export default FimathCalc;
