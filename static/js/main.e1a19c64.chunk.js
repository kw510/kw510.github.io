(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{17:function(e,t,a){e.exports=a(27)},22:function(e,t,a){},23:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},24:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),o=a.n(i),l=(a(22),a(23),a(24),a(9)),c=a(10),u=a(11),g=a(1),s=a(15),h=a(16),d=a(3),m=a(4);function v(){var e=Object(d.a)(["\n  margin : 8px;\n"]);return v=function(){return e},e}function p(){var e=Object(d.a)(["\n  height: 24px;\n  margin : 16px 24px 16px 8px;\n  width: 4rem;\n"]);return p=function(){return e},e}var f=m.a.input(p()),b=m.a.label(v()),C=function(e){return r.a.createElement("div",null,r.a.createElement("p",null,e.id," Grade: ",e.grade,"% | Weight: ",e.weight,"% ",r.a.createElement("button",{type:"button",onClick:e.onClick},"X")),r.a.createElement("input",{name:"grade",type:"range",value:e.grade,min:"0",max:"100",step:"1",onChange:e.onChange}))},E=function(e){var t=e.grades.map((function(t,a){var n=t.grade,i=t.weight;return r.a.createElement(C,{grade:n,weight:i,onClick:function(){return e.onClick(a)},key:a,onChange:function(t){return e.onGradeChange(t,a)}})}));return r.a.createElement("div",null,t)},w=function(e){var t,a=e.grades.reduce((function(e,t){return e+t.grade*t.weight}),0),n=a/e.total_weight,i=100-e.total_weight,o=(e.target-a/100)/i*100;return t=o>100?r.a.createElement("h4",null,"You cannot achieve ",e.target+"%"," :("):o>0?r.a.createElement("h4",null,"To get ",e.target+"%",", you need ",o.toPrecision(4)+"%"," overall with ",i.toPrecision(4)+"%"," weighting"):r.a.createElement("h4",null,"You have already reached ",e.target+"%","!, Well done!"),r.a.createElement("div",null,r.a.createElement("h2",null,"Current average: ",n),r.a.createElement("h3",null,"Min:",a/100," | Max:",i+a/100),t)},k=function(e){Object(h.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={grade:"",weight:"",grades:e.grades,target:60},n.onChange=n.onChange.bind(Object(g.a)(n)),n.onSubmit=n.onSubmit.bind(Object(g.a)(n)),n.onClick=n.onClick.bind(Object(g.a)(n)),n.onGradeChange=n.onGradeChange.bind(Object(g.a)(n)),n}return Object(u.a)(a,[{key:"onGradeChange",value:function(e,t){var a=e.target.value,n=e.target.name,r=this.state.grades.slice();r[t][n]=a,this.setState({grades:r})}},{key:"onChange",value:function(e){var t=e.target.value,a=e.target.name;this.setState(Object(l.a)({},a,t))}},{key:"onClick",value:function(e){var t=this.state.grades;t.splice(e,1),this.setState({grades:t})}},{key:"onSubmit",value:function(e){var t=this.state.grades;""!==this.state.grade&&""!==this.state.weight&&this.setState({grades:[{grade:this.state.grade,weight:this.state.weight}].concat(t),grade:"",weight:""}),e.preventDefault()}},{key:"render",value:function(){var e=this.state.grades.reduce((function(e,t){return e+Number(t.weight)}),0),t=100-e;return r.a.createElement("div",null,r.a.createElement(w,{grades:this.state.grades,total_weight:e,target:this.state.target}),r.a.createElement(b,null,"Target",r.a.createElement("input",{name:"target",type:"range",placeholder:"70",value:this.state.target,min:"0",max:"100",step:"1",onChange:this.onChange}),r.a.createElement(f,{name:"target",type:"number",placeholder:"70",value:this.state.target,min:"0",max:"100",step:"1",onChange:this.onChange})),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement(b,null,"Grade:",r.a.createElement(f,{name:"grade",type:"number",placeholder:70,value:this.state.grade,onChange:this.onChange,min:"0",max:"100",step:"any"})),r.a.createElement(b,null,"Weight:",r.a.createElement(f,{name:"weight",type:"number",placeholder:30,value:this.state.weight,onChange:this.onChange,min:"0",max:t,step:"any"})),r.a.createElement("input",{type:"submit",value:"Submit"})),r.a.createElement(E,{grades:this.state.grades,onClick:this.onClick,onGradeChange:this.onGradeChange}))}}]),a}(r.a.Component);var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,{grades:[]}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.e1a19c64.chunk.js.map