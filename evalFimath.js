import { equalLoanPayment } from './equalLoanPayment'
import { equalLoanPaymentTable } from './equalLoanPaymentTable'
import IRR from './IRR.js'

// 内部收益率 IRRX(100, 40, 3) == IRR([-100,40,40,40]) == 0.09701025740327303
let irr = IRR
let irrx = function(C, p, n) {
  const CArray = []
  CArray.push(-C)
  for (let i = 0; i < n; i++) {
    CArray.push(p)
  }
  return IRR(CArray)
}

// 利率转换
let id       = (d)        => d / (1 - d)
let iv       = (v)        => dv(v) / (1 - dv(v))
let iim      = (im, m)    => (1+im/m)**m-1
let ddn      = (dn, n)    => 1-(1-dn/n)**n
let di       = (i)        => i / (1 + i)
let dv       = (v)        => 1 - v
let vd       = (d)        => 1 - d
let vi       = (i)        => 1 - di(i)
let im       = (i, m)     => m * ((1+i)**(1/m)-1)
let dn       = (d, n)     => n * (1-vd(d)**(1/n))
let dei      = (i)        => Math.log(1 + i)
let ded      = (d)        => Math.log(1 + id(d))
// 期末付年金
let a        = (n, i)     => (1-vi(i)**n)/i
let s        = (n, i)     => ((1+i)**n-1)/i
let am       = (n, im, m) => a(n, iim(im,m))*iim(im,m)/im
let sm       = (n, im, m) => s(n, iim(im,m))*iim(im,m)/im
let ac       = (n, i)     => a(n, i)*i/dei(i)
let sc       = (n, i)     => s(n, i)*i/dei(i)
// 期末付永续年金
let ainf     = (i)        => 1 / i
let ainfm    = (im)       => 1 / im
let acinf    = (i)        => 1 / dei(i)
// 期初付年金
let _a       = (n, i)     => (1+i)*a (n, i)
let _s       = (n, i)     => (1+i)*s (n, i)
let _am      = (n, im, m) => (1+i)*am(n, im, m)
let _sm      = (n, im, m) => (1+i)*sm(n, im, m)
let _ac      = (n, i)     => (1+i)*ac(n, i)
let _sc      = (n, i)     => (1+i)*sc(n, i)
// 期初付永续年金
let _ainf    = (i)        => (1+i)*ainf (i    )
let _ainfm   = (im, m)    => (1+i)*ainfm(i, m )
let _acinf   = (i)        => (1+i)*acinf(i    )
// 期末付递增年金
let Ia       = (n, i)     => (_a(n,i)-n*vi(i)**n)       /i
let Is       = (n, i)     => (_s(n,i)-n)                /i
let Iam      = (n, im, m) => Ia(n,iim(im, m))*iim(im, m)/im
let Ism      = (n, im, m) => Is(n,iim(im, m))*iim(im, m)/im
let Iac      = (n, i)     => Ia(n,i)*i                  /dei(i)
let Isc      = (n, i)     => Is(n,i)*i                  /dei(i)
let Icac     = (n, i)     => (_ac(n, i)-n*vi(i)**n)     /dei(i)
let Icsc     = (n, i)     => (_sc(n, i)-n)              /dei(i)
// 期末付递增永续年金
let Iainf    = (i)        => ainf (i)  /d(i)
let Iainfm   = (im, m)    => ainfm(im) /d(iim(im))
let Iacinf   = (i)        => acinf(i)  /d(i)
let Icacinf  = (i)        => 1/d(i)    /d(i)
// 期末付递减年金
let Da       = (n, i)     => (n-a(n, i))                /i
let Ds       = (n, i)     => (n*(1+i)**n-s(n, i))       /i
let Dam      = (n, im, m) => Da(n,iim(im, m))*iim(im, m)/im
let Dsm      = (n, im, m) => Ds(n,iim(im, m))*iim(im, m)/im
let Dac      = (n, i)     => Da(n,i)*i                  /dei(i)
let Dsc      = (n, i)     => Ds(n,i)*i                  /dei(i)
let Dcac     = (n, i)     => (n-ac(n, i))               /dei(i)
let Dcsc     = (n, i)     => (n*(1+i)**n-sc(n, i))      /dei(i)
// 递减没有永续年金
// 期初付递增年金
let I_a      = (n, i)     => (1+i)        *Ia  (n, i)    
let I_s      = (n, i)     => (1+i)        *Is  (n, i)    
let I_am     = (n, im, m) => (1+iim(im,m))*Iam (n, im, m)
let I_sm     = (n, im, m) => (1+iim(im,m))*Ism (n, im, m)
let I_ac     = (n, i)     => (1+i)        *Iac (n, i)    
let I_sc     = (n, i)     => (1+i)        *Isc (n, i)    
let Ic_ac    = (n, i)     => (1+i)        *Icac(n, i)    
let Ic_sc    = (n, i)     => (1+i)        *Icsc(n, i)    
// 期初付递增永续年金
let I_ainf   = (i)        => (1+i)      *Iainf  (i )
let I_ainfm  = (i)        => (1+iim(im))*Iainfm (im)
let I_acinf  = (i)        => (1+i)      *Iacinf (i )
let Ic_acinf = (i)        => (1+i)      *Icacinf(i )
// 期初付递减年金
let D_a      = (n, i)     => (1+i)        *Da  (n, i)    
let D_s      = (n, i)     => (1+i)        *Ds  (n, i)    
let D_am     = (n, im, m) => (1+iim(im,m))*Dam (n, im, m)
let D_sm     = (n, im, m) => (1+iim(im,m))*Dsm (n, im, m)
let D_ac     = (n, i)     => (1+i)        *Dac (n, i)    
let D_sc     = (n, i)     => (1+i)        *Dsc (n, i)    
let Dc_ac    = (n, i)     => (1+i)        *Dcac(n, i)    
let Dc_sc    = (n, i)     => (1+i)        *Dcsc(n, i)    

// 等額本息還款
let ELP = equalLoanPayment
let ELPT = equalLoanPaymentTable


const evalFimath = function(code){
  // define vars in non strict mode
  try{(0,eval)(code)}catch(e){}
  // and return the value in strict mode in this module
  return eval(code)
};
// const evalFimath = (str)=>eval("i=0.1, a(1,i)");
export default evalFimath;