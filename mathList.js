var 备用 = `
`
export const mathList = `
\\text{变量定义}
<< i=0,=> \\text{i}=\\cdots
<< n=0,=> \\text{n}=\\cdots
<< m=0,=> \\text{m}=\\cdots
<< r=0,=> \\text{r}=\\cdots
<< F=0,=> \\text{F}=\\cdots
\\text{内部收益率計算}
irrx(100, 40, 3)     => {irrx}([-100,40,40,40])
irr([-100,40,40,40]) => {irr}([-100,40,40,40])
\\text{利率转换}
id(d)        => {id}{\\left({d}\\right)}=\\frac{d}{{{1}-{d}}}
iv(v)        => {iv}{\\left({v}\\right)}={d}{v}\\frac{{{v}}}{{{1}-{d}{v}{\\left({v}\\right)}}}
iim(im,m)    => {iim}{\\left({i}^{{{\\left({m}\\right)}}},{m}\\right)}={\\left({1}+\\frac{{i}^{{{\\left({m}\\right)}}}}{{m}}\\right)}^{m}-{1}
ddn(dn,n)    => {d}{d}{n}{\\left({d}^{{{\\left({n}\\right)}}},{n}\\right)}={1}-{\\left({1}-\\frac{{d}^{{{\\left({n}\\right)}}}}{{n}}\\right)}^{n}
di(i)        => {d}{i}{\\left({i}\\right)}=\\frac{i}{{{1}+{i}}}
dv(v)        => {d}{v}{\\left({v}\\right)}={1}-{v}
vd(d)        => {v}{d}{\\left({d}\\right)}={1}-{d}
vi(i)        => {v}{i}{\\left({i}\\right)}={1}-{d}{i}{\\left({i}\\right)}
im(i,m)      => {im}{\\left({i},{m}\\right)}={m}\\cdot{\\left({\\left({1}+{i}\\right)}^{{\\frac{1}{{m}}}}-{1}\\right)}
dn(d,n)      => {d}^{{{\\left({n}\\right)}}}{\\left({d},{n}\\right)}={n}\\cdot{\\left({1}-{v}{d}{\\left({d}\\right)}^{{\\frac{1}{{n}}}}\\right)}
dei(i)       => {d}{e}{i}{\\left({i}\\right)}= \\log{{\\left({1}+{i}\\right)}}
ded(d)       => {d}{e}{d}{\\left({d}\\right)}= \\log{{\\left({1}+{i}{d}{\\left({d}\\right)}\\right)}}
\\text{期末付年金}
a(n,i)       => {a}{\\left({n},{i}\\right)}=\\frac{{{1}-{v}{i}{\\left({i}\\right)}^{n}}}{{i}}
s(n,i)       => {s}{\\left({n},{i}\\right)}=\\frac{{{\\left({1}+{i}\\right)}^{n}-{1}}}{{i}}
am(n,im,m)   => {am}{\\left({n},{i}^{{{\\left({m}\\right)}}},{m}\\right)}={a}{\\left({n},{i}{i}{m}{\\left({i}^{{{\\left({m}\\right)}}},{m}\\right)}\\right)}\\cdot{i}{i}{m}\\frac{{{i}^{{{\\left({m}\\right)}}},{m}}}{{i}^{{{\\left({m}\\right)}}}}
sm(n,im,m)   => {s}{m}{\\left({n},{i}^{{{\\left({m}\\right)}}},{m}\\right)}={s}{\\left({n},{i}{i}{m}{\\left({i}^{{{\\left({m}\\right)}}},{m}\\right)}\\right)}\\cdot{i}{i}{m}\\frac{{{i}^{{{\\left({m}\\right)}}},{m}}}{{i}^{{{\\left({m}\\right)}}}}
ac(n,i)      => {a}{c}{\\left({n},{i}\\right)}={a}{\\left({n},{i}\\right)}\\cdot\\frac{i}{{d}}{e}{i}{\\left({i}\\right)}
sc(n,i)      => {s}{c}{\\left({n},{i}\\right)}={s}{\\left({n},{i}\\right)}\\cdot\\frac{i}{{d}}{e}{i}{\\left({i}\\right)}
\\text{期末付永续年金}
ainf(i)      => {ainf}{{\\left({i}\\right)}}=\\frac{1}{{i}}
ainfm(i)     => {ainfm}{\\left({i}^{{{\\left({m}\\right)}}}\\right)}=\\frac{1}{{i}^{{{\\left({m}\\right)}}}}
acinf(i)     => {acinf}{{\\left({i}\\right)}}=\\frac{1}{{d}}{e}{i}{\\left({i}\\right)}
\\text{期初付年金}
_a(n,i)      => \\_{{a}}{\\left({n},{i}\\right)}={\\left({1}+{i}\\right)}\\cdot{a}{\\left({n},{i}\\right)}
_s(n,i)      => \\_{{s}}{\\left({n},{i}\\right)}={\\left({1}+{i}\\right)}\\cdot{s}{\\left({n},{i}\\right)}
_am(n,im,m)  => \\_{{a}}{m}{\\left({n},{i}^{{{\\left({m}\\right)}}},{m}\\right)}={\\left({1}+{i}\\right)}\\cdot{a}{m}{\\left({n},{i}^{{{\\left({m}\\right)}}},{m}\\right)}
_sm(n,im,m)  => \\_{{s}}{m}{\\left({n},{i}^{{{\\left({m}\\right)}}},{m}\\right)}={\\left({1}+{i}\\right)}\\cdot{s}{m}{\\left({n},{i}^{{{\\left({m}\\right)}}},{m}\\right)}
_ac(n,i)     => \\_{{a}}{c}{\\left({n},{i}\\right)}={\\left({1}+{i}\\right)}\\cdot{a}{c}{\\left({n},{i}\\right)}
_sc(n,i)     => \\_{{s}}{c}{\\left({n},{i}\\right)}={\\left({1}+{i}\\right)}\\cdot{s}{c}{\\left({n},{i}\\right)}
\\text{期初付永续年金}
_ainf(i)     => \\_{{a}inf}{{\\left({i}\\right)}}={\\left({1}+{i}\\right)}\\cdot{ainf}{{\\left({i}\\right)}}
_ainfm(im,m) => \\_{{a}inf}{m}{\\left({i}^{{{\\left({m}\\right)}}},{m}\\right)}={\\left({1}+{i}\\right)}\\cdot{ainf}{m}{\\left({i},{m}\\right)}
_acinf(i)    => \\_{{a}}{cinf}{{\\left({i}\\right)}}={\\left({1}+{i}\\right)}\\cdot{acinf}{{\\left({i}\\right)}}
\\text{期末付递增年金}
Ia(n,i)      => {I}{a}{\\left({n},{i}\\right)}=\\frac{{_{a}{\\left({n},{i}\\right)}-{n}\\cdot{v}{i}{\\left({i}\\right)}^{n}}}{{i}}
Is(n,i)      => {I}{s}{\\left({n},{i}\\right)}=\\frac{{_{s}{\\left({n},{i}\\right)}-{n}}}{{i}}
Iam(n,im,m)  => {I}{a}{m}{\\left({n},{i}^{{{\\left({m}\\right)}}},{m}\\right)}={I}{a}{\\left({n},{i}{i}{m}{\\left({i}^{{{\\left({m}\\right)}}},{m}\\right)}\\right)}\\cdot{i}{i}{m}\\frac{{{i}^{{{\\left({m}\\right)}}},{m}}}{{i}^{{{\\left({m}\\right)}}}}
Ism(n,im,m)  => {I}{s}{m}{\\left({n},{i}^{{{\\left({m}\\right)}}},{m}\\right)}={I}{s}{\\left({n},{i}{i}{m}{\\left({i}^{{{\\left({m}\\right)}}},{m}\\right)}\\right)}\\cdot{i}{i}{m}\\frac{{{i}^{{{\\left({m}\\right)}}},{m}}}{{i}^{{{\\left({m}\\right)}}}}
Iac(n,i)     => {I}{a}{c}{\\left({n},{i}\\right)}={I}{a}{\\left({n},{i}\\right)}\\cdot\\frac{i}{{d}}{e}{i}{\\left({i}\\right)}
Isc(n,i)     => {I}{s}{c}{\\left({n},{i}\\right)}={I}{s}{\\left({n},{i}\\right)}\\cdot\\frac{i}{{d}}{e}{i}{\\left({i}\\right)}
Icac(n,i)    => {I}{c}{a}{c}{\\left({n},{i}\\right)}=\\frac{{_{a}{c}{\\left({n},{i}\\right)}-{n}\\cdot{v}{i}{\\left({i}\\right)}^{n}}}{{d}}{e}{i}{\\left({i}\\right)}
Icsc(n,i)    => {I} \\csc{{\\left({n},{i}\\right)}}=\\frac{{_{s}{c}{\\left({n},{i}\\right)}-{n}}}{{d}}{e}{i}{\\left({i}\\right)}
\\text{期末付递增永续年金}
Iainf(i)     => {I}{ainf}{{\\left({i}\\right)}}={a}\\in\\frac{ f{{\\left({i}\\right)}}}{{d}}{\\left({i}\\right)}
Iainfm(i)    => {I}{ainf}{m}{\\left({i}^{{{\\left({m}\\right)}}}\\right)}={ainf}{m}\\frac{{{i}^{{{\\left({m}\\right)}}}}}{{d}}{\\left({i}\\right)}
Iacinf(i)    => {I}{acinf}{{\\left({i}\\right)}}={a}{c}\\in\\frac{ f{{\\left({i}\\right)}}}{{d}}{\\left({i}\\right)}
Icacinf(i)   => {I}{c}{acinf}{{\\left({i}\\right)}}=\\frac{1}{{d}}\\frac{{{i}}}{{d}}{\\left({i}\\right)}
\\text{期末付递减年金}
Da(n,i)      => {D}{a}{\\left({n},{i}\\right)}=\\frac{{{n}-{a}{\\left({n},{i}\\right)}}}{{i}}
Ds(n,i)      => {D}{s}{\\left({n},{i}\\right)}=\\frac{{{n}\\cdot{\\left({1}+{i}\\right)}^{n}-{s}{\\left({n},{i}\\right)}}}{{i}}
Dam(n,im,m)  => {D}{a}{m}{\\left({n},{i}^{{{\\left({m}\\right)}}},{m}\\right)}={D}{a}{\\left({n},{i}{i}{m}{\\left({i}^{{{\\left({m}\\right)}}},{m}\\right)}\\right)}\\cdot{i}{i}{m}\\frac{{{i}^{{{\\left({m}\\right)}}},{m}}}{{i}^{{{\\left({m}\\right)}}}}
Dsm(n,im,m)  => {D}{s}{m}{\\left({n},{i}^{{{\\left({m}\\right)}}},{m}\\right)}={D}{s}{\\left({n},{i}{i}{m}{\\left({i}^{{{\\left({m}\\right)}}},{m}\\right)}\\right)}\\cdot{i}{i}{m}\\frac{{{i}^{{{\\left({m}\\right)}}},{m}}}{{i}^{{{\\left({m}\\right)}}}}
Dac(n,i)     => {D}{a}{c}{\\left({n},{i}\\right)}={D}{a}{\\left({n},{i}\\right)}\\cdot\\frac{i}{{d}}{e}{i}{\\left({i}\\right)}
Dsc(n,i)     => {D}{s}{c}{\\left({n},{i}\\right)}={D}{s}{\\left({n},{i}\\right)}\\cdot\\frac{i}{{d}}{e}{i}{\\left({i}\\right)}
Dcac(n,i)    => {D}{c}{a}{c}{\\left({n},{i}\\right)}=\\frac{{{n}-{a}{c}{\\left({n},{i}\\right)}}}{{d}}{e}{i}{\\left({i}\\right)}
Dcsc(n,i)    => {D} \\csc{{\\left({n},{i}\\right)}}=\\frac{{{n}\\cdot{\\left({1}+{i}\\right)}^{n}-{s}{c}{\\left({n},{i}\\right)}}}{{d}}{e}{i}{\\left({i}\\right)}
\\text{递减没有永续年金}
\\text{期初付递增年金}
I_a(n,i)     => {I}_{{a}}{\\left({n},{i}\\right)}={\\left({1}+{i}\\right)}\\cdot{I}{a}{\\left({n},{i}\\right)}
I_s(n,i)     => {I}_{{s}}{\\left({n},{i}\\right)}={\\left({1}+{i}\\right)}\\cdot{I}{s}{\\left({n},{i}\\right)}
I_am(n,im,m) => {I}_{{a}}{m}{\\left({n},{i}^{{{\\left({m}\\right)}}},{m}\\right)}={\\left({1}+{i}{i}{m}{\\left({i}^{{{\\left({m}\\right)}}},{m}\\right)}\\right)}\\cdot{I}{a}{m}{\\left({n},{i}^{{{\\left({m}\\right)}}},{m}\\right)}
I_sm(n,im,m) => {I}_{{s}}{m}{\\left({n},{i}^{{{\\left({m}\\right)}}},{m}\\right)}={\\left({1}+{i}{i}{m}{\\left({i}^{{{\\left({m}\\right)}}},{m}\\right)}\\right)}\\cdot{I}{s}{m}{\\left({n},{i}^{{{\\left({m}\\right)}}},{m}\\right)}
I_ac(n,i)    => {I}_{{a}}{c}{\\left({n},{i}\\right)}={\\left({1}+{i}\\right)}\\cdot{I}{a}{c}{\\left({n},{i}\\right)}
I_sc(n,i)    => {I}_{{s}}{c}{\\left({n},{i}\\right)}={\\left({1}+{i}\\right)}\\cdot{I}{s}{c}{\\left({n},{i}\\right)}
Ic_ac(n,i)   => {I}{c}_{{a}}{c}{\\left({n},{i}\\right)}={\\left({1}+{i}\\right)}\\cdot{I}{c}{a}{c}{\\left({n},{i}\\right)}
Ic_sc(n,i)   => {I}{c}_{{s}}{c}{\\left({n},{i}\\right)}={\\left({1}+{i}\\right)}\\cdot{I} \\csc{{\\left({n},{i}\\right)}}
\\text{期初付递增永续年金}
I_ainf(i)    => {I}_{{a}inf}{{\\left({i}\\right)}}={\\left({1}+{i}\\right)}\\cdot{I}{ainf}{{\\left({i}\\right)}}
I_ainfm(i)   => {I}_{{a}inf}{m}{\\left({i}^{{{\\left({m}\\right)}}}\\right)}={\\left({1}+{i}{i}{m}{\\left({i}^{{{\\left({m}\\right)}}}\\right)}\\right)}\\cdot{I}{ainf}{m}{\\left({i}^{{{\\left({m}\\right)}}}\\right)}
I_acinf(i)   => {I}_{{a}}{cinf}{{\\left({i}\\right)}}={\\left({1}+{i}\\right)}\\cdot{I}{acinf}{{\\left({i}\\right)}}
Ic_acinf(i)  => {I}{c}_{{a}}{cinf}{{\\left({i}\\right)}}={\\left({1}+{i}\\right)}\\cdot{I}{c}{acinf}{{\\left({i}\\right)}}
\\text{期初付递减年金}
D_a(n,i)     => {D}_{{a}}{\\left({n},{i}\\right)}={\\left({1}+{i}\\right)}\\cdot{D}{a}{\\left({n},{i}\\right)}
D_s(n,i)     => {D}_{{s}}{\\left({n},{i}\\right)}={\\left({1}+{i}\\right)}\\cdot{D}{s}{\\left({n},{i}\\right)}
D_am(n,im,m) => {D}_{{a}}{m}{\\left({n},{i}^{{{\\left({m}\\right)}}},{m}\\right)}={\\left({1}+{i}{i}{m}{\\left({i}^{{{\\left({m}\\right)}}},{m}\\right)}\\right)}\\cdot{D}{a}{m}{\\left({n},{i}^{{{\\left({m}\\right)}}},{m}\\right)}
D_sm(n,im,m) => {D}_{{s}}{m}{\\left({n},{i}^{{{\\left({m}\\right)}}},{m}\\right)}={\\left({1}+{i}{i}{m}{\\left({i}^{{{\\left({m}\\right)}}},{m}\\right)}\\right)}\\cdot{D}{s}{m}{\\left({n},{i}^{{{\\left({m}\\right)}}},{m}\\right)}
D_ac(n,i)    => {D}_{{a}}{c}{\\left({n},{i}\\right)}={\\left({1}+{i}\\right)}\\cdot{D}{a}{c}{\\left({n},{i}\\right)}
D_sc(n,i)    => {D}_{{s}}{c}{\\left({n},{i}\\right)}={\\left({1}+{i}\\right)}\\cdot{D}{s}{c}{\\left({n},{i}\\right)}
Dc_ac(n,i)   => {D}{c}_{{a}}{c}{\\left({n},{i}\\right)}={\\left({1}+{i}\\right)}\\cdot{D}{c}{a}{c}{\\left({n},{i}\\right)}
Dc_sc(n,i)   => {D}{c}_{{s}}{c}{\\left({n},{i}\\right)}={\\left({1}+{i}\\right)}\\cdot{D} \\csc{{\\left({n},{i}\\right)}}
\\text{债券价格}
(r*F*a(n,i)+C*v^n)   => \\text{基本公式}     P=rF a{(n,i)}+C v^n 
(r*F*s(n,i)+C)       => \\text{基本公式的终值} S=rF s{(n,i)}+C
(C+(r*F-i*C)*a(n,i)) => \\text{溢价公式}     P=C+(r F-i C) a_{n|}
(C+(r*F-i*C)*a(n,i)) => \\text{溢价公式}     P=C \\left(1+(g-i) a_{n|} \\right)
(G+(C-G)*vi(i)^n)    => \\text{基价公式}     P=G+{(C-G)}*v^n
(g/i*(C-K)+K)        => \\text{Makeham公式} P=\\frac{g}{i}{\\left(C-K\\right)}+K
`