import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { InlineMath, BlockMath } from 'react-katex';
import {mathList} from './mathList.js'
import {evalFimath} from './evalFimath.js'

// import 

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '雪星的金融数学计算器 v2.0',
      v: 'n=15, i=5%, m=12',
      i: '[1000 a(10,i), 800 a(10,i) + vi(i) * Ia(9,i) * ((1239.1-800)/9) ]',
    };
  }
  componentDidMount() {
    this.input()
  }
  eval(code){
    var code = code
      // 省略乘号
      // 2 2
      // 2(   2w
      // )(   w(    )w
      // .replace(/(\d)(\s+)(\d)/g   ,(_,l,s,r)=>l+"*"+r)
      .replace(/(\d)(\s*)(\(|[a-z])/ig,(_,l,s,r)=>l+"*"+r)
      .replace(/(\))(\s*)(\()/g   ,(_,l,s,r)=>l+"*"+r)
      // .replace(/(\w)(\s*?)(\()/g   ,(_,l,s,r)=>l+"*"+r)
      .replace(/(\))(\s*)(\w)/g   ,(_,l,s,r)=>l+"*"+r)
      // .replace(/(\w)(\s+?)(\w)/g   ,(_,l,s,r)=>l+"*"+r)
      // 幂运算转换
      .replace(/\^/g,()=>"**")
      // 百分号转换
      .replace(/(\d+(?:\.?\d+)?)%/g,(_,num)=>"("+num+"*0.01)")
      // ~转成+号
      .replace(/~/哼哼哼哼，g,(_,num)=>"("+num+"*0.01)")
      // 把var转回来
      // .replace(/var\((.*?)\);/g,(_,num)=>"("+num+"*0.01)")
    console.log(code)
    return evalFimath(code)
  }
  inputV(e=undefined){
    var v = e.target.value
    this.state.v = v
    this.setState({v})
    this.input();
  }
  input(e=undefined){
    var vv = "var " + this.state.v.trim() + ";";
    var i = e ? (e.target ? (e.target.value||"") : e) : this.state.i;
    var o, o2;
    try{o=this.eval(vv+i)}catch(err){o=err.toString()}
    try{o2=this.eval(i)}catch(err){o2=err.toString()}
    if(o===undefined){o="undefined"}
    if(o2===undefined){o2="undefined"}
    console.log(10, o, o2)
    o = o || o2;
    // o=o.toString();
    o = JSON.stringify(o)
    this.setState({i, o})
  }
  appendCode(code){
    var i, code = code.trim();
    if(code.startsWith("<<")){
      i = code.slice(2).trim() + " " + this.state.i;
    }else{
      i = this.state.i + code;
    }
    this.input(i)
  }
  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" integrity="sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq" crossOrigin="anonymous" />
        <h1>{this.state.name}</h1>
        预定义变量：
        <div class="codeInput var"><input value={this.state.v} onChange={e=>this.inputV(e)} autocomplete/></div>
        输：
        <div class="codeInput"><input value={this.state.i} onChange={e=>this.input(e)} autocomplete/></div>
        {
        // 公式输出：<div class="fomularOutput"><BlockMath>{this.state.o}</BlockMath></div>
        }
        代码输出：<div class="codeOutput"><code>{this.state.o}</code></div>
        快速输入：
        {
          mathList.trim().split(/\r?\n/g)
            .map(line=>
              line.startsWith("\\text{") ? (<BlockMath>{line}</BlockMath>) : ((line)=>{
                var [code, math] = line.split("=>")
                return ( 
                  <button class="fomular" onClick={()=>this.appendCode(code)}>
                    <InlineMath math={'\\displaystyle'+math} />
                  </button>
                )
              }
            )(line))
        }
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
