"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input10mini = exports.input10 = exports.lookup10 = void 0;
const values = [
    { start: '(', end: ')', value: 3, otherValue: 1 },
    { start: '<', end: '>', value: 25137, otherValue: 4 },
    { start: '{', end: '}', value: 1197, otherValue: 3 },
    { start: '[', end: ']', value: 57, otherValue: 2 },
];
exports.lookup10 = new Map([
    ...values.map((x) => [x.start, x]),
    ...values.map((x) => [x.end, x])
]);
exports.input10 = [
    '<([<({{[<{{((<()>({}{})}<({}<>)>)}}>[<{(([()<>]<<>{}>))}<{({<>[]}<<>>)[([]<>)<{}{}>]}>>]]}}[<[{{[{{[<><>]',
    '[<{{{[((({<<<[()[]]{()()}><{<><>}(<>{})>><<{<><>}{{}[]}>{(()())[[]{}]}>>{[[(<>[]){<>{}}][(()())(()[])]]',
    '(((<{<[[<[{(((<><>)[{}{}]){{{}<>}[()<>]})(([<>()][<>{}]){{[]()}})}[({([][])<{}<>>}{[[]<>]{()',
    '[(<{<[<<<<[[{<[]()><<>()>}[{{}<>}<()>]]<<[[]{}]>{({}())}>]((((<>())<(){}>)<{[]{}}<(){}>>)[{[[]<>]<[',
    '[[{(<{<<[{(<({<>{}}<()[]>){<<>[]>{<>}}><[[()[]]]{{()<>}{()<>}}])[{[(<>())]<<[]{}>(<>[])>}<[{',
    '(<<<[[<{({<<([{}{}](<><>)){{<><>}(())}>{<{(){}}{[][]}>[{[][]}([]())]}><([{{}[]}[[]{}]](<[]{}><{}<>>))((<(){',
    '<<<{((<<{[([<[[]{}]([][])>{[<>()][[][]]}]<<[()[]][[]{}]>[<<><>>(<><>)]>)<({{{}<>}{{}}}{{<><',
    '{[(<[{{{<[{({([]{}){{}{}}}[({}<>)])[([()[]]<[]{}>)<[{}{}]{{}()}>]}(<{{{}<>}(()[])}>{{<()<>><[]<>>}',
    '[<<{({[{((({<<<><>>(()())>{{[][]}<{}()>}}[[((){})[{}()]]<[()<>]>]){{(<{}<>>[()<>]){{[][]}(()<>',
    '({[([([<(<<[{<<><>>({}())}[[(){}][[][]]]]>><<(({<><>}{[][]})<{()()}[[]<>]>)[{((){}){{}[]}}(<<>()>{{}()})]><<',
    '[[[{[<({{<[[[<{}{}>(()())]{(<>[])([][])}]({{(){}}})]<[<{{}[]}{()}>[{<><>}]][<((){})([][])>]',
    '[(<{<{(<<<<{{[[][]]<()[]>}){{<<>{}>}}>({[(()())(<>[])]}(<{()()}[<>]>{[[]]<<>()>}))>(<[{({}{})}][{[{}()]',
    '<(<<[([[((<<{<[]{}>{{}<>}}(({}())[[]{}])>(<{<>()}[()()]>>>))]{<{{<(<()<>>{{}()})([{}<>](<><>))>',
    '[{[<[([[<[((([()[]]<{}{}>))<{[{}()][(){}]}([{}<>]<()<>>)>)]>[{((([{}()]{()()>)<(<><>)(()[])>)[(([]()',
    '{[{[{<<([({<<[{}()]<()<>>>{[[][]]({}())}>}[[<{{}<>}{<>}>]])(<<{[()[]]}(((){})({}{}))>[({{}()})]>)](',
    '({{{<<<<(([([[<><>]<<>[]>]{<()<>><()[]>})<([<>{}])>])(<<{{()}<()[]>}<([]<>)>>{{[{}()][[]<>]}[{<>}{()()',
    '[{(([{<{{(<{<<[]()>{{}<>}>}[<({}[])<{}<>>><{<>()}>]>)}<{{{{<<>{}>{()()}}}[[{()()}(()<>)><<{}<>>>]}[[(<(){}>(',
    '[[{<[<(<[[<<({{}()}{{}})(({}{})[[]{}])>[([<>{}]({}<>))])]{<[<[[][]]<()<>>>]{([()()]{<><>})<{[]{}}[[]()]>}><',
    '([<<{({[({[({<{}[]>{{}<>}}){<[<>[]]>[(()())]}]{{{{{}[]>{()<>}}}<[{{}<>}<[]()>]([<>]<<><>>)>}})',
    '(([<[[{{(<[{{(()<>)}<<{}()>{<>{}}>}<[<[]()>[()()]]([<>()]{()})>)[(<[<><>]{{}<>}>{{{}()}{[]()}})<',
    '[([[[([[[<[{{<()()>{[][]}}(<[][]>)}[{<{}()>{<>[]}}]]>({[[{<><>}<[][]>]([()]{()[]})]}{([<<><>>[{}(',
    '(<({<[[[[(((({[]{}}<{}<>>)[<(){}>[()<>]])){<(<<>{}>)<<()<>><()[]>>>{[[()()]<[][]>][{{}()}<<>{',
    '{{{{[[<{<{(<(([]())[{}[]])<(()<>){{}{}}}>){{{<{}[]><{}<>>}{(()[])[<><>]}}<{{()()}<<>[]>}>}}><(<[(<{',
    '<<[(<<<([{<{(({}())[{}[]])(<(){}>(<><>))}>([[(<>[])(<>[])]<({}{})<{}>>](((<>())<{}[]>)[[<>',
    '<{{((([[<{[(({<>{}}({}())))[([[]()][{}{}])]]}(([<([][])<<>()>>]<{{<>[]}(()())}[({}())[()()]]>)',
    '(({[{[[[[(<<[[(){}][(){}]]<{()<>}<[][])>>{({[][]}{<>{}}){<[][]>}}><{(([]{}){{}<>}){[()<>][(',
    '{<[[<<([<{<<{[<>{}}{<><>}}(({}()))>[[{[]()}](<<>>{<><>})]><<([<>{}]{[][]})[<{}[]>{<><>}]>>}{[{(<<>()><{}<>',
    '({{{((({<<({<[<>()](()[])]}){((<{}()>{[]<>}){<[]{}>[[][]]})<[[[]{}](())](<{}<>>[{}])>}>[{{[(<>[])]}[<({}{',
    '{<(<[{({[[[{[[{}<>][(){}]]{{(){}}}}<<[[]()]{<>}><[{}[]]>>]{<<((){})[{}]>({<><>}{()[]})><<[{}()]{',
    '[[[(({<((<({<<{}>>}<[([]{})[[]]]>)<<{[()[]](<><>)}><<{[]{}}[[]]>{{()[]}{[]()}}>>><[((<(){}',
    '{{<{{{<<{<{<((<>[])<()[]>)<(<>{}){[][]}>><(({}<>){[][]}){[()<>]{<>{}}}>}>[((<<(){})({}())><([]',
    '[[[{({<[{[[<<(()<>)({}())>({<><>}[<><>])>]]<(<{<()<>>([]())}{[[]<>]{<>()}}>{<([][])((){})>([{}][()<>])})>}]<(',
    '<<{[{[[<([[<<[{}<>]>[({}())<()[]>]>[{<(){}><{}<>>}[<<>>({}{})]]]<<{<()[]><()()>}({{}()}[{}<>])>>]<<([([](',
    '{<<<(<{{[{{{<<{}[]>{()()}>{[<>[]]({}())}}}<[<([]())>{<()()>(()())}][<(()())<{}<>>>((<><>)[[][]]]]>',
    '[[[({<(([[(<({()<>}<[]<>>)>[({[]}{<><>})<<(){}>{<><>}>])]]<(<[<<()()]<{}()>>(<{}()>([][]))]<<{<><>}>>>){',
    '<<[[<({<({[<{(()[])}{{[]()}<[]{}>}>]<[(<[]{}><<>{}>)<[()[]]([]{})>]>})>((<([<[<><>]([]{}}><{<>()}<()[]>>]{',
    '({[[[{{([[((<<{}<>}[{}<>]>)(({{}<>}<()()>)[[[]<>]<()<>>]))<(<{[][]}>)<{{[]<>}<[]<>>}[(<><>){(){}}]>>][<',
    '{<[[[[[<[[{{{{()}[[][]]}[<(){}>[[][]]]}(<[{}{}]>)}(<<<()()>{<>}>>)]<([[[()<>]((){})]([[]()]<{}{}>)]([{{}(',
    '[<(({(((<[(<<[[]{}][<><>]>[{(){}}[[]]]><{{()[]}<<>()>}{{()}{(){}}}>)(<[([]())]<{{}{}}(())>>)]([([{()[]}[[',
    '(({[([{{((({{<<>[]>}}<([{}[]][[]()])[{{}[]}<<>{}>]>)<({([])<[]{}>}){(((){})[<>[]]){<<>[]>[{}()',
    '<{<{(<<({([([([]())(<>[])][{()<>}{<>{}}])](({<()()>{()<>}}{{[]}[[][]]})[[[{}{}][()[]]]])]}(({[[{<>()}[{}()]',
    '[[{[{{[({<{<(<{}<>>)[[{}{}>[<><>]]>[((())([]<>)){([]())<<><>>}]}>{{{<{<>[]}({}{})>{([]{}){[][]}}}[{{<>',
    '[[{[<([{([<<<(<><>){[]{}}>{{[][]}([]<>)}>><{<<<>()>{<><>}>[<[][]>([]())]}({[{}[]]{<>()}}({()()}(()<>)))>])}])',
    '{{<((([<[({{(([]){[][]})[(()<>)<()()>]}{{{()[]}}([()[]][{}{}])}})<{({[()[]]<[]{}>}[<()()><()[]>])',
    '([<<<([{{<({{[{}<>][<>()]}{([]<>){(){}}}}){({<{}()>}[(()){<><>}])}><{<(<()[]>({}{}))(({}{})',
    '{{[([<[{<<{<{[{}[]][(){}]}[[[]()]{()[]}]>}><[(([<>{}]){{<>()}{()<>}}){[{<>{}}[[]<>]]{<[]<>>}}][[[{[]<',
    '{<<<<{(((<{([{{}{}}][[[]()]<<>()>])<([()<>]([]))[[<><>][{}()]]>}{<{{(){}}<()<>>}<{<>{}}{<>()}>>(<{',
    '<[({<{{{<((<<({})([]<>)>((<>[]){[]()}}>)(<[<(){}>({}[])]>[<({}<>){[][]}>[{()<>}<<><>>]]))>[({[([<>{}][{}()])<',
    '(({[[{<{[[((<[<>()]><{()<>}[[]<>]>)([{[]()}[[]()]](({}{}){<>()})>){<{(()())(<>[])}[<()[]>[()()]',
    '[(([{{<{<[{{{[{}{}]<(){}>}[<[]{}>({}())]}({[()[]]{[]()}}[<{}[]>(<>)])}[{{<[]{}>(()<>)}<[[]()]<<>[]>)}<<<<>()',
    '<(<<{<([([(<[{{}<>}<()()>][{()[]}(<><>)]>{{<[]<>><{}[]>>{{{}}{[]<>}}})({[<[]{}>[[][]]]}{{<',
    '((<<<([[<<{([<<>{}>{<>()}])<<{[]{}}[()[]]>>}[<{([]())[<>{}]}>{((()[]){{}<>))[<()<>>([]<>)]}]>{(({[[]]',
    '{<<((({({[<[[[<><>][<>{}]]{({}<>)<()[]>}][<<[]{}}<[]()>>[[[]<>]]]>([[[{}{}]]<<<><>><<>{}>>',
    '[{<([{{<{(<{{{(){}}{{}[]}}(<<>()>[()[]])}{{{{}}(()())}{[()<>]}}>[{[{[][]}{{}<>)]}((((){}){[]{}})(({})<<>{}',
    '[{[(<[{<{{[<{{()()}{()[]}}<<()()><{}[]>>>][<({()()}[()[]]){([][])[<>{}]}>(((()()))((<>{})<{}{',
    '(<(<([<<<{[<({<>}{()()})><((<>))<<{}[]><<><>>>>]{<{[[][]]}{{[]{}}{[]<>}>>[[[[]()]({})]]}}><<<<',
    '<([<(<<<(({{<[<><>]<[]<>>>(<[]()>[{}<>])}[<(()()){{}<>}>]}))<<[{{[<>[]]<()[]>}{(()<>){()()',
    '<[(<{{[[[<(([[<>()]([][])])){{{[()()]{{}[]}}[([]{}){(){}}]}{[<[]>{[]()}][[<>]({}())]}}>]]<(<[{<{<>()}{()[',
    '<{{{[(<{<[<{{<()>(<>{})}[({}()){()()}]]([{<>{}}[()()]](<[]<>><<>{}>))>[<{<[]()>(<>)}<{[]{}}[(',
    '<{(<[<[<{<({<[<><>}[[]()]>}([<(){}><<><>>][<()()><<><>>]))([[([]())<{}>]<[()()]{<>{}}>]{(({}',
    '<(<({(<[<[(((<<>{}>{{}()})){{[[]()](())}{{<><>}<<><>>}})([<<()()><[]())>[[<>()]<<>[]>]][<{()()}',
    '((<[{{(<[([<([()()](<>{}))(<{}()>[{}{}])>({<{}{}>(<>[])})])]>)}<({((([(<[]{}>({}[]))]{((<><>)(()()))}))(({{<{',
    '{({[<<[(<<((<<{}[]>[()<>]>{<<>[]>{[]()}}){[<<><>>[()[]]]<<{}()>[()<>]>})[{[{{}<>}{()}]}<(<()[]><{}{}>)[[',
    '{{[<((<((<{[([[][]]<{}<>>)((()[]))]}>{[{(({}())[()[]]){{[][]}([][])}}](<<[<><>]{<>}><<{}<>><[][]>>>',
    '[[[<(<{{([{(<(<>{})(()<>)><(<>[])[{}()]>)([[[]()][[]<>]])}[[{<[]()>(<><>)}[(()){<>()}]]({{[]()}})]])[[',
    '<({([{(<{{[<<[(){}][[]()>>[[{}{}](()[])]>]{{[[{}<>]{{}<>}]{({}<>)[{}{}]}}[({()()}[{}<>]){((){})}]}}{{[[{{',
    '[[[[{<[<(([<[<[]{}><<>{}>]<<[]<>>(()[])>>([(<>)<{}()>])])<{{({[]{}}{[]()})}<[[<><>]{[]<>}]{<<>()><<>()>}>',
    '<<<[([[(({(<[<{}>[{}()]]{{()}(()[]}}>(<<<>()>(<>[])>))<<[{<>()}{<>[]}][{[]{}}<{}[]>]>>}){<<<(<<>',
    '{{<[{{({{(([[([]{})<{}()>]]))){(<{{<<>[]>(<>[])}<<()><[]<>>>}>([([<>()]<{}[]>)(({}{}))]<<([]())[<>',
    '([<[({[{{[[[({<>{}}<(){}>)({<>[]}{()<>})](([(){}]{[]()}))]<[<(<>[])({}<>)>][[[[]{}]<()>]<<<>[]>{[]<>}>]>]',
    '{[{[[{<(<<({{([]<>)([]{})}<<{}<>><<>[]>>}(({()()}[{}()]){(<><>)[<>[]]]))<<[([])(<>[])]{([]())(',
    '({<<{{[<<[{{<[(){}][[]]><{[]()}<[]{}>>}[<<<>()>{{}()}>[<{}<>>[<><>]]]}](<<[(<>{})[()]}{<<>><[]',
    '<<<([{[([{{[{[[]<>][<>[]]}]}{<([[][]]){[<>[]]<{}()>}><(<[]<>>(<>{}))[<[][]>{<>}]>}}{<{{[<>{}]{()',
    '<((<([([<{<[([{}<>](<>()))<([]<>)([]<>)>][<{()<>}{[]<>}>]>}<{[(<[]()>(<><>))[<(){}>[[][]]]](<([]())<<>[]>>[',
    '{[<[<<{{(<{[{((){})<{}[]>}[([][])]]}{[({()<>}){[{}<>](<>{}))]}>)}<[[(<(<()<>>){(()())([]{})}>({[{}[]]',
    '<([[<({{[<({[({}{}){{}()}]<((){})[<><>]>})([[{[][]}<()<>>]<[()<>][{}{}]>])>]}}){{[(({(({[]()}{()()}',
    '<({([<[{(<[{(({}[]))}[[{[]<>}{{}[]}](({}[]))]]<[[(()[])[()()]]{[{}()>}]>>{<<{[[]<>](()())}[<{}[]>(<>',
    '(([[<(<<[{<(<[{}{}]{()<>}>)((<(){}>([]))({<>{}}[<>[]]))>(<<{()[]}{(){}}>[[<>()]]>[<{()[]}<()[]>>{({}<>){[]<',
    '{<[<<{(<{{<[{[{}()][<><>]}][{({}{})(<>[]))]>{<[[<><>]]<<<>()>({}[])>>({<[]<>>([]<>)}{[(){}]([]{})})',
    '{{<((([<{(([{[<>{}]{{}<>}}])<<<{<>[]}{(){}}>{(()[])[()[]]}>{{<<>()>}([(){}]{{}<>})}>)}{(([{{{}[]}(<>())',
    '{[(<{{{<[[{{[[()[]](<>{})]((()<>)({}[]))}}]][{([[{{}[]}<[]<>>]][{(<>{})}[(<>()){<><>}]])}>>[([',
    '<<<{([((<<{(({{}{}}({}{})))}{(<(<><>)[[]<>]>{[{}[]](<>)})<{{<>()}{{}<>}}<<<>[]><<>()>>>}>>))]){',
    '<{(<[[(({<[{{<<><>><{}<>>}<<<>{}>{()()}>}]>}))[((([([{[]{}}]([{}()][<><>]))(((<>())(<>]))][',
    '([<<[({(({{((<[]{}>{()[]}})({[<><>][<>()]}(<<><>>[[]()]))}{{{(()<>)({}{})}(<{}()><[]()>)}{{{<><>}',
    '[<<<{{<<{<{<<[()()](<><>)>>([({}){{}[]}]{<[]()>{{}()}})}<[{([]())<{}<>>}([{}()]<{}[]>)]<(<[]',
    '{{<[({({<{({((()<>)){[[]()]<(){}>>}<[[{}]{<><>}]<(()<>)<()()>>>)}(({((<><>)[{}[]]){[[]()][()[]]}})<({',
    '<[{<({<({(({{<(){}>[[]{}]}<<[][]><{}{}>>})[(([{}()][<>()]))[(<<>{}>([][]}){[[]{}]}]])[<[{(()<>)[{}<>]}]>]',
    '([(([{<(<{[<{([][]){[][]}}(<<>><[]{}>)>({[<>()]{{}<>}}(<<>[]>{<>{}}))][({{[]()}{[]}}(([]{})(()<>))',
    '<{<<<({[[(<<{(()<>)[[]{}]}<<()()>>>><[({()[]}[[][]]){<[][]>(<><>)}][(({}{})<()[]>){{{}()}<[]{}>}]>)[<((([]{}',
    '<([[([<<<{<<<<<><>>({}())>{{[]()}[{}[]]>>[<[<>()]({}{})>]>(({<{}{}>{<>{}}}{<{}[]>{{}()}}){[<[]()>{()<>}',
    '[{{<{[{{{<{{<([][])[()<>]>{{[]{}}({}())}}((<<>[]>([][])))}><{<<<{}<>><<>()>>{(()<>){[]{}}}>}{([{[][]}{<>{}}])',
    '[({<((({(<{[{<[][]}(<>[])}<<{}<>>{{}<>}>]({{<>()}[{}{}]})}(<{{{}()}<<>[]>}[([]{})<[][]>]>[{(<>',
    '<([[[<{{<<<[(((){})(()()))([<><>]{()})]<<[<>]([])>(([]<>))>>{{[<()>]<(()[])([][])>}[({{}}<{}{',
    '{<<((<[{<{<[{[[][]]{<><>}}{<(){}>{<><>}}]<((<>{})<<>[]>)>>((((<>[]){[]()})({<>()}))([[{}[]]{<>[]}]<',
    '(<{(<[[([[([<({}{})[()<>]>])][<{<({}())><{()()}>}>{[{[{}<>]([])}](([()()]))}]])]]>)}>[[({{',
    '(<[[[{<{[<([{({}{}){{}()}}[(<>{})<()()>]][{{{}()}}<{<>[]}[()<>]>]){{((<><>){()<>])<<<>()>[{}[',
    '<{<<[((<<<{([{{}<>}({})]{((){})[[]<>]})<[[()<>]([]())](<[]<>>({}<>))>}{(<{()[]}>{<[]<>>})<',
    '{[([<[<[({{[<[<>()][{}[]}>((<>())<[]<>>)]{(<{}<>>(()()))([()()])}}}<(<(<<>{}>{<>{}})><({[]{}}[',
    '{{[[[<<<<[[{({[]<>}<()()>)<<(){}>{<><>}>}{[([]<>)[<>[]]]}]{<[{()()}(<><>)]{{<>{}}<[]{}>}>((<{}()>{(){}}))}>>>',
    '({[<[[<{<([<<<()<>}<{}{}>>(<<>[]>(<>()))><{[<>()]({}<>)}<{[]{}}>>])>}{{{<{({[]{}}<<>>)<<[]<>',
    '([((((<(<[({((<>())<()<>>)}([<{}()>{<>()}]{{{}()}{[]<>)}))([<(<>{})><[(){}][<>()]>](([()]<[]{}>)(<{}{}>{()',
    '{[(<{({(<([(<[{}()][{}()]>)[[[{}()](()())]<{[][]}<[]<>>>]][({[()()]{{}{}}}((<><>)(<>())))<<{()()}{[]{}}}[{[]',
    '<([[{<<{<<{(([()<>]{<>[]})<<[][]>({}[])>)({<{}{}>([]<>)})}{<{{[][]}{[]{}}}[((){})((){})]><([[][]]){{()()}}>}',
    '(([<[[[(({{[[[[][]](<>())]{<<>><<>()>}]<<(()<>)>[<<>{}>{<><>}]>}[<(<<><>><{}{}>)[<()<>><[]()>]>[{<()[]>[<',
    '{[{{{[(<<[<[{[()()]<{}<>>}[([]<>)({}<>)]][<{()()}[<>[]]>]>]>>)]{([({[{({<>}(<>{}))[({}())[[][]]]}<{{()[]',
    '(<(<{<{<[[(({[<>[]]<{}[]>}[([]{})(()[])]))({([[]])([()()]{()[]})}<[<<><>><[]<>>]>)]]<([{{{{}<>}(<>)}}<({',
    '[<[{[<<[<<[<{<<>[]}<()>}{(()[])[{}[]]}><[<(){}>{{}[]}]>]>(((<{{}<>}{()[]}><<<>{}>{()[]}>)[[(',
    '[<{(<[<{{([{{<<>{}><[]()>}({(){}}[[]{}])}{[<[][]>[<><>]][<<><>>[{}{}]]}](<<{(){}}({}<>)>(<()[]>[()[]])>',
    '<[{<({((([(<([[]<>]<()[]>)<(<>())>>(<{[][]>(<>{})>[{(){}}]))])))}<<{({<<<([]{})([]())>[{()()}<()<>>]',
    '<[(<{((({<<{{[{}<>]}[[<>{}]({}[])]}{(<{}[]}{<>})<{[]()}[()[]]>}>>}))(<<[<<(<<>{}><<>{}>)<<',
];
exports.input10mini = [
    '[({(<(())[]>[[{[]{<()<>>',
    '[(()[<>])]({[<{<<[]>>(',
    '{([(<{}[<>[]}>{[]{[(<()>',
    '(((({<>}<{<{<>}{[]{[]{}',
    '[[<[([]))<([[{}[[()]]]',
    '[{[{({}]{}}([{[{{{}}([]',
    '{<[[]]>}<{[{[{[]{()[[[]',
    '[<(<(<(<{}))><([]([]()',
    '<{([([[(<>()){}]>(<<{{',
    '<{([{{}}[<[[[<>{}]]]>[]]',
];
//# sourceMappingURL=input.js.map