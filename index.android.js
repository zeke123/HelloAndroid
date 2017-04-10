/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*//查看8081端口占用情况：lsof -i tcp:8081
 //去除占用：kill pid（具体数字）
 //ES2015的特性：import、from、class、extends、() =>等


 import React, {Component} from 'react';
 import {AppRegistry, Text} from 'react-native';

 //Component:组件

 class HelloAndroid extends Component {
 render() {
 return (
 //JSL-一种在javaScript中嵌入xml结构的语法
 //</Text> 组件用来显示文本
 <Text>
 Hello world!
 </Text>
 );
 }
 }

 // 注意，这里用引号括起来的'HelloAndroid'必须和你init创建的项目名一致
 // 用AppRegistry 进行注册操作

 AppRegistry.registerComponent('HelloAndroid', () => HelloAndroid);*/




// props属性
// 组件在创建的时候可以使用各种参数来进行定制，用于定制的这些参数称为props属性


/*
 import React, {Component} from 'react';
 //Image 图片组件
 import {AppRegistry, Image} from 'react-native';

 class HelloAndroid extends Component {
 render() {
 let pic = {
 uri: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1491530848&di=bc5d0756283f3c8197530e76840fedef&src=http://pic.58pic.com/58pic/15/14/95/03858PICmDk_1024.jpg'
 };
 return (
 //图片的 source属性来指定图片的地址
 //图片的 style属性来指定图片的宽和高
 <Image source={pic} style={{width: 380, height: 200}}/>
 );
 }
 }
 AppRegistry.registerComponent('HelloAndroid', () => HelloAndroid);*/


/*import React, {Component} from 'react';
 import {AppRegistry, Text, View} from 'react-native';

 //View组件常用作其他组件的容器，来帮助控制布局和样式。

 //自定义组件 MyComponent
 class MyComponent extends Component {
 render() {
 return (
 <Text> {this.props.name}!</Text>
 );
 }
 }

 class HelloAndroid extends Component {
 render() {
 return (

 //位于中间
 <View style={{alignItems: 'center'}}>

 <MyComponent name='计算机原理'/>
 <MyComponent name='计算机系统结构'/>
 <MyComponent name='计算机网络通信'/>

 </View>

 );
 }
 }

 AppRegistry.registerComponent('HelloAndroid', () => HelloAndroid);

 */

/*
 import React, {Component} from 'react';
 import {AppRegistry, Text, View} from 'react-native';


 class MyComponent extends Component {
 constructor(props) {

 super(props);

 // 初始化 state
 this.state = {showText: true};
 //每隔1000毫秒对showText状态做一次取反操作
 setInterval(() => {
 this.setState({showText: !this.state.showText});
 }, 1000);
 }

 render() {
 let display = this.state.showText ? this.props.text : ' ';
 return (
 <Text>{display}</Text>
 );
 }
 }


 class HelloAndroid extends Component {
 render() {
 return (

 //位于中间
 <View style={{alignItems: 'center'}}>

 <MyComponent text='计算机原理'/>
 <MyComponent text='计算机系统结构'/>
 <MyComponent text='计算机网络通信'/>

 </View>

 );
 }
 }

 AppRegistry.registerComponent('HelloAndroid', () => HelloAndroid);

 */



/*

 import React, {Component} from 'react';
 import {AppRegistry, StyleSheet, Text, View} from 'react-native';

 class HelloAndroid extends Component {

 render() {

 return (

 <View>
 <Text style={styles.red}>计算机原理</Text>
 <Text style={styles.blue}>计算机系统结构</Text>
 <Text style={styles.yellow}>计算机图形学</Text>
 <Text style={styles.black}>计算机网络通信</Text>
 </View>

 );
 }
 }

 const styles = StyleSheet.create(
 {
 blue: {
 color: 'blue',
 fontWeight: 'bold',
 fontSize: 30,
 },
 red: {
 color: 'red',
 fontSize: 30,
 fontWeight: 'bold',
 },
 black: {
 color: 'black',
 fontSize: 30,
 fontWeight: 'bold',
 },
 yellow: {
 color: 'yellow',
 fontSize: 30,
 fontWeight: 'bold',
 },
 }
 );

 AppRegistry.registerComponent('HelloAndroid', () => HelloAndroid);

 */


/*

 import React, {Component} from 'react';
 import {AppRegistry, View} from 'react-native';

 class HelloAndroid extends Component {

 render() {

 return (

 <View>
 <View style={{width: 100, height: 100, backgroundColor: 'black'}}/>
 <View style={{width: 200, height: 200, backgroundColor: 'red'}}/>
 <View style={{width: 300, height: 300, backgroundColor: 'blue'}}/>

 </View>
 );
 }
 }

 AppRegistry.registerComponent('HelloAndroid', () => HelloAndroid);



 */


/*

 弹性（Flex）宽高
 在组件样式中使用flex可以使其在可利用的空间中动态地扩张或收缩。
 一般而言我们会使用flex:1来指定某个组件扩张以撑满所有剩余的空间。
 如果有多个并列的子组件使用了flex:1，则这些子组件会平分父容器中剩余的空间
 如果这些并列的子组件的flex值不一样，则谁的值更大，谁占据剩余空间的比例就更大
 （即占据剩余空间的比等于并列组件间flex值的比）。

 */

/*

import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';

class HelloAndroid extends Component {

    render() {
        return (
            //把整个化为3份  第一个view占 1/3 第二个view占 1/3 第三个view占 1/3
            <View style={{flex: 1}}>
                <View style={{flex: 1, backgroundColor: 'yellow'}}/>
                <View style={{flex: 1, backgroundColor: 'red'}}/>
                <View style={{flex: 1, backgroundColor: 'blue'}}/>
            </View>
        );
    }

}
AppRegistry.registerComponent('HelloAndroid', () => HelloAndroid);

*/



/*




 //justifyContent:
 //flex-start
 //center
 //flex-end
 //space-around
 //space-between



 //alignItems:
 //flex-start
 //center
 //flex-end
 //stretch

 justifyContent:'space-between',
 alignItems:'stretch'


* */

import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';

class HelloAndroid extends Component {

    render() {
        return (
            //flexDirection:决定布局主轴
            //row:水平方向
            //column: 竖直方向

            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',

            }}>
                <View style={{height: 100, backgroundColor: 'yellow'}}/>
                <View style={{height: 100,backgroundColor: 'red'}}/>
                <View style={{height: 100, backgroundColor: 'blue'}}/>

            </View>
        );
    }

}
AppRegistry.registerComponent('HelloAndroid', () => HelloAndroid);