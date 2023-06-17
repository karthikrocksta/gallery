self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={a5j:function a5j(){},
aFX(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.ac(0,e)
w=f.ac(0,e)
return e.Z(0,w.Br(B.G(x.Gl(w)/t,0,1)))},
bJR(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.ac(0,q),o=e.b,n=o.ac(0,q),m=e.d,l=m.ac(0,q),k=p.Gl(n),j=n.Gl(n),i=p.Gl(l),h=l.Gl(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[A.aFX(d,q,o),A.aFX(d,o,x),A.aFX(d,x,m),A.aFX(d,m,q)]
v=B.bl("closestOverall")
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.aA()},
bND(){var x=new B.bs(new Float64Array(16))
x.uu()
return new A.aco(x,$.ao())},
bwy(d,e,f){return Math.log(f/d)/Math.log(e/100)},
bxc(d,e){var x,w,v,u,t,s,r=new B.bs(new Float64Array(16))
r.rw(d)
r.ye(r)
x=e.a
w=e.b
v=new B.cE(new Float64Array(3))
v.uH(x,w,0)
v=r.Bm(v)
u=e.c
t=new B.cE(new Float64Array(3))
t.uH(u,w,0)
t=r.Bm(t)
w=e.d
s=new B.cE(new Float64Array(3))
s.uH(u,w,0)
s=r.Bm(s)
u=new B.cE(new Float64Array(3))
u.uH(x,w,0)
u=r.Bm(u)
x=new B.cE(new Float64Array(3))
x.rw(v)
w=new B.cE(new Float64Array(3))
w.rw(t)
v=new B.cE(new Float64Array(3))
v.rw(s)
t=new B.cE(new Float64Array(3))
t.rw(u)
return new A.a9f(x,w,v,t)},
bwq(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.n,w=0;w<4;++w){v=r[w]
u=A.bJR(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new B.j(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new B.j(x.a,t)}return A.boe(x)},
boe(d){return new B.j(B.bh1(C.d.oT(d.a,9)),B.bh1(C.d.oT(d.b,9)))},
bRo(d,e){if(d.m(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.a3:C.w},
LL:function LL(d,e,f,g,h,i){var _=this
_.r=d
_.x=e
_.ay=f
_.cx=g
_.db=h
_.a=i},
Tp:function Tp(d,e,f,g,h){var _=this
_.d=null
_.e=d
_.f=e
_.w=_.r=null
_.z=_.y=_.x=$
_.at=_.as=_.Q=null
_.ay=_.ax=0
_.ch=null
_.t_$=f
_.ap$=g
_.a=null
_.b=h
_.c=null},
b3I:function b3I(){},
ajN:function ajN(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aco:function aco(d,e){var _=this
_.a=d
_.a6$=0
_.ar$=e
_.oS$=_.oW$=0
_.t$=!1},
T_:function T_(d,e){this.a=d
this.b=e},
aJI:function aJI(d,e){this.a=d
this.b=e},
Yq:function Yq(){},
bNE(){return new A.uv(null)},
uv:function uv(d){this.a=d},
WV:function WV(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.w=$
_.x=null
_.t_$=g
_.ap$=h
_.a=null
_.b=i
_.c=null},
bdA:function bdA(d,e){this.a=d
this.b=e},
bdB:function bdB(d){this.a=d},
bdH:function bdH(d){this.a=d},
bdG:function bdG(d){this.a=d},
bdF:function bdF(d){this.a=d},
bdE:function bdE(d){this.a=d},
bdD:function bdD(d,e){this.a=d
this.b=e},
bdC:function bdC(d,e,f){this.a=d
this.b=e
this.c=f},
afA:function afA(d,e){this.b=d
this.a=e},
aVa:function aVa(d,e){this.a=d
this.b=e},
Za:function Za(){},
bkU(d,e,f,g,h){var x=new A.a_p(e,g,f,B.b([],y.g),h,B.b([],y.h))
x.avv(d,e,f,g,h)
return x},
a_p:function a_p(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
auK:function auK(d){this.a=d},
auJ:function auJ(d){this.a=d},
auI:function auI(d){this.a=d},
aV9:function aV9(d){this.a=d
this.c=this.b=null},
b7M:function b7M(d,e){this.a=d
this.b=e},
hQ:function hQ(d,e,f){this.a=d
this.b=e
this.c=f},
afB:function afB(){},
a0F:function a0F(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
awg:function awg(d){this.a=d},
awf:function awf(d,e){this.a=d
this.b=e},
AT:function AT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aX_:function aX_(d){this.a=d},
a3J:function a3J(d,e,f){this.c=d
this.d=e
this.a=f},
a9f:function a9f(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},B,C,D,J,E,F
A=a.updateHolder(c[87],A)
B=c[0]
C=c[2]
D=c[127]
J=c[1]
E=c[100]
F=c[116]
A.a5j.prototype={}
A.LL.prototype={
K(){var x=null,w=y.z
return new A.Tp(new B.at(x,w),new B.at(x,w),x,x,C.j)}}
A.Tp.prototype={
gQc(){var x=$.ar.Y$.z.i(0,this.e).gab()
x.toString
x=y.x.a(x).k3
x.toString
return this.a.r.Jf(new B.A(0,0,0+x.a,0+x.b))},
gSx(){var x=$.ar.Y$.z.i(0,this.f).gab()
x.toString
x=y.x.a(x).k3
return new B.A(0,0,0+x.a,0+x.b)},
HM(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this
if(a2.m(0,C.n)){x=new B.bs(new Float64Array(16))
x.rw(a1)
return x}w=B.bl("alignedTranslation")
if(a0.Q!=null){a0.a.toString
switch(3){case 3:w.srK(a2)
break}}else w.srK(a2)
v=new B.bs(new Float64Array(16))
v.rw(a1)
v.px(0,w.aA().a,w.aA().b)
u=A.bxc(v,a0.gSx())
x=a0.gQc()
if(x.gakt(x))return v
x=a0.gQc()
t=a0.ay
s=new B.bs(new Float64Array(16))
s.uu()
r=x.c
q=x.a
p=r-q
o=x.d
x=x.b
n=o-x
s.px(0,p/2,n/2)
s.VB(t)
s.px(0,-p/2,-n/2)
t=new B.cE(new Float64Array(3))
t.uH(q,x,0)
t=s.Bm(t)
p=new B.cE(new Float64Array(3))
p.uH(r,x,0)
p=s.Bm(p)
x=new B.cE(new Float64Array(3))
x.uH(r,o,0)
x=s.Bm(x)
r=new B.cE(new Float64Array(3))
r.uH(q,o,0)
r=s.Bm(r)
q=new Float64Array(3)
new B.cE(q).rw(t)
t=new Float64Array(3)
new B.cE(t).rw(p)
p=new Float64Array(3)
new B.cE(p).rw(x)
x=new Float64Array(3)
new B.cE(x).rw(r)
r=q[0]
o=t[0]
n=p[0]
m=x[0]
l=Math.min(r,Math.min(o,Math.min(n,m)))
q=q[1]
t=t[1]
p=p[1]
x=x[1]
k=Math.min(q,Math.min(t,Math.min(p,x)))
j=Math.max(r,Math.max(o,Math.max(n,m)))
i=Math.max(q,Math.max(t,Math.max(p,x)))
x=new B.cE(new Float64Array(3))
x.uH(l,k,0)
t=new B.cE(new Float64Array(3))
t.uH(j,k,0)
r=new B.cE(new Float64Array(3))
r.uH(j,i,0)
q=new B.cE(new Float64Array(3))
q.uH(l,i,0)
p=new B.cE(new Float64Array(3))
p.rw(x)
x=new B.cE(new Float64Array(3))
x.rw(t)
t=new B.cE(new Float64Array(3))
t.rw(r)
r=new B.cE(new Float64Array(3))
r.rw(q)
h=new A.a9f(p,x,t,r)
g=A.bwq(h,u)
if(g.m(0,C.n))return v
x=v.Wh().a
t=x[0]
x=x[1]
f=a1.H2()
t-=g.a*f
x-=g.b*f
e=new B.bs(new Float64Array(16))
e.rw(a1)
r=new B.cE(new Float64Array(3))
r.uH(t,x,0)
e.a6a(r)
d=A.bwq(h,A.bxc(e,a0.gSx()))
if(d.m(0,C.n))return e
r=d.a===0
if(!r&&d.b!==0){x=new B.bs(new Float64Array(16))
x.rw(a1)
return x}t=r?t:0
x=d.b===0?x:0
r=new B.bs(new Float64Array(16))
r.rw(a1)
q=new B.cE(new Float64Array(3))
q.uH(t,x,0)
r.a6a(q)
return r},
ZT(d,e){var x,w,v,u,t,s,r=this
if(e===1){x=new B.bs(new Float64Array(16))
x.rw(d)
return x}w=r.d.a.H2()
x=r.gSx()
v=r.gQc()
u=r.gSx()
t=r.gQc()
s=B.G(Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b))),r.a.ay,2.5)
x=new B.bs(new Float64Array(16))
x.rw(d)
x.t8(0,s/w)
return x},
aIY(d,e,f){var x,w,v,u
if(e===0){x=new B.bs(new Float64Array(16))
x.rw(d)
return x}w=this.d.yu(f)
x=new B.bs(new Float64Array(16))
x.rw(d)
v=w.a
u=w.b
x.px(0,v,u)
x.VB(-e)
x.px(0,-v,-u)
return x},
Qz(d){switch(d){case D.aD8:return!1
case D.nA:this.a.toString
return!0
case D.kb:case null:this.a.toString
return!0}},
aag(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.nA
else return D.kb},
aI3(d){var x,w,v=this
v.a.cx.$1(d)
x=v.y
x===$&&B.c()
w=x.r
if(w!=null&&w.a!=null){x.uE(0)
x=v.y
x.sk(0,x.a)
x=v.r
if(x!=null)x.a.B(0,v.gRv())
v.r=null}x=v.z
x===$&&B.c()
w=x.r
if(w!=null&&w.a!=null){x.uE(0)
x=v.z
x.sk(0,x.a)
x=v.w
if(x!=null)x.a.B(0,v.gRy())
v.w=null}v.Q=v.ch=null
v.at=v.d.a.H2()
v.as=v.d.yu(d.b)
v.ax=v.ay},
aKq(d){var x,w,v,u,t,s,r=this,q=r.d.a.H2(),p=r.x=d.c,o=r.d.yu(p),n=r.ch
if(n===D.kb)n=r.ch=r.aag(d)
else if(n==null){n=r.aag(d)
r.ch=n}if(!r.Qz(n)){r.a.toString
return}switch(r.ch.a){case 1:n=r.at
n.toString
x=r.d
x.sk(0,r.ZT(x.a,n*d.d/q))
w=r.d.yu(p)
n=r.d
x=n.a
v=r.as
v.toString
n.sk(0,r.HM(x,w.ac(0,v)))
u=r.d.yu(p)
p=r.as
p.toString
if(!A.boe(p).m(0,A.boe(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}x=r.ax
x.toString
t=x+n
n=r.d
n.sk(0,r.aIY(n.a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=A.bRo(n,o)}n=r.as
n.toString
s=o.ac(0,n)
n=r.d
n.sk(0,r.HM(n.a,s))
r.as=r.d.yu(p)
break}r.a.toString},
aKm(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
m.a.toString
m.as=m.ax=m.at=null
x=m.r
if(x!=null)x.a.B(0,m.gRv())
x=m.w
if(x!=null)x.a.B(0,m.gRy())
x=m.y
x===$&&B.c()
x.sk(0,x.a)
x=m.z
x===$&&B.c()
x.sk(0,x.a)
if(!m.Qz(m.ch)){m.Q=null
return}x=m.ch
if(x===D.kb){x=d.a.a
if(x.guq()<50){m.Q=null
return}w=m.d.a.Wh().a
v=w[0]
w=w[1]
m.a.toString
u=B.a4y(0.0000135,v,x.a,0,C.cv)
m.a.toString
t=B.a4y(0.0000135,w,x.b,0,C.cv)
x=x.guq()
m.a.toString
s=A.bwy(x,0.0000135,10)
x=u.gJ0()
r=t.gJ0()
q=y.L
p=B.aP(C.dW,m.y,null)
m.r=new B.H(p,new B.a6(new B.j(v,w),new B.j(x,r),q),q.h("H<Y.T>"))
m.y.e=B.dz(0,0,0,C.d.aP(s*1000),0,0)
p.a0(0,m.gRv())
m.y.oZ(0)}else if(x===D.nA){x=d.b
w=Math.abs(x)
if(w<0.1){m.Q=null
return}o=m.d.a.H2()
m.a.toString
n=B.a4y(0.0026999999999999997,o,x/10,0,C.cv)
m.a.toString
s=A.bwy(w,0.0000135,0.1)
x=n.vP(0,s)
w=y.t
v=B.aP(C.dW,m.z,null)
m.w=new B.H(v,new B.a6(o,x,w),w.h("H<Y.T>"))
m.z.e=B.dz(0,0,0,C.d.aP(s*1000),0,0)
v.a0(0,m.gRy())
m.z.oZ(0)}},
aI5(d){var x,w,v,u,t,s,r,q,p=this
if(y.C.b(d)){if(d.gum(d)===C.cR){x=p.a.cx
w=d.gqx(d)
v=d.guA()
x.$1(new B.zS(w,v,0))
x=d.gqx(d).Z(0,d.gAz())
w=d.gAz()
u=B.zn(d.gtO(d),null,w,x)
if(!p.Qz(D.kb)){p.a.toString
return}x=p.d
x.toString
t=x.yu(d.guA())
x=p.d
x.toString
s=x.yu(d.guA().ac(0,u))
x=p.d
x.sk(0,p.HM(x.a,s.ac(0,t)))
p.a.toString
return}if(d.gAz().b===0)return
x=d.gAz()
p.a.toString
r=Math.exp(-x.b/200)}else if(y.P.b(d))r=d.gAy(d)
else return
x=p.a.cx
w=d.gqx(d)
v=d.guA()
x.$1(new B.zS(w,v,0))
if(!p.Qz(D.nA)){p.a.toString
return}x=p.d
x.toString
t=x.yu(d.guA())
x=p.d
x.sk(0,p.ZT(x.a,r))
x=p.d
x.toString
q=x.yu(d.guA())
x=p.d
x.sk(0,p.HM(x.a,q.ac(0,t)))
p.a.toString},
aJF(){var x,w,v,u,t=this,s=t.y
s===$&&B.c()
s=s.r
if(!(s!=null&&s.a!=null)){t.Q=null
s=t.r
if(s!=null)s.a.B(0,t.gRv())
t.r=null
s=t.y
s.sk(0,s.a)
return}s=t.d.a.Wh().a
x=s[0]
s=s[1]
w=t.d.yu(new B.j(x,s))
s=t.d
s.toString
x=t.r
v=x.b
x=x.a
u=s.yu(v.N(0,x.gk(x))).ac(0,w)
x=t.d
x.sk(0,t.HM(x.a,u))},
aKk(){var x,w,v,u,t,s=this,r=s.z
r===$&&B.c()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.B(0,s.gRy())
s.w=null
r=s.z
r.sk(0,r.a)
return}r=s.w
x=r.b
r=r.a
w=x.N(0,r.gk(r))
r=s.d.a.H2()
x=s.d
x.toString
v=s.x
v===$&&B.c()
u=x.yu(v)
v=s.d
v.sk(0,s.ZT(v.a,w/r))
t=s.d.yu(s.x)
r=s.d
r.sk(0,s.HM(r.a,t.ac(0,u)))},
aKG(){this.E(new A.b3I())},
aa(){var x,w=this,v=null
w.an()
x=w.a.db
w.d=x
x.a0(0,w.ga_f())
w.y=B.aV(C.u,v,v,v,1,v,w)
w.z=B.aV(C.u,v,v,v,1,v,w)},
ad(d){var x,w,v=this
v.au(d)
x=v.a
if(x.db!==d.db){x=v.ga_f()
v.d.B(0,x)
w=v.a.db
v.d=w
w.a0(0,x)}},
j(){var x=this,w=x.y
w===$&&B.c()
w.j()
w=x.z
w===$&&B.c()
w.j()
x.d.B(0,x.ga_f())
x.a.toString
x.aug()},
n(d){var x,w,v=this,u=null,t=v.a
t.toString
x=v.d.a
w=new A.ajN(t.x,v.e,C.r,!0,x,u,u)
return B.DB(C.d9,B.cB(C.aU,w,C.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,v.gaKl(),v.gaI2(),v.gaKp(),u,u,u,u,u,u,u,u,u,u,u,!1,new B.j(0,-0.005)),v.f,u,u,u,v.gaI4(),u)}}
A.ajN.prototype={
n(d){var x=this,w=B.o7(x.w,new B.fP(x.c,x.d),x.r,!0)
return B.jr(w,x.e,null)}}
A.aco.prototype={
yu(d){var x=this.a,w=new B.bs(new Float64Array(16))
if(w.ye(x)===0)B.W(B.fK(x,"other","Matrix cannot be inverted"))
x=new B.cE(new Float64Array(3))
x.uH(d.a,d.b,0)
x=w.Bm(x).a
return new B.j(x[0],x[1])}}
A.T_.prototype={
M(){return"_GestureType."+this.b}}
A.aJI.prototype={
M(){return"PanAxis."+this.b}}
A.Yq.prototype={
pE(){this.qf()
this.q5()
this.tn()},
j(){var x=this,w=x.ap$
if(w!=null)w.B(0,x.gtl())
x.ap$=null
x.a2()}}
A.uv.prototype={
K(){var x=null
return new A.WV(new B.at(x,y.z),A.bkU(x,8,1,16,x),A.bND(),x,x,C.j)}}
A.WV.prototype={
aJG(){var x=this,w=x.r,v=w.b
w=w.a
x.f.sk(0,v.N(0,w.gk(w)))
w=x.w
w===$&&B.c()
w=w.r
if(!(w!=null&&w.a!=null)){w=x.r
if(w!=null)w.a.B(0,x.ga_8())
x.r=null
w=x.w
w.sk(0,w.a)}},
aKo(d){var x,w=this,v=w.w
v===$&&B.c()
x=v.Q
x===$&&B.c()
if(x===C.ah){v.uE(0)
v=w.r
if(v!=null)v.a.B(0,w.ga_8())
w.r=null
v=w.w
v.sk(0,v.a)}},
aKD(d){var x=this,w=x.f.yu(d.a.ac(0,B.cK(y.x.a($.ar.Y$.z.i(0,x.d).gab()).rQ(0,null),C.n)))
x.E(new A.bdA(x,x.e.b_T(w)))},
aa(){var x=null
this.an()
this.w=B.aV(C.u,x,x,x,1,x,this)},
n(d){var x=null,w=B.o(d)
return B.c3(B.cG(x,x,!1,x,x,1,x,x,x,!1,x,!1,x,x,x,x,!0,x,x,x,x,x,B.t(B.w(d,C.h,y.s).gbo(),x,x,x,x,x,x,x,x),x,x,x,1,x),w.ax.b,B.a_(x,new B.cU(new A.bdB(this),x),C.e,D.vl,x,x,x,x,x,x,x,x,x,x),x,x,!1,x,x,x,B.b([this.gb0C(),this.gaVA()],y.p),x)},
gb0C(){var x=null,w=this.c
w.toString
return B.ce(B.o(w).ax.cy,x,x,D.a5K,x,x,new A.bdH(this),x,x,x,"Reset")},
gaVA(){var x=null,w=this.c
w.toString
return B.ce(B.o(w).ax.cy,x,x,D.a5H,x,x,new A.bdF(this),x,x,x,"Edit")},
j(){var x=this.w
x===$&&B.c()
x.j()
this.avm()}}
A.afA.prototype={
aE(d,e){this.b.ag(0,new A.aVa(this,d))},
v2(d){return d.b!==this.b}}
A.Za.prototype={
pE(){this.qf()
this.q5()
this.tn()},
j(){var x=this,w=x.ap$
if(w!=null)w.B(0,x.gtl())
x.ap$=null
x.a2()}}
A.a_p.prototype={
avv(d,e,f,g,h){var x,w,v,u,t,s=this,r=s.b,q=-r,p=r-s.c,o=Math.sqrt(3)/2*p
r=0+o
x=q+0.5*p
w=q+1.5*p
v=q+2*p
u=0-o
C.b.a7(s.d,B.b([new B.j(0,q),new B.j(r,x),new B.j(r,w),new B.j(r,w),new B.j(0,v),new B.j(0,v),new B.j(u,w),new B.j(u,w),new B.j(u,x)],y.g))
if(d!=null)C.b.a7(s.f,d)
else{t=s.aaq(null)
for(r=s.f;t!=null;){r.push(t)
t=s.aaq(t)}}},
gp_(d){return new A.aV9(this.f)},
aav(d){var x=this.a,w=-x
if(d<=0)w-=d
else x-=d
return new A.b7M(w,x)},
aaq(d){var x,w,v,u=this
if(d==null)return new A.hQ(-u.a,0,D.iv)
x=d.a
w=u.aav(x)
if(x>=u.a&&d.b>=w.b)return null
v=d.b
if(v>=w.b){++x
return new A.hQ(x,u.aav(x).a,D.iv)}return new A.hQ(x,v+1,D.iv)},
gvp(d){var x=this.b,w=this.a
return new B.E((w*2+1)*(Math.sqrt(3)/2*x)*2,2*(x+w*1.5*x))},
b_T(d){var x=this,w=x.gvp(x),v=d.b-x.gvp(x).b/2,u=x.b,t=new A.hQ(C.d.aP((Math.sqrt(3)/3*(d.a-w.a/2)-0.3333333333333333*v)/u),C.d.aP(0.6666666666666666*v/u),D.iv)
w=D.R1.gaie().a
v=t.gaie().a
if(C.d.rM(Math.abs(w[0]-v[0])+Math.abs(w[1]-v[1])+Math.abs(w[2]-v[2]),2)>x.a)return null
return C.b.J4(x.f,new A.auK(t))},
anJ(d,e){var x=this,w=Math.sqrt(3),v=x.b,u=d.a,t=Math.sqrt(3),s=d.b,r=x.d,q=B.an(r).h("am<1,j>"),p=B.az(new B.am(r,new A.auJ(new B.tO(w*v*u+t/2*v*s+x.gvp(x).a/2,1.5*v*s+x.gvp(x).b/2,y.O)),q),!0,q.h("bN.E"))
q=B.bn(p.length,e,!1,y.G)
return $.a7().aia(C.Pb,p,q,null,null)},
aUR(d){var x=this
if(J.h(x.e,d))return x
return A.bkU(x.f,x.a,x.c,x.b,d)},
aUQ(d,e){var x,w,v=this,u=new A.hQ(d.a,d.b,e),t=v.f,s=C.b.Ux(t,new A.auI(d))
if(J.h(v.t6(0,s),d)&&d.c.m(0,e))return v
x=B.i0(t,!0,y.X)
x[s]=u
w=v.e
if(d.m(0,w))w=u
return A.bkU(x,v.a,v.c,v.b,w)}}
A.aV9.prototype={
D(){var x,w=this,v=w.b
v=v==null?w.b=0:w.b=v+1
x=w.a
if(v>=x.length){w.c=null
return!1}w.c=x[v]
return!0},
gX(d){return this.c}}
A.b7M.prototype={}
A.hQ.prototype={
l(d){return"BoardPoint("+this.a+", "+this.b+", "+this.c.l(0)+")"},
m(d,e){if(e==null)return!1
if(J.aj(e)!==B.O(this))return!1
return e instanceof A.hQ&&e.a===this.a&&e.b===this.b},
gF(d){return B.a8(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
gaie(){var x=this.a,w=this.b,v=new B.cE(new Float64Array(3))
v.uH(x,w,-x-w)
return v}}
A.afB.prototype={}
A.a0F.prototype={
n(d){var x=this.c,w=B.k(x).h("lZ<1,AT>")
return B.aC(B.az(new B.lZ(x,new A.awg(this),w),!0,w.h("D.E")),C.l,null,C.a4,C.i,null)}}
A.AT.prototype={
n(d){var x=null,w=!this.d?x:D.a4Z
return B.a_(x,B.bty(!1,w,C.e,C.RZ,0,2,!0,this.c,x,4,x,8,x,4,x,x,new A.aX_(this),C.dl,x,x),C.e,x,x,x,x,60,x,x,D.a2d,x,x,60)}}
A.a3J.prototype={
n(d){var x=null,w=B.dY([C.m,C.kR,C.oA,C.vs,D.vl],y.G),v=this.c
return B.ab(B.b([B.t(""+v.a+", "+v.b,x,x,x,x,C.jZ,C.rH,x,x),new A.a0F(w,v.c,this.d,x)],y.p),C.aO,x,C.k,C.i,C.o)}}
A.a9f.prototype={}
var z=a.updateTypes(["~()","~(zS)","K(hQ)","~(Ou)","~(EK)","~(hK)","~(jN)","~(hQ?)","AT(l)"])
A.b3I.prototype={
$0(){},
$S:0}
A.bdA.prototype={
$0(){var x=this.a
x.e=x.e.aUR(this.b)},
$S:0}
A.bdB.prototype={
$2(d,e){var x,w,v,u=null,t=e.b,s=e.d,r=this.a
if(r.x==null){x=new B.bs(new Float64Array(16))
x.uu()
w=r.e
w=w.gvp(w)
v=r.e
x.px(0,t/2-w.a/2,s/2-v.gvp(v).b/2)
r.x=x
r.f.sk(0,x)}x=r.e
x=x.gvp(x)
return B.jr(B.di(B.cB(C.aU,new A.LL(new B.X(t,s,t,s),B.bn5(B.h1(u,u,u,new A.afA(r.e,u),x)),0.01,r.gaKn(),r.f,r.d),C.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,r.gaKC(),u,u,u,!1,C.a1),C.ap,u,u,u,u),C.r,u)},
$S:803}
A.bdH.prototype={
$0(){var x=this.a
x.E(new A.bdG(x))},
$S:0}
A.bdG.prototype={
$0(){var x,w,v=this.a,u=v.w
u===$&&B.c()
u.sk(0,u.a)
u=v.f.a
x=v.x
w=v.w
v.r=new B.H(w,new B.pz(u,x),y.d.h("H<Y.T>"))
w.e=C.kY
w.a0(0,v.ga_8())
v.w.oZ(0)},
$S:0}
A.bdF.prototype={
$0(){var x,w=this.a
if(w.e.e==null)return
x=w.c
x.toString
E.boT(new A.bdE(w),x,y.l)},
$S:0}
A.bdE.prototype={
$1(d){var x=null,w=this.a,v=w.e.e
v.toString
return B.a_(x,new A.a3J(v,new A.bdD(w,d),x),C.e,x,x,x,x,150,x,x,C.iF,x,x,1/0)},
$S:804}
A.bdD.prototype={
$1(d){var x=this.a
x.E(new A.bdC(x,d,this.b))},
$S:805}
A.bdC.prototype={
$0(){var x=this.a,w=x.e,v=w.e
v.toString
x.e=w.aUQ(v,this.b)
B.bC(this.c,!1).us(null)},
$S:0}
A.aVa.prototype={
$1(d){var x=d.c,w=this.a.b
this.b.De(w.anJ(d,B.P(C.d.aP(255*(J.h(w.e,d)?0.7:1)),x.gk(x)>>>16&255,x.gk(x)>>>8&255,x.gk(x)&255)),C.QZ,$.a7().oL())},
$S:z+7}
A.auK.prototype={
$1(d){var x=this.a
return d.a===x.a&&d.b===x.b},
$S:z+2}
A.auJ.prototype={
$1(d){var x=this.a
return new B.j(d.a+x.a,d.b+x.b)},
$S:252}
A.auI.prototype={
$1(d){var x=this.a
return d.a===x.a&&d.b===x.b},
$S:z+2}
A.awg.prototype={
$1(d){var x=this.a
return new A.AT(d,d.m(0,x.d),new A.awf(x,d),null)},
$S:z+8}
A.awf.prototype={
$0(){this.a.e.$1(this.b)},
$S:15}
A.aX_.prototype={
$0(){this.a.e.$0()},
$S:0};(function aliases(){var x=A.Yq.prototype
x.aug=x.j
x=A.Za.prototype
x.avm=x.j})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=A.Tp.prototype,"gaI2","aI3",1)
x(v,"gaKp","aKq",3)
x(v,"gaKl","aKm",4)
x(v,"gaI4","aI5",5)
w(v,"gRv","aJF",0)
w(v,"gRy","aKk",0)
w(v,"ga_f","aKG",0)
w(v=A.WV.prototype,"ga_8","aJG",0)
x(v,"gaKn","aKo",1)
x(v,"gaKC","aKD",6)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inheritMany,u=a.inherit
v(B.U,[A.a5j,A.afB,A.b7M,A.hQ,A.a9f])
v(B.B,[A.LL,A.uv])
v(B.F,[A.Yq,A.Za])
u(A.Tp,A.Yq)
v(B.hS,[A.b3I,A.bdA,A.bdH,A.bdG,A.bdF,A.bdC,A.awf,A.aX_])
v(B.r,[A.ajN,A.a0F,A.AT,A.a3J])
u(A.aco,B.fq)
v(B.qA,[A.T_,A.aJI])
u(A.WV,A.Za)
u(A.bdB,B.ik)
v(B.f4,[A.bdE,A.bdD,A.aVa,A.auK,A.auJ,A.auI,A.awg])
u(A.afA,B.p2)
u(A.a_p,A.afB)
u(A.aV9,A.a5j)
x(A.Yq,B.cp)
x(A.Za,B.cp)
w(A.afB,B.D)})()
B.b7(b.typeUniverse,JSON.parse('{"LL":{"B":[],"d":[]},"Tp":{"F":["LL"]},"ajN":{"r":[],"d":[]},"aco":{"fq":["bs"],"al":[]},"uv":{"B":[],"d":[]},"WV":{"F":["uv"]},"afA":{"al":[]},"a_p":{"D":["hQ?"],"D.E":"hQ?"},"AT":{"r":[],"d":[]},"a0F":{"r":[],"d":[]},"a3J":{"r":[],"d":[]}}'))
B.aqj(b.typeUniverse,JSON.parse('{"a5j":1}'))
var y=(function rtii(){var x=B.a3
return{X:x("hQ"),G:x("l"),s:x("C"),h:x("x<hQ>"),g:x("x<j>"),p:x("x<d>"),z:x("at<F<B>>"),d:x("pz"),O:x("tO<z>"),P:x("zs"),C:x("tR"),x:x("y"),L:x("a6<j>"),t:x("a6<z>"),l:x("d")}})();(function constants(){D.iv=new B.l(4291677645)
D.R1=new A.hQ(0,0,D.iv)
D.vl=new B.l(4280756007)
D.a2d=new B.X(2,0,2,0)
D.a3F=new B.aH(57686,"MaterialIcons",null,!1)
D.a4Z=new B.bM(D.a3F,null,C.m,null,null)
D.a5H=new B.bM(F.pT,null,null,null,null)
D.a4h=new B.aH(58659,"MaterialIcons",null,!1)
D.a5K=new B.bM(D.a4h,null,null,null,null)
D.aEU=new A.aJI(3,"free")
D.kb=new A.T_(0,"pan")
D.nA=new A.T_(1,"scale")
D.aD8=new A.T_(2,"rotate")})()}
$__dart_deferred_initializers__["7Kd/PWy0z13qUusoVI96tmykDaQ="] = $__dart_deferred_initializers__.current
