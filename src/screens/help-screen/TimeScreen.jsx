import React, { useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from "react-native";
import { Divider,useTheme} from "react-native-paper";
import useStyles from "./pageStyle";

export default function TimeScreen() {

  const { colors } = useTheme();

    const [helpfulClicked, setHelpfulClicked] = useState(false);
    const [notHelpfulClicked, setNotHelpfulClicked] = useState(false);

    const handleHelpfulClick = () => {
      setHelpfulClicked(true);

       // 调用一个函数来记录用户反馈
       recordFeedback(true);
    };

    const handleNotHelpfulClick = () => {
      setNotHelpfulClicked(true);

       // 调用一个函数来记录用户反馈
       recordFeedback(false);
    };

    const recordFeedback = (helpful, feedbackText) => {
      // 可以在这里将用户的反馈信息发送到后端进行记录
      // 也可以将反馈信息保存在本地或数据库中
      console.log("用户反馈：", helpful ? "有帮助" : "没帮助", feedbackText);
   };
    const styles = useStyles()
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Text style={styles.title}>如何为todo设置提醒时间？</Text>
            <Divider />
            <Text style={styles.step}>1. 找到你想要设置提醒的todo</Text>
            <Text style={styles.step}>2. 在todo里点击设置提醒</Text>
            <Text style={styles.step}>3. 输入提醒时间就可以成功设置提醒了</Text>
            <Divider />
            <Text style={styles.note}>以上内容是否对你有帮助？</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
            <TouchableOpacity
        style={[styles.button, helpfulClicked && styles.buttonClicked]}
        onPress={handleHelpfulClick}
        disabled={helpfulClicked || notHelpfulClicked}
      >
        <Text style={[styles.buttonText,]}>有帮助</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, notHelpfulClicked && styles.buttonClicked]}
        onPress={handleNotHelpfulClick}
        disabled={helpfulClicked || notHelpfulClicked}
      >
        <Text style={[styles.buttonText,]}>没帮助</Text>
      </TouchableOpacity>
            </View>
      </View>
    )
 }

