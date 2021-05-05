(this["webpackJsonpodin-cv"]=this["webpackJsonpodin-cv"]||[]).push([[0],{45:function(e,a,n){},47:function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),i=n(14),s=n.n(i),r=n(11),o=n(15),d=n(6),l=n(29),j=n(30),h=n(35),u=n(34),m=n(18),b=n.n(m),p=n(26),x=n(33),O=n(9),f=n(1),v=function(){return Object(f.jsxs)(p.a,{bg:"dark",variant:"dark",id:"header",className:"py-3",children:[Object(f.jsx)(p.a.Brand,{children:Object(f.jsx)("h1",{className:"font-weight-bold",children:"Odin CV"})}),Object(f.jsx)(x.a,{children:Object(f.jsx)(O.a,{variant:"outline-info",href:"https://github.com/jvfe/odin-cv/",target:"_blank",children:"Source Code"})})]})},N=n(7),g=n(8),y=function(e){var a=e.handleChange,n=e.personal;return Object(f.jsx)("div",{className:"mb-4",children:Object(f.jsxs)("div",{className:"mt-2",children:[Object(f.jsx)("h3",{children:"Personal Information"}),Object(f.jsxs)(g.a,{className:"my-2",children:[Object(f.jsx)(N.a,{onChange:a,value:n.firstName,type:"text",id:"nameInput",name:"firstName",placeholder:"First name"}),Object(f.jsx)(N.a,{onChange:a,value:n.lastName,type:"text",id:"nameInput",name:"lastName",placeholder:"Last name"})]}),Object(f.jsxs)(g.a,{className:"my-2",children:[Object(f.jsx)(N.a,{onChange:a,value:n.email,type:"email",id:"emailInput",name:"email",placeholder:"Email"}),Object(f.jsx)(N.a,{onChange:a,value:n.phone,type:"tel",id:"phoneInput",name:"phone",placeholder:"Phone number"})]}),Object(f.jsx)(N.a,{onChange:a,value:n.description,name:"description",as:"textarea","aria-label":"With textarea",placeholder:"Description"})]})})},D=function(e){var a=e.handleChange,n=e.handleDel,t=e.experience,c=e.id;return Object(f.jsxs)("div",{className:"my-1",children:[Object(f.jsxs)(g.a,{className:"my-2",children:[Object(f.jsx)(N.a,{value:t.position,type:"text",id:"position",name:"position",placeholder:"Position",onChange:function(e){return a(e,c)}}),Object(f.jsx)(N.a,{value:t.companyName,type:"text",id:"companyName",name:"companyName",placeholder:"Company",onChange:function(e){return a(e,c)}})]}),Object(f.jsxs)(g.a,{className:"my-2",children:[Object(f.jsx)(g.a.Prepend,{children:Object(f.jsx)(g.a.Text,{children:"From / To"})}),Object(f.jsx)(N.a,{value:t.fromDate,type:"date",id:"fromDate",name:"fromDate",onChange:function(e){return a(e,c)}}),Object(f.jsx)(N.a,{value:t.toDate,type:"date",id:"toDate",name:"toDate",onChange:function(e){return a(e,c)}})]}),Object(f.jsx)(N.a,{className:"my-2",onChange:function(e){return a(e,c)},value:t.jobDescription,id:"jobDescription",name:"jobDescription",as:"textarea","aria-label":"With textarea",placeholder:"Job description"}),Object(f.jsx)(O.a,{variant:"danger",onClick:function(){return n(c)},block:!0,children:"Remove entry"})]})},C=function(e){var a=e.experiences,n=e.handleChange,t=e.handleDel,c=e.handleAdd;return Object(f.jsxs)("div",{className:"mb-4",children:[Object(f.jsx)("h3",{children:"Experience"}),a.map((function(e){return Object(f.jsx)(D,{handleChange:n,handleDel:t,experience:e,id:e.id},e.id)})),Object(f.jsx)(O.a,{variant:"primary",onClick:c,block:!0,children:"Add entry"})]})},E=function(e){var a=e.handleChange,n=e.handleDel,t=e.education,c=e.id;return Object(f.jsxs)("div",{className:"my-1",children:[Object(f.jsx)(N.a,{className:"my-2",value:t.course,type:"text",id:"course",name:"course",placeholder:"Title of study",onChange:function(e){return a(e,c)}}),Object(f.jsxs)(g.a,{className:"my-2",children:[Object(f.jsx)(N.a,{value:t.schoolName,type:"text",id:"schoolName",name:"schoolName",placeholder:"Institution",onChange:function(e){return a(e,c)}}),Object(f.jsx)(N.a,{value:t.city,type:"text",id:"city",name:"city",placeholder:"City",onChange:function(e){return a(e,c)}})]}),Object(f.jsxs)(g.a,{className:"my-2",children:[Object(f.jsx)(g.a.Prepend,{children:Object(f.jsx)(g.a.Text,{children:"From / To"})}),Object(f.jsx)(N.a,{value:t.fromDate,type:"date",id:"fromDate",name:"fromDate",onChange:function(e){return a(e,c)}}),Object(f.jsx)(N.a,{value:t.toDate,type:"date",id:"toDate",name:"toDate",onChange:function(e){return a(e,c)}})]}),Object(f.jsx)(O.a,{variant:"danger",onClick:function(){return n(c)},block:!0,children:"Remove entry"})]})},A=function(e){var a=e.educations,n=e.handleChange,t=e.handleDel,c=e.handleAdd;return Object(f.jsxs)("div",{className:"mb-4",children:[Object(f.jsx)("h3",{children:"Education"}),a.map((function(e){return Object(f.jsx)(E,{handleChange:n,handleDel:t,education:e,id:e.id},e.id)})),Object(f.jsx)(O.a,{variant:"primary",onClick:c,block:!0,children:"Add entry"})]})},k=n(20),w=function(e){var a=e.personal,n=e.experiences,t=e.educations,c=e.handleChangePersonal,i=e.handleAddEducation,s=e.handleDelEducation,r=e.handleChangeEducation,o=e.handleAddExperience,d=e.handleDelExperience,l=e.handleChangeExperience;return Object(f.jsxs)(k.a,{xs:12,lg:6,className:"p-md-4 shadow mb-3 mb-lg-0 mr-3 bg-white rounded",children:[Object(f.jsx)(y,{handleChange:c,personal:a}),Object(f.jsx)(A,{educations:t,handleAdd:i,handleDel:s,handleChange:r}),Object(f.jsx)(C,{experiences:n,handleAdd:o,handleDel:d,handleChange:l})]})},P=function(e){var a=e.personal;return Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"header-section mt-2",children:[Object(f.jsx)("h1",{className:"cv-name",children:"".concat(a.firstName," ").concat(a.lastName)}),Object(f.jsx)("p",{className:"contacts",children:"".concat(a.email," \u25cf ").concat(a.phone)})]}),Object(f.jsxs)("div",{className:"description px-4 my-4",children:[Object(f.jsx)("h3",{className:"section-title",children:"About me"}),Object(f.jsx)("p",{className:"about-me",children:a.description})]})]})};function S(e){return{fromYear:""!==e.fromDate?new Date(e.fromDate).getFullYear():"",toYear:""!==e.toDate?new Date(e.toDate).getFullYear():"ongoing"}}var Y=function(e){var a=e.exp,n=S(a),t=n.fromYear,c=n.toYear;return Object(f.jsxs)("div",{className:"my-2 px-2",children:[Object(f.jsxs)("div",{className:"item-grid",children:[Object(f.jsx)("div",{children:Object(f.jsx)("p",{className:"course-name mb-1",children:"".concat(a.position," - ").concat(a.companyName)})}),Object(f.jsx)("div",{children:Object(f.jsx)("p",{className:"from-to-dates",children:"".concat(t," - ").concat(c)})})]}),Object(f.jsx)("div",{className:"job-container",children:Object(f.jsx)("p",{className:"job-description",children:a.jobDescription})})]})},I=function(e){var a=e.experiences;return Object(f.jsxs)("div",{className:"px-4 my-2",children:[Object(f.jsx)("h3",{className:"section-title",children:"Experience"}),a.map((function(e){return Object(f.jsx)(Y,{exp:e},e.id)}))]})},F=function(e){var a=e.edu,n=S(a),t=n.fromYear,c=n.toYear;return Object(f.jsxs)("div",{className:"item-grid my-3 px-2",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{className:"course-name mb-1",children:a.course}),Object(f.jsx)("p",{className:"school-name",children:a.schoolName})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{className:"city mb-1",children:a.city}),Object(f.jsx)("p",{className:"from-to-dates",children:"".concat(t," - ").concat(c)})]})]})},T=function(e){var a=e.educations;return Object(f.jsxs)("div",{className:"px-4 my-4",children:[Object(f.jsx)("h3",{className:"section-title",children:"Education"}),a.map((function(e){return Object(f.jsx)(F,{edu:e},e.id)}))]})},J=function(e){var a=e.personal,n=e.experiences,t=e.educations;return Object(f.jsxs)(k.a,{id:"cv-view",className:"border bg-light shadow rounded",children:[Object(f.jsx)(P,{personal:a}),Object(f.jsx)(I,{experiences:n}),Object(f.jsx)(T,{educations:t})]})},B=n(31),R=n(32),W=function(e){Object(h.a)(n,e);var a=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=a.call(this)).handleChangePersonal=function(a){var n=a.target,t=n.name,c=n.value;e.setState((function(e){return{personal:Object(d.a)(Object(d.a)({},e.personal),{},Object(o.a)({},t,c))}}))},e.handleChangeEducation=function(a,n){var t=a.target,c=t.name,i=t.value;e.setState((function(e){var a=e.educations.map((function(e){return e.id===n?Object(d.a)(Object(d.a)({},e),{},Object(o.a)({},c,i)):e}));return Object(d.a)(Object(d.a)({},e),{},{educations:Object(r.a)(a)})}))},e.handleDelEducation=function(a){e.setState((function(e){var n=e.educations.filter((function(e){return e.id!==a}));return Object(d.a)(Object(d.a)({},e),{},{educations:Object(r.a)(n)})}))},e.handleAddEducation=function(){e.setState((function(e){var a=Object(r.a)(e.educations);return a.push({id:b()(),schoolName:"",course:"",city:"",fromDate:"",toDate:""}),Object(d.a)(Object(d.a)({},e),{},{educations:Object(r.a)(a)})}))},e.handleChangeExperience=function(a,n){var t=a.target,c=t.name,i=t.value;e.setState((function(e){var a=e.experiences.map((function(e){return e.id===n?Object(d.a)(Object(d.a)({},e),{},Object(o.a)({},c,i)):e}));return Object(d.a)(Object(d.a)({},e),{},{experiences:Object(r.a)(a)})}))},e.handleDelExperience=function(a){e.setState((function(e){var n=e.experiences.filter((function(e){return e.id!==a}));return Object(d.a)(Object(d.a)({},e),{},{experiences:Object(r.a)(n)})}))},e.handleAddExperience=function(){e.setState((function(e){var a=Object(r.a)(e.experiences);return a.push({id:b()(),companyName:"",position:"",jobDescription:"",fromDate:"",toDate:""}),Object(d.a)(Object(d.a)({},e),{},{experiences:Object(r.a)(a)})}))},e.state={personal:{firstName:"John",lastName:"Doe",email:"johndoe@mail.com",phone:"5512341234",description:""},educations:[{id:b()(),schoolName:"",course:"",city:"",fromDate:"",toDate:""}],experiences:[{id:b()(),companyName:"",position:"",jobDescription:"",fromDate:"",toDate:""}]},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(v,{}),Object(f.jsx)(B.a,{fluid:!0,children:Object(f.jsxs)(R.a,{className:"p-md-5 p-1",children:[Object(f.jsx)(w,{personal:this.state.personal,experiences:this.state.experiences,educations:this.state.educations,handleChangePersonal:this.handleChangePersonal,handleAddEducation:this.handleAddEducation,handleDelEducation:this.handleDelEducation,handleChangeEducation:this.handleChangeEducation,handleAddExperience:this.handleAddExperience,handleDelExperience:this.handleDelExperience,handleChangeExperience:this.handleChangeExperience}),Object(f.jsx)(J,{personal:this.state.personal,experiences:this.state.experiences,educations:this.state.educations})]})})]})}}]),n}(t.Component);var L=function(){return Object(f.jsx)("div",{className:"App bg-light",children:Object(f.jsx)(W,{})})};n(45),n(46);s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(L,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.059ad1df.chunk.js.map