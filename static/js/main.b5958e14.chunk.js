(this["webpackJsonpodin-cv"]=this["webpackJsonpodin-cv"]||[]).push([[0],{49:function(e,n,a){},51:function(e,n,a){"use strict";a.r(n);var t=a(0),c=a.n(t),r=a(14),i=a.n(r),s=a(11),o=a(15),l=a(6),d=a(38),j=a(19),h=a.n(j),u=a(31),m=a(28),b=a(36),p=a(9),x=a(1),O=function(){return Object(x.jsxs)(m.a,{bg:"dark",variant:"dark",id:"header",className:"py-3",children:[Object(x.jsx)(m.a.Brand,{children:Object(x.jsx)("h1",{className:"font-weight-bold",children:"Odin CV"})}),Object(x.jsx)(b.a,{children:Object(x.jsx)(p.a,{variant:"outline-info",href:"https://github.com/jvfe/odin-cv/",target:"_blank",children:"Source Code"})})]})},f=a(7),v=a(8),N=function(e){var n=e.handleChange,a=e.personal;return Object(x.jsx)("div",{className:"mb-4",children:Object(x.jsxs)("div",{className:"mt-2",children:[Object(x.jsx)("h3",{children:"Personal Information"}),Object(x.jsxs)(v.a,{className:"my-2",children:[Object(x.jsx)(f.a,{onChange:n,value:a.firstName,type:"text",id:"nameInput",name:"firstName",placeholder:"First name"}),Object(x.jsx)(f.a,{onChange:n,value:a.lastName,type:"text",id:"nameInput",name:"lastName",placeholder:"Last name"})]}),Object(x.jsxs)(v.a,{className:"my-2",children:[Object(x.jsx)(f.a,{onChange:n,value:a.email,type:"email",id:"emailInput",name:"email",placeholder:"Email"}),Object(x.jsx)(f.a,{onChange:n,value:a.phone,type:"tel",id:"phoneInput",name:"phone",placeholder:"Phone number"})]}),Object(x.jsx)(f.a,{onChange:n,value:a.description,name:"description",as:"textarea","aria-label":"With textarea",placeholder:"Description"})]})})},g=function(e){var n=e.handleChange,a=e.handleDel,t=e.experience,c=e.id;return Object(x.jsxs)("div",{className:"my-1",children:[Object(x.jsxs)(v.a,{className:"my-2",children:[Object(x.jsx)(f.a,{value:t.position,type:"text",id:"position",name:"position",placeholder:"Position",onChange:function(e){return n(e,c)}}),Object(x.jsx)(f.a,{value:t.companyName,type:"text",id:"companyName",name:"companyName",placeholder:"Company",onChange:function(e){return n(e,c)}})]}),Object(x.jsxs)(v.a,{className:"my-2",children:[Object(x.jsx)(v.a.Prepend,{children:Object(x.jsx)(v.a.Text,{children:"From / To"})}),Object(x.jsx)(f.a,{value:t.fromDate,type:"date",id:"fromDate",name:"fromDate",onChange:function(e){return n(e,c)}}),Object(x.jsx)(f.a,{value:t.toDate,type:"date",id:"toDate",name:"toDate",onChange:function(e){return n(e,c)}})]}),Object(x.jsx)(f.a,{className:"my-2",onChange:function(e){return n(e,c)},value:t.jobDescription,id:"jobDescription",name:"jobDescription",as:"textarea","aria-label":"With textarea",placeholder:"Job description"}),Object(x.jsx)(p.a,{variant:"danger",onClick:function(){return a(c)},block:!0,children:"Remove entry"})]})},y=function(e){var n=e.experiences,a=e.handleChange,t=e.handleDel,c=e.handleAdd;return Object(x.jsxs)("div",{className:"mb-4",children:[Object(x.jsx)("h3",{children:"Experience"}),n.map((function(e){return Object(x.jsx)(g,{handleChange:a,handleDel:t,experience:e,id:e.id},e.id)})),Object(x.jsx)(p.a,{variant:"primary",onClick:c,block:!0,children:"Add entry"})]})},D=function(e){var n=e.handleChange,a=e.handleDel,t=e.education,c=e.id;return Object(x.jsxs)("div",{className:"my-1",children:[Object(x.jsx)(f.a,{className:"my-2",value:t.course,type:"text",id:"course",name:"course",placeholder:"Title of study",onChange:function(e){return n(e,c)}}),Object(x.jsxs)(v.a,{className:"my-2",children:[Object(x.jsx)(f.a,{value:t.schoolName,type:"text",id:"schoolName",name:"schoolName",placeholder:"Institution",onChange:function(e){return n(e,c)}}),Object(x.jsx)(f.a,{value:t.city,type:"text",id:"city",name:"city",placeholder:"City",onChange:function(e){return n(e,c)}})]}),Object(x.jsxs)(v.a,{className:"my-2",children:[Object(x.jsx)(v.a.Prepend,{children:Object(x.jsx)(v.a.Text,{children:"From / To"})}),Object(x.jsx)(f.a,{value:t.fromDate,type:"date",id:"fromDate",name:"fromDate",onChange:function(e){return n(e,c)}}),Object(x.jsx)(f.a,{value:t.toDate,type:"date",id:"toDate",name:"toDate",onChange:function(e){return n(e,c)}})]}),Object(x.jsx)(p.a,{variant:"danger",onClick:function(){return a(c)},block:!0,children:"Remove entry"})]})},C=function(e){var n=e.educations,a=e.handleChange,t=e.handleDel,c=e.handleAdd;return Object(x.jsxs)("div",{className:"mb-4",children:[Object(x.jsx)("h3",{children:"Education"}),n.map((function(e){return Object(x.jsx)(D,{handleChange:a,handleDel:t,education:e,id:e.id},e.id)})),Object(x.jsx)(p.a,{variant:"primary",onClick:c,block:!0,children:"Add entry"})]})},E=a(22),k=function(e){var n=e.cv,a=e.handleChangePersonal,t=e.handleAddEducation,c=e.handleDelEducation,r=e.handleChangeEducation,i=e.handleAddExperience,s=e.handleDelExperience,o=e.handleChangeExperience,l=e.handlePrint;return Object(x.jsxs)(E.a,{xs:12,lg:6,className:"p-md-4 shadow mb-3 mb-lg-0 mr-3 bg-white rounded",children:[Object(x.jsx)(N,{handleChange:a,personal:n.personal}),Object(x.jsx)(C,{educations:n.educations,handleAdd:t,handleDel:c,handleChange:r}),Object(x.jsx)(y,{experiences:n.experiences,handleAdd:i,handleDel:s,handleChange:o}),Object(x.jsx)(p.a,{onClick:l,variant:"success",block:!0,children:"Print CV"})]})},A=a(32),P=a(33),w=a(39),Y=a(37),I=function(e){var n=e.personal;return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"header-section mt-2",children:[Object(x.jsx)("h1",{className:"cv-name",children:"".concat(n.firstName," ").concat(n.lastName)}),Object(x.jsx)("p",{className:"contacts",children:"".concat(n.email," \u25cf ").concat(n.phone)})]}),Object(x.jsxs)("div",{className:"description px-4 my-4",children:[Object(x.jsx)("h3",{className:"section-title",children:"About me"}),Object(x.jsx)("p",{className:"about-me",children:n.description})]})]})};function T(e){return{fromYear:""!==e.fromDate?new Date(e.fromDate).getFullYear():"",toYear:""!==e.toDate?new Date(e.toDate).getFullYear():"ongoing"}}var F=function(e){var n=e.exp,a=T(n),t=a.fromYear,c=a.toYear;return Object(x.jsxs)("div",{className:"my-2 px-2",children:[Object(x.jsxs)("div",{className:"item-grid",children:[Object(x.jsx)("div",{children:Object(x.jsx)("p",{className:"course-name mb-1",children:"".concat(n.position," - ").concat(n.companyName)})}),Object(x.jsx)("div",{children:Object(x.jsx)("p",{className:"from-to-dates",children:"".concat(t," - ").concat(c)})})]}),Object(x.jsx)("div",{className:"job-container",children:Object(x.jsx)("p",{className:"job-description",children:n.jobDescription})})]})},J=function(e){var n=e.experiences;return Object(x.jsxs)("div",{className:"px-4 my-2",children:[Object(x.jsx)("h3",{className:"section-title",children:"Experience"}),n.map((function(e){return Object(x.jsx)(F,{exp:e},e.id)}))]})},R=function(e){var n=e.edu,a=T(n),t=a.fromYear,c=a.toYear;return Object(x.jsxs)("div",{className:"item-grid my-3 px-2",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{className:"course-name mb-1",children:n.course}),Object(x.jsx)("p",{className:"school-name",children:n.schoolName})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{className:"city mb-1",children:n.city}),Object(x.jsx)("p",{className:"from-to-dates",children:"".concat(t," - ").concat(c)})]})]})},S=function(e){var n=e.educations;return Object(x.jsxs)("div",{className:"px-4 my-4",children:[Object(x.jsx)("h3",{className:"section-title",children:"Education"}),n.map((function(e){return Object(x.jsx)(R,{edu:e},e.id)}))]})},B=function(e){Object(w.a)(a,e);var n=Object(Y.a)(a);function a(){return Object(A.a)(this,a),n.apply(this,arguments)}return Object(P.a)(a,[{key:"render",value:function(){var e=this.props.cv;return Object(x.jsxs)(E.a,{id:"cv-view",className:"border bg-light shadow rounded",children:[Object(x.jsx)(I,{personal:e.personal}),Object(x.jsx)(J,{experiences:e.experiences}),Object(x.jsx)(S,{educations:e.educations})]})}}]),a}(t.Component),V=a(34),W=a(35),L=function(){var e={personal:{firstName:"John",lastName:"Doe",email:"johndoe@mail.com",phone:"5512341234",description:""},educations:[{id:h()(),schoolName:"",course:"",city:"",fromDate:"",toDate:""}],experiences:[{id:h()(),companyName:"",position:"",jobDescription:"",fromDate:"",toDate:""}]},n=Object(t.useState)(e),a=Object(d.a)(n,2),c=a[0],r=a[1],i=Object(t.useRef)(),j=Object(u.useReactToPrint)({content:function(){return i.current}});return Object(x.jsxs)("div",{children:[Object(x.jsx)(O,{}),Object(x.jsx)(V.a,{fluid:!0,children:Object(x.jsxs)(W.a,{className:"p-md-5 p-1",children:[Object(x.jsx)(k,{cv:c,handleChangePersonal:function(e){var n=e.target,a=n.name,t=n.value;r((function(e){return Object(l.a)(Object(l.a)({},e),{},{personal:Object(l.a)(Object(l.a)({},e.personal),{},Object(o.a)({},a,t))})}))},handleAddEducation:function(){r((function(e){var n=Object(s.a)(e.educations);return n.push({id:h()(),schoolName:"",course:"",city:"",fromDate:"",toDate:""}),Object(l.a)(Object(l.a)({},e),{},{educations:Object(s.a)(n)})}))},handleDelEducation:function(e){r((function(n){var a=n.educations.filter((function(n){return n.id!==e}));return Object(l.a)(Object(l.a)({},n),{},{educations:Object(s.a)(a)})}))},handleChangeEducation:function(e,n){var a=e.target,t=a.name,c=a.value;r((function(e){var a=e.educations.map((function(e){return e.id===n?Object(l.a)(Object(l.a)({},e),{},Object(o.a)({},t,c)):e}));return Object(l.a)(Object(l.a)({},e),{},{educations:Object(s.a)(a)})}))},handleAddExperience:function(){r((function(e){var n=Object(s.a)(e.experiences);return n.push({id:h()(),companyName:"",position:"",jobDescription:"",fromDate:"",toDate:""}),Object(l.a)(Object(l.a)({},e),{},{experiences:Object(s.a)(n)})}))},handleDelExperience:function(e){r((function(n){var a=n.experiences.filter((function(n){return n.id!==e}));return Object(l.a)(Object(l.a)({},n),{},{experiences:Object(s.a)(a)})}))},handleChangeExperience:function(e,n){var a=e.target,t=a.name,c=a.value;r((function(e){var a=e.experiences.map((function(e){return e.id===n?Object(l.a)(Object(l.a)({},e),{},Object(o.a)({},t,c)):e}));return Object(l.a)(Object(l.a)({},e),{},{experiences:Object(s.a)(a)})}))},handlePrint:j}),Object(x.jsx)(B,{cv:c,ref:i})]})})]})};var M=function(){return Object(x.jsx)("div",{className:"App bg-light",children:Object(x.jsx)(L,{})})};a(49),a(50);i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(M,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.b5958e14.chunk.js.map