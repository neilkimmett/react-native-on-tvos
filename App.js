/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <Home />
    )
  }
}


class Home extends Component {

  render () {
    return (
      <FlatList
        contentContainerStyle={styles.list}
        data={videos()}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        numColumns={4}
        horizontal={false}
      />
    )
  }

  keyExtractor = (item, _) => item.youtube

  renderItem({ item, index }) {
    return (
      <Card item={item} />
    )
  }
}

class Card extends Component {

  render () {
    const {item} = this.props
    return (
      <TouchableHighlight style={styles.card}>
          <YouTubeImage id={item.youtube}>
            <View style={styles.textBg}>
              <Text style={styles.title} numberOfLines={2}>
                {item.title}
              </Text>

              <Text style={styles.speaker}>
                {item.speakers[0]}
              </Text>
            </View>
          </YouTubeImage>
      </TouchableHighlight>
    )
  }
}

class YouTubeImage extends Component {
  render () {
    return (
      <ImageBackground
        style={styles.image}
        source={{uri: "https://img.youtube.com/vi/" + this.props.id + "/0.jpg"}}
      >
        {this.props.children}
      </ImageBackground>
    )
  }
}

function videos() {
  return require('./videos.json').filter((item) => item.youtube != null);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  card: {
    backgroundColor: '#000000',
    marginRight: 10,
    marginTop: 10,
  },
  textBg: {
    backgroundColor: '#000000',
    opacity: 0.7,
  },
  title: {
    fontSize: 30,
    color: '#FFFFFF',
    margin: 10,
  },
  speaker: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 10,
  },
  image: {
    width: 460,
    height: 258,
  }
});
