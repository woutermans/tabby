(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[699],{69733:function(e,r,t){Promise.resolve().then(t.bind(t,54451))},54451:function(e,r,t){"use strict";t.r(r),t.d(r,{JobRuns:function(){return x}});var n=t(57437),s=t(2265),o=t(99109),a=t(61985),l=t(7820),i=t(57166),d=t(93023),c=t(84168),u=t(93111),f=t(1576);let m=a.L;function x(){var e,r;let[t,a]=s.useState({last:m}),[{data:x,error:h,fetching:v,stale:b}]=(0,o.aM)({query:i.GG,variables:t}),[j]=(0,l.io)({data:x,error:h,stale:b}),g=null==x?void 0:null===(e=x.jobRuns)||void 0===e?void 0:e.edges,p=null==x?void 0:null===(r=x.jobRuns)||void 0===r?void 0:r.pageInfo,N=null==p?void 0:p.hasPreviousPage,y=s.useMemo(()=>null==g?void 0:g.slice().reverse(),[g]);return(0,n.jsx)(n.Fragment,{children:j?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f.B,{jobs:y}),N&&(0,n.jsx)("div",{className:"mt-8 text-center",children:(0,n.jsxs)(d.z,{disabled:v,onClick:()=>{a({last:m,before:null==p?void 0:p.startCursor})},children:[v&&(0,n.jsx)(c.IconSpinner,{className:"mr-2 h-4 w-4 animate-spin"}),"load more"]})})]}):(0,n.jsx)(u.c,{})})}},1576:function(e,r,t){"use strict";t.d(r,{B:function(){return x}});var n=t(57437);t(2265);var s=t(24033),o=t(61554),a=t.n(o),l=t(24144),i=t(62067),d=t.n(i),c=t(39311),u=t(29155),f=t(84168),m=t(32553);let x=e=>{let{jobs:r,shouldRedirect:t=!0}=e,o=(0,s.useRouter)();return(0,n.jsxs)(m.iA,{children:[(0,n.jsx)(m.xD,{children:(0,n.jsxs)(m.SC,{children:[(0,n.jsx)(m.ss,{className:"w-[35%]",children:"Start Time"}),(0,n.jsx)(m.ss,{className:"w-[35%]",children:"Duration"}),(0,n.jsx)(m.ss,{className:"w-[15%]",children:"Job"}),(0,n.jsx)(m.ss,{className:"w-[15%] text-center",children:"Status"})]})}),(0,n.jsx)(m.RM,{children:(null==r?void 0:r.length)?(0,n.jsx)(n.Fragment,{children:null==r?void 0:r.map(e=>{var r;return(0,n.jsxs)(m.SC,{className:(0,c.cn)(t&&"cursor-pointer"),onClick:r=>{t&&o.push("/jobs/detail?id=".concat(e.node.id))},children:[(0,n.jsx)(m.pj,{children:d()(e.node.createdAt).format("MMMM D, YYYY h:mm a")}),(0,n.jsx)(m.pj,{children:(0,l.Z)(null===(r=e.node)||void 0===r?void 0:r.exitCode)?"Running":function(e){let{createdAt:r,finishedAt:t}=e;if(!r||!t)return;let n=d().duration(d()(t).diff(r)).asMilliseconds();return a()(n)}(e.node)}),(0,n.jsx)(m.pj,{children:(0,n.jsx)(u.C,{variant:"secondary",children:e.node.job})}),(0,n.jsx)(m.pj,{children:(0,n.jsx)("div",{className:"flex items-center justify-center",children:(0,n.jsx)(h,{node:e})})})]},e.node.id)})}):(0,n.jsx)(m.SC,{children:(0,n.jsx)(m.pj,{colSpan:4,className:"h-[100px] text-center",children:"No Data"})})})]})};function h(e){var r;let{node:t}=e;if(!t)return null;let s=null==t?void 0:null===(r=t.node)||void 0===r?void 0:r.exitCode;return(0,l.Z)(s)?(0,n.jsx)(f.IconInfoCircled,{}):0===s?(0,n.jsx)(f.IconCheckCircled,{}):(0,n.jsx)(f.IconCrossCircled,{})}},93111:function(e,r,t){"use strict";t.d(r,{P:function(){return l},c:function(){return a}});var n=t(57437),s=t(39311),o=t(25645);let a=e=>{let{className:r,...t}=e;return(0,n.jsxs)("div",{className:(0,s.cn)("space-y-3",r),...t,children:[(0,n.jsx)(o.O,{className:"h-4 w-full"}),(0,n.jsx)(o.O,{className:"h-4 w-full"}),(0,n.jsx)(o.O,{className:"h-4 w-full"}),(0,n.jsx)(o.O,{className:"h-4 w-full"})]})},l=e=>{let{className:r,...t}=e;return(0,n.jsxs)("div",{className:(0,s.cn)("flex flex-col gap-3",r),...t,children:[(0,n.jsx)(o.O,{className:"h-4 w-[20%]"}),(0,n.jsx)(o.O,{className:"h-4 w-full"}),(0,n.jsx)(o.O,{className:"h-4 w-[20%]"}),(0,n.jsx)(o.O,{className:"h-4 w-full"})]})}},29155:function(e,r,t){"use strict";t.d(r,{C:function(){return l}});var n=t(57437);t(2265);var s=t(7404),o=t(39311);let a=(0,s.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",successful:"border-transparent bg-successful text-successful-foreground hover:bg-successful/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function l(e){let{className:r,variant:t,...s}=e;return(0,n.jsx)("div",{className:(0,o.cn)(a({variant:t}),r),...s})}},93023:function(e,r,t){"use strict";t.d(r,{d:function(){return i},z:function(){return d}});var n=t(57437),s=t(2265),o=t(67256),a=t(7404),l=t(39311);let i=(0,a.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","hover-destructive":"shadow-none hover:bg-destructive/90 hover:text-destructive-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,r)=>{let{className:t,variant:s,size:a,asChild:d=!1,...c}=e,u=d?o.g7:"button";return(0,n.jsx)(u,{className:(0,l.cn)(i({variant:s,size:a,className:t})),ref:r,...c})});d.displayName="Button"},25645:function(e,r,t){"use strict";t.d(r,{O:function(){return o}});var n=t(57437),s=t(39311);function o(e){let{className:r,...t}=e;return(0,n.jsx)("div",{className:(0,s.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",r),...t})}},32553:function(e,r,t){"use strict";t.d(r,{RM:function(){return i},SC:function(){return c},iA:function(){return a},pj:function(){return f},ss:function(){return u},xD:function(){return l}});var n=t(57437),s=t(2265),o=t(39311);let a=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("table",{ref:r,className:(0,o.cn)("w-full caption-bottom text-sm",t),...s})});a.displayName="Table";let l=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("thead",{ref:r,className:(0,o.cn)("[&_tr]:border-b",t),...s})});l.displayName="TableHeader";let i=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("tbody",{ref:r,className:(0,o.cn)("[&_tr:last-child]:border-0",t),...s})});i.displayName="TableBody";let d=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("tfoot",{ref:r,className:(0,o.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",t),...s})});d.displayName="TableFooter";let c=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("tr",{ref:r,className:(0,o.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",t),...s})});c.displayName="TableRow";let u=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("th",{ref:r,className:(0,o.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",t),...s})});u.displayName="TableHead";let f=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("td",{ref:r,className:(0,o.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",t),...s})});f.displayName="TableCell";let m=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("caption",{ref:r,className:(0,o.cn)("mt-4 text-sm text-muted-foreground",t),...s})});m.displayName="TableCaption"},61985:function(e,r,t){"use strict";t.d(r,{L:function(){return s},o:function(){return n}});let n="name@yourcompany.com",s=20}},function(e){e.O(0,[6990,3529,4762,89,7753,4168,2445,2971,7864,1744],function(){return e(e.s=69733)}),_N_E=e.O()}]);