# 为什么选择我们 ?

如果你正在做后台框架选型或调研，相信这篇介绍能帮助你快速了解 Fantastic-admin 的亮点，以及与同类型框架对比，又具备哪些优势。

## 长期且稳定

<script setup>
const from = '2020/10/17'
const time = new Date().getTime() / 1000 - new Date(from).getTime() / 1000
const day = parseInt(time / 60 / 60 / 24)
</script>

Fantastic-admin 自 {{ from }} 正式对外发布，截止到今天为止，已持续维护 **{{ day }}** 天。

2021 年底做过一次不精确统计，全网约有数千名开发者，应用在数百个项目/产品中。

## 简单易用

开箱即用，是我们一直在努力的方向。

事实也证明 Fantastic-admin 足够易于上手，在使用 Fantastic-admin 的开发者中，**非前端开发者占据了约有一半的人数**，它们大部分为后端 PHP/Java/.NET/GO 开发者，以及少部分学生人群。

## 颜值在线

在保证简单易用的基础上，Fantastic-admin 参考了国内外数十款中后台，吸收其优点并进行了融合与统一，细到每一处动画效果的执行时间都经过大量反复的调试。

## 风格可配置

提供明亮/暗黑两种模式，以及 6 款颜色主题风格，5 款导航栏模式，2 款导航栏填充风格，4 款导航栏激活风格和 4 款页宽模式。

通过布局与主题组合搭配，可实现**数百种**不同风格的界面。

<ZoomImg src="/intro-1.png" />

## 丰富的导航设置

对比同类产品只有几种基础的设置项，Fantastic-admin 提供了**十余种**设置项，可以设置导航的各种展示形态，包括但不限于标题、图标、徽标、外链、权限、缓存等。

详细可阅读《[路由（导航）- 导航配置](router#导航配置)》。

## 导航分组

对比同类产品直接把一级路由当做主导航的方案，Fantastic-admin 则将主导航与路由进行了解耦，实现了**真正意义上的主导航**（即导航分组），这种模式的扩展性和维护性会更强。

## 页面缓存最佳方案

多级路由的页面缓存曾经是在 Vue 后台开发者圈内比较热门的话题，作者也曾参与其中，是第一批提出**将多级路由转成二级路由**方案的人，并在 Fantastic-admin 实践并应用，从而彻底解决多级路由在各种场景下的缓存问题。

## 基于文件系统的路由

摆脱传统 Vue 开发手动配置路由的过程，Fantastic-admin 支持**通过文件的目录结构，自动生成路由配置**，大大提高开发效率。

## 为什么不是它们？

:::tip
以下为作者个人主观见解。
:::

:::details vue-element-admin
vue-element-admin 可以说是后台框架圈里的老大哥，但很遗憾作者已经不再维护，社区里的问题也堆积如山，导致框架年久失修。

虽然也有很多人基于 vue-element-admin 开发了很多魔改的版本，但质量参差不齐，不建议新手用这个做项目开发，更适合用来学习使用。

目前仅提供 Vue2 版本。
:::

:::details D2 Admin
D2 Admin 虽然只提供了一种布局，但它在演示代码里提供了很多超出框架本身的功能，给实际项目开发有一个很好的参考，对于喜欢这种布局风格的人来说是个不错的选择。

目前 Vue3 版本还未成形，提供简单的 demo 预览，并且与 D2 Admin 界面上有较大差异，似乎是一款全新的产品。

目前仅提供 Vue2 版本。
:::

:::details vue-vben-admin
vue-vben-admin 是我个人认为一款很不错的后台框架，其丰富的特性与 Fantastic-admin 不相上下，但很多使用过的开发者反馈上手成本有点高。

技术栈采用了与 Fantastic-admin 一样的 vue3 + vite 组合，区别在于 vue-vben-admin 使用的 UI 框架是 ant-design-vue ，个人觉得 ant-design-vue 的开发体验一言难尽，没有 element-plus 使用顺手。

目前仅提供 Vue3 版本。
:::

:::details vue-admin-better
vue-admin-better 是一款功能也足够丰富的后台框架，主题配色是一大亮点，整体风格令人很舒服。

确定是免费版本功能单一，且开发文档需要付费才能查阅。

目前 Vue2 和 Vue3 版本均有提供，但技术栈稍微有点落后。
:::

:::details vue-antd-admin
vue-antd-admin 是一款中规中矩的后台框架，没有太多亮点功能，可能已经不再维护。

UI 框架也是使用了 ant-design-vue ，对于想使用 vue-vben-admin 却又担心上手成本太高的人来说，是个不错的选择。

目前仅提供 Vue2 版本。
:::

:::details vue-manage-system
vue-manage-system 是一款轻量级的后台框架，虽然没有提供开发文档，但对于有一定能力的开发者可以通过阅读源码直接上手。

缺点是没有提供模版源码，使用前需要手动删除示例代码。

目前 Vue2 和 Vue3 版本均有提供。
:::

:::details Naive Admin
UI 框架使用了 Naive UI ，技术栈也相对较新，同时也还提供了其它 UI 框架的版本，是个比较重量级的产品。

缺点是亮点功能不多，且每个版本均需要付费，价格和 Fantastic-admin 专业版相比没有优势。

目前仅提供 Vue3 版本。
:::