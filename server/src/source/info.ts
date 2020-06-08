/*
 * @Author: your name
 * @Date: 2020-06-05 20:52:19
 * @LastEditTime: 2020-06-06 19:35:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DevUIHelper-LSP\server\info.js
 */


let devuiInfo = 
[
    {
        "name": "d-accordion",
        "attrList": [
            {
                "name": "data",
                "type": "Array<any>或AccordionMenuType",
                "default": "--",
                "description": "必选，数据源，可以自定义数组或者使用预设的AccordionMenuType",
                "attrType": "ATTR",
                "isNecessary": true,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "titleKey",
                "type": "string",
                "default": "title",
                "description": "可选，标题的属性名，item[titleKey]类型为string，为标题显示内容",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "loadingKey",
                "type": "string",
                "default": "loading",
                "description": "可选，子菜单是否加载中的判断属性名，item[loadingKey]类型为boolean",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "childrenKey",
                "type": "string",
                "default": "children",
                "description": "可选，子菜单的属性名，item[childrenKey]类型为Array<any>",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "disabledKey",
                "type": "string",
                "default": "disabled",
                "description": "可选，是否禁用的属性名，item[disabledKey]类型为boolean",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "activeKey",
                "type": "string",
                "default": "active",
                "description": "可选，子菜单是否激活的属性名，item[activeKey]类型为boolean",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "openKey",
                "type": "string",
                "default": "open",
                "description": "可选，菜单是否展开的属性名，item[openKey]类型为boolean",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "restrictOneOpen",
                "type": "boolean",
                "default": "false",
                "description": "可选，限制一级菜单同时只能打开一个，默认不限制",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "menuItemTemplate",
                "type": "TemplateRef<any>",
                "default": "内置",
                "description": "可选，可展开菜单内容条模板，可用变量值见下",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "itemTemplate",
                "type": "TemplateRef<any>",
                "default": "内置",
                "description": "可选，可点击菜单内容条模板，可用变量值见下",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "noContentTemplate",
                "type": "TemplateRef<any>",
                "default": "内置",
                "description": "可选，没有内容的时候使用自定义模板，可用变量值见下",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "loadingTemplate",
                "type": "TemplateRef<any>",
                "default": "内置",
                "description": "可选，加载中使用自定义模板，可用变量值见下",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "innerListTemplate",
                "type": "TemplateRef<any>",
                "default": "内置",
                "description": "可选，子列表内容完全自定义，用做折叠面板，可用变量值见下",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "linkType",
                "type": "string",
                "default": "",
                "description": "可选，routerLink为路由场景；hrefLink为外部链接场景；dependOnLinkTypeKey为动态路由或外部链接场景；为默认非链接类型（无法右键打开新标签页）",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "routerLink",
                    "hrefLink",
                    "dependOnLinkTypeKey",
                    ""
                ],
                "isEvent": false
            },
            {
                "name": "linkTypeKey",
                "type": "string",
                "default": "linkType",
                "description": "可选，链接内容的类型的key值，用于linkType为dependOnLinkTypeKey时指定对象链接类型属性名，item[linkTypeKey]类型为routerLink!!!hrefLink!!!string，其中routerLink为路由链接，hrefLink为外部链接，其他为默认非链接类型",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "linkKey",
                "type": "string",
                "default": "link",
                "description": "可选，链接内容的key，用于linkType为连接类型记非时，链接的取值的属性值，item[linkKey]为路由地址或者超链接地址",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "linkTargetKey",
                "type": "string",
                "default": "target",
                "description": "可选，链接目标窗口的key，用于链接类型，item[linkTargetKey]为单个链接的目标窗口",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "linkDefaultTarget",
                "type": "string",
                "default": "_self",
                "description": "可选，不设置target的时候target默认值，用于链接类型",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "autoOpenActiveMenu",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否自动展开带有活跃子项的菜单",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "menuToggle",
                "type": [
                    "EventEmitter<AccordionMenuToggleEvent>"
                ],
                "description": "可选，可展开菜单展开事件，返回对象里属性item为点击的对象数据，open为true则将要展开false则将要关闭，parent为父对象数据，event为点击事件的原生事件",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "itemClick",
                "type": [
                    "EventEmitter<AccordionItemClickEvent>"
                ],
                "description": "可选，可点击菜单点击事件，返回对象里属性item为点击的对象数据，preActive对象为上一次展开的对象，parent为父对象数据，event为点击事件的原生事件",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "activeItemChange",
                "type": [
                    "EventEmitter<any>"
                ],
                "description": "可选，子项切换的时候会发出新激活的子项的数据",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            }
        ],
        "directiveFlag": false,
        "description": "手风琴，用于需要分组的层级菜单",
        "tmw": "需要通过分组组织菜单的时候使用",
        "cnName": "手风琴"
    },
    {
        "name": "dAnchor",
        "attrList": [
            {
                "name": "dAnchor",
                "type": "string",
                "default": "--",
                "description": "必选，设置一个锚点的名字",
                "attrType": "ATTR",
                "isNecessary": true,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "anchorActive",
                "type": "string",
                "default": "--",
                "description": "可选，锚点处于激活状态的时候，模块生效对应的css类名",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            }
        ],
        "directiveFlag": true,
        "description": "用于跳转到页面指定位置。",
        "tmw": "需要在页面的各个部分之间实现快速跳转时。",
        "cnName": "锚点"
    },
    {
        "name": "dAnchorLink",
        "attrList": [
            {
                "name": "dAnchorLink",
                "type": "string",
                "default": "--",
                "description": "必选，点击滑动的目标锚点的名字",
                "attrType": "ATTR",
                "isNecessary": true,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "anchorActive",
                "type": "string",
                "default": "--",
                "description": "可选，锚点处于激活状态的时候，链接生效对应的css类名",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            }
        ],
        "directiveFlag": true,
        "description": "定义一个锚点的链接，点击链接会滑动到锚点，锚点处于页面顶部的时候也会激活链接的class"
    },
    {
        "name": "dAnchorBox",
        "attrList": [],
        "directiveFlag": true,
        "description": "定义一个扫描锚点的容器，放在dAnchor与dAnchorLink的公共父节点上，用于锚点和链接之间的通信"
    },
    {
        "name": "dAnchorHashSupport",
        "attrList": [],
        "directiveFlag": true,
        "description": "（dAnchorBox辅助指令）"
    },
    {
        "name": "d-alert",
        "attrList": [
            {
                "name": "type",
                "type": "string",
                "default": "info",
                "description": "必选，指定警告提示的样式",
                "attrType": "ATTR",
                "isNecessary": true,
                "valueSet": [
                    "success",
                    "danger",
                    "warning",
                    "info"
                ],
                "isEvent": false
            },
            {
                "name": "cssClass",
                "type": "string",
                "default": "--",
                "description": "可选，自定义class名",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "closeable",
                "type": "boolean",
                "default": "true",
                "description": "可选，默认显示关闭按钮",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "dismissTime",
                "type": "number",
                "default": "--",
                "description": "可选，自动关闭alert的延迟时间(单位：ms)",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "showIcon",
                "type": "boolean",
                "default": "true",
                "description": "可选，是否使用默认的类型图标",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "closeEvent",
                "type": [
                    "EventEmitter<any>"
                ],
                "description": "可选，关闭时触发的回调函数",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            }
        ],
        "directiveFlag": false,
        "description": "用于向用户显示警告的信息。",
        "tmw": "当页面需要向用户发出警告信息时。",
        "cnName": "警告"
    },
    {
        "name": "d-auto-complete",
        "attrList": [
            {
                "name": "allowEmptyValueSearch",
                "type": "boolean",
                "default": "false",
                "description": "可选，在绑定的输入框value为空时，是否进行搜索提示操作",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "appendToBody",
                "type": "boolean",
                "default": "false",
                "description": "可选，下拉弹出是否appendtobody",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "source",
                "type": "Array<any>",
                "default": "--",
                "description": "必选，有searchFn的情况下可以不必选",
                "attrType": "ATTR",
                "isNecessary": true,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "disabled",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否禁止指令",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "cssClass",
                "type": "string",
                "default": "--",
                "description": "可选，自定义class名",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "delay",
                "type": "number",
                "default": "300",
                "description": "可选，只有在delay时间经过后并且输入新值，才做搜索查询",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "disabledKey",
                "type": "string",
                "default": "--",
                "description": "可选，禁用单个选项;当传入资源source选项类型为对象,比如设置为disabled,则当对象的disable属性为true时，比如{label:xxx,disabled:true},该选项将禁用",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "itemTemplate",
                "type": "TemplateRef",
                "default": "--",
                "description": "可选，自定义展示模板",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "noResultItemTemplate",
                "type": "TemplateRef",
                "default": "--",
                "description": "可选，没有匹配项的展示结果",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "formatter",
                "type": "Function",
                "default": "--",
                "description": "可选，格式化函数",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "isSearching",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否在搜索中，用于控制searchingTemplate是否显示",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "searchFn",
                "type": "Function",
                "default": "(term:string,target?:AutoCompleteDirective)=>Observable<any[]>",
                "description": "可选，自定义搜索过滤",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "searchingTemplate",
                "type": "TemplateRef",
                "default": "--",
                "description": "可选，自定义搜索中显示模板",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "selectValue",
                "type": "Function",
                "default": "--",
                "description": "可选，选择选项之后的回调函数",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "transInputFocusEmit",
                "type": "Function",
                "default": "--",
                "description": "可选，inputfocus和blur标志",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "sceneType",
                "type": "string",
                "default": "--",
                "description": "可选，值为select、suggest",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "tipsText",
                "type": "string",
                "default": "--",
                "description": "可选，提示文字",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "overview",
                "type": "string",
                "default": "--",
                "description": "可选",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "border",
                    "none",
                    "multiline",
                    "single"
                ],
                "isEvent": false
            },
            {
                "name": "latestSource",
                "type": "Array<any>",
                "default": "--",
                "description": "可选，最近输入",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "enableLazyLoad",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否允许懒加载",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "loadMore",
                "type": [
                    "EventEmitter<any>"
                ],
                "description": "可选，懒加载触发事件，配合enableLazyLoad使用,使用\\$event.loadFinish()\\关闭loading状态,$event为弹窗组件AutoCompletePopupComponent的实例",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            }
        ],
        "directiveFlag": false,
        "description": "在用户进行输入时联想用户可能需要的输入结果。",
        "tmw": "可以根据用户输入的部分字符推断出他可能想要输入的内容。",
        "cnName": "自动补全"
    },
    {
        "name": "d-avatar",
        "attrList": [
            {
                "name": "name",
                "type": "string",
                "default": "--",
                "description": "必选，传入字符串用于制作头像",
                "attrType": "ATTR",
                "isNecessary": true,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "gender",
                "type": "string",
                "default": "--",
                "description": "可选，根据性别区分头像颜色,传入string可以是female!!!male的任意大小写形式",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "string",
                    "male",
                    "female"
                ],
                "isEvent": false
            },
            {
                "name": "width",
                "type": "number",
                "default": "40",
                "description": "可选，设定头像的宽度,单位为px",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "height",
                "type": "number",
                "default": "40",
                "description": "可选，设定头像的高度,单位为px",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "isRound",
                "type": "boolean",
                "default": "true",
                "description": "可选，是否显示为圆形头像",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "imgSrc",
                "type": "string",
                "default": "--",
                "description": "可选，传入自定义图片作为头像",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "customText",
                "type": "string",
                "default": "--",
                "description": "可选，传入自定义显示文字",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            }
        ],
        "directiveFlag": false,
        "description": "设置头像",
        "tmw": "可以根据用户输入的字符显示头像。",
        "cnName": "头像"
    },
    {
        "name": "d-breadcrumb-item",
        "attrList": [
            {
                "name": "showMenu",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否需要显示下拉箭头及下拉列表内容",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "menuList",
                "type": "Array<MenuConfig>",
                "default": "--",
                "description": "可选，showMenu为true时传入，下拉列表的显示内容",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "isSearch",
                "type": "boolean",
                "default": "false",
                "description": "可选，showMenu为true时传入，下拉列表是否需要搜索功能",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "customMenuTemplate",
                "type": "TemplateRef<any>",
                "default": "--",
                "description": "可选，showMenu为true时传入，自定义下拉列表",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "toggleEvent",
                "type": [
                    "EventEmitter<any>"
                ],
                "description": "dropdown菜单展开和收起的事件，返回值为当前菜单是否打开",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            }
        ],
        "directiveFlag": false
    },
    {
        "name": "d-checkbox",
        "attrList": [
            {
                "name": "name",
                "type": "string",
                "default": "--",
                "description": "可选，表单域名，input原生name属性",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "label",
                "type": "string",
                "default": "--",
                "description": "可选，显示标签",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "isShowTitle",
                "type": "boolean",
                "default": "true",
                "description": "可选，是否显示title提示",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "disabled",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否禁用",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "labelTemplate",
                "type": "TemplateRef",
                "default": "--",
                "description": "可选，标签的自定义模板",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "halfchecked",
                "type": "boolean",
                "default": "false",
                "description": "可选，半选状态",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "color",
                "type": "string",
                "default": "--",
                "description": "可选，复选框颜色",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "showAnimation",
                "type": "boolean",
                "default": "true",
                "description": "可选，控制是否显示动画",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "change",
                "type": [
                    "EventEmitter<boolean>"
                ],
                "description": "复选框的值改变时发出的事件，值是当前状态",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            }
        ],
        "directiveFlag": false,
        "description": "允许用户从一个数据集中选择多个选项。",
        "tmw": "1、在一组选项中进行多项选择。        2、单独使用可以表示在两个状态之间切换，需要和提交操作结合。",
        "cnName": "复选框"
    },
    {
        "name": "d-checkbox-group",
        "attrList": [
            {
                "name": "name",
                "type": "string",
                "default": "--",
                "description": "可选，表单域名，input原生name属性",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "direction",
                "type": "string",
                "default": "column",
                "description": "可选，显示方向",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "row",
                    "column"
                ],
                "isEvent": false
            },
            {
                "name": "isShowTitle",
                "type": "boolean",
                "default": "true",
                "description": "可选，是否显示title提示",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "options",
                "type": "Array<any>",
                "default": "[]",
                "description": "可选，复选框选项数组",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "filterKey",
                "type": "string",
                "default": "--",
                "description": "可选，options为对象数组时，标识选项唯一id的键值",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "labelTemplate",
                "type": "TemplateRef",
                "default": "--",
                "description": "可选，标签的自定义模板",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "halfchecked",
                "type": "boolean",
                "default": "false",
                "description": "可选，半选状态",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "color",
                "type": "string",
                "default": "--",
                "description": "可选，复选框颜色",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "showAnimation",
                "type": "boolean",
                "default": "true",
                "description": "可选，控制是否显示动画",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "change",
                "type": [
                    "EventEmitter<boolean>"
                ],
                "description": "checkbox值改变事件",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            }
        ],
        "directiveFlag": false
    },
    {
        "name": "d-button",
        "attrList": [
            {
                "name": "id",
                "type": "string",
                "default": "--",
                "description": "可选，buttonid",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "type",
                "type": "IButtonType",
                "default": "button",
                "description": "可选，类型button!!!submit!!!reset",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "bsStyle",
                "type": "IButtonStyle",
                "default": "primary",
                "description": "可选，风格primary!!!common!!!text!!!text-dark",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "bsSize",
                "type": "IButtonSize",
                "default": "md",
                "description": "可选，大小lg!!!md!!!sm!!!xs",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "bordered",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否有边框",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "icon",
                "type": "string",
                "default": "--",
                "description": "可选，自定义按钮图标",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "showLoading",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否显示加载提示",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "width",
                "type": "number",
                "default": "--",
                "description": "可选，button宽度",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "disabled",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否禁用button",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "autofocus",
                "type": "boolean",
                "default": "false",
                "description": "可选，按钮加载时是否自动获得焦点",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "btnClick",
                "type": [
                    "EventEmitter<any>"
                ],
                "description": "可选，button点击事件，解决IE浏览器disabled还会触发click,返回点击下后鼠标事件对象",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            }
        ],
        "directiveFlag": false,
        "description": "按钮用于开始一个即时操作，发起命令并获取结果，在特定场景中使用特定按钮形态",
        "tmw": "标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。",
        "cnName": "按钮"
    },
    {
        "name": "d-data-table",
        "attrList": [
            {
                "name": "checkable",
                "type": "boolean",
                "default": "--",
                "description": "可选，Datatable是否提供勾选行的功能",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "showExpandToggle",
                "type": "boolean",
                "default": "--",
                "description": "可选，是否提供显示扩展行的功能，为true则在配置了扩展行的行前面生成操作按钮",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "fixHeader",
                "type": "boolean",
                "default": "--",
                "description": "可选，是否固定表头（在表格超过容器最大高度时，表格可滚动时生效）",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "showSortIcon",
                "type": "boolean",
                "default": "true",
                "description": "可选，是否显示排序未激活图标，默认显示",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "dataSource",
                "type": "any[]",
                "default": "--",
                "description": "数据源，用于渲染表格数据",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "hideColumn",
                "type": "string[]",
                "default": "--",
                "description": "可选，用于隐藏列",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "lazy",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否懒加载数据",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "pageAllChecked",
                "type": "boolean",
                "default": "--",
                "description": "可选，选中当前页所有row",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "scrollable",
                "type": "boolean",
                "default": "--",
                "description": "可选，表格在超出容器时，是否可以通过滚动查看表格内容",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "maxWidth",
                "type": "stringpx",
                "default": "--",
                "description": "可选，限制表格最大宽度，默认撑满父容器",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "maxHeight",
                "type": "stringpx",
                "default": "--",
                "description": "可选，限制最大高度，默认",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "type",
                "type": "striped、borderless、",
                "default": "",
                "description": "【可选】表格类型，striped表示斑马纹类型，borderless表示表格内容没有分割线、默认普通表格",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "hover",
                "type": "boolean",
                "default": "true",
                "description": "可选，表格是否开启鼠标hover行高亮效果",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "cssClass",
                "type": "string",
                "default": "--",
                "description": "可选，表格自定义样式",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "tableWidth",
                "type": "string",
                "default": "100%",
                "description": "可选，表格宽度",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "onlyOneColumnSort",
                "type": "boolean",
                "default": "--",
                "description": "可选，是否限制多列排序的输出限制为一项",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "multiSort",
                "type": "SortEventArg[]",
                "default": "[]",
                "description": "可选，多列选择数组，用来指导那几列会被排序",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "~~resizeable~~",
                "type": "~~boolean~~",
                "default": "--",
                "description": "~~可选，是否可以拖拽调整列~~宽",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "detailTemplateRef",
                "type": "TemplateRef",
                "default": "--",
                "description": "可选，用来自定义详情页的模板",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "timeout",
                "type": "number",
                "default": "300",
                "description": "可选，同时绑定单击、双击事件时，用于区分点击的时间间隔,默认300ms，两个事件不同时使用可以指定为0",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "headerExpandConfig",
                "type": "TableExpandConfig",
                "default": "--",
                "description": "可选，配置header下的额外内容",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "checkableRelation",
                "type": "CheckableRelation",
                "default": "--",
                "description": "可选，配置树形表格的父子选中是否互相关联upward：选中子关联父downward：选中父关联子",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "loadChildrenTable",
                "type": "Promise",
                "default": "--",
                "description": "可选，展开子表格的回调，用于异步加载子表格",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "loadAllChildrenTable",
                "type": "Promise",
                "default": "--",
                "description": "可选，表头展开所有子表格的回调，用于异步加载所有子表格",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "virtualScroll",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否开启虚拟滚动",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "beforeCellEdit",
                "type": "Promise",
                "default": "--",
                "description": "可选，单元格编辑前的拦截方法,<br>resolve(extraOptions)将更新该列的extraOptions",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "colDraggable",
                "type": "boolean",
                "default": "false",
                "description": "可选，表格列是否可拖动排序",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "colDropFreezeTo",
                "type": "number",
                "default": "0",
                "description": "可选，表格列可拖动排序时配置前n列不可拖动",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "virtualItemSize",
                "type": "number",
                "default": "40",
                "description": "可选，虚拟滚动时每一列的高度",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "virtualMinBufferPx",
                "type": "number",
                "default": "80",
                "description": "可选，虚拟滚动时缓冲区最小像素高度，低于该值时将加载新结构",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "virtualMaxBufferPx",
                "type": "number",
                "default": "200",
                "description": "可选，虚拟滚动时缓冲区最大像素高度",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "columnAdjustStrategy",
                "type": "ColumnAdjustStrategy",
                "default": "ColumnAdjustStrategy.disable",
                "description": "可选，列宽调整策略，disable:列宽不可调整;mouseup:列宽在鼠标松开时变化;mousemove:列宽随着鼠标移动变化",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "multiSortChange",
                "type": [
                    "EventEmitter<SortEventArg[]>"
                ],
                "description": "多列选择Change事件，用来更新多列选择数组，返回单元格信息",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "cellClick",
                "type": [
                    "EventEmitter<CellSelectedEventArg>"
                ],
                "description": "表格单元格点击事件，返回单元格信息",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "cellDBClick",
                "type": [
                    "EventEmitter<CellSelectedEventArg>"
                ],
                "description": "表格单元格双击事件，返回单元格信息",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "rowClick",
                "type": [
                    "EventEmitter<RowSelectedEventArg>"
                ],
                "description": "表格行点击事件，返回行信息",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "rowDBClick",
                "type": [
                    "EventEmitter<RowSelectedEventArg>"
                ],
                "description": "表格行双击事件，返回行信息",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "detialToggle",
                "type": [
                    "EventEmitter<any>"
                ],
                "description": "扩展行展开收起事件，返回行状态信息",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "cellEditStart",
                "type": [
                    "EventEmitter<CellSelectedEventArg>"
                ],
                "description": "表格单元格开始编辑事件，返回单元格信息",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "cellEditEnd",
                "type": [
                    "EventEmitter<CellSelectedEventArg>"
                ],
                "description": "表格单元格结束编辑事件，返回单元格信息",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "rowCheckChange",
                "type": [
                    "EventEmitter<RowCheckChangeEventArg>"
                ],
                "description": "某行的勾选状态变化事件，返回单元格信息",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "checkAllChange",
                "type": [
                    "EventEmitter<boolean>"
                ],
                "description": "当前页码全勾选状态变化事件，返回true或false",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "resize",
                "type": [
                    "EventEmitter<ColumnResizeEventArg>"
                ],
                "description": "列宽变化事件，返回单元格信息",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "childrenTableClose",
                "type": [
                    "EventEmitter<any>"
                ],
                "description": "子列表关闭事件，返回列表行信息",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "allChildrenTableClose",
                "type": [
                    "EventEmitter<any>"
                ],
                "description": "全部子列表关闭事件",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            }
        ],
        "directiveFlag": false
    },
    {
        "name": "d-column",
        "attrList": [
            {
                "name": "editable",
                "type": "boolean",
                "default": "false",
                "description": "可选，在d-column上指定该列是否可编辑",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "tableLevel",
                "type": "number",
                "default": "0",
                "description": "可选，当前表格层级,在树形表格场景下自增长",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "~~fieldType~~",
                "type": "~~string~~",
                "default": "~~text~~",
                "description": "~~可选，单元格类型，支持text、select、treeSelect、input-number、datapicker、customized~~",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "maxWidth",
                "type": "stringpx",
                "default": "--",
                "description": "可选，最大宽度",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "minWidth",
                "type": "stringpx",
                "default": "--",
                "description": "可选，最小宽度",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "field",
                "type": "string",
                "default": "--",
                "description": "该列字段",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "header",
                "type": "string",
                "default": "--",
                "description": "该列表头文字",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "sortable",
                "type": "boolean",
                "default": "--",
                "description": "可选，是否可排序",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "editable",
                "type": "boolean",
                "default": "--",
                "description": "可选，是否可编辑",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "width",
                "type": "stringpx、%",
                "default": "--",
                "description": "宽度",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "nestedColumn",
                "type": "Boolean",
                "default": "false",
                "description": "可选，指定该列作为树形表格的操作列，即有展开\\折叠按钮和内容缩进表明层级关系",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "~~extraOptions.inputs~~",
                "type": "~~any{}~~",
                "default": "--",
                "description": "~~可选，主要配置单元格编辑时编辑组件的inputs,支持select、treeSelect、input-number、datapicker组件,如：extraOptions.treeData配置fieldType为treeSelect时的数据源~~",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "extraOptions.editableTip",
                "type": "btn、",
                "default": "--",
                "description": "可选，可编辑提示，btn表示鼠标悬浮单元格出现编辑按钮，未配置时鼠标悬浮单元格背景色变化",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "extraOptions.iconFoldTable",
                "type": "Template",
                "default": "--",
                "description": "可选，自动定义树形表格的折叠图标",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "extraOptions.iconUnFoldTable",
                "type": "Template",
                "default": "--",
                "description": "可选，自动定义树形表格的展开图标",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "extraOptions.showHeadTableToggler",
                "type": "boolean",
                "default": "false",
                "description": "可选，树形表格是否在header出现展开\\折叠图标",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "order",
                "type": "number",
                "default": "Number.MAX_VALUE",
                "description": "可选，列序号",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "filterable",
                "type": "boolean",
                "default": "--",
                "description": "可选，是否可筛选",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "filterList",
                "type": "array",
                "default": "--",
                "description": "传入需要操作的筛选列表，当filterable为true时必选",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "filterMultiple",
                "type": "boolean",
                "default": "true",
                "description": "可选，选择筛选列表为多选或单选,true为多选，false为单选",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "customFilterTemplate",
                "type": "TemplateRef",
                "default": "--",
                "description": "可选，表格过滤弹出框的自定义模板，参考DOC下‘自定义过滤弹出框’使用",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "beforeFilter",
                "type": "function、Promise、Observable",
                "default": "--",
                "description": "可选，表格过滤弹出框弹出前的回调函数，返回false可阻止弹框弹出",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "cellClass",
                "type": "string",
                "default": "--",
                "description": "该列单元格自定义class",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "fixedLeft",
                "type": "string",
                "default": "--",
                "description": "该列固定到左侧的距离，如：‘100px’",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "fixedRight",
                "type": "string",
                "default": "--",
                "description": "该列固定到右侧的距离，如：‘100px’",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "filterBoxWidth",
                "type": "any",
                "default": "--",
                "description": "过滤弹出框的宽度，如：‘300px’",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "filterBoxHeight",
                "type": "any",
                "default": "--",
                "description": "过滤弹出框的高度，如：‘400px’",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "filterChange",
                "type": [
                    "FilterConfig[]"
                ],
                "description": "确认筛选回调事件，返回选中的筛选数组",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            }
        ],
        "directiveFlag": false
    },
    {
        "name": "dDatepicker",
        "attrList": [
            {
                "name": "cssClass",
                "type": "string",
                "default": "--",
                "description": "可选，自定义class",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "locale",
                "type": "string",
                "default": "zh-cn",
                "description": "可选，时区",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "showTime",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否显示时分秒",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "yearNumber",
                "type": "number",
                "default": "12",
                "description": "可选，下拉年份显示数量",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "disabled",
                "type": "boolean",
                "default": "false",
                "description": "可选，禁用选择",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "direction",
                "type": "string",
                "default": "down",
                "description": "可选，日期弹出方向",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "up",
                    "down"
                ],
                "isEvent": false
            },
            {
                "name": "dateConverter",
                "type": "function",
                "default": "DefaultDateConverter",
                "description": "可选，日期格式化、解析函数",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "dateConfig",
                "type": "any",
                "default": "见下方介绍",
                "description": "可选，配置参数",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "dateFormat",
                "type": "any",
                "default": "y/MM/dd!!!y/MM/ddHH:mm",
                "description": "可选，传入格式化，根据是否showTime区别不同默认值",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "minDate",
                "type": "Date",
                "default": "newDate(01/01/190000:00:00)",
                "description": "可选，限制最小可选日期",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "maxDate",
                "type": "Date",
                "default": "newDate(11/31/209923:59:59)",
                "description": "可选，限制最大可选日期",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "autoOpen",
                "type": "boolean",
                "default": "false",
                "description": "可选，初始化是否直接展开",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "customViewTemplate",
                "type": "template",
                "default": "--",
                "description": "可选，自定义快捷设置日期或自定义操作区内容，用法见demo",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "selectedDateChange",
                "type": [
                    "EventEmitter<object>"
                ],
                "description": "可选，子项切换的时候会发出新激活的子项的数据",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            }
        ],
        "directiveFlag": true,
        "description": "输入或选择日期的控件。",
        "tmw": "当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。",
        "cnName": "日期选择器"
    },
    {
        "name": "dDateRangePicker",
        "attrList": [
            {
                "name": "cssClass",
                "type": "string",
                "default": "--",
                "description": "可选，自定义class",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "locale",
                "type": "string",
                "default": "zh-cn",
                "description": "可选，时区",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "showTime",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否显示时分秒",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "disabled",
                "type": "boolean",
                "default": "false",
                "description": "可选，禁用选择",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "dateConverter",
                "type": "function",
                "default": "DefaultDateConverter",
                "description": "可选，日期格式化、解析函数",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "dateConfig",
                "type": "any",
                "default": "见下方介绍",
                "description": "可选，配置参数",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "dateFormat",
                "type": "any",
                "default": "y/MM/dd!!!y/MM/ddHH:mm",
                "description": "可选，传入格式化",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "minDate",
                "type": "Date",
                "default": "newDate(01/01/190000:00:00)",
                "description": "可选，限制最小可选日期",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "maxDate",
                "type": "Date",
                "default": "newDate(11/31/209923:59:59)",
                "description": "可选，限制最大可选日期",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "splitter",
                "type": "string",
                "default": "-",
                "description": "可选，两日期间的分隔符",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "selectedRange",
                "type": "[Date,Date]",
                "default": "[null,null]",
                "description": "可选，时选择的日期",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "customViewTemplate",
                "type": "template",
                "default": "--",
                "description": "可选，自定义快捷设置日期或自定义操作区内容，用法见demo",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "selectedRangeChange",
                "type": [
                    "EventEmitter<object>"
                ],
                "description": "日期发生变化回调",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            }
        ],
        "directiveFlag": true
    },
    {
        "name": "dDraggable",
        "attrList": [
            {
                "name": "dragData",
                "type": "any",
                "default": "--",
                "description": "可选，转递给DropEvent事件的数据.",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "dragScope",
                "type": "string",
                "default": "default",
                "description": "可选，限制drop的位置，必须匹配对应的dropScope",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "string",
                    "Array<string>"
                ],
                "isEvent": false
            },
            {
                "name": "dragOverClass",
                "type": "string",
                "default": "--",
                "description": "可选，拖动时被拖动元素的css",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "dragHandle",
                "type": "string",
                "default": "--",
                "description": "可选，拖动句柄，css选择器，只有被选中的元素才能响应拖动事件",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "disabled",
                "type": "boolean",
                "default": "false",
                "description": "可选，控制当前元素是否可拖动false为可以，true为不可以",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "enableDragFollow",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否启用实体元素跟随（可以添加更多特效，如阴影等）",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "dragFollowOption",
                "type": "{appendToBody?:boolean}",
                "default": "--",
                "description": "可选，用于控制实体拖拽的一些配置",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "dragFollowOption.appendToBody",
                "type": "boolean",
                "default": "false",
                "description": "可选，用于控制实体拖拽的克隆元素插入的位置。默认false会插入到源元素父元素所有子的最后，设置为true会附着到。见说明1",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "originPlaceholder",
                "type": "{show?:boolean;tag?:string;style?:{cssProperties:string]:string};text?:string;removeDelay?:number;}",
                "default": "--",
                "description": "可选，设置源占位符号，用于被拖拽元素原始位置占位",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "originPlaceholder.show",
                "type": "boolean",
                "default": "true",
                "description": "可选，是否显示，默认originPlaceholder有Input则显示，特殊情况可以关闭",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "originPlaceholder.tag",
                "type": "string",
                "default": "div",
                "description": "可选，是否显示，默认originPlaceholder有Input则显示，特殊情况可以关闭",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "originPlaceholder.style",
                "type": "Object",
                "default": "--",
                "description": "可选，传style对象，key为样式属性，value为样式值",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "originPlaceholder.text",
                "type": "string",
                "default": "--",
                "description": "可选，placeholder内的文字",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "originPlaceholder.removeDelay",
                "type": "number",
                "default": "--",
                "description": "可选，用于希望源占位符在拖拽之后的延时里再删除，方便做动画，单位为ms毫秒",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "dragIdentity",
                "type": "any",
                "default": "--",
                "description": "可选，用于虚拟滚动的恢复，虚拟滚动过程中会删除元素（溢出画面）然后又重新生成来恢复元素（回到画面），需要唯一识别值来恢复原始事件拖拽事件监听和源占位符等",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "dragItemParentName",
                "type": "string",
                "default": "--",
                "description": "可选，选择器名，和dragItemChildrenName搭配用于拖拽截断看不见的列表内元素以提高性能，从dragItemParentName匹配的选择器里边查询匹配dragItemChildrenName的元素，通常是列表里查找条目，把超出可视范围的条目克隆的时候剔除",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "dragItemChildrenName",
                "type": "string",
                "default": "--",
                "description": "可选，选择器名，和dragItemParentName搭配用于拖拽截断看不见的列表内元素以提高性能，功能见dragItemParentName的描述",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "dragStartEvent",
                "type": [
                    "EventEmitter<DragEvent>"
                ],
                "description": "开始拖动的DragStart事件",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "dragEndEvent",
                "type": [
                    "EventEmitter<DragEvent>"
                ],
                "description": "拖动结束的DragEnd事件",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "dropEndEvent",
                "type": [
                    "EventEmitter<DragEvent>"
                ],
                "description": "放置结束的Drop事件",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "batchDragActiveEvent",
                "type": [
                    "EventEmitter<{el:Element,data:any}>"
                ],
                "description": "通过拖拽把元素加入了批量拖拽组，通知外部选中该元素",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            }
        ],
        "directiveFlag": true,
        "description": "dDraggable参数"
    },
    {
        "name": "batchDrag",
        "attrList": [],
        "directiveFlag": true,
        "description": "使用方法dDraggablebatchDrag"
    },
    {
        "name": "dDroppable",
        "attrList": [
            {
                "name": "dropScope",
                "type": "string",
                "default": "default",
                "description": "可选，限制drop的区域，对应dragScope",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "string",
                    "Array<string>"
                ],
                "isEvent": false
            },
            {
                "name": "dragOverClass",
                "type": "string",
                "default": "--",
                "description": "可选，dragover时drop元素上应用的css",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "placeholderStyle",
                "type": "Object",
                "default": "{backgroundColor:#6A98E3,opacity:.4}",
                "description": "可选，允许sort时，用于占位显示",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "placeholderText",
                "type": "string",
                "default": "",
                "description": "可选，允许sort时，用于占位显示内部的文字",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "allowDropOnItem",
                "type": "boolean",
                "default": "false",
                "description": "可选，允许sort时，用于允许拖动到元素上，方便树形结构的拖动可以成为元素的子节点",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "dragOverItemClass",
                "type": "string",
                "default": "--",
                "description": "可选，allowDropOnItem为true时，才有效，用于允许拖动到元素上后，被命中的元素增加样式",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "nestingTargetRect",
                "type": "{height?:number,width?:number}",
                "default": "--",
                "description": "可选，用于修正有内嵌列表后，父项高度被撑大，此处height，width为父项自己的高度（用于纵向拖动），宽度（用于横向拖动）",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "defaultDropPosition",
                "type": "string",
                "default": "closest",
                "description": "可选，设置拖拽到可放置区域但不在列表区域的放置位置，closest为就近放下，before为加到列表头部，after为加到列表尾部",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "closest",
                    "before",
                    "after"
                ],
                "isEvent": false
            },
            {
                "name": "dropSortCountSelector",
                "type": "string",
                "default": "--",
                "description": "可选，带有sortable的容器的情况下排序，计数的内容的选择器名称，可以用于过滤掉不应该被计数的元素",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "dropSortVirtualScrollOption",
                "type": "{totalLength?:number;startIndex?:number;}",
                "default": "--",
                "description": "可选，用于虚拟滚动列表中返回正确的dropIndex需要接收totalLength为列表的真实总长度，startIndex为当前排序区域显示的第一个dom的在列表内的index值",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "dragEnterEvent",
                "type": [
                    "EventEmitter<DragEvent>"
                ],
                "description": "drag元素进入的dragenter事件",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "dragOverEvent",
                "type": [
                    "EventEmitter<DragEvent>"
                ],
                "description": "drag元素在drop区域上的dragover事件",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "dragLeaveEvent",
                "type": [
                    "EventEmitter<DragEvent>"
                ],
                "description": "drag元素离开的dragleave事件",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "dropEvent",
                "type": [
                    "EventEmitter<DropEvent>(见下文定义)"
                ],
                "description": "放置一个元素,接收的事件，其中nativeEvent表示原生的drop事件，其他见定义注释",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            }
        ],
        "directiveFlag": true,
        "description": "dDroppable参数"
    },
    {
        "name": "dSortable",
        "attrList": [
            {
                "name": "dSortDirection",
                "type": "string",
                "default": "v",
                "description": "v垂直排序,h水平排序",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "v",
                    "h"
                ],
                "isEvent": false
            },
            {
                "name": "dSortableZMode",
                "type": "boolean",
                "default": "false",
                "description": "是否是z模式折回排序，见说明1",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            }
        ],
        "directiveFlag": true,
        "description": "指定需要参与排序的Dom父容器（因为drop只是限定可拖拽区域，具体渲染由使用者控制）"
    },
    {
        "name": "dDropScrollEnhanced",
        "attrList": [
            {
                "name": "direction",
                "type": "string",
                "default": "v",
                "description": "滚动方向，垂直滚动v,水平滚动h",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "DropScrollSpeed即v",
                    "h"
                ],
                "isEvent": false
            },
            {
                "name": "responseEdgeWidth",
                "type": "string",
                "default": "100px",
                "description": "响应自动滚动边缘宽度,函数的情况传入的为列表容器同个方向相对宽度",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "string",
                    "((total:number)=>string)"
                ],
                "isEvent": false
            },
            {
                "name": "speedFn",
                "type": "DropScrollSpeedFunction",
                "default": "内置函数",
                "description": "速率函数，见备注",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "minSpeed",
                "type": "DropScrollSpeed即number",
                "default": "50",
                "description": "响应最小速度，函数计算小于这个速度的时候，以最小速度为准",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "maxSpeed",
                "type": "DropScrollSpeed即number",
                "default": "1000",
                "description": "响应最大速度，函数计算大于这个速度的时候，以最大速度为准",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "viewOffset",
                "type": "{forward?:DropScrollAreaOffset;backward?:DropScrollAreaOffset;}",
                "default": "--",
                "description": "设置拖拽区域的偏移，用于某些位置修正",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "dropScrollScope",
                "type": "string",
                "default": "--",
                "description": "允许触发滚动scope，不配置为默认接收所有scope，配置情况下，draggable的dragScope和dropScrollScope匹配得上才能触发滚动",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "string",
                    "Array<string>"
                ],
                "isEvent": false
            },
            {
                "name": "backSpaceDroppable",
                "type": "boolean",
                "default": "true",
                "description": "是否允许在滚动面板上同时触发放置到滚动面板的下边的具体可以放置元素，默认为true，设置为false则不能边滚动边放置",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            }
        ],
        "directiveFlag": true
    },
    {
        "name": "dDropScrollEnhancedSide",
        "attrList": [],
        "directiveFlag": true,
        "description": "如果需要同时两个方向都有滚动条，则需要使用dDropScrollEnhanced的同时使用dDropScrollEnhancedSide，参数列表同dDropScrollEnhanced指令，唯一不同是direction，如果为`'v'`则side附属指令的实际方向为`'h'`。"
    },
    {
        "name": "dDragSync",
        "attrList": [
            {
                "name": "dDragSync",
                "type": "string",
                "default": "",
                "description": "必选，拖同步的组名，为空或者空字符串的时候无效，不与其他内容同步",
                "attrType": "ATTR",
                "isNecessary": true,
                "valueSet": [],
                "isEvent": false
            }
        ],
        "directiveFlag": true
    },
    {
        "name": "dDropSortSync",
        "attrList": [
            {
                "name": "dDropSortSync",
                "type": "string",
                "default": "",
                "description": "必选，放同步的组名，为空或者空字符串的时候无效，不与其他内容同步",
                "attrType": "ATTR",
                "isNecessary": true,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "dDropSyncDirection",
                "type": "string",
                "default": "v",
                "description": "可选，与dSortable的方向正交",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "v",
                    "h"
                ],
                "isEvent": false
            }
        ],
        "directiveFlag": true
    },
    {
        "name": "dDragPreview",
        "attrList": [
            {
                "name": "dDragPreview",
                "type": "TemplateRef<any>",
                "default": "--",
                "description": "必选，预览的模板引用",
                "attrType": "ATTR",
                "isNecessary": true,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "dragPreviewData",
                "type": "any",
                "default": "--",
                "description": "可选，自定义数据，将由模板变量获得",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "dragPreviewOptions",
                "type": "{skipBatchPreview:boolean}",
                "default": "--",
                "description": "可选，预览选项",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "dragPreviewOptions.skipBatchPreview",
                "type": "boolean",
                "default": "false",
                "description": "可选，预览选项,是否跳过批量预览的样式处理。建议自行处理批量拖拽预览模板的可以跳过",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            }
        ],
        "directiveFlag": true
    },
    {
        "name": "dDropDown",
        "attrList": [
            {
                "name": "isOpen",
                "type": "boolean",
                "default": "false",
                "description": "可选，可以显示指定dropdown是否打开",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "disabled",
                "type": "boolean",
                "default": "false",
                "description": "可选，设置为true禁用dropdown",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "trigger",
                "type": "string",
                "default": "click",
                "description": "可选，dropdown触发方式",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "click",
                    "hover"
                ],
                "isEvent": false
            },
            {
                "name": "closeScope",
                "type": "string",
                "default": "all",
                "description": "可选，点击关闭区域，blank点击非菜单空白才关闭,all点击菜单内外都关闭，none菜单内外均不关闭仅下拉按键可以关闭",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "all",
                    "blank",
                    "none"
                ],
                "isEvent": false
            },
            {
                "name": "closeOnMouseLeaveMenu",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否进入菜单后离开菜单的时候关闭菜单",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "toggleEvent",
                "type": [
                    "EventEmitter<boolean>"
                ],
                "description": "dropdown菜单展开和收起的布尔值，true表示将要展开，false表示将要关闭",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            }
        ],
        "directiveFlag": true,
        "description": "按向下弹出的列表。",
        "tmw": "当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。",
        "cnName": "下拉菜单"
    },
    {
        "name": "dDropDownToggle",
        "attrList": [
            {
                "name": "toggleOnFocus",
                "type": "boolean",
                "default": "false",
                "description": "可选，通过Tab聚焦的时候自动展开",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "autoFocus",
                "type": "boolean",
                "default": "false",
                "description": "可选，实例化后自动聚焦",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            }
        ],
        "directiveFlag": true,
        "description": "开/关切换组件",
        "tmw": "当两种状态需要来回切换控制时，比如启用/禁用。",
        "cnName": "开关"
    },
    {
        "name": "dForm",
        "attrList": [
            {
                "name": "layout",
                "type": "string",
                "default": "horizontal",
                "description": "可选，设置表单的排列方式",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "horizontal",
                    "vertical",
                    "columns"
                ],
                "isEvent": false
            },
            {
                "name": "labelSize",
                "type": "string",
                "default": "",
                "description": "可选，设置label的占宽，未设置默认为100px,sm对应80px,lg对应150px",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "sm",
                    "",
                    "lg"
                ],
                "isEvent": false
            }
        ],
        "directiveFlag": true,
        "description": "表单具备数据收集、数据校验、数据提交功能，在业务中被大量使用，并且布局方式很多，包括单列、多列、向导式、Tab页式。",
        "tmw": "表单应用广泛，应用在过滤、创建、编辑等场景。",
        "cnName": "表单"
    },
    {
        "name": "d-form-label",
        "attrList": [
            {
                "name": "required",
                "type": "boolean",
                "default": "false",
                "description": "可选，表单选项是否必填",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "hasHelp",
                "type": "boolean",
                "default": "false",
                "description": "可选，表单项是否需要帮助指引",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "helpTips",
                "type": "string",
                "default": "",
                "description": "可选，表单项帮助指引提示内容，需配合hasHelp使用",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            }
        ],
        "directiveFlag": false
    },
    {
        "name": "d-fullscreen",
        "attrList": [
            {
                "name": "fullscreen-target",
                "type": "HTMLElement",
                "default": "--",
                "description": "必选，内容投影，设置需要全屏的元素",
                "attrType": "ATTR",
                "isNecessary": true,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "fullscreen-launch",
                "type": "HTMLElement",
                "default": "--",
                "description": "必选，内容投影，设置触发进入全屏的按钮",
                "attrType": "ATTR",
                "isNecessary": true,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "mode",
                "type": "string",
                "default": "immersive",
                "description": "可选，设置全屏模式",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "immersive",
                    "normal"
                ],
                "isEvent": false
            },
            {
                "name": "zIndex",
                "type": "number",
                "default": "10",
                "description": "可选，设置全屏层级",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "fullscreenLaunch",
                "type": [
                    "EventEmitter<boolean>"
                ],
                "description": "可选，全屏之后的回调",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            }
        ],
        "directiveFlag": false,
        "description": "全屏组件。",
        "tmw": "当用户需要将某一区域进行全屏展示时。",
        "cnName": "全屏"
    },
    {
        "name": "dImagePreview",
        "attrList": [
            {
                "name": "customSub",
                "type": "Subject<HTMLElement>",
                "default": "--",
                "description": "可选，customsub触发next时，打开预览",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "disableDefault",
                "type": "boolean",
                "default": "false",
                "description": "可选，关闭默认点击触发图片预览方式",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            }
        ],
        "directiveFlag": true,
        "description": "Image容器元素上使用`dImagePreview`指令"
    },
    {
        "name": "dLoading",
        "attrList": [
            {
                "name": "loading",
                "type": "LoadingType",
                "default": "--",
                "description": "可选，控制loading状态",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "message",
                "type": "string",
                "default": "--",
                "description": "可选，loading时的提示信息",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "loadingTemplateRef",
                "type": "TemplateRef<any>",
                "default": "--",
                "description": "可选，自定义loading模板",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "backdrop",
                "type": "boolean",
                "default": "--",
                "description": "可选，loading时是否显示遮罩",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "showLoading",
                "type": "boolean",
                "default": "--",
                "description": "可选，手动启动和关闭loading状态,与loading参数不能同时使用",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "positionType",
                "type": "string",
                "default": "relative",
                "description": "可选，指定dLoading宿主元素的定位类型,取值与cssposition属性一致",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "view",
                "type": "{top?:string,left?:string}",
                "default": "{top:50%,left:50%}",
                "description": "可选，调整loading的显示位置，相对于宿主元素的顶部距离与左侧距离",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            }
        ],
        "directiveFlag": true,
        "description": "提示用户页面正在执行指令，需要等待。",
        "tmw": "当执行指令时间较长（需要数秒以上）时，向用户展示正在执行的状态。",
        "cnName": "加载提示"
    },
    {
        "name": "d-input-number",
        "attrList": [
            {
                "name": "max",
                "type": "number",
                "default": "100",
                "description": "可选，最大值",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "min",
                "type": "number",
                "default": "0",
                "description": "可选，最小值",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "step",
                "type": "number",
                "default": "1",
                "description": "可选，步进值",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "disabled",
                "type": "boolean",
                "default": "false",
                "description": "可选，禁止输入态开关",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "size",
                "type": "string",
                "default": "",
                "description": "可选，组件大小",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "",
                    "sm",
                    "lg"
                ],
                "isEvent": false
            },
            {
                "name": "ngModel",
                "type": "number",
                "default": "--",
                "description": "可选，组件的值",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "decimalLimit",
                "type": "number",
                "default": "--",
                "description": "可选，限制小数点后的位数",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "autoFocus",
                "type": "boolean",
                "default": "false",
                "description": "可选，自动获取焦点",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "allowEmpty",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否允许值为空",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "placeholder",
                "type": "string",
                "default": "--",
                "description": "可选，要显示的placeholder",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "maxLength",
                "type": "number",
                "default": "0",
                "description": "可选，限制最大输入的长度，0为不限制",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "reg",
                "type": "string",
                "default": "--",
                "description": "用于限制输入的正则或正则字符串",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "RegExp",
                    "string"
                ],
                "isEvent": false
            },
            {
                "name": "whileValueChanging",
                "type": [
                    "EventEmitter<number>"
                ],
                "description": "用户使用键盘输入时发出的事件",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "afterValueChanged",
                "type": [
                    "EventEmitter<number>"
                ],
                "description": "组件值变化时发出的事件，使用ngModelChange来监听值的变化",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            }
        ],
        "directiveFlag": false,
        "description": "通过鼠标或键盘，输入范围内的数值",
        "tmw": "当需要获取标准数值时。",
        "cnName": "数字输入框"
    },
    {
        "name": "d-pagination",
        "attrList": [
            {
                "name": "pageSize",
                "type": "number",
                "default": "10",
                "description": "可选，每页显示最大条目数量",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "total",
                "type": "number",
                "default": "0",
                "description": "可选，显示的总条目数",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "pageSizeOptions",
                "type": "number[]",
                "default": "10",
                "description": "可选，分页每页最大条目数量的下拉框的数据源，默认有四种选择5,10,20,50",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "pageIndex",
                "type": "number",
                "default": "1",
                "description": "可选，初始化页码",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "maxItems",
                "type": "number",
                "default": "10",
                "description": "可选，分页最多显示几个按钮",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "preLink",
                "type": "string",
                "default": "--",
                "description": "可选，pre按钮文字,默认设置为左箭头图标",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "nextLink",
                "type": "string",
                "default": "--",
                "description": "可选，next按钮文字,默认设置为右箭头图标",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "size",
                "type": "number",
                "default": "",
                "description": "可选，分页组件尺寸，有三种选择lg,,sm,分别代表大，中，小",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "canJumpPage",
                "type": "boolean",
                "default": "true",
                "description": "可选，是否显示分页输入跳转",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "canChangePageSize",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否显示用于选择更改分页每页最大条目数量的下拉框",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "canViewTotal",
                "type": "boolean",
                "default": "true",
                "description": "可选，是否显示总条目",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "totalItemText",
                "type": "string",
                "default": "所有条目",
                "description": "可选，总条目文本",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "goToText",
                "type": "string",
                "default": "跳至",
                "description": "可选，跳转文本",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "showJumpButton",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否显示跳转按钮",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "showTruePageIndex",
                "type": "boolean",
                "default": "false",
                "description": "可选，页码超出分页范围时候也显示当前页码的开关",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "selectDirection",
                "type": "string",
                "default": "auto",
                "description": "可选，下拉菜单默认方向,有三种选择auto,up,down",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "lite",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否切换为极简模式",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "showPageSelector",
                "type": "boolean",
                "default": "true",
                "description": "可选，极简模式下是否显示页码下拉",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "haveConfigMenu",
                "type": "boolean",
                "default": "false",
                "description": "可选，极简模式下是否显示配置",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "pageIndexChange",
                "type": [
                    "EventEmitter<number>"
                ],
                "description": "可选，页码变化的回调,返回当前页码值",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "pageSizeChange",
                "type": [
                    "EventEmitter<number>"
                ],
                "description": "可选，每页最大条目数量变更时的回调，返回当前每页显示条目数",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            }
        ],
        "directiveFlag": false,
        "description": "采用分页的形式分隔长列表，每次只加载一个页面。",
        "tmw": "当加载/渲染所有数据将花费很多时间时，可以切换页码浏览数据。",
        "cnName": "分页"
    },
    {
        "name": "d-panel",
        "attrList": [
            {
                "name": "type",
                "type": "string",
                "default": "default",
                "description": "可选，面板的类型",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "heading",
                "type": "string",
                "default": "--",
                "description": "可选，面板的头部标题",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "cssClass",
                "type": "string",
                "default": "--",
                "description": "可选，自定义class名",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "isCollapsed",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否展开",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "toggle",
                "type": [
                    "EventEmitter<boolean>"
                ],
                "description": "可选，点击面板时的回调，返回当前面板的展开状态",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            }
        ],
        "directiveFlag": false,
        "description": "内容面板，用于内容分组。",
        "tmw": "当页面内容需要进行分组显示时使用，一般包含头部、内容区域、底部是哪个部分。",
        "cnName": "面板"
    },
    {
        "name": "d-editable-select",
        "attrList": [
            {
                "name": "ngModel",
                "type": "any",
                "default": "--",
                "description": "可选，绑定选中对象，可双向绑定",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "ngModelChange",
                "type": "EventEmitter",
                "default": "--",
                "description": "可选，仅支持事件绑定，用于处理选中对象发生变化",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "source",
                "type": "any[]",
                "default": "--",
                "description": "必选，菜单的条目",
                "attrType": "ATTR",
                "isNecessary": true,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "disabled",
                "type": "boolean",
                "default": "false",
                "description": "可选，值为true禁用下拉框",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "disabledKey",
                "type": "string",
                "default": "--",
                "description": "可选，设置禁用选项的Key值",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "placeholder",
                "type": "string",
                "default": "",
                "description": "可选，没有选中项的时候提示文字",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "itemTemplate",
                "type": "TemplateRef",
                "default": "--",
                "description": "可选，下拉菜单条目的模板",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "noResultItemTemplate",
                "type": "TemplateRef",
                "default": "--",
                "description": "可选，下拉菜单条目搜索后没有结果的模板",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "maxHeight",
                "type": "number",
                "default": "--",
                "description": "可选，下拉菜单的最大高度",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "searchFn",
                "type": "Function",
                "default": "(term:string)=>Observable<any[]>",
                "description": "可选，自定义搜索函数",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "enableLazyLoad",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否允许懒加载",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "loadMore",
                "type": [
                    "EventEmitter<any>"
                ],
                "description": "懒加载触发事件，配合enableLazyLoad使用,使用$event.loadFinish()关闭loading状态，其中$event为AutoCompletePopupComponent的实例",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            }
        ],
        "directiveFlag": false,
        "description": "下拉选择框。",
        "tmw": "用户可以从多个选项中选择一项或几项；仅支持用户在下拉选项中选择和搜索系统提供的选项，不支持输入。",
        "cnName": "下拉选择框"
    },
    {
        "name": "d-popover",
        "attrList": [
            {
                "name": "content",
                "type": "string",
                "default": "--",
                "description": "必选，弹出框的显示内容或模板引用",
                "attrType": "ATTR",
                "isNecessary": true,
                "valueSet": [
                    "string",
                    "HTMLElement",
                    "TemplateRef"
                ],
                "isEvent": false
            },
            {
                "name": "visible",
                "type": "boolean",
                "default": "false",
                "description": "可选，弹框的初始化弹出状态",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "trigger",
                "type": "string",
                "default": "click",
                "description": "弹框触发方式",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "hover",
                    "click"
                ],
                "isEvent": false
            },
            {
                "name": "controlled",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否通过trigger方式触发弹框",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "position",
                "type": "string",
                "default": "top",
                "description": "可选，内容弹出方向",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "top",
                    "right",
                    "bottom",
                    "left"
                ],
                "isEvent": false
            },
            {
                "name": "popType",
                "type": "string",
                "default": "default",
                "description": "可选，弹出框类型，样式不同",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "success",
                    "error",
                    "warning",
                    "info",
                    "default"
                ],
                "isEvent": false
            },
            {
                "name": "showAnimate",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否显示动画",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "appendToBody",
                "type": "boolean",
                "default": "true",
                "description": "可选，默认为true，仅当popover绑定元素外层宽高不够时，overflow为hidden，popover的弹出框不会被一并隐藏掉。",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "zIndex",
                "type": "number",
                "default": "1060",
                "description": "可选，z-index值，用于手动控制层高",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "scrollElement",
                "type": "Element",
                "default": "window",
                "description": "可选，在这里默认是window,只有当页面的滚动不在window上且appendToBody的属性为true时候才需要传值",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "hoverToContent",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否允许鼠标从宿主移动到内容上，仅需要在trigger为hover的时候设置",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            }
        ],
        "directiveFlag": false,
        "description": "简单的文字提示气泡框。popover用来通知用户非关键性问题或提示某控件处于某特殊情况。",
        "tmw": "单击控件则显示提示，单击空白处提示消失，气泡浮层不承载复杂文本和操作。",
        "cnName": "悬浮提示"
    },
    {
        "name": "d-progress",
        "attrList": [
            {
                "name": "percentage",
                "type": "number",
                "default": "0",
                "description": "可选，进度条的值最大为100",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "percentageText",
                "type": "string",
                "default": "--",
                "description": "可选，进度条当前值的文字说明比如：30%!!!4/5",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "barbgcolor",
                "type": "string",
                "default": "#5170ff",
                "description": "可选，进度条的颜色显示，默认为天蓝色",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "height",
                "type": "string",
                "default": "20px",
                "description": "可选，进度条的高度值，默认值为20px",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "isCircle",
                "type": "boolean",
                "default": "false",
                "description": "可选，显示进度条是否为圈形",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "strokeWidth",
                "type": "number",
                "default": "6",
                "description": "可选，设置圈形进度条宽度，单位是进度条与画布宽度的百分比",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            }
        ],
        "directiveFlag": false,
        "description": "进度条，用来展示操作的当前进度。",
        "tmw": "1、当操作需要较长的时间时，向用户展示操作进度。              2、当操作需要打断现有界面或后台运行，需要较长时间时。              3、当需要显示一个操作完成的百分比或已完成的步骤/总步骤时。",
        "cnName": "进度条"
    },
    {
        "name": "d-quadrant-diagram",
        "attrList": [
            {
                "name": "view",
                "type": "IViewConfigs",
                "default": "{height:900,width:950}",
                "description": "可选，指定象限图所占宽高，由于需要计算坐标轴及象限区域，值必须为具体数字，若需要根据容器大小变更，建议使用document相关方法计算出实际值后传入",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "axisConfigs",
                "type": "IAxisConfigs",
                "default": "参考下方DEFAULT_AXIS_CONFIGS",
                "description": "可选，设置坐标轴相关属性，具体配置参数意义参考下方IAxisConfigs",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "showQuadrants",
                "type": "boolean",
                "default": "true",
                "description": "可选，是否显示四个象限区域",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "quadrantConfigs",
                "type": "Array<IQuadrantConfigs>",
                "default": "参考下方DEFAULT_QUADRANT_CONFIGS",
                "description": "可选，设置四个象限区域的相关属性，数组中数据的顺序分别代表第一象限、第二象限、第三象限、第四象限，具体配置参数意义参考下方IQuadrantConfigs",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "labelData",
                "type": "Array<ILabelDataConfigs>",
                "default": "[]",
                "description": "可选，指定警告提示的样式",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "currentLabelSize",
                "type": "labelSize",
                "default": "large",
                "description": "可选，设置当前的标签尺寸，small表现为点，normal表现为含有标题的标签，large表现为含有标题和进度条的标签",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "smallLabelTemplate",
                "type": "TemplateRef<any>",
                "default": "--",
                "description": "可选，自定义currentLabelSize=small时的标签样式",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "normalLabelTemplate",
                "type": "TemplateRef<any>",
                "default": "--",
                "description": "可选，自定义currentLabelSize=normal时的标签样式",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "largeLabelTemplate",
                "type": "TemplateRef<any>",
                "default": "--",
                "description": "可选，自定义currentLabelSize=large时的标签样式",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "diagramId",
                "type": "string",
                "default": "devui-quadrant-diagram-+当前组件顺序",
                "description": "可选，为象限图组件添加id属性，用于区分不同实例",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "dropScope",
                "type": "string",
                "default": "default",
                "description": "可选，限制drop的位置，必须匹配对应的dragScope，详情参考DragDropAPI",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "dropEvent",
                "type": [
                    "EventEmitter<any>"
                ],
                "description": "可选，拖拽放置时的触发事件，返回值{dragData:e.dragData,xAxisValue:xAxisValue,yAxisValue:yAxisValue},分别对应当前标签数据，标签放置的x值，标签放置的y值",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "zoomOutEvent",
                "type": [
                    "EventEmitter<any>"
                ],
                "description": "可选，点击缩小按钮的触发事件，返回值为当前的标签尺寸",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "zoomInEvent",
                "type": [
                    "EventEmitter<any>"
                ],
                "description": "可选，点击放大按钮的触发事件，返回值为当前的标签尺寸",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "fullScreenEvent",
                "type": [
                    "EventEmitter<any>"
                ],
                "description": "可选，点击全屏按钮的触发事件，返回值为当前的是否是全屏状态",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            }
        ],
        "directiveFlag": false,
        "description": "象限图，根据需求对事务进行区域划分与价值排序",
        "tmw": "可用于管理事务的优先级",
        "cnName": "象限图"
    },
    {
        "name": "d-rate",
        "attrList": [
            {
                "name": "read",
                "type": "boolean",
                "default": "false",
                "description": "可选，设置是否为只读模式，只读模式无法交互",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "count",
                "type": "number",
                "default": "5",
                "description": "可选，设置总等级数",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "type",
                "type": "string",
                "default": "--",
                "description": "可选，设置当前评分的类型，不同类型对应不同颜色",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "success",
                    "warning",
                    "error"
                ],
                "isEvent": false
            },
            {
                "name": "color",
                "type": "string",
                "default": "--",
                "description": "可选，星星颜色",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "icon",
                "type": "string",
                "default": "--",
                "description": "可选，评分图标的样式，只支持devUI图标库中所有图标",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "character",
                "type": "string",
                "default": "--",
                "description": "可选，评分图标的样式，icon与character只能设置其中一个",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            }
        ],
        "directiveFlag": false,
        "description": "等级评估",
        "tmw": "用户对一个产品进行评分时可以使用，有两种模式，只读模式和动态评分模式",
        "cnName": "等级评估"
    },
    {
        "name": "d-radio-group",
        "attrList": [
            {
                "name": "name",
                "type": "string",
                "default": "--",
                "description": "必选，单选项名称",
                "attrType": "ATTR",
                "isNecessary": true,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "values",
                "type": "array",
                "default": "--",
                "description": "必选，单选数据组",
                "attrType": "ATTR",
                "isNecessary": true,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "disabled",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否禁用该单选项组",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "change",
                "type": [
                    "EventEmitter<any>"
                ],
                "description": "单选项值改变时触发，返回选中的值",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            }
        ],
        "directiveFlag": false
    },
    {
        "name": "d-radio",
        "attrList": [
            {
                "name": "name",
                "type": "string",
                "default": "--",
                "description": "必选，单选项名称",
                "attrType": "ATTR",
                "isNecessary": true,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "value",
                "type": "string",
                "default": "--",
                "description": "必选，单选项值",
                "attrType": "ATTR",
                "isNecessary": true,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "disabled",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否禁用该单选项",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "ngModelChange",
                "type": [
                    "EventEmitter<any>"
                ],
                "description": "Form事件，单选项值改变时触发，返回选中的值",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            }
        ],
        "directiveFlag": false,
        "description": "单选框。",
        "tmw": "用户要从一个数据集中选择单个选项，且能并排查看所有可选项，选项数量在2~7之间，建议使用单选按钮。",
        "cnName": "单选框"
    },
    {
        "name": "d-slider",
        "attrList": [
            {
                "name": "min",
                "type": "number",
                "default": "0",
                "description": "可选，滑动输入条的最小值",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "max",
                "type": "number",
                "default": "100",
                "description": "可选，滑动输入条的最大值",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "step",
                "type": "number",
                "default": "1",
                "description": "可选，滑动输入条的步长，取值必须大于等于0，且必须可被(max-min)整除",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "disabled",
                "type": "boolean",
                "default": "false",
                "description": "可选，值为true时禁止用户输入",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "tipsRenderer",
                "type": "string",
                "default": "(value)=>String(value)",
                "description": "可选，渲染Popover内容的函数，传入null时不显示Popover",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "function",
                    "null"
                ],
                "isEvent": false
            }
        ],
        "directiveFlag": false,
        "description": "滑动输入条可以更直观地展示当前值和可选范围。",
        "tmw": "当用户需要在数值区间内进行选择时使用。",
        "cnName": "滑动输入条"
    },
    {
        "name": "d-select",
        "attrList": [
            {
                "name": "options",
                "type": "array",
                "default": "[]",
                "description": "可选,和searchFn互斥，两者必须有且只有一个。下拉选项资源stringobject",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "isSearch",
                "type": "boolean",
                "default": "false",
                "description": "可选,是否支持过滤搜索",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "scrollHight",
                "type": "string",
                "default": "300px",
                "description": "可选,下拉菜单高度,建议使用px作为高度单位",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "hightLightItemClass",
                "type": "string",
                "default": "bg-grey",
                "description": "可选,下拉高亮css",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "filterKey",
                "type": "string",
                "default": "--",
                "description": "当传入资源options类型为object时,必选,针对传入资源options的每项对应字段做过滤操作",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "multiple",
                "type": "boolean",
                "default": "false",
                "description": "可选,是否支持多选",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "isSelectAll",
                "type": "boolean",
                "default": "false",
                "description": "可选,是否显示全选",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "readonly",
                "type": "boolean",
                "default": "true",
                "description": "可选,是否可以输入",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "size",
                "type": "string",
                "default": "",
                "description": "可选,下拉选框尺寸,有三种选择lg,,sm",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "disabled",
                "type": "boolean",
                "default": "false",
                "description": "可选,是否禁用下拉框",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "placeholder",
                "type": "string",
                "default": "PleaseInputkeywords",
                "description": "可选,输入框的placeholder",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "searchFn",
                "type": "function",
                "default": "--",
                "description": "可选,搜索函数,当需要自定义下拉选择过滤规则时可以使用",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "valueParser",
                "type": "function",
                "default": "--",
                "description": "可选,决定选择框文字如何显示,默认显示filterKey字段或者本身的值",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "formatter",
                "type": "function",
                "default": "--",
                "description": "可选,决定下拉框每项文字如何显示,默认显示filterKey字段或者本身的值",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "direction",
                "type": "up,down,auto",
                "default": "",
                "description": "可选,下拉选框尺寸,有三种选择up,down,auto",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "overview",
                "type": "string",
                "default": "border",
                "description": "可选,决定选择框样式显示,默认有边框border,underlined",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "enableLazyLoad",
                "type": "boolean",
                "default": "false",
                "description": "可选,是否支持数据懒加载，用于滚动到底部时动态请求数据",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "extraConfig",
                "type": "object",
                "default": "N/A",
                "description": "可选,可输入配置项参考示例",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "extraConfig.labelization",
                "type": "object",
                "default": "N/A",
                "description": "可选,标签化多选结果的配置项,参考示例",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "extraConfig.labelization.enable",
                "type": "boolean",
                "default": "false",
                "description": "可选下的必填参数,是否启用标签化,使用必须置为true,参考示例",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "extraConfig.labelization.overflow",
                "type": "string",
                "default": "",
                "description": "可选,多个标签超出容器时候的预处理行为,值为normal!!!scroll-y!!!multiple-line!!!string对应默认隐藏,纵向滚动、自动变多行和自定义类",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "extraConfig.labelization.containnerMaxHeight",
                "type": "string",
                "default": "1.8em",
                "description": "可选,限制容器最高高度。多行模式下默认不限制高度,单行模式下默认为1.8em",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "extraConfig.labelization.labelMaxWidth",
                "type": "string",
                "default": "100%",
                "description": "可选下,限制标签宽度,默认值为行宽的100%",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "extraConfig.selectedItemWithTemplate",
                "type": "object",
                "default": "N/A",
                "description": "可选,在单选情况下,显示选项使用了template的情况下,顶部选中的内容是否也以template展示,参考示例",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "extraConfig.selectedItemWithTemplate.enable",
                "type": "boolean",
                "default": "--",
                "description": "可选下的必填参数,是否启用选中项使用模板,使用必须置为true,参考示例",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "optionDisabledKey",
                "type": "string",
                "default": "",
                "description": "可选,禁用单个选项;当传入资源options类型为objectObj,比如设置为disabled,则当对象的disable属性为true时,该选项将禁用;当设置为时不禁用单个选项",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "optionImmutableKey",
                "type": "string",
                "default": "",
                "description": "可选,禁用单个选项;当传入资源options类型为objectObj,比如设置为immutable,则当对象的immutable属性为true时,该选项将禁被禁止变更;当设置为时不生效",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "noResultItemTemplate",
                "type": "TemplateRef",
                "default": "--",
                "description": "可选,没有匹配项的展示结果",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "keepMultipleOrder",
                "type": "string",
                "default": "user-select",
                "description": "可选,user-select!!!origin,配置多选的时候是否维持原数组排序还是用户选择的顺序排序,默认是用户顺序",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "customViewTemplate",
                "type": "TemplateRef",
                "default": "--",
                "description": "可选,支持自定义区域显示内容定制,可以使用choose来选择某项,choose需要传两个必填参数,第一个为选择的选项,第二个为选项在列表的index值,event参数选填,若不填请自行处理冒泡,详见demo",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "customViewDirection",
                "type": "string",
                "default": "bottom",
                "description": "customViewTemplate所处的相对下拉列表的位置",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "bottom",
                    "right",
                    "left"
                ],
                "isEvent": false
            },
            {
                "name": "appendToBody",
                "type": "boolean",
                "default": "false",
                "description": "可选,true会被附加到body",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "appendToBodyDirections",
                "type": "string",
                "default": "[rightDown,leftDown,rightUp,leftUp]",
                "description": "可选，方向数组优先采用数组里靠前的位置，AppendToBodyDirection和ConnectedPosition请参考dropdown",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "Array<AppendToBodyDirection",
                    "ConnectedPosition>"
                ],
                "isEvent": false
            },
            {
                "name": "width",
                "type": "number",
                "default": "--",
                "description": "可选,搭配appendToBody使用，设置下拉宽度",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "virtualScroll",
                "type": "boolean",
                "default": "false",
                "description": "可选,是否虚拟滚动，大数据量场景试用",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "allowClear",
                "type": "boolean",
                "default": "false",
                "description": "可选,配置是否允许清空选值，仅单选场景适用",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "inputItemTemplate",
                "type": "TemplateRef",
                "default": "--",
                "description": "可选参数,自定义模板，若传入，会忽略ContentChild",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "valueChange",
                "type": [
                    "string",
                    [
                        "EventEmitter<Array<any>",
                        "any>"
                    ]
                ],
                "description": "可选,输出函数,当选中某个选项项后,将会调用此函数,参数为当前选择项的值",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "toggleChange",
                "type": [
                    "EventEmitter<boolean>"
                ],
                "description": "可选,输出函数,下拉打开关闭toggle事件",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "loadMore",
                "type": [
                    "EventEmitter<{instance:Selectcomponent,event:ScrollEvent}>"
                ],
                "description": "懒加载触发事件，配合enableLazyLoad使用，使用$event.instance.loadFinish()结束本次加载,event为懒加载监听的滚动事件，参考dLazyLoad",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            }
        ],
        "directiveFlag": false,
        "description": "下拉选择框。",
        "tmw": "用户可以从多个选项中选择一项或几项；仅支持用户在下拉选项中选择和搜索系统提供的选项，不支持输入。",
        "cnName": "下拉选择框"
    },
    {
        "name": "d-splitter",
        "attrList": [
            {
                "name": "orientation",
                "type": "string",
                "default": "horizontal",
                "description": "可选，指定Splitter分割方向,可选值vertical!!!horizontal",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "vertical",
                    "horizontal"
                ],
                "isEvent": false
            },
            {
                "name": "splitBarSize",
                "type": "string",
                "default": "2px",
                "description": "可选，分隔条大小，默认2px",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "disabledBarSize",
                "type": "string",
                "default": "1px",
                "description": "可选，pane设置不可调整宽度时生效",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            }
        ],
        "directiveFlag": false,
        "description": "Splitter将页面拆分为多个部分，并允许用户控制页面布局。",
        "tmw": "需要动态调整不同页面布局区域大小的时候选择使用。",
        "cnName": "分割器"
    },
    {
        "name": "d-splitter-pane",
        "attrList": [
            {
                "name": "size",
                "type": "string",
                "default": "--",
                "description": "可选，指定pane宽度，设置像素值或者百分比",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "minSize",
                "type": "string",
                "default": "--",
                "description": "可选，指定pane最小宽度，设置像素值或者百分比",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "maxSize",
                "type": "string",
                "default": "--",
                "description": "可选，指定pane最大宽度，设置像素值或者百分比",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "resizable",
                "type": "boolean",
                "default": "true",
                "description": "可选，指定pane是否可调整大小，会影响相邻pane",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "collapsible",
                "type": "boolean",
                "default": "false",
                "description": "可选，指定pane是否可折叠收起",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "collapsed",
                "type": "boolean",
                "default": "false",
                "description": "可选，指定pane初始化是否收起，配合collapsible使用",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "collapseDirection",
                "type": "string",
                "default": "both",
                "description": "可选，指定非边缘pane收起方向，配合collapsible使用",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "before",
                    "after",
                    "both"
                ],
                "isEvent": false
            },
            {
                "name": "sizeChange",
                "type": [
                    "EventEmitter<string>"
                ],
                "description": "大小变动时，返回改变后的值,像素值或者百分比",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "collapsedChange",
                "type": [
                    "EventEmitter<boolean>"
                ],
                "description": "折叠和展开时，返回当前pane是否折叠",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            }
        ],
        "directiveFlag": false
    },
    {
        "name": "d-status",
        "attrList": [
            {
                "name": "type",
                "type": "string",
                "default": "invalid",
                "description": "必选，表示类型",
                "attrType": "ATTR",
                "isNecessary": true,
                "valueSet": [
                    "invalid",
                    "running",
                    "waiting",
                    "important",
                    "less-important",
                    "error"
                ],
                "isEvent": false
            }
        ],
        "directiveFlag": false,
        "description": "状态传达了组件或者页面可互动元素交互的结果。",
        "tmw": "表示一个任务的执行结果时使用。",
        "cnName": "状态"
    },
    {
        "name": "d-sticky",
        "attrList": [
            {
                "name": "zIndex",
                "type": "number",
                "default": "--",
                "description": "可选，指定包裹层的z-index，用于浮动的时候控制z轴的叠放",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "container",
                "type": "HTMLElement",
                "default": "父容器",
                "description": "可选，触发的容器，可不同于父容器",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "view",
                "type": "{top?:number,bottom?:number}",
                "default": "{top:0,bottom:0}",
                "description": "可选，用于可视区域的调整，比如顶部有固定位置的头部等，数值对应被遮挡的顶部或底部的高度",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "scrollTarget",
                "type": "HTMLElement",
                "default": "document.documentElement",
                "description": "可选，设置要发生滚动的容器，一般为滚动条所在容器，为主页面的滚动条时候可以不设置",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "statusChange",
                "type": [
                    "EventEmitter<StickyStatus>"
                ],
                "description": "可选，状态变化的时候触发，值为变化后的状态值，normal表示处于正常状态，follow表示处于跟着页面滚动固定位置状态，stay表示横向滚动时候的跟随固定状态,remain表示被容器托起处于容器底部跟着容器走的状态",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            }
        ],
        "directiveFlag": false,
        "description": "页面内容固定在可视区域。",
        "tmw": "当用户在滚动屏幕时，需要某个区域内容在段落或者浏览器可视区域可见时。",
        "cnName": "便贴"
    },
    {
        "name": "d-search",
        "attrList": [
            {
                "name": "size",
                "type": "string",
                "default": "",
                "description": "可选，搜索框尺寸，有三种选择lg、、sm",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "placeholder",
                "type": "string",
                "default": "PleaseInputkeywords",
                "description": "可选，输入框的placeholder",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "maxLength",
                "type": "number",
                "default": "Number.MAX_SAFE_INTEGER",
                "description": "可选，输入框的max-length",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "delay",
                "type": "number",
                "default": "300",
                "description": "可选，debounceTime的延迟",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "disabled",
                "type": "boolean",
                "default": "false",
                "description": "可选，输入框是否可用",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "isKeyupSearch",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否支持输入值立即出发searchFn",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "searchFn",
                "type": [
                    "string"
                ],
                "description": "回车或点击搜索按钮触发的回调函数，返回文本框输入的值",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            }
        ],
        "directiveFlag": false,
        "description": "搜索框。",
        "tmw": "当用户需要在数据集中搜索所需数据时，输入所需数据的内容（或部分内容），返回所有匹配内容的搜索结果。",
        "cnName": "搜索框"
    },
    {
        "name": "d-tabs",
        "attrList": [
            {
                "name": "type",
                "type": "string",
                "default": "tabs",
                "description": "可选，选项卡组的类型",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "tabs",
                    "pills",
                    "options"
                ],
                "isEvent": false
            },
            {
                "name": "showContent",
                "type": "boolean",
                "default": "true",
                "description": "可选，是否显示选项卡对应的内容",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "activeTab",
                "type": "string",
                "default": "--",
                "description": "可选，当前激活的选项卡，值为选项卡的id",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "cssClass",
                "type": "string",
                "default": "--",
                "description": "可选，自定义选项卡组的css类",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "customWidth",
                "type": "string",
                "default": "--",
                "description": "可选，自定义选项卡的宽度",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "vertical",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否垂直显示",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "beforeChange",
                "type": "string",
                "default": "--",
                "description": "tab切换前的回调函数,返回boolean类型，返回false可以阻止tab的切换",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "function",
                    "Promise",
                    "Observable"
                ],
                "isEvent": false
            },
            {
                "name": "activeTabChange",
                "type": [
                    "string",
                    [
                        "EventEmitter<number",
                        "string>"
                    ]
                ],
                "description": "可选，选项卡切换的回调函数，返回当前激活选项卡的id",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            }
        ],
        "directiveFlag": false,
        "description": "选项卡切换组件。",
        "tmw": "用户需要通过平级的区域将大块内容进行收纳和展现，保持界面整洁。",
        "cnName": "选项卡切换"
    },
    {
        "name": "d-tab",
        "attrList": [
            {
                "name": "tabId",
                "type": "string",
                "default": "--",
                "description": "可选，选项卡的id值,需要设置为唯一值",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "id",
                "type": "string",
                "default": "--",
                "description": "可选，一般和tabId一致",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "number",
                    "string"
                ],
                "isEvent": false
            },
            {
                "name": "title",
                "type": "string",
                "default": "--",
                "description": "可选，选项卡的标题",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "disabled",
                "type": "boolean",
                "default": "false",
                "description": "可选，选项卡是否不可用",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            }
        ],
        "directiveFlag": false
    },
    {
        "name": "d-tag",
        "attrList": [
            {
                "name": "tag",
                "type": "string",
                "default": "--",
                "description": "必选，记录输入的标签和选择的标签",
                "attrType": "ATTR",
                "isNecessary": true,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "titleContent",
                "type": "string",
                "default": "--",
                "description": "可选，设置鼠标悬浮时title的显示内容",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "labelStyle",
                "type": "string",
                "default": "",
                "description": "可选，标签的样式可使用blue-w98、green-w98、yellow-w98、orange-w98、pink-w98、purple-w98、turquoise-w98,olivine-w98,或可传入自定义class",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "deletable",
                "type": "boolean",
                "default": "false",
                "description": "可选，设置标签是否可删除",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "customViewTemplate",
                "type": "TemplateRef",
                "default": "--",
                "description": "可选，自定义标签模板",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "tagDelete",
                "type": [
                    "EventEmitter<{tag:tag}>"
                ],
                "description": "删除tag的时候触发的事件",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            }
        ],
        "directiveFlag": false
    },
    {
        "name": "d-tags",
        "attrList": [
            {
                "name": "tags",
                "type": "Array",
                "default": "[]",
                "description": "必选，记录输入的标签和选择的标签",
                "attrType": "ATTR",
                "isNecessary": true,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "displayProperty",
                "type": "string",
                "default": "",
                "description": "可选，设置属性名，使得标签名为该属性对应的值",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "deletable",
                "type": "boolean",
                "default": "false",
                "description": "可选，设置标签是否可删除",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "titleProperty",
                "type": "string",
                "default": "",
                "description": "可选，设置属性名，鼠标悬浮时title显示的值",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "tagDelete",
                "type": [
                    "EventEmitter<{tag:tag,index:index}>"
                ],
                "description": "删除某个tag的时候触发的事件",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            }
        ],
        "directiveFlag": false,
        "description": "标签展示组件。",
        "tmw": "用户需要展示多个标签时。",
        "cnName": "标签"
    },
    {
        "name": "dText",
        "attrList": [
            {
                "name": "id",
                "type": "string",
                "default": "--",
                "description": "可选，文本框id",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "placeholder",
                "type": "string",
                "default": "--",
                "description": "可选，文本框placeholder",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "disabled",
                "type": "boolean",
                "default": "false",
                "description": "可选，文本框是否被禁用",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "error",
                "type": "boolean",
                "default": "false",
                "description": "可选，文本框是否出现输入错误",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "resize",
                "type": "string",
                "default": "none",
                "description": "可选，文本框是否可调整大小，可选项：不可调整，水平调整，垂直调整，自由调整，默认继承",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "none",
                    "vertical",
                    "horizontal",
                    "both",
                    "inherit"
                ],
                "isEvent": false
            },
            {
                "name": "id",
                "type": "string",
                "default": "--",
                "description": "可选，文本框id",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "placeholder",
                "type": "string",
                "default": "--",
                "description": "可选，文本框placeholder",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "disabled",
                "type": "boolean",
                "default": "false",
                "description": "可选，文本框是否被禁用",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "error",
                "type": "boolean",
                "default": "false",
                "description": "可选，文本框是否出现输入错误",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            }
        ],
        "directiveFlag": true
    },
    {
        "name": "d-tags-input",
        "attrList": [
            {
                "name": "tags",
                "type": "Array",
                "default": "[]",
                "description": "必选，记录输入的标签和选择的标签列表",
                "attrType": "ATTR",
                "isNecessary": true,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "displayProperty",
                "type": "string",
                "default": "name",
                "description": "可数，列表项使用的属性名",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "placeholder",
                "type": "boolean",
                "default": "",
                "description": "可选，输入框的placeholder",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "minLength",
                "type": "number",
                "default": "3",
                "description": "可选，输入标签内容的最小长度",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "maxLength",
                "type": "number",
                "default": "Number.MAX_SAFE_INTEGER",
                "description": "可选，输入标签内容的最大长度",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "maxTags",
                "type": "number",
                "default": "Number.MAX_SAFE_INTEGER",
                "description": "可选，可输入标签的最大个数",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "caseSensitivity",
                "type": "boolean",
                "default": "false",
                "description": "可选，大小写敏感，默认忽略大小写",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "spellcheck",
                "type": "boolean",
                "default": "true",
                "description": "可选，input输入框的spellcheck",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "isAddBySpace",
                "type": "boolean",
                "default": "true",
                "description": "可选，是否支持空格键输入标签",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "suggestionList",
                "type": "Array",
                "default": "[]",
                "description": "可选，下拉选项，默认可选择的标签列表",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "checkBeforeAdd",
                "type": "string",
                "default": "无",
                "description": "可选，自定义校验函数，类型为(newTag:string)=>boolean或者Promise<boolean>或者Observable<boolean>",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "Function",
                    "Promise",
                    "Observable"
                ],
                "isEvent": false
            },
            {
                "name": "disabled",
                "type": "boolean",
                "default": "false",
                "description": "可选，disabled灰化状态",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "valueChange",
                "type": [
                    "EventEmitter<any>"
                ],
                "description": "当选中某个选项项后，将会调用此函数，参数为当前选择项的值。如果需要获取所有选择状态的值，请使用(ngModelChange)",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            }
        ],
        "directiveFlag": false,
        "description": "用于输入多个标签。",
        "tmw": "用户需要输入多个标签时。",
        "cnName": "标签输入"
    },
    {
        "name": "d-toast",
        "attrList": [
            {
                "name": "closeEvent",
                "type": [
                    "EventEmitter<any>"
                ],
                "description": "可选，返回被手动关闭或自动消失的单条消息内容",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "valueChange",
                "type": [
                    "EventEmitter<Message[]>"
                ],
                "description": "可选，返回变化（手动关闭或自动消失）后剩余消息内容数组，Message对象定义见下文",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            }
        ],
        "directiveFlag": false,
        "description": "全局信息提示组件。",
        "tmw": "当需要向用户全局展示提示信息时使用，显示数秒后消失。",
        "cnName": "全局通知"
    },
    {
        "name": "dTooltip",
        "attrList": [
            {
                "name": "content",
                "type": "string",
                "default": "--",
                "description": "必选，tooltip显示内容",
                "attrType": "ATTR",
                "isNecessary": true,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "position",
                "type": "string",
                "default": "bottom",
                "description": "可选，tooltip显示位置",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "left",
                    "right",
                    "top",
                    "bottom"
                ],
                "isEvent": false
            },
            {
                "name": "showAnimate",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否显示划出动画",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            }
        ],
        "directiveFlag": true,
        "description": "文字提示组件",
        "tmw": "用户鼠标移动到文字上，需要进一步的提示时使用。",
        "cnName": "提示"
    },
    {
        "name": "d-toggle",
        "attrList": [
            {
                "name": "size",
                "type": "string",
                "default": "small",
                "description": "可选，开关尺寸大小",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "small",
                    "medium",
                    "large"
                ],
                "isEvent": false
            },
            {
                "name": "color",
                "type": "string",
                "default": "--",
                "description": "可选，开关打开时的自定义颜色",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "checked",
                "type": "boolean",
                "default": "false",
                "description": "可选，开关是否打开，默认关闭",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "[ngModel]",
                "type": "boolean",
                "default": "false",
                "description": "可选，指定当前是否打开，可双向绑定",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "disabled",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否禁用开关",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "beforeChange",
                "type": "string",
                "default": "--",
                "description": "可选，开关变化前的回调函数,返回boolean类型，返回false可以阻止开关的变化",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "Function",
                    "Promise",
                    "Observable"
                ],
                "isEvent": false
            },
            {
                "name": "change",
                "type": [
                    "EventEmitter<boolean>"
                ],
                "description": "可选,开关打开返回true,关闭返回false",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            }
        ],
        "directiveFlag": false,
        "description": "开/关切换组件",
        "tmw": "当两种状态需要来回切换控制时，比如启用/禁用。",
        "cnName": "开关"
    },
    {
        "name": "d-transfer",
        "attrList": [
            {
                "name": "sourceOption",
                "type": "array",
                "default": "[]",
                "description": "可选参数，穿梭框源数据",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "targetOption",
                "type": "array",
                "default": "[]",
                "description": "可选参数，穿梭框目标数据",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "titles",
                "type": "array",
                "default": "[]",
                "description": "可选参数，穿梭框标题",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "height",
                "type": "string",
                "default": "320px",
                "description": "可选参数，穿梭框高度",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "isSearch",
                "type": "number",
                "default": "false",
                "description": "可选参数，是否可以搜索",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "isSourceDroppable",
                "type": "boolean",
                "default": "false",
                "description": "可选参数，源是否可以拖拽",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "isTargetDroppable",
                "type": "boolean",
                "default": "false",
                "description": "可选参数，目标是否可以拖拽",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "disabled",
                "type": "boolean",
                "default": "false",
                "description": "可选参数穿梭框禁止使用",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "transferToSource",
                "type": [
                    "返回穿梭框源和目标数据"
                ],
                "description": "当点击右穿梭时，返回源和目标数据；",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "transferToTarget",
                "type": [
                    "返回穿梭框源和目标数据"
                ],
                "description": "当点击左穿梭时，返回源和目标数据；",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            }
        ],
        "directiveFlag": false,
        "description": "双栏穿梭选择框",
        "tmw": "需要在多个可选项中进行多选时。穿梭选择框可用只管的方式在两栏中移动数据，完成选择行为。其中左边一栏为source，右边一栏为target。最终返回两栏的数据，提供给开发者使用",
        "cnName": "穿梭框"
    },
    {
        "name": "dTreeSelect",
        "attrList": [
            {
                "name": "placeholder",
                "type": "string",
                "default": "--",
                "description": "可选，占位字符串",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "disabled",
                "type": "boolean",
                "default": "false",
                "description": "可选，禁止输入态",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "expandTree",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否自动展开树",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "multiple",
                "type": "boolean",
                "default": "false",
                "description": "可选，多选开关",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "treeNodeIdKey",
                "type": "string",
                "default": "id",
                "description": "可选，id键值名",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "treeNodeChildrenKey",
                "type": "string",
                "default": "children",
                "description": "可选，children子节点键值名",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "disabledKey",
                "type": "string",
                "default": "disabled",
                "description": "可选，disabled节点禁选键值名",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "leafOnly",
                "type": "boolean",
                "default": "false",
                "description": "可选，仅叶节点可选开关",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "delimiter",
                "type": "string",
                "default": ",",
                "description": "可选，选中结果分隔符（用于多选）",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "iconParentOpen",
                "type": "string",
                "default": "DefaultIcons.iconParentOpen",
                "description": "可选，树节点打开时图标",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "iconParentClose",
                "type": "string",
                "default": "DefaultIcons.iconParentClose",
                "description": "可选，树节点关闭时图标",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "iconLeaf",
                "type": "string",
                "default": "DefaultIcons.iconLeaf",
                "description": "可选，节点图标",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "closeOnNodeSelected",
                "type": "boolean",
                "default": "true",
                "description": "可选，选中节点时关闭下拉框的开关（仅用于单选）",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "width",
                "type": "string",
                "default": "--",
                "description": "可选，下拉框宽度",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "auto",
                    "~px",
                    "~%"
                ],
                "isEvent": false
            },
            {
                "name": "searchable",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否可搜索树",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "readyEvent",
                "type": "function",
                "default": "(treeSelect:TreeSelectComponent)=>{}",
                "description": "可选，当组件初始化完成时可调用的钩子函数",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "appendTo",
                "type": "string",
                "default": "--",
                "description": "可选，将下拉框附着到输入值的DOM选择器节点中，值为空时下拉框在此组件内",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "allowUnselect",
                "type": "boolean",
                "default": "true",
                "description": "可选，是否允许单选模式下反选已选中的项目",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "iconTemplatePosition",
                "type": "string",
                "default": "before-checkbox",
                "description": "可选，自定义template的位置",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [
                    "before-checkbox",
                    "after-checkbox"
                ],
                "isEvent": false
            },
            {
                "name": "allowClear",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否允许单选模式下点击输入框上的清除按钮来清空已选中的项目。allowUnselect必须为true，否则将破坏体验一致性规则。",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "valueChanged",
                "type": [
                    "EventEmitter"
                ],
                "description": "选择节点时触发的变化，参数为数组或对象",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            }
        ],
        "directiveFlag": true,
        "description": "下拉选择框。",
        "tmw": "用户可以从多个选项中选择一项或几项；仅支持用户在下拉选项中选择和搜索系统提供的选项，不支持输入。",
        "cnName": "下拉选择框"
    },
    {
        "name": "d-single-upload",
        "attrList": [
            {
                "name": "fileOptions",
                "type": "IFileOptions，参考下方options",
                "default": "--",
                "description": "必选，待上传文件配置",
                "attrType": "ATTR",
                "isNecessary": true,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "filePath",
                "type": "string",
                "default": "--",
                "description": "必选，文件路径",
                "attrType": "ATTR",
                "isNecessary": true,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "uploadOptions",
                "type": "IUploadOptions，参考下方options",
                "default": "--",
                "description": "必选，上传配置",
                "attrType": "ATTR",
                "isNecessary": true,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "autoUpload",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否自动上传",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "placeholderText",
                "type": "string",
                "default": "选择文件",
                "description": "可选，上传输入框中的Placeholder文字",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "confirmText",
                "type": "string",
                "default": "确定",
                "description": "可选，错误信息弹出框中确认按钮文字",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "preloadFilesRef",
                "type": "TemplateRef<any>",
                "default": "--",
                "description": "可选，用于创建自定义已选择文件列表模板",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "uploadText",
                "type": "string",
                "default": "上传",
                "description": "可选，上传按钮文字",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "uploadedFiles",
                "type": "Array<Object>",
                "default": "[]",
                "description": "可选，获取已上传的文件列表",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "uploadedFilesRef",
                "type": "TemplateRef<any>",
                "default": "--",
                "description": "可选，用于创建自定义已上传文件列表模板",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "withoutBtn",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否舍弃按钮",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "enableDrop",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否支持拖拽",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "beforeUpload",
                "type": [
                    "boolean、Promise<boolean>、Observable<boolean>"
                ],
                "description": "上传前的回调，通过返回trueorfalse,控制文件是否上传,参数为文件信息及上传配置",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "fileOver",
                "type": [
                    "EventEmitter<any>"
                ],
                "description": "支持拖拽上传时，文件移动到可拖放区域触发事件,可拖动的元素移出放置目标时返回false，元素正在拖动到放置目标时返回true",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "fileDrop",
                "type": [
                    "EventEmitter<any>"
                ],
                "description": "支持拖拽上传时，当前拖拽的文件列表回调，单文件上传默认返回第一个文件",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "successEvent",
                "type": [
                    "EventEmitter<any>"
                ],
                "description": "上传成功时的回调函数,返回文件及xhr的响应信息",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "errorEvent",
                "type": [
                    "EventEmitter<any>"
                ],
                "description": "上传错误时的回调函数，返回上传失败的错误信息",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "deleteUploadedFileEvent",
                "type": [
                    "EventEmitter<any>"
                ],
                "description": "删除上传文件的回调函数，返回删除文件的路径信息",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            }
        ],
        "directiveFlag": false,
        "description": "文件上传组件",
        "tmw": "当需要将文件上传到后端服务器时。",
        "cnName": "上传"
    },
    {
        "name": "d-multiple-upload",
        "attrList": [
            {
                "name": "fileOptions",
                "type": "IFileOptions，参考下方options",
                "default": "--",
                "description": "必选，待上传文件配置",
                "attrType": "ATTR",
                "isNecessary": true,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "filePath",
                "type": "string",
                "default": "--",
                "description": "必选，文件路径",
                "attrType": "ATTR",
                "isNecessary": true,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "uploadOptions",
                "type": "IUploadOptions，参考下方options",
                "default": "--",
                "description": "必选，上传配置",
                "attrType": "ATTR",
                "isNecessary": true,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "autoUpload",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否自动上传",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "placeholderText",
                "type": "string",
                "default": "选择多个文件",
                "description": "可选，上传输入框中的Placeholder文字",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "confirmText",
                "type": "string",
                "default": "确定",
                "description": "可选，错误信息弹出框中确认按钮文字",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "preloadFilesRef",
                "type": "TemplateRef<any>",
                "default": "--",
                "description": "可选，用于创建自定义已选择文件列表模板",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "uploadText",
                "type": "string",
                "default": "上传",
                "description": "可选，上传按钮文字",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "uploadedFiles",
                "type": "Array<Object>",
                "default": "[]",
                "description": "可选，获取已上传的文件列表",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "uploadedFilesRef",
                "type": "TemplateRef<any>",
                "default": "--",
                "description": "可选，用于创建自定义已上传文件列表模版",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "withoutBtn",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否舍弃按钮",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "enableDrop",
                "type": "boolean",
                "default": "false",
                "description": "可选，是否支持拖拽",
                "attrType": "ATTR",
                "isNecessary": false,
                "valueSet": [],
                "isEvent": false
            },
            {
                "name": "beforeUpload",
                "type": [
                    "boolean、Promise<boolean>、Observable<boolean>"
                ],
                "description": "上传前的回调，通过返回trueorfalse,控制文件是否上传,参数为文件信息及上传配置",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "fileOver",
                "type": [
                    "EventEmitter<any>"
                ],
                "description": "支持拖拽上传时，文件移动到可拖放区域触发事件,可拖动的元素移出放置目标时返回false，元素正在拖动到放置目标时返回true",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "fileDrop",
                "type": [
                    "EventEmitter<any>"
                ],
                "description": "支持拖拽上传时，当前拖拽的文件列表回调，单文件上传默认返回第一个文件",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "successEvent",
                "type": [
                    "EventEmitter<any>"
                ],
                "description": "上传成功时的回调函数,返回文件及xhr的响应信息",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "errorEvent",
                "type": [
                    "EventEmitter<any>"
                ],
                "description": "上传错误时的回调函数，返回上传失败的错误信息",
                "attrType": "Event",
                "isNecessary": false,
                "hasvalueSet": true,
                "isEvent": true
            },
            {
                "name": "deleteUploadedFileEvent",
                "type": [
                    "EventEmitter<any>"
                ],
                "description": "删除上传文件的回调函数，返回删除文件的路径信息",
                "attrType": "Event",
                "isNecessary":false,"hasvalueSet":true,"isEvent":true}],"directiveFlag":false,"description":"文件上传组件","tmw":"当需要将文件上传到后端服务器时。","cnName":"上传"}];
module.exports.devuiInfo = devuiInfo;